import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../lib/utils.js';
export function SectionHeader({ className, title, description, actions, ...props }) {
    return (_jsxs("div", { className: cn('flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between', className), ...props, children: [_jsxs("div", { className: "space-y-1", children: [_jsx("h3", { className: "text-lg font-semibold", children: title }), description ? _jsx("p", { className: "text-sm text-muted-foreground", children: description }) : null] }), actions ? _jsx("div", { className: "flex shrink-0 flex-wrap items-center gap-2", children: actions }) : null] }));
}
//# sourceMappingURL=SectionHeader.js.map