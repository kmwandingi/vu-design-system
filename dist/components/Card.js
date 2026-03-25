import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
import { cardStyles } from '@/styles/components';
export function Card({ className, variant, padding, ...props }) {
    return _jsx("div", { className: cn(cardStyles({ variant, padding }), className), ...props });
}
//# sourceMappingURL=Card.js.map