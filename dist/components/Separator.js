import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../lib/utils.js';
import { separatorStyles } from '../styles/components.js';
export function Separator({ className, orientation, variant, ...props }) {
    return _jsx("div", { "aria-hidden": "true", className: cn(separatorStyles({ orientation, variant }), className), ...props });
}
//# sourceMappingURL=Separator.js.map