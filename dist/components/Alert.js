import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
import { alertVariants } from '@/styles/components';
export function Alert({ className, variant, icon, title, description, children, ...props }) {
    return (_jsxs("div", { className: cn(alertVariants({ variant }), className), role: "alert", ...props, children: [icon, _jsxs("div", { children: [title ? _jsx("h5", { className: "font-medium", children: title }) : null, description ? _jsx("p", { className: "text-sm", children: description }) : null, children] })] }));
}
//# sourceMappingURL=Alert.js.map