import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../lib/utils';
export function FormField({ className, label, description, error, required, children, ...props }) {
    return (_jsxs("div", { className: cn('grid gap-2', className), ...props, children: [label ? (_jsxs("div", { className: "flex items-center gap-1 text-sm font-medium text-foreground", children: [_jsx("span", { children: label }), required ? _jsx("span", { className: "text-error-600", children: "*" }) : null] })) : null, description ? _jsx("p", { className: "text-sm text-muted-foreground", children: description }) : null, children, error ? _jsx("p", { className: "text-sm text-error-600", children: error }) : null] }));
}
//# sourceMappingURL=FormField.js.map