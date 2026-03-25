import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
import { Card } from '@/components/Card';
export function FilterBar({ className, leading, filters, actions, ...props }) {
    return (_jsx(Card, { className: cn('border-dashed', className), padding: "md", ...props, children: _jsxs("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between", children: [_jsxs("div", { className: "flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center", children: [leading, filters] }), actions ? _jsx("div", { className: "flex shrink-0 flex-wrap items-center gap-2", children: actions }) : null] }) }));
}
//# sourceMappingURL=FilterBar.js.map