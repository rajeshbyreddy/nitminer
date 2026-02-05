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
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

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
"[project]/src/app/api/auth/[...nextauth]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>handler,
    "POST",
    ()=>handler,
    "authOptions",
    ()=>authOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/google.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dbConnect.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/User.ts [app-route] (ecmascript)");
;
;
;
;
;
;
const authOptions = {
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize (credentials) {
                try {
                    console.log('Authorize called with:', {
                        email: credentials?.email,
                        hasPassword: !!credentials?.password
                    });
                    if (!credentials?.email || !credentials?.password) {
                        console.log('Missing credentials');
                        return null;
                    }
                    // Demo admin credentials - check/create admin user
                    if (credentials.email === 'admin@nitminer.com' && credentials.password === '12345678') {
                        console.log('Admin login attempt');
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
                        let adminUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].findOne({
                            email: 'admin@nitminer.com'
                        });
                        if (!adminUser) {
                            console.log('Creating admin user');
                            // Create demo admin user if it doesn't exist
                            adminUser = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"]({
                                name: 'Demo Admin',
                                email: 'admin@nitminer.com',
                                password: await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash('12345678', 12),
                                role: 'admin',
                                subscription: 'free',
                                isActive: true
                            });
                            await adminUser.save();
                            console.log('Admin user created');
                        } else {
                            console.log('Admin user found');
                        }
                        return {
                            id: adminUser._id.toString(),
                            email: adminUser.email,
                            name: adminUser.name,
                            role: adminUser.role
                        };
                    }
                    console.log('Regular user login');
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
                    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].findOne({
                        email: credentials.email
                    }).select('+password');
                    if (!user) {
                        console.log('User not found');
                        return null;
                    }
                    if (!user.password) {
                        console.log('User has no password');
                        return null;
                    }
                    const isPasswordValid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(credentials.password, user.password);
                    if (!isPasswordValid) {
                        console.log('Invalid password');
                        return null;
                    }
                    console.log('Login successful');
                    return {
                        id: user._id.toString(),
                        email: user.email,
                        name: user.name,
                        role: user.role
                    };
                } catch (error) {
                    console.error('Auth error:', error);
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async signIn ({ user, account, profile, email, credentials }) {
            // Allow sign in for all users
            return true;
        },
        async redirect ({ url, baseUrl }) {
            // If the URL is relative, prepend the base URL
            if (url.startsWith('/')) return `${baseUrl}${url}`;
            // If the URL is already absolute, allow it
            if (new URL(url).origin === baseUrl) return url;
            // Default to home page
            return baseUrl;
        },
        async jwt ({ token, user, account }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
            }
            // Handle legacy "demo-admin" ID in existing tokens
            if (token.id === 'demo-admin') {
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
                    const adminUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].findOne({
                        email: 'admin@nitminer.com'
                    });
                    if (adminUser) {
                        token.id = adminUser._id.toString();
                        token.role = adminUser.role;
                    }
                } catch (error) {
                    console.error('Error updating legacy admin token:', error);
                }
            }
            // Handle Google Sign-In
            if (account?.provider === 'google') {
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
                    let dbUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].findOne({
                        googleId: token.sub
                    });
                    if (!dbUser) {
                        // Create new user from Google
                        dbUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].create({
                            name: token.name,
                            email: token.email,
                            googleId: token.sub,
                            role: 'user',
                            trialCount: 5
                        });
                    }
                    token.id = dbUser._id.toString();
                    token.role = dbUser.role;
                } catch (error) {
                    console.error('Google auth error:', error);
                // Don't fail the auth, just use default values
                }
            }
            return token;
        },
        async session ({ session, token }) {
            if (session.user) {
                // Handle legacy "demo-admin" ID
                if (token.id === 'demo-admin') {
                    try {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
                        const adminUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].findOne({
                            email: 'admin@nitminer.com'
                        });
                        if (adminUser) {
                            session.user.id = adminUser._id.toString();
                            session.user.role = adminUser.role;
                        } else {
                            // If no admin user exists, force logout
                            session.user.id = null;
                            session.user.role = null;
                        }
                    } catch (error) {
                        console.error('Error handling legacy admin ID:', error);
                        session.user.id = null;
                        session.user.role = null;
                    }
                } else {
                    session.user.id = token.id;
                    session.user.role = token.role;
                }
            }
            return session;
        }
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
        maxAge: 30 * 24 * 60 * 60
    },
    debug: false
};
const handler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(authOptions);
;
}),
"[project]/src/models/Payment.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Payment",
    ()=>Payment
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const paymentSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    userId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    plan: {
        type: String,
        enum: [
            '1_month',
            '6_months',
            '12_months'
        ],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        enum: [
            'razorpay',
            'card',
            'upi'
        ],
        required: true
    },
    paymentId: {
        type: String,
        required: true,
        unique: true
    },
    orderId: {
        type: String,
        unique: true,
        sparse: true
    },
    invoiceUrl: {
        type: String,
        default: null
    },
    status: {
        type: String,
        enum: [
            'success',
            'pending',
            'failed'
        ],
        default: 'pending'
    },
    completedAt: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
});
// Index for faster queries
paymentSchema.index({
    userId: 1
});
paymentSchema.index({
    status: 1
});
paymentSchema.index({
    createdAt: -1
});
const Payment = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Payment || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('Payment', paymentSchema);
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[project]/src/lib/receiptGenerator.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "generateHTMLPDFReceiptBuffer",
    ()=>generateHTMLPDFReceiptBuffer
]);
/**
 * HTML-based PDF Receipt Generator
 * Generates professional receipts using HTML/CSS templates
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer__$5b$external$5d$__$28$puppeteer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$puppeteer$29$__ = __turbopack_context__.i("[externals]/puppeteer [external] (puppeteer, esm_import, [project]/node_modules/puppeteer)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer__$5b$external$5d$__$28$puppeteer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$puppeteer$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer__$5b$external$5d$__$28$puppeteer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$puppeteer$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
function generateReceiptHTML(data) {
    const formattedAmount = (data.amountInRupees / 100).toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Receipt - TrustInn</title>
    <style>
        @page {
            size: A4;
            margin: 0;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: #f5f5f5;
            padding: 0;
        }

        .receipt {
            width: 100%;
            max-width: 900px;
            background: white;
            padding: 30px;
            box-sizing: border-box;
        }

        .header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #667eea;
        }

        .logo {
            width: 70px;
            height: 70px;
            background: #667eea;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 24px;
        }

        .company-info h1 {
            color: #667eea;
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .company-info p {
            color: #666;
            font-size: 13px;
            margin: 2px 0;
        }

        .receipt-title {
            text-align: center;
            margin: 30px 0;
        }

        .receipt-title h2 {
            font-size: 26px;
            color: #333;
            margin-bottom: 10px;
        }

        .receipt-meta {
            display: flex;
            justify-content: space-between;
            color: #666;
            font-size: 12px;
            gap: 30px;
        }

        .divider {
            height: 2px;
            background: #e0e0e0;
            margin: 25px 0;
        }

        .section {
            margin-bottom: 25px;
        }

        .section-title {
            font-size: 15px;
            font-weight: bold;
            color: #333;
            margin-bottom: 12px;
            padding-bottom: 8px;
            border-bottom: 2px solid #667eea;
        }

        .customer-info {
            background: #f8f9fa;
            padding: 12px;
            border-radius: 6px;
        }

        .customer-info p {
            font-size: 13px;
            color: #333;
            margin-bottom: 4px;
        }

        .customer-info strong {
            color: #667eea;
            font-weight: bold;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 12px;
        }

        thead {
            background: #667eea;
            color: white;
        }

        thead th {
            padding: 10px;
            text-align: left;
            font-size: 12px;
            font-weight: bold;
        }

        tbody tr {
            border-bottom: 1px solid #e0e0e0;
        }

        tbody tr:nth-child(even) {
            background: #f8f9fa;
        }

        tbody td {
            padding: 10px;
            font-size: 12px;
            color: #333;
        }

        tbody td:first-child {
            color: #666;
            font-weight: 500;
        }

        tbody td:last-child {
            font-weight: bold;
            color: #333;
        }

        .total-section {
            margin-top: 25px;
            text-align: right;
        }

        .total-box {
            display: inline-block;
            background: #667eea;
            color: white;
            padding: 15px 35px;
            border-radius: 6px;
        }

        .total-box p {
            font-size: 12px;
            margin-bottom: 5px;
            opacity: 0.9;
        }

        .total-box h3 {
            font-size: 22px;
            font-weight: bold;
        }

        .footer {
            margin-top: 40px;
            padding-top: 15px;
            border-top: 2px solid #e0e0e0;
            text-align: center;
        }

        .footer p {
            color: #666;
            font-size: 12px;
            margin-bottom: 4px;
        }

        .footer .thank-you {
            font-size: 14px;
            color: #667eea;
            font-weight: bold;
            margin-bottom: 8px;
        }

        .footer .company-contact {
            font-size: 11px;
            color: #999;
        }
    </style>
</head>
<body>
    <div class="receipt">
        <!-- Header -->
        <div class="header">
            <div class="logo">
                <img src="https://nitminer.com/logo_img/logo-rbg.png" alt="NIT Miner Logo" class="logo">
            </div>
            <div class="company-info">
                <h1>TRUSTINN</h1>
                <p>Premium Tool Platform</p>
                <p>www.trustinn.com | support@trustinn.com</p>
            </div>
        </div>

        <!-- Receipt Title -->
        <div class="receipt-title">
            <h2>PAYMENT RECEIPT</h2>
            <div class="receipt-meta">
                <span>Receipt #: ${data.receiptNumber}</span>
                <span>Date: ${data.receiptDate}</span>
            </div>
        </div>

        <div class="divider"></div>

        <!-- Customer Information -->
        <div class="section">
            <div class="section-title">Customer Information</div>
            <div class="customer-info">
                <p><strong>Name:</strong> ${data.customerName}</p>
                <p><strong>Email:</strong> ${data.customerEmail}</p>
                <p><strong>Customer ID:</strong> ${data.customerId}</p>
            </div>
        </div>

        <!-- Payment Details -->
        <div class="section">
            <div class="section-title">Payment Details</div>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Service Description</td>
                        <td>${data.serviceDescription}</td>
                    </tr>
                    <tr>
                        <td>Payment Amount</td>
                        <td>₹${formattedAmount}</td>
                    </tr>
                    <tr>
                        <td>Payment Method</td>
                        <td>${data.paymentMethod}</td>
                    </tr>
                    <tr>
                        <td>Transaction ID</td>
                        <td>${data.transactionId}</td>
                    </tr>
                    <tr>
                        <td>Service Start Date</td>
                        <td>${data.serviceStartDate}</td>
                    </tr>
                    <tr>
                        <td>Service End Date</td>
                        <td>${data.serviceEndDate}</td>
                    </tr>
                    <tr>
                        <td>Payment Status</td>
                        <td><strong style="color: #4CAF50;">${data.paymentStatus}</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Total -->
        <div class="total-section">
            <div class="total-box">
                <p>Total Amount Paid</p>
                <h3>₹${formattedAmount}</h3>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p class="thank-you">Thank you for upgrading to Premium!</p>
            <p>This is an official payment receipt from TrustInn</p>
            <p>Your premium access is now active and ready to use</p>
            <p class="company-contact">For support: support@trustinn.com | © 2026 NITMiner Technologies Private Limited</p>
        </div>
    </div>
</body>
</html>`;
}
async function generateHTMLPDFReceiptBuffer(data) {
    let browser;
    try {
        console.log('🎨 Generating HTML receipt...');
        const htmlContent = generateReceiptHTML(data);
        console.log('✅ HTML generated');
        // Launch headless browser
        browser = await __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer__$5b$external$5d$__$28$puppeteer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$puppeteer$29$__["default"].launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        const page = await browser.newPage();
        // Set content
        await page.setContent(htmlContent, {
            waitUntil: 'networkidle0'
        });
        console.log('✅ Content loaded in browser');
        // Generate PDF
        const pdfBuffer = await page.pdf({
            format: 'A4',
            margin: {
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px'
            }
        });
        console.log(`✅ PDF buffer created: ${pdfBuffer.length} bytes`);
        await browser.close();
        return Buffer.from(pdfBuffer);
    } catch (error) {
        if (browser) {
            await browser.close();
        }
        console.error('❌ Error generating PDF:', error);
        throw error;
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/cloudinary.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uploadReceiptToCloudinary",
    ()=>uploadReceiptToCloudinary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cloudinary/cloudinary.js [app-route] (ecmascript)");
;
// Configure Cloudinary
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["v2"].config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
async function uploadReceiptToCloudinary(buffer, fileName) {
    try {
        console.log('📤 Uploading receipt to Cloudinary...');
        // Upload buffer to Cloudinary
        const result = await new Promise((resolve, reject)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["v2"].uploader.upload_stream({
                resource_type: 'raw',
                public_id: `receipts/${fileName}`,
                format: 'pdf',
                folder: 'trustinn/receipts'
            }, (error, result)=>{
                if (error) {
                    console.error('Cloudinary upload error:', error);
                    reject(error);
                } else {
                    resolve(result);
                }
            }).end(buffer);
        });
        console.log('✅ Receipt uploaded to Cloudinary:', result.secure_url);
        return result.secure_url;
    } catch (error) {
        console.error('❌ Failed to upload receipt to Cloudinary:', error);
        throw error;
    }
}
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

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
async function sendPaymentSuccessEmail(email, name, amount, plan) {
    try {
        await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: email,
            subject: 'Payment Successful - NITMiner Technologies',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Payment Successful</h1>
          <p>Hello ${name},</p>
          <p>Thank you for your payment! Your subscription has been activated.</p>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Plan:</strong> ${plan}</p>
            <p><strong>Amount:</strong> ₹${amount}</p>
            <p><strong>Status:</strong> <span style="color: #28a745;">Completed</span></p>
          </div>
          <p>You now have full access to all our tools and features.</p>
          <p>
            <a href="${process.env.NEXT_PUBLIC_API_URL}/dashboard" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
              Go to Dashboard
            </a>
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            © 2026 NITMiner Technologies. All rights reserved.
          </p>
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
"[project]/src/app/api/payments/verify/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/next/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/auth/[...nextauth]/route.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dbConnect.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/User.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Payment$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/Payment.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$razorpay$2f$dist$2f$razorpay$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/razorpay/dist/razorpay.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$receiptGenerator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/receiptGenerator.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cloudinary.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/email.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$receiptGenerator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$receiptGenerator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
const razorpay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$razorpay$2f$dist$2f$razorpay$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]({
    key_id: ("TURBOPACK compile-time value", "rzp_test_RoJxt06hL2rCM4"),
    key_secret: process.env.RAZORPAY_KEY_SECRET
});
async function POST(req) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authOptions"]);
        if (!session?.user?.email) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();
        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Missing payment verification data'
            }, {
                status: 400
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        // Verify payment signature
        const sign = razorpay_order_id + '|' + razorpay_payment_id;
        const expectedSign = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHmac('sha256', process.env.RAZORPAY_KEY_SECRET).update(sign.toString()).digest('hex');
        if (razorpay_signature !== expectedSign) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Payment verification failed'
            }, {
                status: 400
            });
        }
        // Find and update payment record
        const payment = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Payment$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Payment"].findOneAndUpdate({
            orderId: razorpay_order_id
        }, {
            paymentId: razorpay_payment_id,
            status: 'success',
            completedAt: new Date()
        }, {
            new: true
        });
        if (!payment) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Payment record not found'
            }, {
                status: 404
            });
        }
        // Update user subscription
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].findById(session.user.id);
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'User not found'
            }, {
                status: 404
            });
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
            paymentId: payment._id
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
                amountInRupees: payment.amount * 100,
                paymentMethod: 'Razorpay',
                transactionId: razorpay_payment_id,
                serviceStartDate: user.subscription.startDate.toLocaleDateString('en-IN'),
                serviceEndDate: user.subscription.endDate.toLocaleDateString('en-IN'),
                paymentStatus: 'Success',
                duration: payment.plan === '1_month' ? 1 : payment.plan === '6_months' ? 6 : 12
            };
            // Generate PDF receipt
            const pdfBuffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$receiptGenerator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateHTMLPDFReceiptBuffer"])(receiptData);
            // Upload to Cloudinary
            const fileName = `receipt-${payment._id}-${Date.now()}.pdf`;
            const receiptUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uploadReceiptToCloudinary"])(pdfBuffer, fileName);
            // Update payment record with receipt URL
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Payment$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Payment"].findByIdAndUpdate(payment._id, {
                invoiceUrl: receiptUrl
            });
            // Send email with receipt
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendPaymentSuccessEmail"])(user.email, user.name, payment.amount, payment.plan.replace('_', ' ').toUpperCase());
            console.log('✅ Receipt generated and email sent');
        } catch (receiptError) {
            console.error('❌ Error generating/sending receipt:', receiptError);
        // Don't fail the payment verification if receipt generation fails
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'Payment verified and subscription activated',
            subscription: user.subscription
        });
    } catch (error) {
        console.error('Payment verification error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to verify payment'
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__188646cc._.js.map