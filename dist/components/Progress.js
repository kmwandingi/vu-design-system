import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { cn } from '../lib/utils.js';
import { progressStyles } from '../styles/components.js';
export function Progress({ className, indicatorClassName, variant, size, value = 0, ...props }) {
    const clampedValue = Math.min(100, Math.max(0, value));
    const [displayValue, setDisplayValue] = useState(0);
    useEffect(() => {
        const frame = window.requestAnimationFrame(() => {
            setDisplayValue(clampedValue);
        });
        return () => window.cancelAnimationFrame(frame);
    }, [clampedValue]);
    return (_jsx("div", { className: cn(progressStyles({ variant, size }), className), "aria-valuemax": 100, "aria-valuemin": 0, "aria-valuenow": clampedValue, role: "progressbar", ...props, children: _jsx("div", { className: cn('h-full w-full origin-left rounded-full transition-transform duration-700 ease-out', indicatorClassName), style: { transform: `scaleX(${displayValue / 100})` } }) }));
}
//# sourceMappingURL=Progress.js.map