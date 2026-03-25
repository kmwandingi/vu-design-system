import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
export function ActivityFeedItem({ className, icon, title, description, meta, ...props }) {
    return (_jsxs("div", { className: cn('flex gap-3 rounded-lg border bg-card p-4', className), ...props, children: [_jsx("div", { className: "mt-0.5 rounded-full bg-muted p-2 text-muted-foreground", children: icon }), _jsxs("div", { className: "min-w-0 flex-1 space-y-1", children: [_jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [_jsx("h4", { className: "text-sm font-semibold", children: title }), meta ? _jsx("span", { className: "text-xs text-muted-foreground", children: meta }) : null] }), description ? _jsx("p", { className: "text-sm text-muted-foreground", children: description }) : null] })] }));
}
//# sourceMappingURL=ActivityFeedItem.js.map