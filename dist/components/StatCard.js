import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../lib/utils';
import { Card } from '../components/Card';
export function StatCard({ className, label, value, trend, meta, icon, ...props }) {
    return (_jsxs(Card, { className: cn('min-h-[148px]', className), variant: "elevated", padding: "lg", ...props, children: [_jsxs("div", { className: "flex items-start justify-between gap-4", children: [_jsxs("div", { className: "space-y-3", children: [_jsx("p", { className: "text-sm font-medium text-muted-foreground", children: label }), _jsxs("div", { className: "space-y-1", children: [_jsx("p", { className: "text-3xl font-bold tracking-tight", children: value }), trend ? _jsx("p", { className: "text-sm text-vu-green-700", children: trend }) : null] })] }), icon ? _jsx("div", { className: "rounded-lg bg-muted p-2 text-muted-foreground", children: icon }) : null] }), meta ? _jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: meta }) : null] }));
}
//# sourceMappingURL=StatCard.js.map