import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../lib/utils.js';
export function ProgressDots({ className, total, current, ...props }) {
    return (_jsx("div", { className: cn('flex items-center gap-2', className), ...props, children: Array.from({ length: total }).map((_, index) => (_jsx("div", { className: cn('h-2.5 w-2.5 rounded-full transition-colors', index < current ? 'bg-vu-blue' : 'bg-muted-foreground/25') }, index))) }));
}
//# sourceMappingURL=ProgressDots.js.map