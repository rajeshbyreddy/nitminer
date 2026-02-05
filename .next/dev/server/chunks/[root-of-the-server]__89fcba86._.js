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
"[project]/src/models/SystemSettings.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SystemSettings",
    ()=>SystemSettings
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const systemSettingsSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    freeTrialsEnabled: {
        type: Boolean,
        default: true
    },
    pricing: {
        sixMonths: {
            type: Number,
            default: 1000
        },
        twelveMonths: {
            type: Number,
            default: 1500
        }
    }
}, {
    timestamps: true
});
const SystemSettings = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.SystemSettings || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('SystemSettings', systemSettingsSchema);
}),
"[project]/src/app/api/pricing/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dbConnect.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$SystemSettings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/SystemSettings.ts [app-route] (ecmascript)");
;
;
;
async function GET(req) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        // Fetch pricing settings from database
        const settings = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$SystemSettings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SystemSettings"].findOne().lean();
        if (!settings || !settings.pricing) {
            // Return default pricing plans
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                plans: [
                    {
                        _id: '1',
                        planName: 'free',
                        displayName: 'Free',
                        description: 'Perfect for getting started',
                        monthlyPrice: 0,
                        sixMonthPrice: 0,
                        yearlyPrice: 0,
                        trialDays: 30,
                        trialExecutions: 5,
                        executionsPerMonth: 5,
                        storageGB: 1,
                        supportLevel: 'Community',
                        features: [
                            {
                                name: 'Basic Features',
                                included: true
                            },
                            {
                                name: 'Community Support',
                                included: true
                            },
                            {
                                name: 'Limited Storage',
                                included: true
                            },
                            {
                                name: 'Priority Support',
                                included: false
                            },
                            {
                                name: 'Advanced Analytics',
                                included: false
                            }
                        ],
                        toolsIncluded: [
                            {
                                name: 'Basic Tools',
                                available: true
                            },
                            {
                                name: 'Advanced Tools',
                                available: false
                            }
                        ],
                        isActive: true,
                        displayOrder: 1,
                        color: 'slate',
                        badge: null
                    },
                    {
                        _id: '2',
                        planName: 'pro',
                        displayName: 'Pro',
                        description: 'For growing teams',
                        monthlyPrice: 10,
                        sixMonthPrice: 50,
                        yearlyPrice: 100,
                        trialDays: 30,
                        trialExecutions: 50,
                        executionsPerMonth: -1,
                        storageGB: 100,
                        supportLevel: 'Priority',
                        features: [
                            {
                                name: 'All Basic Features',
                                included: true
                            },
                            {
                                name: 'Priority Support',
                                included: true
                            },
                            {
                                name: 'Advanced Analytics',
                                included: true
                            },
                            {
                                name: 'Unlimited Executions',
                                included: true
                            },
                            {
                                name: 'Custom Integrations',
                                included: false
                            },
                            {
                                name: 'Dedicated Account Manager',
                                included: false
                            }
                        ],
                        toolsIncluded: [
                            {
                                name: 'Basic Tools',
                                available: true
                            },
                            {
                                name: 'Advanced Tools',
                                available: true
                            },
                            {
                                name: 'Enterprise Tools',
                                available: false
                            }
                        ],
                        isActive: true,
                        displayOrder: 2,
                        color: 'blue',
                        badge: 'Most Popular'
                    },
                    {
                        _id: '3',
                        planName: 'enterprise',
                        displayName: 'Enterprise',
                        description: 'For large organizations',
                        monthlyPrice: 50,
                        sixMonthPrice: 250,
                        yearlyPrice: 500,
                        trialDays: 30,
                        trialExecutions: 500,
                        executionsPerMonth: -1,
                        storageGB: 1000,
                        supportLevel: 'Dedicated',
                        features: [
                            {
                                name: 'All Pro Features',
                                included: true
                            },
                            {
                                name: 'Dedicated Account Manager',
                                included: true
                            },
                            {
                                name: 'Custom Integrations',
                                included: true
                            },
                            {
                                name: 'SLA Guarantee',
                                included: true
                            },
                            {
                                name: '24/7 Phone Support',
                                included: true
                            },
                            {
                                name: 'Unlimited Executions',
                                included: true
                            }
                        ],
                        toolsIncluded: [
                            {
                                name: 'Basic Tools',
                                available: true
                            },
                            {
                                name: 'Advanced Tools',
                                available: true
                            },
                            {
                                name: 'Enterprise Tools',
                                available: true
                            }
                        ],
                        isActive: true,
                        displayOrder: 3,
                        color: 'purple',
                        badge: 'Premium'
                    }
                ]
            });
        }
        // Return pricing from database
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            plans: settings.pricing || []
        });
    } catch (error) {
        console.error('Pricing fetch error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch pricing plans'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__89fcba86._.js.map