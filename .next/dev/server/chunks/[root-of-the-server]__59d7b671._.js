module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/dbConnect.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
}
let cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose || {
    conn: null,
    promise: null
};
if (!cached) {
    cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose = {
        conn: null,
        promise: null
    };
}
async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI, opts).then((mongoose)=>{
            return mongoose;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }
    return cached.conn;
}
const __TURBOPACK__default__export__ = dbConnect;
}),
"[project]/src/models/OTP.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const otpSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    otp: {
        type: String,
        required: true
    },
    expiresAt: {
        type: Date,
        required: true,
        default: ()=>new Date(Date.now() + 10 * 60 * 1000)
    }
}, {
    timestamps: true
});
// Index to auto-delete expired OTPs
otpSchema.index({
    expiresAt: 1
}, {
    expireAfterSeconds: 0
});
const OTP = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.OTP || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('OTP', otpSchema);
const __TURBOPACK__default__export__ = OTP;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/src/lib/email.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendOTP",
    ()=>sendOTP,
    "sendPaymentSuccessEmail",
    ()=>sendPaymentSuccessEmail,
    "sendSubscriptionExpiredEmail",
    ()=>sendSubscriptionExpiredEmail,
    "sendWelcomeEmail",
    ()=>sendWelcomeEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nodemailer/lib/nodemailer.js [app-route] (ecmascript)");
;
// Configure your email service here
const transporter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
});
async function sendSubscriptionExpiredEmail(email, name) {
    try {
        await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: email,
            subject: 'Your Subscription Has Expired',
            html: `
        <h1>Hello ${name},</h1>
        <p>Your premium subscription has expired. Please renew to continue using our tools without limitations.</p>
        <p>
          <a href="${process.env.NEXT_PUBLIC_API_URL}/pricing" style="background-color: #3b82f6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
            Renew Now
          </a>
        </p>
        <p>If you have any questions, please contact our support team.</p>
      `
        });
        console.log(`Email sent to ${email}`);
    } catch (error) {
        console.error('Failed to send email:', error);
        throw error;
    }
}
async function sendWelcomeEmail(email, name) {
    try {
        await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: email,
            subject: 'Welcome to TrustInn!',
            html: `
        <h1>Welcome ${name}!</h1>
        <p>Thank you for joining TrustInn. You now have 5 free trials to explore our tools.</p>
        <p>
          <a href="${process.env.NEXT_PUBLIC_API_URL}/tools" style="background-color: #3b82f6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
            Start Using Tools
          </a>
        </p>
      `
        });
    } catch (error) {
        console.error('Failed to send welcome email:', error);
    }
}
async function sendOTP(email, otp) {
    try {
        await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: email,
            subject: 'Your OTP Code - NITMiner Technologies',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Your OTP Code</h1>
          <p>Hello,</p>
          <p>Your one-time password (OTP) for verification is:</p>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0; text-align: center;">
            <h2 style="color: #007bff; font-size: 32px; margin: 0; letter-spacing: 5px;">${otp}</h2>
          </div>
          <p>This code will expire in 10 minutes. Please do not share this code with anyone.</p>
          <p>If you didn't request this OTP, please ignore this email.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            © 2026 NITMiner Technologies. All rights reserved.
          </p>
        </div>
      `
        });
        console.log(`OTP sent to ${email}`);
    } catch (error) {
        console.error('Failed to send OTP:', error);
        throw error;
    }
}
async function sendPaymentSuccessEmail(email, name, amount, plan, receiptUrl, subscriptionEndDate, transactionId) {
    try {
        await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: email,
            subject: 'Payment Successful & Subscription Activated - NITMiner Technologies',
            html: `
        <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">✅ Payment Successful</h1>
          </div>

          <!-- Content -->
          <div style="background: white; padding: 30px;">
            <p style="color: #333; font-size: 16px; margin-top: 0;">Hello <strong>${name}</strong>,</p>

            <p style="color: #666; font-size: 14px; line-height: 1.6;">
              Thank you for your payment! Your premium subscription has been successfully activated. You now have full access to all our tools and features.
            </p>

            <!-- Order Details Card -->
            <div style="background: #f8f9fa; border-left: 4px solid #3b82f6; padding: 20px; border-radius: 4px; margin: 25px 0;">
              <h3 style="color: #333; margin-top: 0; font-size: 16px;">Order Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #666; font-size: 14px;"><strong>Plan:</strong></td>
                  <td style="padding: 8px 0; color: #333; font-size: 14px; text-align: right;">${plan}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666; font-size: 14px;"><strong>Amount Paid:</strong></td>
                  <td style="padding: 8px 0; color: #333; font-size: 14px; text-align: right;">₹${amount}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666; font-size: 14px;"><strong>Payment Status:</strong></td>
                  <td style="padding: 8px 0; color: #28a745; font-size: 14px; text-align: right;"><strong>Completed</strong></td>
                </tr>
                ${transactionId ? `
                <tr>
                  <td style="padding: 8px 0; color: #666; font-size: 14px;"><strong>Transaction ID:</strong></td>
                  <td style="padding: 8px 0; color: #333; font-size: 13px; text-align: right; word-break: break-all;">${transactionId}</td>
                </tr>
                ` : ''}
                ${subscriptionEndDate ? `
                <tr>
                  <td style="padding: 8px 0; color: #666; font-size: 14px;"><strong>Subscription Valid Till:</strong></td>
                  <td style="padding: 8px 0; color: #333; font-size: 14px; text-align: right;">${subscriptionEndDate}</td>
                </tr>
                ` : ''}
              </table>
            </div>

            <!-- CTA Buttons -->
            <div style="margin: 30px 0; text-align: center;">
              <a href="${process.env.NEXT_PUBLIC_API_URL}/dashboard" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin-right: 10px;">
                Go to Dashboard
              </a>
              ${receiptUrl ? `
              <a href="${receiptUrl}" style="display: inline-block; background: #6c757d; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                📥 Download Receipt
              </a>
              ` : ''}
            </div>

            <!-- Support Info -->
            <div style="background: #e7f3ff; border: 1px solid #b3d9ff; padding: 15px; border-radius: 5px; margin: 25px 0;">
              <h4 style="color: #3b82f6; margin-top: 0; font-size: 14px;">Need Help?</h4>
              <p style="color: #666; font-size: 13px; margin: 0;">
                If you have any questions or need support, please contact us at <strong>support@nitminer.com</strong> or reply to this email.
              </p>
            </div>

            <!-- Footer -->
            <p style="color: #999; font-size: 12px; margin: 25px 0 0 0; padding-top: 15px; border-top: 1px solid #e0e0e0;">
              This is an automated email. Please do not reply directly. For support, contact our team.
            </p>
          </div>

          <!-- Copyright -->
          <div style="background: #f8f9fa; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; font-size: 11px; color: #999;">
            <p style="margin: 0;">
              © 2026 NITMiner Technologies Pvt Ltd. All rights reserved.<br>
              📧 support@nitminer.com | 🌐 www.nitminer.com
            </p>
          </div>
        </div>
      `
        });
        console.log(`Payment confirmation sent to ${email}`);
    } catch (error) {
        console.error('Failed to send payment success email:', error);
        throw error;
    }
}
}),
"[project]/src/app/api/auth/send-otp/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dbConnect.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$OTP$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/OTP.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/email.ts [app-route] (ecmascript)");
;
;
;
;
async function POST(req) {
    try {
        const { email } = await req.json();
        if (!email) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Email is required'
            }, {
                status: 400
            });
        }
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid email format'
            }, {
                status: 400
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        // Delete any existing OTP for this email
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$OTP$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].deleteMany({
            email
        });
        // Save new OTP
        const otpDoc = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$OTP$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]({
            email,
            otp,
            expiresAt: new Date(Date.now() + 10 * 60 * 1000)
        });
        await otpDoc.save();
        // Send OTP email
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendOTP"])(email, otp);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'OTP sent successfully'
        });
    } catch (error) {
        console.error('Send OTP error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to send OTP'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__59d7b671._.js.map