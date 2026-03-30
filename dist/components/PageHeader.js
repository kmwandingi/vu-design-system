import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../lib/utils';
export function PageHeader({ className, eyebrow, title, description, actions, ...props }) {
    return (_jsxs("div", { className: cn('flex flex-col gap-4 border-b pb-6 md:flex-row md:items-end md:justify-between', className), ...props, children: [_jsxs("div", { className: "space-y-2", children: [eyebrow ? _jsx("p", { className: "text-sm font-medium text-vu-blue", children: eyebrow }) : null, _jsxs("div", { className: "space-y-1", children: [_jsx("h1", { className: "text-3xl font-bold tracking-tight", children: title }), description ? _jsx("p", { className: "max-w-2xl text-sm text-muted-foreground", children: description }) : null] })] }), actions ? _jsx("div", { className: "flex flex-wrap items-center gap-3", children: actions }) : null] }));
}
//# sourceMappingURL=PageHeader.js.map