import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../lib/utils.js';
import { cardStyles } from '../styles/components.js';
export function Card({ className, variant, padding, tone, accent, ...props }) {
    return _jsx("div", { className: cn(cardStyles({ variant, padding, tone, accent }), className), ...props });
}
//# sourceMappingURL=Card.js.map