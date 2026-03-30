import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../lib/utils';
export function KeyValueList({ className, items, ...props }) {
    return (_jsx("dl", { className: cn('grid gap-3', className), ...props, children: items.map((item, index) => (_jsxs("div", { className: "grid grid-cols-[minmax(0,160px)_1fr] gap-4 rounded-lg border bg-card px-4 py-3", children: [_jsx("dt", { className: "text-sm font-medium text-muted-foreground", children: item.key }), _jsx("dd", { className: "text-sm text-foreground", children: item.value })] }, index))) }));
}
//# sourceMappingURL=KeyValueList.js.map