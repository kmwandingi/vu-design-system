import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../lib/utils.js';
import { skeletonStyles } from '../styles/components.js';
export function Skeleton({ className, variant, ...props }) {
    return _jsx("div", { className: cn(skeletonStyles({ variant }), className), ...props });
}
//# sourceMappingURL=Skeleton.js.map