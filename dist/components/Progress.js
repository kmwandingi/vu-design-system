import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
import { progressStyles } from '@/styles/components';
export function Progress({ className, indicatorClassName, variant, size, value = 0, ...props }) {
    const clampedValue = Math.min(100, Math.max(0, value));
    return (_jsx("div", { className: cn(progressStyles({ variant, size }), className), ...props, children: _jsx("div", { className: cn('h-full w-full origin-left rounded-full transition-transform duration-300 ease-out', indicatorClassName), style: { transform: `scaleX(${clampedValue / 100})` } }) }));
}
//# sourceMappingURL=Progress.js.map