import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/lib/dbConnect';
import { User } from '@/models/User';
import { Payment } from '@/models/Payment';
import Razorpay from 'razorpay';
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { generateHTMLPDFReceiptBuffer } from '@/lib/receiptGenerator';
import { uploadReceiptToCloudinary } from '@/lib/cloudinary';
import { sendPaymentSuccessEmail } from '@/lib/email';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ error: 'Missing payment verification data' }, { status: 400 });
    }

    await dbConnect();

    // Verify payment signature
    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(sign.toString())
      .digest('hex');

    if (razorpay_signature !== expectedSign) {
      return NextResponse.json({ error: 'Payment verification failed' }, { status: 400 });
    }

    // Find and update payment record
    const payment = await Payment.findOneAndUpdate(
      { orderId: razorpay_order_id },
      {
        paymentId: razorpay_payment_id,
        status: 'success',
        completedAt: new Date(),
      },
      { new: true }
    );

    if (!payment) {
      return NextResponse.json({ error: 'Payment record not found' }, { status: 404 });
    }

    // Update user subscription
    const user = await User.findById(session.user.id);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Calculate subscription end date based on plan
    const now = new Date();
    let endDate = new Date(now);

    if (payment.plan === '1_month') {
      endDate.setMonth(now.getMonth() + 1);
    } else if (payment.plan === '6_months') {
      endDate.setMonth(now.getMonth() + 6);
    } else if (payment.plan === '12_months') {
      endDate.setFullYear(now.getFullYear() + 1);
    }

    user.isPremium = true;
    user.subscription = {
      plan: payment.plan,
      status: 'active',
      startDate: now,
      endDate: endDate,
      paymentId: payment._id,
    };

    await user.save();

    // Generate and send receipt
    try {
      console.log('🧾 Generating payment receipt...');

      const receiptData = {
        receiptNumber: `RCP-${payment._id.toString().slice(-8).toUpperCase()}`,
        receiptDate: new Date().toLocaleDateString('en-IN'),
        customerName: user.name,
        customerEmail: user.email,
        customerId: user._id.toString(),
        serviceDescription: `${payment.plan.replace('_', ' ').toUpperCase()} Premium Subscription`,
        amountInRupees: payment.amount * 100, // Convert back to paise for display
        paymentMethod: 'Razorpay',
        transactionId: razorpay_payment_id,
        serviceStartDate: user.subscription!.startDate.toLocaleDateString('en-IN'),
        serviceEndDate: user.subscription!.endDate.toLocaleDateString('en-IN'),
        paymentStatus: 'Success',
        duration: payment.plan === '1_month' ? 1 : payment.plan === '6_months' ? 6 : 12,
      };

      // Generate PDF receipt
      const pdfBuffer = await generateHTMLPDFReceiptBuffer(receiptData);

      // Upload to Cloudinary
      const fileName = `receipt-${payment._id}-${Date.now()}.pdf`;
      const receiptUrl = await uploadReceiptToCloudinary(pdfBuffer, fileName);

      // Update payment record with receipt URL
      await Payment.findByIdAndUpdate(payment._id, {
        invoiceUrl: receiptUrl,
      });
      // Send email with all details
      await sendPaymentSuccessEmail(
        user.email,
        user.name,
        payment.amount,
        payment.plan.replace('_', ' ').toUpperCase(),
        receiptUrl,
        user.subscription!.endDate.toLocaleDateString('en-IN'),
        razorpay_payment_id
      );

      console.log('✅ Receipt generated and email sent');
    } catch (receiptError) {
      console.error('❌ Error generating/sending receipt:', receiptError);
      // Don't fail the payment verification if receipt generation fails
    }

    return NextResponse.json({
      success: true,
      message: 'Payment verified and subscription activated',
      subscription: user.subscription,
    });
  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json({ error: 'Failed to verify payment' }, { status: 500 });
  }
}