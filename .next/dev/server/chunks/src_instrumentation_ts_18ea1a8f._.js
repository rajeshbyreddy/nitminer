module.exports = [
"[project]/src/instrumentation.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "register",
    ()=>register
]);
async function register() {
    if ("TURBOPACK compile-time truthy", 1) {
        const { startSubscriptionCheckCron } = await __turbopack_context__.A("[project]/src/lib/cron.ts [instrumentation] (ecmascript, async loader)");
        startSubscriptionCheckCron();
    }
}
}),
];

//# sourceMappingURL=src_instrumentation_ts_18ea1a8f._.js.map