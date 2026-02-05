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
function ProductsDropdown() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "26dd4bfeb1d9dc2a7d01b24908c02d896881899260ffdfae76848d7c5669559a") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "26dd4bfeb1d9dc2a7d01b24908c02d896881899260ffdfae76848d7c5669559a";
    }
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ProductsDropdown[<button>.onMouseEnter]": ()=>setIsOpen(true)
        })["ProductsDropdown[<button>.onMouseEnter]"];
        t1 = ({
            "ProductsDropdown[<button>.onMouseLeave]": ()=>setIsOpen(false)
        })["ProductsDropdown[<button>.onMouseLeave]"];
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
            className: "flex items-center gap-1 text-gray-700 font-bold dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors",
            onMouseEnter: t0,
            onMouseLeave: t1,
            style: t2,
            children: [
                "Products",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronDown"], {
                    size: 18,
                    className: t3
                }, void 0, false, {
                    fileName: "[project]/src/components/ProductsDropdown.jsx",
                    lineNumber: 40,
                    columnNumber: 209
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProductsDropdown.jsx",
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
                "ProductsDropdown[<div>.onMouseEnter]": ()=>setIsOpen(true)
            }["ProductsDropdown[<div>.onMouseEnter]"],
            onMouseLeave: {
                "ProductsDropdown[<div>.onMouseLeave]": ()=>setIsOpen(false)
            }["ProductsDropdown[<div>.onMouseLeave]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "http://172.20.27.143:4040/",
                className: "block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-colors",
                style: {
                    fontFamily: "var(--font-space-grotesk), sans-serif"
                },
                children: "TrustInn"
            }, void 0, false, {
                fileName: "[project]/src/components/ProductsDropdown.jsx",
                lineNumber: 52,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProductsDropdown.jsx",
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
            fileName: "[project]/src/components/ProductsDropdown.jsx",
            lineNumber: 62,
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
_s(ProductsDropdown, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = ProductsDropdown;
var _c;
__turbopack_context__.k.register(_c, "ProductsDropdown");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$toggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/theme-toggle.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutUsDropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AboutUsDropdown.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsDropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductsDropdown.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
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
function Header() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(94);
    if ($[0] !== "d404d80231f8b044344f5fa9b4e96f6d7c9e02436d7352f2d563d77398e0c177") {
        for(let $i = 0; $i < 94; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d404d80231f8b044344f5fa9b4e96f6d7c9e02436d7352f2d563d77398e0c177";
    }
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedDropdown, setExpandedDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showProfileMenu, setShowProfileMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const isLoggedIn = !!session;
    const userEmail = session?.user?.email || "";
    const userName = session?.user?.name || "";
    const userRole = session?.user?.role || "user";
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Header[useEffect()]": ()=>{
                const handleScroll = {
                    "Header[useEffect() > handleScroll]": ()=>{
                        setScrolled(window.scrollY > 10);
                    }
                }["Header[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll);
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["Header[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Header[handleLogout]": async ()=>{
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                    callbackUrl: "/"
                });
                setShowProfileMenu(false);
            }
        })["Header[handleLogout]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleLogout = t2;
    let t3;
    if ($[4] !== userRole) {
        t3 = ({
            "Header[getDashboardUrl]": ()=>userRole === "admin" ? "/admin/dashboard" : "/dashboard"
        })["Header[getDashboardUrl]"];
        $[4] = userRole;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const getDashboardUrl = t3;
    let t4;
    if ($[6] !== mobileMenuOpen) {
        t4 = ({
            "Header[toggleMobileMenu]": ()=>{
                setMobileMenuOpen(!mobileMenuOpen);
            }
        })["Header[toggleMobileMenu]"];
        $[6] = mobileMenuOpen;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const toggleMobileMenu = t4;
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "Header[closeMobileMenu]": ()=>{
                setMobileMenuOpen(false);
                setExpandedDropdown(null);
            }
        })["Header[closeMobileMenu]"];
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const closeMobileMenu = t5;
    let t6;
    if ($[9] !== expandedDropdown) {
        t6 = ({
            "Header[toggleDropdown]": (dropdownName)=>{
                setExpandedDropdown(expandedDropdown === dropdownName ? null : dropdownName);
            }
        })["Header[toggleDropdown]"];
        $[9] = expandedDropdown;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const toggleDropdown = t6;
    const t7 = `sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/95 dark:bg-black/95 backdrop-blur-lg shadow-lg border-b-2 border-blue-500/20" : "bg-white dark:bg-black border-b border-gray-200 dark:border-zinc-800"}`;
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
        };
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "https://nitminer.com/logo_img/logo-rbg.png",
                alt: "NitMiner Logo",
                width: 62,
                height: 45,
                priority: true,
                className: "transition-transform duration-300 group-hover:scale-105",
                style: {
                    width: "auto",
                    height: "auto"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Header.js",
                lineNumber: 130,
                columnNumber: 36
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            fontFamily: "var(--font-space-grotesk), sans-serif"
        };
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/",
            className: "flex-shrink-0 flex items-center gap-3 hover:opacity-80 transition-all duration-300 group",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden sm:block",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-base md:text-lg font-black text-gray-900 dark:text-white leading-tight tracking-tight",
                        style: t10,
                        children: [
                            "NITMINER",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/Header.js",
                                lineNumber: 149,
                                columnNumber: 290
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm md:text-base font-bold text-blue-600 dark:text-blue-400",
                                children: "Technologies Pvt Ltd."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.js",
                                lineNumber: 149,
                                columnNumber: 296
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.js",
                        lineNumber: 149,
                        columnNumber: 161
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.js",
                    lineNumber: 149,
                    columnNumber: 128
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    let t13;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/",
            className: "px-4 py-2 text-base font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300",
            style: {
                fontFamily: "var(--font-space-grotesk), sans-serif"
            },
            children: "Home"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutUsDropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutUsDropdown"], {}, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[15] = t12;
        $[16] = t13;
    } else {
        t12 = $[15];
        t13 = $[16];
    }
    let t14;
    let t15;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/services",
            className: "px-4 py-2 text-base font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300",
            style: {
                fontFamily: "var(--font-space-grotesk), sans-serif"
            },
            children: "Services"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsDropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductsDropdown"], {}, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[17] = t14;
        $[18] = t15;
    } else {
        t14 = $[17];
        t15 = $[18];
    }
    let t16;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/careers",
            className: "px-4 py-2 text-base font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300",
            style: {
                fontFamily: "var(--font-space-grotesk), sans-serif"
            },
            children: "Careers"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[19] = t16;
    } else {
        t16 = $[19];
    }
    let t17;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/gallery",
            className: "px-4 py-2 text-base font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300",
            style: {
                fontFamily: "var(--font-space-grotesk), sans-serif"
            },
            children: "Gallery"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[20] = t17;
    } else {
        t17 = $[20];
    }
    let t18;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "hidden lg:flex items-center space-x-1",
            children: [
                t12,
                t13,
                t14,
                t15,
                t16,
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/contact",
                    className: "px-4 py-2 text-base font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300",
                    style: {
                        fontFamily: "var(--font-space-grotesk), sans-serif"
                    },
                    children: "Contact"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.js",
                    lineNumber: 200,
                    columnNumber: 96
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[21] = t18;
    } else {
        t18 = $[21];
    }
    let t19;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$toggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[22] = t19;
    } else {
        t19 = $[22];
    }
    let t20;
    if ($[23] !== getDashboardUrl || $[24] !== isLoggedIn || $[25] !== showProfileMenu || $[26] !== userEmail || $[27] !== userName || $[28] !== userRole) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:flex flex-shrink-0 items-center gap-4",
            children: [
                t19,
                isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "Header[<button>.onClick]": ()=>setShowProfileMenu(!showProfileMenu)
                            }["Header[<button>.onClick]"],
                            className: "flex items-center gap-3 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-white/30",
                            style: {
                                fontFamily: "var(--font-space-grotesk), sans-serif",
                                letterSpacing: "0.3px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-full bg-white/20 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.js",
                                        lineNumber: 221,
                                        columnNumber: 95
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 221,
                                    columnNumber: 12
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronDown"], {
                                    size: 16,
                                    className: `transition-transform duration-300 ${showProfileMenu ? "rotate-180" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 221,
                                    columnNumber: 121
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.js",
                            lineNumber: 216,
                            columnNumber: 121
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
                                                fontFamily: "var(--font-space-grotesk), sans-serif"
                                            },
                                            children: userName || "User Account"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 221,
                                            columnNumber: 598
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 dark:text-gray-400 font-medium mb-1",
                                            children: userEmail
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 223,
                                            columnNumber: 48
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white text-xs font-black rounded-full mt-2",
                                            style: {
                                                fontFamily: "var(--font-space-grotesk), sans-serif"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 bg-white rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.js",
                                                    lineNumber: 225,
                                                    columnNumber: 16
                                                }, this),
                                                userRole.toUpperCase()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 223,
                                            columnNumber: 136
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 221,
                                    columnNumber: 436
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: getDashboardUrl(),
                                    onClick: {
                                        "Header[<Link>.onClick]": ()=>setShowProfileMenu(false)
                                    }["Header[<Link>.onClick]"],
                                    className: "flex items-center gap-3 px-5 py-4 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 border-b border-gray-100 dark:border-zinc-800",
                                    style: {
                                        fontFamily: "var(--font-space-grotesk), sans-serif"
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
                                                lineNumber: 229,
                                                columnNumber: 93
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 229,
                                            columnNumber: 14
                                        }, this),
                                        "DASHBOARD"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 225,
                                    columnNumber: 106
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    className: "w-full flex items-center gap-3 px-5 py-4 text-sm font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300",
                                    style: {
                                        fontFamily: "var(--font-space-grotesk), sans-serif"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLogOut"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 231,
                                            columnNumber: 14
                                        }, this),
                                        "LOGOUT"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 229,
                                    columnNumber: 387
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.js",
                            lineNumber: 221,
                            columnNumber: 264
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.js",
                    lineNumber: 216,
                    columnNumber: 95
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/login",
                    className: "inline-flex items-center gap-2 px-6 py-3 text-sm font-black rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-white/30",
                    style: {
                        fontFamily: "var(--font-space-grotesk), sans-serif",
                        letterSpacing: "0.5px"
                    },
                    children: [
                        "GET STARTED",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowRight"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.js",
                            lineNumber: 234,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.js",
                    lineNumber: 231,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[23] = getDashboardUrl;
        $[24] = isLoggedIn;
        $[25] = showProfileMenu;
        $[26] = userEmail;
        $[27] = userName;
        $[28] = userRole;
        $[29] = t20;
    } else {
        t20 = $[29];
    }
    let t21;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$toggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    let t22;
    if ($[31] !== mobileMenuOpen) {
        t22 = mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
            size: 28,
            className: "font-bold"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 254,
            columnNumber: 28
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMenu"], {
            size: 28,
            className: "font-bold"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 254,
            columnNumber: 70
        }, this);
        $[31] = mobileMenuOpen;
        $[32] = t22;
    } else {
        t22 = $[32];
    }
    let t23;
    if ($[33] !== t22 || $[34] !== toggleMobileMenu) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:hidden flex items-center gap-3",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: toggleMobileMenu,
                    className: "p-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                    "aria-label": "Toggle menu",
                    children: t22
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.js",
                    lineNumber: 262,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[33] = t22;
        $[34] = toggleMobileMenu;
        $[35] = t23;
    } else {
        t23 = $[35];
    }
    let t24;
    if ($[36] !== t20 || $[37] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between h-20",
                children: [
                    t11,
                    t18,
                    t20,
                    t23
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.js",
                lineNumber: 271,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[36] = t20;
        $[37] = t23;
        $[38] = t24;
    } else {
        t24 = $[38];
    }
    let t25;
    if ($[39] !== mobileMenuOpen) {
        t25 = mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40",
            onClick: closeMobileMenu
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 280,
            columnNumber: 29
        }, this);
        $[39] = mobileMenuOpen;
        $[40] = t25;
    } else {
        t25 = $[40];
    }
    const t26 = `fixed top-0 left-0 h-full w-80 bg-white dark:bg-black shadow-2xl lg:hidden transition-transform duration-300 transform z-50 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`;
    let t27;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xl font-black text-gray-900 dark:text-white",
            style: {
                fontFamily: "var(--font-space-grotesk), sans-serif",
                letterSpacing: "0.5px"
            },
            children: "MENU"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[41] = t27;
    } else {
        t27 = $[41];
    }
    let t28;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between p-5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-b-2 border-blue-200 dark:border-blue-800",
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: closeMobileMenu,
                    className: "p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-zinc-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                    "aria-label": "Close menu",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                        size: 24,
                        className: "font-bold"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.js",
                        lineNumber: 299,
                        columnNumber: 435
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.js",
                    lineNumber: 299,
                    columnNumber: 206
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 299,
            columnNumber: 11
        }, this);
        $[42] = t28;
    } else {
        t28 = $[42];
    }
    let t29;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/",
            onClick: closeMobileMenu,
            className: "block px-5 py-3.5 rounded-xl text-base font-black text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
            style: {
                fontFamily: "var(--font-space-grotesk), sans-serif"
            },
            children: "HOME"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[43] = t29;
    } else {
        t29 = $[43];
    }
    let t30;
    if ($[44] !== toggleDropdown) {
        t30 = ({
            "Header[<button>.onClick]": ()=>toggleDropdown("about")
        })["Header[<button>.onClick]"];
        $[44] = toggleDropdown;
        $[45] = t30;
    } else {
        t30 = $[45];
    }
    let t31;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = {
            fontFamily: "var(--font-space-grotesk), sans-serif"
        };
        $[46] = t31;
    } else {
        t31 = $[46];
    }
    const t32 = `transition-transform duration-300 ${expandedDropdown === "about" ? "rotate-180" : ""}`;
    let t33;
    if ($[47] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronDown"], {
            size: 20,
            className: t32
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[47] = t32;
        $[48] = t33;
    } else {
        t33 = $[48];
    }
    let t34;
    if ($[49] !== t30 || $[50] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t30,
            className: "w-full flex items-center justify-between px-5 py-3.5 rounded-xl text-base font-black text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
            style: t31,
            children: [
                "ABOUT",
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 343,
            columnNumber: 11
        }, this);
        $[49] = t30;
        $[50] = t33;
        $[51] = t34;
    } else {
        t34 = $[51];
    }
    let t35;
    if ($[52] !== expandedDropdown) {
        t35 = expandedDropdown === "about" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pl-4 space-y-2 mt-2 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 rounded-xl p-3 border-2 border-gray-200 dark:border-zinc-700",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/team",
                    onClick: closeMobileMenu,
                    className: "block px-4 py-2.5 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-400 hover:bg-white dark:hover:bg-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                    style: {
                        fontFamily: "var(--font-space-grotesk), sans-serif"
                    },
                    children: "Our Team"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.js",
                    lineNumber: 352,
                    columnNumber: 220
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/awards",
                    onClick: closeMobileMenu,
                    className: "block px-4 py-2.5 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-400 hover:bg-white dark:hover:bg-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                    style: {
                        fontFamily: "var(--font-space-grotesk), sans-serif"
                    },
                    children: "Awards"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.js",
                    lineNumber: 354,
                    columnNumber: 22
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/publications",
                    onClick: closeMobileMenu,
                    className: "block px-4 py-2.5 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-400 hover:bg-white dark:hover:bg-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                    style: {
                        fontFamily: "var(--font-space-grotesk), sans-serif"
                    },
                    children: "Publications"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.js",
                    lineNumber: 356,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 352,
            columnNumber: 43
        }, this);
        $[52] = expandedDropdown;
        $[53] = t35;
    } else {
        t35 = $[53];
    }
    let t36;
    if ($[54] !== t34 || $[55] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 366,
            columnNumber: 11
        }, this);
        $[54] = t34;
        $[55] = t35;
        $[56] = t36;
    } else {
        t36 = $[56];
    }
    let t37;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/services",
            onClick: closeMobileMenu,
            className: "block px-5 py-3.5 rounded-xl text-base font-black text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
            style: {
                fontFamily: "var(--font-space-grotesk), sans-serif"
            },
            children: "SERVICES"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 375,
            columnNumber: 11
        }, this);
        $[57] = t37;
    } else {
        t37 = $[57];
    }
    let t38;
    if ($[58] !== toggleDropdown) {
        t38 = ({
            "Header[<button>.onClick]": ()=>toggleDropdown("products")
        })["Header[<button>.onClick]"];
        $[58] = toggleDropdown;
        $[59] = t38;
    } else {
        t38 = $[59];
    }
    let t39;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = {
            fontFamily: "var(--font-space-grotesk), sans-serif"
        };
        $[60] = t39;
    } else {
        t39 = $[60];
    }
    const t40 = `transition-transform duration-300 ${expandedDropdown === "products" ? "rotate-180" : ""}`;
    let t41;
    if ($[61] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronDown"], {
            size: 20,
            className: t40
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 404,
            columnNumber: 11
        }, this);
        $[61] = t40;
        $[62] = t41;
    } else {
        t41 = $[62];
    }
    let t42;
    if ($[63] !== t38 || $[64] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t38,
            className: "w-full flex items-center justify-between px-5 py-3.5 rounded-xl text-base font-black text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
            style: t39,
            children: [
                "PRODUCTS",
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 412,
            columnNumber: 11
        }, this);
        $[63] = t38;
        $[64] = t41;
        $[65] = t42;
    } else {
        t42 = $[65];
    }
    let t43;
    if ($[66] !== expandedDropdown) {
        t43 = expandedDropdown === "products" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pl-4 space-y-2 mt-2 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 rounded-xl p-3 border-2 border-gray-200 dark:border-zinc-700",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/tools",
                    onClick: closeMobileMenu,
                    className: "block px-4 py-2.5 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-400 hover:bg-white dark:hover:bg-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                    style: {
                        fontFamily: "var(--font-space-grotesk), sans-serif"
                    },
                    children: "Smart Contract Tools"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.js",
                    lineNumber: 421,
                    columnNumber: 223
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "http://172.20.27.143:4040/tools",
                    onClick: closeMobileMenu,
                    className: "block px-4 py-2.5 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-400 hover:bg-white dark:hover:bg-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
                    style: {
                        fontFamily: "var(--font-space-grotesk), sans-serif"
                    },
                    children: "TrustInn"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.js",
                    lineNumber: 423,
                    columnNumber: 34
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 421,
            columnNumber: 46
        }, this);
        $[66] = expandedDropdown;
        $[67] = t43;
    } else {
        t43 = $[67];
    }
    let t44;
    if ($[68] !== t42 || $[69] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t42,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 433,
            columnNumber: 11
        }, this);
        $[68] = t42;
        $[69] = t43;
        $[70] = t44;
    } else {
        t44 = $[70];
    }
    let t45;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/careers",
            onClick: closeMobileMenu,
            className: "block px-5 py-3.5 rounded-xl text-base font-black text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
            style: {
                fontFamily: "var(--font-space-grotesk), sans-serif"
            },
            children: "CAREERS"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 442,
            columnNumber: 11
        }, this);
        $[71] = t45;
    } else {
        t45 = $[71];
    }
    let t46;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/gallery",
            onClick: closeMobileMenu,
            className: "block px-5 py-3.5 rounded-xl text-base font-black text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
            style: {
                fontFamily: "var(--font-space-grotesk), sans-serif"
            },
            children: "GALLERY"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 451,
            columnNumber: 11
        }, this);
        $[72] = t46;
    } else {
        t46 = $[72];
    }
    let t47;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/contact",
            onClick: closeMobileMenu,
            className: "block px-5 py-3.5 rounded-xl text-base font-black text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300",
            style: {
                fontFamily: "var(--font-space-grotesk), sans-serif"
            },
            children: "CONTACT"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 460,
            columnNumber: 11
        }, this);
        $[73] = t47;
    } else {
        t47 = $[73];
    }
    let t48;
    if ($[74] !== t36 || $[75] !== t44) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "flex-1 overflow-y-auto p-4 space-y-2",
            children: [
                t29,
                t36,
                t37,
                t44,
                t45,
                t46,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 469,
            columnNumber: 11
        }, this);
        $[74] = t36;
        $[75] = t44;
        $[76] = t48;
    } else {
        t48 = $[76];
    }
    let t49;
    if ($[77] !== getDashboardUrl || $[78] !== isLoggedIn || $[79] !== userEmail || $[80] !== userName || $[81] !== userRole) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    fontFamily: "var(--font-space-grotesk), sans-serif"
                                },
                                children: userName || "User Account"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.js",
                                lineNumber: 478,
                                columnNumber: 365
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-600 dark:text-gray-400 font-medium mb-2",
                                children: userEmail
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.js",
                                lineNumber: 480,
                                columnNumber: 46
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white text-xs font-black rounded-full",
                                style: {
                                    fontFamily: "var(--font-space-grotesk), sans-serif"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 bg-white rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.js",
                                        lineNumber: 482,
                                        columnNumber: 14
                                    }, this),
                                    userRole.toUpperCase()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.js",
                                lineNumber: 480,
                                columnNumber: 134
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.js",
                        lineNumber: 478,
                        columnNumber: 194
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: getDashboardUrl(),
                        onClick: closeMobileMenu,
                        className: "w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-black rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all duration-300",
                        style: {
                            fontFamily: "var(--font-space-grotesk), sans-serif",
                            letterSpacing: "0.5px"
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
                                    lineNumber: 485,
                                    columnNumber: 91
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.js",
                                lineNumber: 485,
                                columnNumber: 12
                            }, this),
                            "DASHBOARD"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.js",
                        lineNumber: 482,
                        columnNumber: 104
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleLogout,
                        className: "w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-black rounded-xl text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-300",
                        style: {
                            fontFamily: "var(--font-space-grotesk), sans-serif",
                            letterSpacing: "0.5px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLogOut"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.js",
                                lineNumber: 488,
                                columnNumber: 12
                            }, this),
                            "LOGOUT"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.js",
                        lineNumber: 485,
                        columnNumber: 385
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.js",
                lineNumber: 478,
                columnNumber: 167
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/login",
                onClick: closeMobileMenu,
                className: "w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-black rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all duration-300 border-2 border-transparent",
                style: {
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    letterSpacing: "0.5px"
                },
                children: [
                    "GET STARTED",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowRight"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.js",
                        lineNumber: 491,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.js",
                lineNumber: 488,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 478,
            columnNumber: 11
        }, this);
        $[77] = getDashboardUrl;
        $[78] = isLoggedIn;
        $[79] = userEmail;
        $[80] = userName;
        $[81] = userRole;
        $[82] = t49;
    } else {
        t49 = $[82];
    }
    let t50;
    if ($[83] !== t48 || $[84] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full",
            children: [
                t28,
                t48,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 503,
            columnNumber: 11
        }, this);
        $[83] = t48;
        $[84] = t49;
        $[85] = t50;
    } else {
        t50 = $[85];
    }
    let t51;
    if ($[86] !== t26 || $[87] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t26,
            children: t50
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 512,
            columnNumber: 11
        }, this);
        $[86] = t26;
        $[87] = t50;
        $[88] = t51;
    } else {
        t51 = $[88];
    }
    let t52;
    if ($[89] !== t24 || $[90] !== t25 || $[91] !== t51 || $[92] !== t7) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: t7,
                style: t8,
                suppressHydrationWarning: true,
                children: [
                    t24,
                    t25,
                    t51
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.js",
                lineNumber: 521,
                columnNumber: 13
            }, this)
        }, void 0, false);
        $[89] = t24;
        $[90] = t25;
        $[91] = t51;
        $[92] = t7;
        $[93] = t52;
    } else {
        t52 = $[93];
    }
    return t52;
}
_s(Header, "ZQQojkvWl7TRS28O0ZBvu3l6Wuk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/HeroComponent.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const AnimatedCounter = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "c0b596d34e1147bfde5a0a232ccc70ce402d8f4732a5d95dbe6bb54a6616782c") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c0b596d34e1147bfde5a0a232ccc70ce402d8f4732a5d95dbe6bb54a6616782c";
    }
    const { end, duration: t1, suffix: t2 } = t0;
    const duration = t1 === undefined ? 2000 : t1;
    const suffix = t2 === undefined ? "" : t2;
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t3;
    let t4;
    if ($[1] !== duration || $[2] !== end) {
        t3 = ()=>{
            let startTime;
            const animateCount = (timestamp)=>{
                if (!startTime) {
                    startTime = timestamp;
                }
                const progress = (timestamp - startTime) / duration;
                if (progress < 1) {
                    setCount(Math.floor(progress * (end - 0) + 0));
                    requestAnimationFrame(animateCount);
                } else {
                    setCount(end);
                }
            };
            requestAnimationFrame(animateCount);
        };
        t4 = [
            end,
            duration
        ];
        $[1] = duration;
        $[2] = end;
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[5] !== count || $[6] !== suffix) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                count,
                suffix
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroComponent.jsx",
            lineNumber: 56,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = count;
        $[6] = suffix;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    return t5;
};
_s(AnimatedCounter, "/xL7qdScToREtqzbt5GZ1kHtYjQ=");
_c = AnimatedCounter;
function HeroComponent() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "c0b596d34e1147bfde5a0a232ccc70ce402d8f4732a5d95dbe6bb54a6616782c") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c0b596d34e1147bfde5a0a232ccc70ce402d8f4732a5d95dbe6bb54a6616782c";
    }
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const isLoggedIn = !!session;
    const userName = session?.user?.name || "";
    const userEmail = session?.user?.email || "";
    const userRole = session?.user?.role || "user";
    const dashboardLink = userRole === "admin" ? "/admin/dashboard" : "/dashboard";
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            fontFamily: "Inter, system-ui, sans-serif"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            fontFamily: "Space Grotesk, sans-serif"
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight animate-fade-in animation-delay-1",
            style: t1,
            children: [
                "Leading Technology",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-blue-600 dark:text-blue-400 font-black",
                    children: "Innovators"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroComponent.jsx",
                    lineNumber: 101,
                    columnNumber: 197
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroComponent.jsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-fade-in animation-delay-2 font-medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-black text-xl text-gray-900 dark:text-white",
                    style: {
                        fontFamily: "Space Grotesk, sans-serif"
                    },
                    children: "NITMINER Technologies"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroComponent.jsx",
                    lineNumber: 108,
                    columnNumber: 146
                }, this),
                " ",
                "is at the forefront of blockchain and AI innovation, delivering cutting-edge solutions that transform businesses and drive digital evolution."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroComponent.jsx",
            lineNumber: 108,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== dashboardLink || $[6] !== isLoggedIn || $[7] !== userEmail || $[8] !== userName || $[9] !== userRole) {
        t4 = isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row items-start sm:items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: dashboardLink,
                    className: "inline-flex items-center justify-center px-8 py-4 font-bold text-base text-white transition-all duration-200 bg-blue-600 rounded-xl hover:bg-blue-700 focus:bg-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-1 animate-bounce-in animation-delay-4 border-2 border-blue-700 hover:border-blue-800",
                    style: {
                        fontFamily: "Space Grotesk, sans-serif"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                            className: "w-5 h-5 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroComponent.jsx",
                            lineNumber: 119,
                            columnNumber: 10
                        }, this),
                        userRole === "admin" ? "ADMIN DASHBOARD" : "GO TO DASHBOARD",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowRight"], {
                            className: "w-5 h-5 ml-2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroComponent.jsx",
                            lineNumber: 119,
                            columnNumber: 107
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroComponent.jsx",
                    lineNumber: 117,
                    columnNumber: 100
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-bold text-gray-700 dark:text-gray-300",
                            style: {
                                fontFamily: "Space Grotesk, sans-serif"
                            },
                            children: [
                                "Welcome back,",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-black text-blue-600 dark:text-blue-400",
                                    children: userName || userEmail.split("@")[0]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroComponent.jsx",
                                    lineNumber: 121,
                                    columnNumber: 30
                                }, this),
                                userRole === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-2 px-2 py-0.5 bg-red-600 text-white text-xs font-black rounded",
                                    children: "ADMIN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroComponent.jsx",
                                    lineNumber: 121,
                                    columnNumber: 161
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeroComponent.jsx",
                            lineNumber: 119,
                            columnNumber: 182
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-semibold text-gray-500 dark:text-gray-500 mt-0.5",
                            children: [
                                "Access your ",
                                userRole === "admin" ? "admin " : "",
                                "dashboard"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeroComponent.jsx",
                            lineNumber: 121,
                            columnNumber: 262
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroComponent.jsx",
                    lineNumber: 119,
                    columnNumber: 155
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroComponent.jsx",
            lineNumber: 117,
            columnNumber: 23
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/products",
                    className: "inline-flex items-center justify-center px-8 py-4 font-black text-base text-white transition-all duration-200 bg-blue-600 rounded-xl hover:bg-blue-700 focus:bg-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-1 animate-bounce-in animation-delay-4 border-2 border-blue-700 hover:border-blue-800",
                    style: {
                        fontFamily: "Space Grotesk, sans-serif",
                        letterSpacing: "0.5px"
                    },
                    children: [
                        "EXPLORE PRODUCTS",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowRight"], {
                            className: "w-5 h-5 ml-3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroComponent.jsx",
                            lineNumber: 124,
                            columnNumber: 26
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroComponent.jsx",
                    lineNumber: 121,
                    columnNumber: 466
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/contact",
                    className: "inline-flex items-center justify-center px-8 py-4 font-bold text-base text-gray-900 dark:text-gray-100 transition-all duration-200 bg-white dark:bg-zinc-900 border-2 border-gray-300 dark:border-zinc-700 rounded-xl hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 hover:shadow-lg animate-bounce-in animation-delay-4",
                    style: {
                        fontFamily: "Space Grotesk, sans-serif",
                        letterSpacing: "0.5px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroComponent.jsx",
                                lineNumber: 127,
                                columnNumber: 94
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroComponent.jsx",
                            lineNumber: 127,
                            columnNumber: 10
                        }, this),
                        "CONTACT US"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroComponent.jsx",
                    lineNumber: 124,
                    columnNumber: 74
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroComponent.jsx",
            lineNumber: 121,
            columnNumber: 417
        }, this);
        $[5] = dashboardLink;
        $[6] = isLoggedIn;
        $[7] = userEmail;
        $[8] = userName;
        $[9] = userRole;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== isLoggedIn) {
        t5 = !isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-5 text-sm font-semibold text-gray-600 dark:text-gray-400 animate-fade-in animation-delay-5",
            children: [
                "Want to join our team?",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/careers",
                    className: "text-blue-600 dark:text-blue-400 transition-all duration-200 hover:underline font-bold",
                    style: {
                        fontFamily: "Space Grotesk, sans-serif"
                    },
                    children: "View Careers →"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroComponent.jsx",
                    lineNumber: 139,
                    columnNumber: 161
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroComponent.jsx",
            lineNumber: 139,
            columnNumber: 25
        }, this);
        $[11] = isLoggedIn;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t4 || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-10 lg:mt-12",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroComponent.jsx",
            lineNumber: 149,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-shrink-0 w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center shadow-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6 text-white",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                strokeWidth: "2.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroComponent.jsx",
                    lineNumber: 158,
                    columnNumber: 242
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/HeroComponent.jsx",
                lineNumber: 158,
                columnNumber: 134
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/HeroComponent.jsx",
            lineNumber: 158,
            columnNumber: 10
        }, this);
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-2 py-0.5 bg-blue-600 text-white text-xs font-black rounded",
            style: {
                fontFamily: "Space Grotesk, sans-serif"
            },
            children: "FEATURED"
        }, void 0, false, {
            fileName: "[project]/src/components/HeroComponent.jsx",
            lineNumber: 165,
            columnNumber: 10
        }, this);
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t10;
    let t9;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mb-1",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-base font-black text-gray-900 dark:text-white",
                    style: {
                        fontFamily: "Space Grotesk, sans-serif",
                        letterSpacing: "0.3px"
                    },
                    children: "TRUSTINN PLATFORM"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroComponent.jsx",
                    lineNumber: 175,
                    columnNumber: 60
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroComponent.jsx",
            lineNumber: 175,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1.5 text-sm font-semibold text-gray-700 dark:text-gray-400 leading-relaxed",
            children: "Advanced security platform providing comprehensive testing and certification for smart contracts with enterprise-grade security features."
        }, void 0, false, {
            fileName: "[project]/src/components/HeroComponent.jsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t9;
    } else {
        t10 = $[18];
        t9 = $[19];
    }
    let t11;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 p-5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-xl animate-fade-in animation-delay-6 shadow-sm hover:shadow-md transition-shadow duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-4",
                children: [
                    t7,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            t9,
                            t10,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-1 bg-white dark:bg-zinc-800 text-xs font-bold text-gray-700 dark:text-gray-300 rounded border border-gray-200 dark:border-zinc-700",
                                        children: "Security Testing"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroComponent.jsx",
                                        lineNumber: 188,
                                        columnNumber: 373
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-1 bg-white dark:bg-zinc-800 text-xs font-bold text-gray-700 dark:text-gray-300 rounded border border-gray-200 dark:border-zinc-700",
                                        children: "Smart Contracts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroComponent.jsx",
                                        lineNumber: 188,
                                        columnNumber: 553
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-1 bg-white dark:bg-zinc-800 text-xs font-bold text-gray-700 dark:text-gray-300 rounded border border-gray-200 dark:border-zinc-700",
                                        children: "Automation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroComponent.jsx",
                                        lineNumber: 188,
                                        columnNumber: 732
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HeroComponent.jsx",
                                lineNumber: 188,
                                columnNumber: 330
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroComponent.jsx",
                        lineNumber: 188,
                        columnNumber: 316
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroComponent.jsx",
                lineNumber: 188,
                columnNumber: 272
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/HeroComponent.jsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t6) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t2,
                t3,
                t6,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroComponent.jsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[21] = t6;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    let t14;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-4 -left-4 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"
        }, void 0, false, {
            fileName: "[project]/src/components/HeroComponent.jsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-8 -right-4 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2"
        }, void 0, false, {
            fileName: "[project]/src/components/HeroComponent.jsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[23] = t13;
        $[24] = t14;
    } else {
        t13 = $[23];
        t14 = $[24];
    }
    let t15;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center lg:justify-end animate-fade-in animation-delay-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    t13,
                    t14,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/hero/hero.png",
                            alt: "TrustInn Security Analysis Platform",
                            width: 600,
                            height: 600,
                            priority: true,
                            className: "relative z-10 rounded-2xl shadow-2xl",
                            style: {
                                width: "auto",
                                height: "auto"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroComponent.jsx",
                            lineNumber: 214,
                            columnNumber: 159
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroComponent.jsx",
                        lineNumber: 214,
                        columnNumber: 133
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroComponent.jsx",
                lineNumber: 214,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/HeroComponent.jsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    if ($[26] !== t12) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-gradient-to-b from-slate-50 to-blue-50/30 dark:from-zinc-950 dark:to-blue-950/10 py-12 sm:py-16 lg:py-24",
                style: t0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid items-center grid-cols-1 gap-12 lg:grid-cols-2",
                        children: [
                            t12,
                            t15
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroComponent.jsx",
                        lineNumber: 224,
                        columnNumber: 209
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroComponent.jsx",
                    lineNumber: 224,
                    columnNumber: 153
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/HeroComponent.jsx",
                lineNumber: 224,
                columnNumber: 13
            }, this)
        }, void 0, false);
        $[26] = t12;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    return t16;
}
_s1(HeroComponent, "90sCfFLkOu0XWr0Qr7d+mUVbZmM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c1 = HeroComponent;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimatedCounter");
__turbopack_context__.k.register(_c1, "HeroComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AboutUs.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutUs",
    ()=>AboutUs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const features = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiShield"],
        title: "Blockchain Excellence",
        description: "Industry-leading blockchain development and smart contract solutions for secure decentralized applications."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCpu"],
        title: "AI & ML Solutions",
        description: "Advanced artificial intelligence and machine learning applications for business optimization and automation."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCloud"],
        title: "Cloud Services",
        description: "Scalable and secure cloud infrastructure solutions for modern enterprise needs."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCode"],
        title: "Security First",
        description: "Enterprise-grade security and compliance solutions ensuring the highest standards of protection."
    }
];
const services = [
    {
        title: "Licensing Solutions",
        description: "Complete software licensing and certification services for blockchain applications, ensuring compliance and security."
    },
    {
        title: "Blockchain Development",
        description: "End-to-end blockchain solutions including smart contracts, DApps, and decentralized systems development."
    },
    {
        title: "AI & ML Solutions",
        description: "Advanced artificial intelligence and machine learning solutions for business optimization and automation."
    }
];
const products = [
    {
        badge: "Featured",
        badgeColor: "bg-blue-600",
        title: "TrustInn Platform",
        description: "Advanced security platform for blockchain applications, providing comprehensive testing and certification for smart contracts with enterprise-grade security features.",
        tags: [
            "Security Testing",
            "Smart Contracts",
            "Automation",
            "Compliance"
        ]
    },
    {
        badge: "New",
        badgeColor: "bg-green-600",
        title: "Smart Contract Suite",
        description: "Comprehensive suite of tools for developing, testing, and deploying secure smart contracts across multiple blockchain platforms with integrated CI/CD pipelines.",
        tags: [
            "Development",
            "Testing Tools",
            "Multi-Chain",
            "CI/CD"
        ]
    }
];
function AboutUs() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "f2c40ee64f54281820d1464d1d8f756c7d6cf796745524c97b7d690b238a156d") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f2c40ee64f54281820d1464d1d8f756c7d6cf796745524c97b7d690b238a156d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            fontFamily: "Inter, system-ui, sans-serif"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-2 h-2 bg-blue-600 rounded-full"
        }, void 0, false, {
            fileName: "[project]/src/components/AboutUs.jsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full mb-6",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-bold text-blue-900 dark:text-blue-300 tracking-wide uppercase",
                    style: {
                        fontFamily: "Space Grotesk, sans-serif"
                    },
                    children: "About Us"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutUs.jsx",
                    lineNumber: 71,
                    columnNumber: 166
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutUs.jsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            fontFamily: "Space Grotesk, sans-serif"
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 dark:text-white",
            style: t3,
            children: [
                "Leading Technology ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-blue-600 dark:text-blue-400",
                    children: "Innovators"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutUs.jsx",
                    lineNumber: 89,
                    columnNumber: 135
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutUs.jsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                t2,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-black text-gray-900 dark:text-white",
                            children: "NITMINER Technologies"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutUs.jsx",
                            lineNumber: 96,
                            columnNumber: 166
                        }, this),
                        " is at the forefront of blockchain and AI innovation, delivering cutting-edge solutions that transform businesses and drive digital evolution."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutUs.jsx",
                    lineNumber: 96,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutUs.jsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-shrink-0 w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-8 h-8 text-white",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2.5,
                        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AboutUs.jsx",
                        lineNumber: 103,
                        columnNumber: 214
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2.5,
                        d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AboutUs.jsx",
                        lineNumber: 103,
                        columnNumber: 322
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AboutUs.jsx",
                lineNumber: 103,
                columnNumber: 124
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AboutUs.jsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-4",
                children: [
                    t6,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-black text-gray-900 dark:text-white mb-3",
                                style: {
                                    fontFamily: "Space Grotesk, sans-serif"
                                },
                                children: "OUR VISION"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutUs.jsx",
                                lineNumber: 110,
                                columnNumber: 223
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 dark:text-gray-300 font-medium leading-relaxed",
                                children: '"To revolutionize the blockchain ecosystem by becoming the leader in smart contract testing automation, ensuring security, efficiency, and trust in decentralized applications across industries in India."'
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutUs.jsx",
                                lineNumber: 112,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AboutUs.jsx",
                        lineNumber: 110,
                        columnNumber: 218
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AboutUs.jsx",
                lineNumber: 110,
                columnNumber: 174
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AboutUs.jsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-shrink-0 w-14 h-14 bg-purple-600 dark:bg-purple-500 rounded-xl flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-8 h-8 text-white",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2.5,
                    d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutUs.jsx",
                    lineNumber: 119,
                    columnNumber: 218
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AboutUs.jsx",
                lineNumber: 119,
                columnNumber: 128
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AboutUs.jsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-20 grid md:grid-cols-2 gap-6",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-4",
                        children: [
                            t8,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-black text-gray-900 dark:text-white mb-3",
                                        style: {
                                            fontFamily: "Space Grotesk, sans-serif"
                                        },
                                        children: "OUR MISSION"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutUs.jsx",
                                        lineNumber: 126,
                                        columnNumber: 288
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 dark:text-gray-300 font-medium leading-relaxed",
                                        children: '"At NITMINER, we aim to empower blockchain developers and enterprises by delivering cutting-edge automated testing solutions for smart contracts. Our mission is to enhance the reliability and performance of smart contracts through seamless, scalable, and highly secure testing processes."'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutUs.jsx",
                                        lineNumber: 128,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AboutUs.jsx",
                                lineNumber: 126,
                                columnNumber: 283
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AboutUs.jsx",
                        lineNumber: 126,
                        columnNumber: 239
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutUs.jsx",
                    lineNumber: 126,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutUs.jsx",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-4xl font-black mb-6 text-gray-900 dark:text-white",
            style: {
                fontFamily: "Space Grotesk, sans-serif"
            },
            children: "Who We Are"
        }, void 0, false, {
            fileName: "[project]/src/components/AboutUs.jsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto text-center",
                children: [
                    t10,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4",
                        children: [
                            "Founded with a vision to revolutionize technology solutions, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-black text-gray-900 dark:text-white",
                                children: "NITMINER Technologies"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutUs.jsx",
                                lineNumber: 144,
                                columnNumber: 236
                            }, this),
                            " combines academic excellence with industry expertise to deliver innovative solutions that solve real-world challenges."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AboutUs.jsx",
                        lineNumber: 144,
                        columnNumber: 86
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AboutUs.jsx",
                lineNumber: 144,
                columnNumber: 34
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AboutUs.jsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            fontFamily: "Space Grotesk, sans-serif"
        };
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-black mb-4 text-gray-900 dark:text-white",
                    style: t12,
                    children: [
                        "Our Core ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-blue-600 dark:text-blue-400",
                            children: "Expertise"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutUs.jsx",
                            lineNumber: 160,
                            columnNumber: 150
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutUs.jsx",
                    lineNumber: 160,
                    columnNumber: 46
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-600 dark:text-gray-400 font-medium",
                    children: "Comprehensive technology solutions designed to help businesses thrive"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutUs.jsx",
                    lineNumber: 160,
                    columnNumber: 222
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutUs.jsx",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-20",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: features.map(_AboutUsFeaturesMap)
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutUs.jsx",
                    lineNumber: 167,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutUs.jsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = {
            fontFamily: "Space Grotesk, sans-serif"
        };
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-black mb-4 text-gray-900 dark:text-white",
                    style: t15,
                    children: [
                        "Comprehensive Technology ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-blue-600 dark:text-blue-400",
                            children: "Solutions"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutUs.jsx",
                            lineNumber: 183,
                            columnNumber: 166
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutUs.jsx",
                    lineNumber: 183,
                    columnNumber: 46
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-600 dark:text-gray-400 font-medium",
                    children: "We offer a wide range of technology services"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutUs.jsx",
                    lineNumber: 183,
                    columnNumber: 238
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutUs.jsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-20",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-6",
                    children: services.map(_AboutUsServicesMap)
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutUs.jsx",
                    lineNumber: 190,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutUs.jsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            fontFamily: "Space Grotesk, sans-serif"
        };
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-black mb-4 text-gray-900 dark:text-white",
                    style: t18,
                    children: [
                        "Innovative Technology ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-blue-600 dark:text-blue-400",
                            children: "Products"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutUs.jsx",
                            lineNumber: 206,
                            columnNumber: 163
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutUs.jsx",
                    lineNumber: 206,
                    columnNumber: 46
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-600 dark:text-gray-400 font-medium",
                    children: "Discover our flagship products designed to solve complex business challenges"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutUs.jsx",
                    lineNumber: 206,
                    columnNumber: 234
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutUs.jsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-20",
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-8",
                    children: products.map(_AboutUsProductsMap)
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutUs.jsx",
                    lineNumber: 213,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutUs.jsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    let t21;
    let t22;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-4xl font-black mb-4",
            style: {
                fontFamily: "Space Grotesk, sans-serif"
            },
            children: "Ready to Transform Your Business?"
        }, void 0, false, {
            fileName: "[project]/src/components/AboutUs.jsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg md:text-xl mb-8 opacity-95 font-medium max-w-2xl mx-auto",
            children: "Let's collaborate to build innovative solutions for your challenges with cutting-edge technology"
        }, void 0, false, {
            fileName: "[project]/src/components/AboutUs.jsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[22] = t21;
        $[23] = t22;
    } else {
        t21 = $[22];
        t22 = $[23];
    }
    let t23;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "bg-white text-blue-600 px-8 py-4 rounded-xl font-black hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-2 border-white",
            style: {
                fontFamily: "Space Grotesk, sans-serif",
                letterSpacing: "0.5px"
            },
            children: "GET STARTED TODAY"
        }, void 0, false, {
            fileName: "[project]/src/components/AboutUs.jsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[24] = t23;
    } else {
        t23 = $[24];
    }
    let t24;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-zinc-950 dark:to-black",
                style: t0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        t5,
                        t9,
                        t11,
                        t14,
                        t17,
                        t20,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 md:p-16 text-center text-white shadow-2xl",
                            children: [
                                t21,
                                t22,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                                    children: [
                                        t23,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-transparent text-white px-8 py-4 rounded-xl font-bold border-2 border-white hover:bg-white/10 transition-all duration-300",
                                            style: {
                                                fontFamily: "Space Grotesk, sans-serif",
                                                letterSpacing: "0.5px"
                                            },
                                            children: "LEARN MORE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AboutUs.jsx",
                                            lineNumber: 243,
                                            columnNumber: 424
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AboutUs.jsx",
                                    lineNumber: 243,
                                    columnNumber: 355
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AboutUs.jsx",
                            lineNumber: 243,
                            columnNumber: 224
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutUs.jsx",
                    lineNumber: 243,
                    columnNumber: 140
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AboutUs.jsx",
                lineNumber: 243,
                columnNumber: 13
            }, this)
        }, void 0, false);
        $[25] = t24;
    } else {
        t24 = $[25];
    }
    return t24;
}
_c = AboutUs;
function _AboutUsProductsMap(product, index_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-zinc-900 p-8 rounded-2xl border-2 border-gray-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-4 mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `px-3 py-1 ${product.badgeColor} text-white text-xs font-black rounded-lg uppercase tracking-wide`,
                    style: {
                        fontFamily: "Space Grotesk, sans-serif"
                    },
                    children: product.badge
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutUs.jsx",
                    lineNumber: 254,
                    columnNumber: 268
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AboutUs.jsx",
                lineNumber: 254,
                columnNumber: 223
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-black mb-4 text-gray-900 dark:text-white",
                style: {
                    fontFamily: "Space Grotesk, sans-serif"
                },
                children: product.title
            }, void 0, false, {
                fileName: "[project]/src/components/AboutUs.jsx",
                lineNumber: 256,
                columnNumber: 38
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-6",
                children: product.description
            }, void 0, false, {
                fileName: "[project]/src/components/AboutUs.jsx",
                lineNumber: 258,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: product.tags.map(_AboutUsProductsMapProductTagsMap)
            }, void 0, false, {
                fileName: "[project]/src/components/AboutUs.jsx",
                lineNumber: 258,
                columnNumber: 134
            }, this)
        ]
    }, index_1, true, {
        fileName: "[project]/src/components/AboutUs.jsx",
        lineNumber: 254,
        columnNumber: 10
    }, this);
}
function _AboutUsProductsMapProductTagsMap(tag, tagIndex) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 text-xs font-bold rounded-lg border border-blue-200 dark:border-blue-800",
        children: tag
    }, tagIndex, false, {
        fileName: "[project]/src/components/AboutUs.jsx",
        lineNumber: 261,
        columnNumber: 10
    }, this);
}
function _AboutUsServicesMap(service, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 p-8 rounded-2xl border-2 border-gray-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-black mb-4 text-gray-900 dark:text-white",
                style: {
                    fontFamily: "Space Grotesk, sans-serif"
                },
                children: service.title
            }, void 0, false, {
                fileName: "[project]/src/components/AboutUs.jsx",
                lineNumber: 264,
                columnNumber: 259
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-700 dark:text-gray-300 font-medium leading-relaxed",
                children: service.description
            }, void 0, false, {
                fileName: "[project]/src/components/AboutUs.jsx",
                lineNumber: 266,
                columnNumber: 28
            }, this)
        ]
    }, index_0, true, {
        fileName: "[project]/src/components/AboutUs.jsx",
        lineNumber: 264,
        columnNumber: 10
    }, this);
}
function _AboutUsFeaturesMap(feature, index) {
    const Icon = feature.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-zinc-900 p-6 rounded-2xl border-2 border-gray-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    size: 28,
                    className: "text-blue-600 dark:text-blue-400"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutUs.jsx",
                    lineNumber: 270,
                    columnNumber: 349
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AboutUs.jsx",
                lineNumber: 270,
                columnNumber: 241
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-black mb-3 text-gray-900 dark:text-white",
                style: {
                    fontFamily: "Space Grotesk, sans-serif"
                },
                children: feature.title
            }, void 0, false, {
                fileName: "[project]/src/components/AboutUs.jsx",
                lineNumber: 270,
                columnNumber: 418
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed",
                children: feature.description
            }, void 0, false, {
                fileName: "[project]/src/components/AboutUs.jsx",
                lineNumber: 272,
                columnNumber: 28
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/components/AboutUs.jsx",
        lineNumber: 270,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AboutUs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_5d5fea7d._.js.map