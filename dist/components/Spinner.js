import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { spinnerStyles } from '../styles/components';
export function Spinner({ className, size, variant, label, ...props }) {
    return (_jsxs("div", { className: cn('inline-flex items-center gap-2', className), ...props, children: [_jsx(Loader2, { className: spinnerStyles({ size, variant }) }), label ? _jsx("span", { className: "text-sm text-muted-foreground", children: label }) : null] }));
}
//# sourceMappingURL=Spinner.js.map