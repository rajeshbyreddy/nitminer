(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Simple className utility function
__turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/dropdown-menu.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const DropdownMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DropdownMenuTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DropdownMenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const DropdownMenuPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DropdownMenuSub = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"];
const DropdownMenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"];
const DropdownMenuSubTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "258f90be15cae46aa15004652edf11fc47027903dbc6752db9c917085d070667") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "258f90be15cae46aa15004652edf11fc47027903dbc6752db9c917085d070667";
    }
    let children;
    let className;
    let inset;
    let props;
    if ($[1] !== t0) {
        ({ className, inset, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = inset;
        $[5] = props;
    } else {
        children = $[2];
        className = $[3];
        inset = $[4];
        props = $[5];
    }
    const t1 = inset && "pl-8";
    let t2;
    if ($[6] !== className || $[7] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", t1, className);
        $[6] = className;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
            className: "ml-auto"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.jsx",
            lineNumber: 56,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== children || $[11] !== props || $[12] !== ref || $[13] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
            ref: ref,
            className: t2,
            ...props,
            children: [
                children,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/dropdown-menu.jsx",
            lineNumber: 63,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = children;
        $[11] = props;
        $[12] = ref;
        $[13] = t2;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    return t4;
});
_c1 = DropdownMenuSubTrigger;
DropdownMenuSubTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"].displayName;
const DropdownMenuSubContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "258f90be15cae46aa15004652edf11fc47027903dbc6752db9c917085d070667") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "258f90be15cae46aa15004652edf11fc47027903dbc6752db9c917085d070667";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== ref || $[8] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
            ref: ref,
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.jsx",
            lineNumber: 107,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = ref;
        $[8] = t1;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    return t2;
});
_c3 = DropdownMenuSubContent;
DropdownMenuSubContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"].displayName;
const DropdownMenuContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "258f90be15cae46aa15004652edf11fc47027903dbc6752db9c917085d070667") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "258f90be15cae46aa15004652edf11fc47027903dbc6752db9c917085d070667";
    }
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, sideOffset: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
    }
    const sideOffset = t1 === undefined ? 4 : t1;
    let t2;
    if ($[5] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", className);
        $[5] = className;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props || $[8] !== ref || $[9] !== sideOffset || $[10] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                sideOffset: sideOffset,
                className: t2,
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.jsx",
                lineNumber: 155,
                columnNumber: 40
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.jsx",
            lineNumber: 155,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = props;
        $[8] = ref;
        $[9] = sideOffset;
        $[10] = t2;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    return t3;
});
_c5 = DropdownMenuContent;
DropdownMenuContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DropdownMenuItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "258f90be15cae46aa15004652edf11fc47027903dbc6752db9c917085d070667") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "258f90be15cae46aa15004652edf11fc47027903dbc6752db9c917085d070667";
    }
    let className;
    let inset;
    let props;
    if ($[1] !== t0) {
        ({ className, inset, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = inset;
        $[4] = props;
    } else {
        className = $[2];
        inset = $[3];
        props = $[4];
    }
    const t1 = inset && "pl-8";
    let t2;
    if ($[5] !== className || $[6] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", t1, className);
        $[5] = className;
        $[6] = t1;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== props || $[9] !== ref || $[10] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
            ref: ref,
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.jsx",
            lineNumber: 205,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = props;
        $[9] = ref;
        $[10] = t2;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    return t3;
});
_c7 = DropdownMenuItem;
DropdownMenuItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "258f90be15cae46aa15004652edf11fc47027903dbc6752db9c917085d070667") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "258f90be15cae46aa15004652edf11fc47027903dbc6752db9c917085d070667";
    }
    let checked;
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, checked, ...props } = t0);
        $[1] = t0;
        $[2] = checked;
        $[3] = children;
        $[4] = className;
        $[5] = props;
    } else {
        checked = $[2];
        children = $[3];
        className = $[4];
        props = $[5];
    }
    let t1;
    if ($[6] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className);
        $[6] = className;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.jsx",
                    lineNumber: 256,
                    columnNumber: 126
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.jsx",
                lineNumber: 256,
                columnNumber: 89
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.jsx",
            lineNumber: 256,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== checked || $[10] !== children || $[11] !== props || $[12] !== ref || $[13] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
            ref: ref,
            className: t1,
            checked: checked,
            ...props,
            children: [
                t2,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/dropdown-menu.jsx",
            lineNumber: 263,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = checked;
        $[10] = children;
        $[11] = props;
        $[12] = ref;
        $[13] = t1;
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    return t3;
});
_c9 = DropdownMenuCheckboxItem;
DropdownMenuCheckboxItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"].displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "258f90be15cae46aa15004652edf11fc47027903dbc6752db9c917085d070667") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "258f90be15cae46aa15004652edf11fc47027903dbc6752db9c917085d070667";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                    className: "h-2 w-2 fill-current"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.jsx",
                    lineNumber: 312,
                    columnNumber: 126
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.jsx",
                lineNumber: 312,
                columnNumber: 89
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.jsx",
            lineNumber: 312,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== children || $[9] !== props || $[10] !== ref || $[11] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
            ref: ref,
            className: t1,
            ...props,
            children: [
                t2,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/dropdown-menu.jsx",
            lineNumber: 319,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = children;
        $[9] = props;
        $[10] = ref;
        $[11] = t1;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    return t3;
});
_c11 = DropdownMenuRadioItem;
DropdownMenuRadioItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"].displayName;
const DropdownMenuLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c12 = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "258f90be15cae46aa15004652edf11fc47027903dbc6752db9c917085d070667") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "258f90be15cae46aa15004652edf11fc47027903dbc6752db9c917085d070667";
    }
    let className;
    let inset;
    let props;
    if ($[1] !== t0) {
        ({ className, inset, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = inset;
        $[4] = props;
    } else {
        className = $[2];
        inset = $[3];
        props = $[4];
    }
    const t1 = inset && "pl-8";
    let t2;
    if ($[5] !== className || $[6] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-semibold", t1, className);
        $[5] = className;
        $[6] = t1;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== props || $[9] !== ref || $[10] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            ref: ref,
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.jsx",
            lineNumber: 369,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = props;
        $[9] = ref;
        $[10] = t2;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    return t3;
});
_c13 = DropdownMenuLabel;
DropdownMenuLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const DropdownMenuSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c14 = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "258f90be15cae46aa15004652edf11fc47027903dbc6752db9c917085d070667") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "258f90be15cae46aa15004652edf11fc47027903dbc6752db9c917085d070667";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== ref || $[8] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
            ref: ref,
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.jsx",
            lineNumber: 412,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = ref;
        $[8] = t1;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    return t2;
});
_c15 = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
const DropdownMenuShortcut = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "258f90be15cae46aa15004652edf11fc47027903dbc6752db9c917085d070667") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "258f90be15cae46aa15004652edf11fc47027903dbc6752db9c917085d070667";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-auto text-xs tracking-widest opacity-60", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.jsx",
            lineNumber: 455,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
};
_c16 = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
__turbopack_context__.k.register(_c, "DropdownMenuSubTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c2, "DropdownMenuSubContent$React.forwardRef");
__turbopack_context__.k.register(_c3, "DropdownMenuSubContent");
__turbopack_context__.k.register(_c4, "DropdownMenuContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "DropdownMenuContent");
__turbopack_context__.k.register(_c6, "DropdownMenuItem$React.forwardRef");
__turbopack_context__.k.register(_c7, "DropdownMenuItem");
__turbopack_context__.k.register(_c8, "DropdownMenuCheckboxItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c10, "DropdownMenuRadioItem$React.forwardRef");
__turbopack_context__.k.register(_c11, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c12, "DropdownMenuLabel$React.forwardRef");
__turbopack_context__.k.register(_c13, "DropdownMenuLabel");
__turbopack_context__.k.register(_c14, "DropdownMenuSeparator$React.forwardRef");
__turbopack_context__.k.register(_c15, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c16, "DropdownMenuShortcut");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/theme-toggle.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ThemeToggle() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "3dc2c4b0b4ea0dc1a3fe9f4947c30d520beb2e3343471015a448674a1b24f2fd") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3dc2c4b0b4ea0dc1a3fe9f4947c30d520beb2e3343471015a448674a1b24f2fd";
    }
    const { setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ThemeToggle[useEffect()]": ()=>{
                setMounted(true);
            }
        })["ThemeToggle[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (!mounted) {
        let t2;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "icon",
                disabled: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSun"], {
                    className: "h-[1.2rem] w-[1.2rem]"
                }, void 0, false, {
                    fileName: "[project]/src/components/theme-toggle.jsx",
                    lineNumber: 40,
                    columnNumber: 66
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/theme-toggle.jsx",
                lineNumber: 40,
                columnNumber: 12
            }, this);
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        return t2;
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "icon",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSun"], {
                        className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/theme-toggle.jsx",
                        lineNumber: 49,
                        columnNumber: 84
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMoon"], {
                        className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    }, void 0, false, {
                        fileName: "[project]/src/components/theme-toggle.jsx",
                        lineNumber: 49,
                        columnNumber: 190
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Toggle theme"
                    }, void 0, false, {
                        fileName: "[project]/src/components/theme-toggle.jsx",
                        lineNumber: 49,
                        columnNumber: 305
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/theme-toggle.jsx",
                lineNumber: 49,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/theme-toggle.jsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== setTheme) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
            onClick: {
                "ThemeToggle[<DropdownMenuItem>.onClick]": ()=>setTheme("light")
            }["ThemeToggle[<DropdownMenuItem>.onClick]"],
            children: "Light"
        }, void 0, false, {
            fileName: "[project]/src/components/theme-toggle.jsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[5] = setTheme;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== setTheme) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
            onClick: {
                "ThemeToggle[<DropdownMenuItem>.onClick]": ()=>setTheme("dark")
            }["ThemeToggle[<DropdownMenuItem>.onClick]"],
            children: "Dark"
        }, void 0, false, {
            fileName: "[project]/src/components/theme-toggle.jsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[7] = setTheme;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== setTheme) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
            onClick: {
                "ThemeToggle[<DropdownMenuItem>.onClick]": ()=>setTheme("system")
            }["ThemeToggle[<DropdownMenuItem>.onClick]"],
            children: "System"
        }, void 0, false, {
            fileName: "[project]/src/components/theme-toggle.jsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[9] = setTheme;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t3 || $[12] !== t4 || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                    align: "end",
                    children: [
                        t3,
                        t4,
                        t5
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/theme-toggle.jsx",
                    lineNumber: 86,
                    columnNumber: 28
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/theme-toggle.jsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    return t6;
}
_s(ThemeToggle, "VpevRKcJqhV36G+J49AO8+8hTwk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AboutUsDropdown.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutUsDropdown",
    ()=>AboutUsDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AboutUsDropdown() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "4ee43857ae54bfe6717f7776bb0dde3d32685703d9ab4fa6cec7a5e33d7df096") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4ee43857ae54bfe6717f7776bb0dde3d32685703d9ab4fa6cec7a5e33d7df096";
    }
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "AboutUsDropdown[<button>.onMouseEnter]": ()=>setIsOpen(true)
        })["AboutUsDropdown[<button>.onMouseEnter]"];
        t1 = ({
            "AboutUsDropdown[<button>.onMouseLeave]": ()=>setIsOpen(false)
        })["AboutUsDropdown[<button>.onMouseLeave]"];
        t2 = {
            fontFamily: "var(--font-space-grotesk), sans-serif"
        };
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
    }
    const t3 = `transition-transform ${isOpen ? "rotate-180" : ""}`;
    let t4;
    if ($[4] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "flex items-center font-bold gap-1 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors",
            onMouseEnter: t0,
            onMouseLeave: t1,
            style: t2,
            children: [
                "About Us",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronDown"], {
                    size: 18,
                    className: t3
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutUsDropdown.jsx",
                    lineNumber: 40,
                    columnNumber: 209
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutUsDropdown.jsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== isOpen) {
        t5 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-0 mt-0 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50",
            onMouseEnter: {
                "AboutUsDropdown[<div>.onMouseEnter]": ()=>setIsOpen(true)
            }["AboutUsDropdown[<div>.onMouseEnter]"],
            onMouseLeave: {
                "AboutUsDropdown[<div>.onMouseLeave]": ()=>setIsOpen(false)
            }["AboutUsDropdown[<div>.onMouseLeave]"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/team",
                    className: "block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-colors",
                    style: {
                        fontFamily: "var(--font-space-grotesk), sans-serif"
                    },
                    children: "Our Team"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutUsDropdown.jsx",
                    lineNumber: 52,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/awards",
                    className: "block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-colors",
                    style: {
                        fontFamily: "var(--font-space-grotesk), sans-serif"
                    },
                    children: "Awards"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutUsDropdown.jsx",
                    lineNumber: 54,
                    columnNumber: 25
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/publications",
                    className: "block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-colors",
                    style: {
                        fontFamily: "var(--font-space-grotesk), sans-serif"
                    },
                    children: "Publications"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutUsDropdown.jsx",
                    lineNumber: 56,
                    columnNumber: 23
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutUsDropdown.jsx",
            lineNumber: 48,
            columnNumber: 20
        }, this);
        $[6] = isOpen;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t4 || $[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutUsDropdown.jsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    return t6;
}
_s(AboutUsDropdown, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = AboutUsDropdown;
var _c;
__turbopack_context__.k.register(_c, "AboutUsDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProductsDropdown.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductsDropdown",
    ()=>ProductsDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ProductsDropdown(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "d8ffb7f397905b9e1df75920e3a20fd80fe2e5f7d9201fa8d4eef89e46903754") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d8ffb7f397905b9e1df75920e3a20fd80fe2e5f7d9201fa8d4eef89e46903754";
    }
    const { onTrustInnClick } = t0;
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== onTrustInnClick) {
        t1 = ({
            "ProductsDropdown[handleTrustInnClick]": (e)=>{
                setIsOpen(false);
                if (onTrustInnClick) {
                    onTrustInnClick(e);
                }
            }
        })["ProductsDropdown[handleTrustInnClick]"];
        $[1] = onTrustInnClick;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleTrustInnClick = t1;
    let t2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ProductsDropdown[<button>.onMouseEnter]": ()=>setIsOpen(true)
        })["ProductsDropdown[<button>.onMouseEnter]"];
        t3 = ({
            "ProductsDropdown[<button>.onMouseLeave]": ()=>setIsOpen(false)
        })["ProductsDropdown[<button>.onMouseLeave]"];
        t4 = {
            fontFamily: "var(--font-space-grotesk), sans-serif"
        };
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    const t5 = `transition-transform ${isOpen ? "rotate-180" : ""}`;
    let t6;
    if ($[6] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "flex items-center gap-1 text-gray-700 font-bold dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors",
            onMouseEnter: t2,
            onMouseLeave: t3,
            style: t4,
            children: [
                "Products",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronDown"], {
                    size: 18,
                    className: t5
                }, void 0, false, {
                    fileName: "[project]/src/components/ProductsDropdown.jsx",
                    lineNumber: 59,
                    columnNumber: 209
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProductsDropdown.jsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== handleTrustInnClick || $[9] !== isOpen) {
        t7 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-0 mt-0 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50",
            onMouseEnter: {
                "ProductsDropdown[<div>.onMouseEnter]": ()=>setIsOpen(true)
            }["ProductsDropdown[<div>.onMouseEnter]"],
            onMouseLeave: {
                "ProductsDropdown[<div>.onMouseLeave]": ()=>setIsOpen(false)
            }["ProductsDropdown[<div>.onMouseLeave]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                onClick: handleTrustInnClick,
                className: "block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-colors",
                style: {
                    fontFamily: "var(--font-space-grotesk), sans-serif"
                },
                children: "TrustInn"
            }, void 0, false, {
                fileName: "[project]/src/components/ProductsDropdown.jsx",
                lineNumber: 71,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProductsDropdown.jsx",
            lineNumber: 67,
            columnNumber: 20
        }, this);
        $[8] = handleTrustInnClick;
        $[9] = isOpen;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t6 || $[12] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProductsDropdown.jsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[11] = t6;
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    return t8;
}
_s(ProductsDropdown, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = ProductsDropdown;
var _c;
__turbopack_context__.k.register(_c, "ProductsDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TrustInnAccessModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrustInnAccessModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function TrustInnAccessModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(44);
    if ($[0] !== "25187deb3f1747a005b25721d54ee77c261ae4c5aba72bd3eaac62097990e688") {
        for(let $i = 0; $i < 44; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "25187deb3f1747a005b25721d54ee77c261ae4c5aba72bd3eaac62097990e688";
    }
    const { isOpen, onClose, accessType, userEmail, remainingTrials } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    if (!isOpen) {
        return null;
    }
    let t1;
    if ($[1] !== accessType || $[2] !== onClose || $[3] !== remainingTrials || $[4] !== router) {
        t1 = ({
            "TrustInnAccessModal[getModalContent]": ()=>{
                switch(accessType){
                    case "not_logged_in":
                        {
                            return {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAlertCircle"], {
                                    className: "w-16 h-16 text-yellow-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TrustInnAccessModal.tsx",
                                    lineNumber: 40,
                                    columnNumber: 23
                                }, this),
                                title: "Not Logged In",
                                description: "Please log in to access TrustInn. Sign in with your account to continue.",
                                buttons: [
                                    {
                                        label: "Login",
                                        onClick: ()=>{
                                            onClose();
                                            router.push("/login");
                                        },
                                        variant: "primary"
                                    },
                                    {
                                        label: "Cancel",
                                        onClick: onClose,
                                        variant: "secondary"
                                    }
                                ]
                            };
                        }
                    case "no_trials":
                        {
                            return {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAlertCircle"], {
                                    className: "w-16 h-16 text-red-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TrustInnAccessModal.tsx",
                                    lineNumber: 60,
                                    columnNumber: 23
                                }, this),
                                title: "No Free Credits Left",
                                description: "You have used all your free credits. Upgrade to premium to continue using TrustInn and get unlimited access.",
                                buttons: [
                                    {
                                        label: "Upgrade to Premium",
                                        onClick: ()=>{
                                            onClose();
                                            router.push("/pricing");
                                        },
                                        variant: "primary"
                                    },
                                    {
                                        label: "Cancel",
                                        onClick: onClose,
                                        variant: "secondary"
                                    }
                                ]
                            };
                        }
                    case "premium_required":
                        {
                            return {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAlertCircle"], {
                                    className: "w-16 h-16 text-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TrustInnAccessModal.tsx",
                                    lineNumber: 80,
                                    columnNumber: 23
                                }, this),
                                title: "Premium Feature",
                                description: `TrustInn requires a premium subscription. You currently have ${remainingTrials || 0} free credits left. Upgrade now to enjoy unlimited access.`,
                                buttons: [
                                    {
                                        label: "View Pricing",
                                        onClick: ()=>{
                                            onClose();
                                            router.push("/pricing");
                                        },
                                        variant: "primary"
                                    },
                                    {
                                        label: "Use Free Credit",
                                        onClick: onClose,
                                        variant: "secondary"
                                    }
                                ]
                            };
                        }
                    case "success":
                        {
                            return {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheckCircle"], {
                                    className: "w-16 h-16 text-green-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TrustInnAccessModal.tsx",
                                    lineNumber: 100,
                                    columnNumber: 23
                                }, this),
                                title: "Access Granted",
                                description: "You have access to TrustInn. Redirecting now...",
                                buttons: []
                            };
                        }
                    default:
                        {
                            return {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAlertCircle"], {
                                    className: "w-16 h-16 text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TrustInnAccessModal.tsx",
                                    lineNumber: 109,
                                    columnNumber: 23
                                }, this),
                                title: "Error",
                                description: "An error occurred. Please try again.",
                                buttons: [
                                    {
                                        label: "Close",
                                        onClick: onClose,
                                        variant: "secondary"
                                    }
                                ]
                            };
                        }
                }
            }
        })["TrustInnAccessModal[getModalContent]"];
        $[1] = accessType;
        $[2] = onClose;
        $[3] = remainingTrials;
        $[4] = router;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const getModalContent = t1;
    let t10;
    let t11;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[6] !== accessType || $[7] !== getModalContent || $[8] !== onClose || $[9] !== userEmail) {
        const content = getModalContent();
        t10 = "fixed inset-0 z-[9999] flex items-center justify-center";
        if ($[20] !== onClose) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/70 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/TrustInnAccessModal.tsx",
                lineNumber: 145,
                columnNumber: 13
            }, this);
            $[20] = onClose;
            $[21] = t11;
        } else {
            t11 = $[21];
        }
        t8 = "relative bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden";
        let t12;
        if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                size: 24,
                className: "text-gray-600 dark:text-gray-400"
            }, void 0, false, {
                fileName: "[project]/src/components/TrustInnAccessModal.tsx",
                lineNumber: 154,
                columnNumber: 13
            }, this);
            $[22] = t12;
        } else {
            t12 = $[22];
        }
        if ($[23] !== onClose) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all",
                children: t12
            }, void 0, false, {
                fileName: "[project]/src/components/TrustInnAccessModal.tsx",
                lineNumber: 160,
                columnNumber: 12
            }, this);
            $[23] = onClose;
            $[24] = t9;
        } else {
            t9 = $[24];
        }
        t2 = "p-8 text-center";
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center mb-6",
            children: content.icon
        }, void 0, false, {
            fileName: "[project]/src/components/TrustInnAccessModal.tsx",
            lineNumber: 167,
            columnNumber: 10
        }, this);
        let t13;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = {
                fontFamily: "var(--font-space-grotesk), sans-serif"
            };
            $[25] = t13;
        } else {
            t13 = $[25];
        }
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-black text-gray-900 dark:text-white mb-3",
            style: t13,
            children: content.title
        }, void 0, false, {
            fileName: "[project]/src/components/TrustInnAccessModal.tsx",
            lineNumber: 177,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 dark:text-gray-400 text-base mb-8 leading-relaxed",
            children: content.description
        }, void 0, false, {
            fileName: "[project]/src/components/TrustInnAccessModal.tsx",
            lineNumber: 178,
            columnNumber: 10
        }, this);
        if ($[26] !== accessType || $[27] !== userEmail) {
            t6 = userEmail && accessType !== "not_logged_in" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-700 dark:text-gray-300",
                    children: [
                        "Logged in as: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold",
                            children: userEmail
                        }, void 0, false, {
                            fileName: "[project]/src/components/TrustInnAccessModal.tsx",
                            lineNumber: 180,
                            columnNumber: 241
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TrustInnAccessModal.tsx",
                    lineNumber: 180,
                    columnNumber: 171
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/TrustInnAccessModal.tsx",
                lineNumber: 180,
                columnNumber: 59
            }, this);
            $[26] = accessType;
            $[27] = userEmail;
            $[28] = t6;
        } else {
            t6 = $[28];
        }
        t7 = content.buttons.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3 sm:flex-row sm:gap-3",
            children: content.buttons.map(_TrustInnAccessModalContentButtonsMap)
        }, void 0, false, {
            fileName: "[project]/src/components/TrustInnAccessModal.tsx",
            lineNumber: 187,
            columnNumber: 40
        }, this);
        $[6] = accessType;
        $[7] = getModalContent;
        $[8] = onClose;
        $[9] = userEmail;
        $[10] = t10;
        $[11] = t11;
        $[12] = t2;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
        $[16] = t6;
        $[17] = t7;
        $[18] = t8;
        $[19] = t9;
    } else {
        t10 = $[10];
        t11 = $[11];
        t2 = $[12];
        t3 = $[13];
        t4 = $[14];
        t5 = $[15];
        t6 = $[16];
        t7 = $[17];
        t8 = $[18];
        t9 = $[19];
    }
    let t12;
    if ($[29] !== t2 || $[30] !== t3 || $[31] !== t4 || $[32] !== t5 || $[33] !== t6 || $[34] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                t4,
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TrustInnAccessModal.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[29] = t2;
        $[30] = t3;
        $[31] = t4;
        $[32] = t5;
        $[33] = t6;
        $[34] = t7;
        $[35] = t12;
    } else {
        t12 = $[35];
    }
    let t13;
    if ($[36] !== t12 || $[37] !== t8 || $[38] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t9,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TrustInnAccessModal.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[36] = t12;
        $[37] = t8;
        $[38] = t9;
        $[39] = t13;
    } else {
        t13 = $[39];
    }
    let t14;
    if ($[40] !== t10 || $[41] !== t11 || $[42] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TrustInnAccessModal.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[40] = t10;
        $[41] = t11;
        $[42] = t13;
        $[43] = t14;
    } else {
        t14 = $[43];
    }
    return t14;
}
_s(TrustInnAccessModal, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = TrustInnAccessModal;
function _TrustInnAccessModalContentButtonsMap(button, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: button.onClick,
        className: `flex-1 px-6 py-3 rounded-lg font-bold transition-all duration-300 ${button.variant === "primary" ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105" : "bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700"}`,
        style: {
            fontFamily: "var(--font-space-grotesk), sans-serif"
        },
        children: button.label
    }, index, false, {
        fileName: "[project]/src/components/TrustInnAccessModal.tsx",
        lineNumber: 250,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "TrustInnAccessModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$toggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/theme-toggle.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutUsDropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AboutUsDropdown.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsDropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductsDropdown.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustInnAccessModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TrustInnAccessModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function Header() {
    _s();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedDropdown, setExpandedDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showProfileMenu, setShowProfileMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [trustInnModalOpen, setTrustInnModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [trustInnAccessType, setTrustInnAccessType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('success');
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const isLoggedIn = !!session;
    const userEmail = session?.user?.email || '';
    const userName = session?.user?.name || '';
    const userRole = session?.user?.role || 'user';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 10);
                }
            }["Header.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Header.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    const handleLogout = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
            callbackUrl: '/'
        });
        setShowProfileMenu(false);
    };
    const getDashboardUrl = ()=>{
        return userRole === 'admin' ? '/admin/dashboard' : '/dashboard';
    };
    const handleTrustInnAccess = async (e)=>{
        e.preventDefault();
        // Check if user is logged in
        if (!isLoggedIn) {
            setTrustInnAccessType('not_logged_in');
            setTrustInnModalOpen(true);
            return;
        }
        try {
            // Fetch user details to check premium status and trials
            const response = await fetch('/api/user/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch user details');
            }
            const userData = await response.json();
            // Check if user has premium or remaining trials
            const hasPremium = userData.user?.isPremium;
            const remainingTrials = userData.user?.trialCount || 0;
            if (!hasPremium && remainingTrials <= 0) {
                setTrustInnAccessType('no_trials');
                setTrustInnModalOpen(true);
                return;
            }
            // If user has premium or trials, allow access and redirect
            if (hasPremium || remainingTrials > 0) {
                // Generate JWT token FIRST
                const tokenResponse = await fetch('/api/auth/generate-token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        expiresIn: '7d' // Token valid for 7 days
                    })
                });
                if (!tokenResponse.ok) {
                    throw new Error('Failed to generate token');
                }
                const tokenData = await tokenResponse.json();
                const jwtToken = tokenData.token;
                // Decrement trial if user doesn't have premium (only on initial redirect)
                if (!hasPremium && remainingTrials > 0) {
                    await fetch('/api/user/me', {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            trialCount: remainingTrials - 1
                        })
                    });
                }
                // Build TrustInn URL with JWT token as query param
                const trustInnUrl = new URL('http://172.20.27.143:4040/tools');
                trustInnUrl.searchParams.append('token', jwtToken);
                trustInnUrl.searchParams.append('user', userData.user?.email);
                // Redirect to TrustInn with JWT token
                window.location.href = trustInnUrl.toString();
            }
        } catch (error) {
            console.error('Error checking TrustInn access:', error);
            setTrustInnAccessType('premium_required');
            setTrustInnModalOpen(true);
        }
    };
    const toggleMobileMenu = ()=>{
        setMobileMenuOpen(!mobileMenuOpen);
    };
    const closeMobileMenu = ()=>{
        setMobileMenuOpen(false);
        setExpandedDropdown(null);
    };
    const toggleDropdown = (dropdownName)=>{
        setExpandedDropdown(expandedDropdown === dropdownName ? null : dropdownName);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-black/95 backdrop-blur-lg shadow-lg border-b-2 border-blue-500/20' : 'bg-white dark:bg-black border-b border-gray-200 dark:border-zinc-800'}`,
                style: {
                    fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'
                },
                suppressHydrationWarning: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between h-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/",
                                    className: "flex-shrink-0 flex items-center gap-3 hover:opacity-80 transition-all duration-300 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "https://nitminer.com/logo_img/logo-rbg.png",
                                                alt: "NitMiner Logo",
                                                width: 62,
                                                height: 45,
                                                priority: true,
                                                className: "transition-transform duration-300 group-hover:scale-105",
                                                style: {
                                                    width: 'auto',
                                                    height: 'auto'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.js",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden sm:block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-base md:text-lg font-black text-gray-900 dark:text-white leading-tight tracking-tight",
                                                style: {
                                                    fontFamily: 'var(--font-space-grotesk), sans-serif'
                                                },
                                                children: [
                                                    "NITMINER",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/Header.js",
                                                        lineNumber: 151,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm md:text-base font-bold text-blue-600 dark:text-blue-400",
                                                        children: "Technologies Pvt Ltd."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.js",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Header.js",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "hidden lg:flex items-center space-x-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/",
                                            className: "px-4 py-2 text-base font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300",
                                            style: {
                                                fontFamily: 'var(--font-space-grotesk), sans-serif'
                                            },
                                            children: "Home"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutUsDropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutUsDropdown"], {}, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/services",
                                            className: "px-4 py-2 text-base font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300",
                                            style: {
                                                fontFamily: 'var(--font-space-grotesk), sans-serif'
                                            },
                                            children: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsDropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductsDropdown"], {
                                            onTrustInnClick: handleTrustInnAccess
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/careers",
                                            className: "px-4 py-2 text-base font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300",
                                            style: {
                                                fontFamily: 'var(--font-space-grotesk), sans-serif'
                                            },
                                            children: "Careers"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/gallery",
                                            className: "px-4 py-2 text-base font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300",
                                            style: {
                                                fontFamily: 'var(--font-space-grotesk), sans-serif'
                                            },
                                            children: "Gallery"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/contact",
                                            className: "px-4 py-2 text-base font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300",
                                            style: {
                                                fontFamily: 'var(--font-space-grotesk), sans-serif'
                                            },
                                            children: "Contact"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:flex flex-shrink-0 items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$toggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this),
                                        isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowProfileMenu(!showProfileMenu),
                                                    className: "flex items-center gap-3 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-white/30",
                                                    style: {
                                                        fontFamily: 'var(--font-space-grotesk), sans-serif',
                                                        letterSpacing: '0.3px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8 rounded-full bg-white/20 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header.js",
                                                                lineNumber: 199,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.js",
                                                            lineNumber: 198,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronDown"], {
                                                            size: 16,
                                                            className: `transition-transform duration-300 ${showProfileMenu ? 'rotate-180' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.js",
                                                            lineNumber: 204,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Header.js",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, this),
                                                showProfileMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-full mt-3 right-0 bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-700 rounded-xl shadow-2xl z-50 min-w-72 overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 px-5 py-4 border-b-2 border-gray-200 dark:border-zinc-700",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-base font-black text-gray-900 dark:text-white mb-1",
                                                                    style: {
                                                                        fontFamily: 'var(--font-space-grotesk), sans-serif'
                                                                    },
                                                                    children: userName || 'User Account'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header.js",
                                                                    lineNumber: 209,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-600 dark:text-gray-400 font-medium mb-1",
                                                                    children: userEmail
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header.js",
                                                                    lineNumber: 214,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white text-xs font-black rounded-full mt-2",
                                                                    style: {
                                                                        fontFamily: 'var(--font-space-grotesk), sans-serif'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "w-1.5 h-1.5 bg-white rounded-full"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Header.js",
                                                                            lineNumber: 218,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        userRole.toUpperCase()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/Header.js",
                                                                    lineNumber: 215,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Header.js",
                                                            lineNumber: 208,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: getDashboardUrl(),
                                                            onClick: ()=>setShowProfileMenu(false),
                                                            className: "flex items-center gap-3 px-5 py-4 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 border-b border-gray-100 dark:border-zinc-800",
                                                            style: {
                                                                fontFamily: 'var(--font-space-grotesk), sans-serif'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-5 h-5",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2.5,
                                                                        d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Header.js",
                                                                        lineNumber: 226,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header.js",
                                                                    lineNumber: 225,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "DASHBOARD"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Header.js",
                                                            lineNumber: 222,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleLogout,
                                                            className: "w-full flex items-center gap-3 px-5 py-4 text-sm font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300",
                                                            style: {
                                                                fontFamily: 'var(--font-space-grotesk), sans-serif'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLogOut"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header.js",
                                                                    lineNumber: 233,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "LOGOUT"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Header.js",
                                                            lineNumber: 230,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Header.js",
                                                    lineNumber: 207,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 193,
                                            columnNumber: 29
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            className: "inline-flex items-center gap-2 px-6 py-3 text-sm font-black rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-white/30",
                                            style: {
                                                fontFamily: 'var(--font-space-grotesk), sans-serif',
                                                letterSpacing: '0.5px'
                                            },
                                            children: [
                                                "GET STARTED",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowRight"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.js",
                                                    lineNumber: 242,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 237,
                                            columnNumber: 26
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:hidden flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$toggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: toggleMobileMenu,
                                            className: "p-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                                            "aria-label": "Toggle menu",
                                            children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                                size: 28,
                                                className: "font-bold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.js",
                                                lineNumber: 250,
                                                columnNumber: 35
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMenu"], {
                                                size: 28,
                                                className: "font-bold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.js",
                                                lineNumber: 250,
                                                columnNumber: 77
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.js",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.js",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40",
                        onClick: closeMobileMenu
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.js",
                        lineNumber: 257,
                        columnNumber: 28
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `fixed top-0 left-0 h-full w-80 bg-white dark:bg-black shadow-2xl lg:hidden transition-transform duration-300 transform z-50 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-b-2 border-blue-200 dark:border-blue-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-black text-gray-900 dark:text-white",
                                            style: {
                                                fontFamily: 'var(--font-space-grotesk), sans-serif',
                                                letterSpacing: '0.5px'
                                            },
                                            children: "MENU"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 264,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: closeMobileMenu,
                                            className: "p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-zinc-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                                            "aria-label": "Close menu",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                                size: 24,
                                                className: "font-bold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.js",
                                                lineNumber: 271,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "flex-1 overflow-y-auto p-4 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/",
                                            onClick: closeMobileMenu,
                                            className: "block px-5 py-3.5 rounded-xl text-base font-black text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                                            style: {
                                                fontFamily: 'var(--font-space-grotesk), sans-serif'
                                            },
                                            children: "HOME"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>toggleDropdown('about'),
                                                    className: "w-full flex items-center justify-between px-5 py-3.5 rounded-xl text-base font-black text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                                                    style: {
                                                        fontFamily: 'var(--font-space-grotesk), sans-serif'
                                                    },
                                                    children: [
                                                        "ABOUT",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronDown"], {
                                                            size: 20,
                                                            className: `transition-transform duration-300 ${expandedDropdown === 'about' ? 'rotate-180' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.js",
                                                            lineNumber: 289,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Header.js",
                                                    lineNumber: 285,
                                                    columnNumber: 17
                                                }, this),
                                                expandedDropdown === 'about' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pl-4 space-y-2 mt-2 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 rounded-xl p-3 border-2 border-gray-200 dark:border-zinc-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "/team",
                                                            onClick: closeMobileMenu,
                                                            className: "block px-4 py-2.5 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-400 hover:bg-white dark:hover:bg-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                                                            style: {
                                                                fontFamily: 'var(--font-space-grotesk), sans-serif'
                                                            },
                                                            children: "Our Team"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.js",
                                                            lineNumber: 292,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "/awards",
                                                            onClick: closeMobileMenu,
                                                            className: "block px-4 py-2.5 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-400 hover:bg-white dark:hover:bg-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                                                            style: {
                                                                fontFamily: 'var(--font-space-grotesk), sans-serif'
                                                            },
                                                            children: "Awards"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.js",
                                                            lineNumber: 297,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "/publications",
                                                            onClick: closeMobileMenu,
                                                            className: "block px-4 py-2.5 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-400 hover:bg-white dark:hover:bg-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                                                            style: {
                                                                fontFamily: 'var(--font-space-grotesk), sans-serif'
                                                            },
                                                            children: "Publications"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.js",
                                                            lineNumber: 302,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Header.js",
                                                    lineNumber: 291,
                                                    columnNumber: 50
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/services",
                                            onClick: closeMobileMenu,
                                            className: "block px-5 py-3.5 rounded-xl text-base font-black text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                                            style: {
                                                fontFamily: 'var(--font-space-grotesk), sans-serif'
                                            },
                                            children: "SERVICES"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 310,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>toggleDropdown('products'),
                                                    className: "w-full flex items-center justify-between px-5 py-3.5 rounded-xl text-base font-black text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                                                    style: {
                                                        fontFamily: 'var(--font-space-grotesk), sans-serif'
                                                    },
                                                    children: [
                                                        "PRODUCTS",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronDown"], {
                                                            size: 20,
                                                            className: `transition-transform duration-300 ${expandedDropdown === 'products' ? 'rotate-180' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.js",
                                                            lineNumber: 322,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Header.js",
                                                    lineNumber: 318,
                                                    columnNumber: 17
                                                }, this),
                                                expandedDropdown === 'products' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pl-4 space-y-2 mt-2 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 rounded-xl p-3 border-2 border-gray-200 dark:border-zinc-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "/tools",
                                                            onClick: closeMobileMenu,
                                                            className: "block px-4 py-2.5 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-400 hover:bg-white dark:hover:bg-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                                                            style: {
                                                                fontFamily: 'var(--font-space-grotesk), sans-serif'
                                                            },
                                                            children: "Smart Contract Tools"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.js",
                                                            lineNumber: 325,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "http://172.20.27.143:4040/tools",
                                                            onClick: handleTrustInnAccess,
                                                            className: "block px-4 py-2.5 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-400 hover:bg-white dark:hover:bg-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                                                            style: {
                                                                fontFamily: 'var(--font-space-grotesk), sans-serif'
                                                            },
                                                            children: "TrustInn"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.js",
                                                            lineNumber: 330,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Header.js",
                                                    lineNumber: 324,
                                                    columnNumber: 53
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 317,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/careers",
                                            onClick: closeMobileMenu,
                                            className: "block px-5 py-3.5 rounded-xl text-base font-black text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                                            style: {
                                                fontFamily: 'var(--font-space-grotesk), sans-serif'
                                            },
                                            children: "CAREERS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 338,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/gallery",
                                            onClick: closeMobileMenu,
                                            className: "block px-5 py-3.5 rounded-xl text-base font-black text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                                            style: {
                                                fontFamily: 'var(--font-space-grotesk), sans-serif'
                                            },
                                            children: "GALLERY"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/contact",
                                            onClick: closeMobileMenu,
                                            className: "block px-5 py-3.5 rounded-xl text-base font-black text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                                            style: {
                                                fontFamily: 'var(--font-space-grotesk), sans-serif'
                                            },
                                            children: "CONTACT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 348,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5 border-t-2 border-gray-200 dark:border-zinc-800 bg-gradient-to-br from-gray-50 to-white dark:from-zinc-950 dark:to-black",
                                    children: isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-5 py-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl border-2 border-blue-200 dark:border-blue-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-black text-gray-900 dark:text-white mb-1",
                                                        style: {
                                                            fontFamily: 'var(--font-space-grotesk), sans-serif'
                                                        },
                                                        children: userName || 'User Account'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.js",
                                                        lineNumber: 359,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-600 dark:text-gray-400 font-medium mb-2",
                                                        children: userEmail
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.js",
                                                        lineNumber: 364,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white text-xs font-black rounded-full",
                                                        style: {
                                                            fontFamily: 'var(--font-space-grotesk), sans-serif'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-1.5 h-1.5 bg-white rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header.js",
                                                                lineNumber: 368,
                                                                columnNumber: 23
                                                            }, this),
                                                            userRole.toUpperCase()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Header.js",
                                                        lineNumber: 365,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Header.js",
                                                lineNumber: 358,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: getDashboardUrl(),
                                                onClick: closeMobileMenu,
                                                className: "w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-black rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all duration-300",
                                                style: {
                                                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                                                    letterSpacing: '0.5px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2.5,
                                                            d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.js",
                                                            lineNumber: 377,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.js",
                                                        lineNumber: 376,
                                                        columnNumber: 21
                                                    }, this),
                                                    "DASHBOARD"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Header.js",
                                                lineNumber: 372,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleLogout,
                                                className: "w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-black rounded-xl text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-300",
                                                style: {
                                                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                                                    letterSpacing: '0.5px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLogOut"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.js",
                                                        lineNumber: 385,
                                                        columnNumber: 21
                                                    }, this),
                                                    "LOGOUT"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Header.js",
                                                lineNumber: 381,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header.js",
                                        lineNumber: 357,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        onClick: closeMobileMenu,
                                        className: "w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-black rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all duration-300 border-2 border-transparent",
                                        style: {
                                            fontFamily: 'var(--font-space-grotesk), sans-serif',
                                            letterSpacing: '0.5px'
                                        },
                                        children: [
                                            "GET STARTED",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowRight"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.js",
                                                lineNumber: 393,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header.js",
                                        lineNumber: 388,
                                        columnNumber: 26
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 356,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.js",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.js",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.js",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustInnAccessModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: trustInnModalOpen,
                onClose: ()=>setTrustInnModalOpen(false),
                accessType: trustInnAccessType,
                userEmail: userEmail,
                remainingTrials: session?.user?.trialCount || 0
            }, void 0, false, {
                fileName: "[project]/src/components/Header.js",
                lineNumber: 399,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Header, "aXvoMBmdnkyEO3+gefEzeWhbezY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TeamComponent.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TeamComponent",
    ()=>TeamComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function TeamComponent() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "0e1e0ea630573b47e4e1911e9d7b814478f6f953d3e661cc49b9441f09cb0d08") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0e1e0ea630573b47e4e1911e9d7b814478f6f953d3e661cc49b9441f09cb0d08";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                name: "Prof. P Radha Krishna",
                position: "CEO and Director",
                image: "/images/team/radhakrisha.png",
                phone: "+91-XXXXXXXXXX",
                email: "radha@nitw.ac.in"
            },
            {
                name: "Dr. Sangharatna Godboley",
                position: "Chairman and Director",
                image: "/images/team/sangarthana.png",
                phone: "+91-7013306805",
                email: "sanghu@nitw.ac.in"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const leadershipTeam = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                name: "Mrs. Vani Puligilla",
                position: "Project Scientist",
                image: "/images/team/vani.png",
                phone: "+91-XXXXXXXXXX",
                email: "vani@nitw.ac.in"
            },
            {
                name: "Mr. Abhiraj Kumar",
                position: "Sr. Software Engineer",
                image: "/images/team/abhirajkumar.png",
                phone: "+91-XXXXXXXXXX",
                email: "abhiraj@nitw.ac.in"
            },
            {
                name: "Mr. Kandrathi Chandrashekar",
                position: "Sr. Software Engineer",
                image: "/images/team/chandrasekhar.png",
                phone: "+91-XXXXXXXXXX",
                email: "chandrashekar@nitw.ac.in"
            },
            {
                name: "Mr. Nallella Nihal",
                position: "Jr. Software Engineer",
                image: "/images/team/nihal.png",
                phone: "+91-XXXXXXXXXX",
                email: "nihal@nitw.ac.in"
            },
            {
                name: "Mr. Raj Kumar Gunda",
                position: "Jr. Programmer",
                image: "/images/team/rajkumar.png",
                phone: "+91-XXXXXXXXXX",
                email: "raj@nitw.ac.in"
            },
            {
                name: "Mr. Vishal Kumar Swain",
                position: "Junior Research Fellow (JRF)",
                image: "/images/team/vishal.png",
                phone: "+91-XXXXXXXXXX",
                email: "vishal@nitw.ac.in"
            },
            {
                name: "Mr. Kiran Kumar Sahu",
                position: "Junior Research Fellow (JRF)",
                image: "/images/team/kirankumar.png",
                phone: "+91-XXXXXXXXXX",
                email: "kiran@nitw.ac.in"
            },
            {
                name: "Mr. Eti Dhanush",
                position: "Intern",
                image: "/images/team/dhanush.png",
                phone: "+91-XXXXXXXXXX",
                email: "dhanush@nitw.ac.in"
            },
            {
                name: "Ms. ShriLakshmi Kakati",
                position: "Intern",
                image: "/images/team/sreelakshmi.png",
                phone: "+91-XXXXXXXXXX",
                email: "shrilakshmi@nitw.ac.in"
            }
        ];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const supportingTeam = t1;
    const TeamCard = _TeamComponentTeamCard;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: "684ea67d230a00e1",
            children: '@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap";'
        }, void 0, false, void 0, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            fontFamily: "Inter, system-ui, sans-serif"
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            fontFamily: "Space Grotesk, sans-serif"
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl md:text-5xl font-black mb-4 text-black dark:text-white",
                    style: t4,
                    children: [
                        "Our ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-blue-600 dark:text-blue-400",
                            children: "Team"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TeamComponent.jsx",
                            lineNumber: 123,
                            columnNumber: 140
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TeamComponent.jsx",
                    lineNumber: 123,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium",
                    children: "Meet the talented individuals driving innovation at NitMiner Technologies"
                }, void 0, false, {
                    fileName: "[project]/src/components/TeamComponent.jsx",
                    lineNumber: 123,
                    columnNumber: 207
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TeamComponent.jsx",
            lineNumber: 123,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-black mb-12 text-black dark:text-white",
            style: {
                fontFamily: "Space Grotesk, sans-serif"
            },
            children: "Leadership Team"
        }, void 0, false, {
            fileName: "[project]/src/components/TeamComponent.jsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-20",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-2 gap-8",
                    children: leadershipTeam.map({
                        "TeamComponent[leadershipTeam.map()]": (member_0, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamCard, {
                                member: member_0
                            }, index, false, {
                                fileName: "[project]/src/components/TeamComponent.jsx",
                                lineNumber: 140,
                                columnNumber: 71
                            }, this)
                    }["TeamComponent[leadershipTeam.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/TeamComponent.jsx",
                    lineNumber: 139,
                    columnNumber: 37
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TeamComponent.jsx",
            lineNumber: 139,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-black mb-12 text-black dark:text-white",
            style: {
                fontFamily: "Space Grotesk, sans-serif"
            },
            children: "Our Supporting Team"
        }, void 0, false, {
            fileName: "[project]/src/components/TeamComponent.jsx",
            lineNumber: 148,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "w-full py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-zinc-950 dark:to-black",
                    style: t3,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: [
                            t5,
                            t7,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    t8,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                                        children: supportingTeam.map({
                                            "TeamComponent[supportingTeam.map()]": (member_1, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamCard, {
                                                    member: member_1
                                                }, index_0, false, {
                                                    fileName: "[project]/src/components/TeamComponent.jsx",
                                                    lineNumber: 158,
                                                    columnNumber: 79
                                                }, this)
                                        }["TeamComponent[supportingTeam.map()]"])
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TeamComponent.jsx",
                                        lineNumber: 157,
                                        columnNumber: 216
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TeamComponent.jsx",
                                lineNumber: 157,
                                columnNumber: 207
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TeamComponent.jsx",
                        lineNumber: 157,
                        columnNumber: 143
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/TeamComponent.jsx",
                    lineNumber: 157,
                    columnNumber: 16
                }, this)
            ]
        }, void 0, true);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    return t9;
}
_c = TeamComponent;
function _TeamComponentTeamCard(t0) {
    const { member } = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-xs w-full hover:scale-105 transition-transform duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "w-40 h-40 rounded-full mx-auto object-cover hover:scale-110 transition-transform duration-300 shadow-md",
                            src: member.image,
                            alt: member.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/TeamComponent.jsx",
                            lineNumber: 170,
                            columnNumber: 269
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/TeamComponent.jsx",
                        lineNumber: 170,
                        columnNumber: 247
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-center text-xl text-gray-900 dark:text-white font-black mb-2 leading-tight",
                                style: {
                                    fontFamily: "Space Grotesk, sans-serif"
                                },
                                children: member.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/TeamComponent.jsx",
                                lineNumber: 170,
                                columnNumber: 440
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-gray-600 dark:text-gray-400 text-sm font-semibold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: member.position
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TeamComponent.jsx",
                                    lineNumber: 172,
                                    columnNumber: 116
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TeamComponent.jsx",
                                lineNumber: 172,
                                columnNumber: 32
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TeamComponent.jsx",
                        lineNumber: 170,
                        columnNumber: 435
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TeamComponent.jsx",
                lineNumber: 170,
                columnNumber: 130
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/TeamComponent.jsx",
            lineNumber: 170,
            columnNumber: 47
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/TeamComponent.jsx",
        lineNumber: 170,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "TeamComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_338cff2e._.js.map