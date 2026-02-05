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
"[project]/src/models/User.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "User",
    ()=>User
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const userSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        select: false
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true
    },
    role: {
        type: String,
        enum: [
            'user',
            'admin'
        ],
        default: 'user'
    },
    trialCount: {
        type: Number,
        default: 5,
        min: 0
    },
    isPremium: {
        type: Boolean,
        default: false
    },
    subscriptionExpiry: {
        type: Date,
        default: null
    },
    subscription: {
        plan: {
            type: String,
            enum: [
                '1_month',
                '6_months',
                '12_months'
            ]
        },
        status: {
            type: String,
            enum: [
                'active',
                'expired',
                'cancelled'
            ],
            default: 'active'
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        paymentId: {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
            ref: 'Payment'
        }
    },
    settings: {
        emailNotifications: {
            type: Boolean,
            default: true
        },
        pushNotifications: {
            type: Boolean,
            default: false
        },
        marketingEmails: {
            type: Boolean,
            default: false
        },
        theme: {
            type: String,
            enum: [
                'dark',
                'light',
                'auto'
            ],
            default: 'dark'
        },
        language: {
            type: String,
            default: 'en'
        },
        timezone: {
            type: String,
            default: 'UTC'
        },
        twoFactorAuth: {
            type: Boolean,
            default: false
        }
    }
}, {
    timestamps: true
});
// Index for faster queries
userSchema.index({
    isPremium: 1
});
const User = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.User || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('User', userSchema);
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

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
"[project]/src/app/api/auth/signup/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dbConnect.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/User.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/email.ts [app-route] (ecmascript)");
;
;
;
;
;
;
async function POST(req) {
    try {
        const { firstName, lastName, email, phone, password, isVerified } = await req.json();
        if (!firstName || !lastName || !email || !phone || !password) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'All fields are required'
            }, {
                status: 400
            });
        }
        if (!isVerified) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Email must be verified'
            }, {
                status: 400
            });
        }
        // Basic validations
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid email format'
            }, {
                status: 400
            });
        }
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid phone number'
            }, {
                status: 400
            });
        }
        if (password.length < 8) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Password must be at least 8 characters'
            }, {
                status: 400
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        // Check if user already exists
        const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].findOne({
            email
        });
        if (existingUser) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'User already exists'
            }, {
                status: 400
            });
        }
        // Hash password
        const hashedPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, 12);
        // Create user
        const user = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"]({
            name: `${firstName} ${lastName}`,
            email,
            password: hashedPassword,
            role: 'user',
            trialCount: 5,
            isPremium: false,
            subscription: 'free',
            isActive: true
        });
        await user.save();
        // Generate token
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign({
            id: user._id,
            email: user.email,
            role: user.role
        }, process.env.JWT_SECRET || 'fallback-secret', {
            expiresIn: '7d'
        });
        // Send welcome email
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendWelcomeEmail"])(email, user.name);
        } catch (emailError) {
            console.error('Failed to send welcome email:', emailError);
        // Don't fail the signup for email error
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            user: {
                _id: user._id,
                firstName,
                lastName,
                email,
                phone
            },
            token
        });
    } catch (error) {
        console.error('Signup error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to create account'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2c01b248._.js.map