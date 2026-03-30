import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../lib/utils';
import { badgeVariants } from '../styles/components';
export function Badge({ className, variant, ...props }) {
    return _jsx("span", { className: cn(badgeVariants({ variant }), className), ...props });
}
//# sourceMappingURL=Badge.js.map