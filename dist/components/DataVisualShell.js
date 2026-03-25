import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
import { Card } from '@/components/Card';
export function DataVisualShell({ className, title, subtitle, actions, footer, children, ...props }) {
    return (_jsxs(Card, { className: cn('space-y-4', className), variant: "default", padding: "lg", ...props, children: [_jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between", children: [_jsxs("div", { className: "space-y-1", children: [_jsx("h3", { className: "font-semibold", children: title }), subtitle ? _jsx("p", { className: "text-sm text-muted-foreground", children: subtitle }) : null] }), actions ? _jsx("div", { className: "flex flex-wrap items-center gap-2", children: actions }) : null] }), _jsx("div", { className: "rounded-lg border border-dashed bg-muted/30 p-6", children: children }), footer ? _jsx("div", { className: "text-sm text-muted-foreground", children: footer }) : null] }));
}
//# sourceMappingURL=DataVisualShell.js.map