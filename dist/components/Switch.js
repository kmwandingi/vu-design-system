import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState, useCallback } from 'react';
import { cn } from '../lib/utils';
export const Switch = forwardRef(function Switch({ checked: controlledChecked, defaultChecked = false, onCheckedChange, disabled, name, required, value = 'on', className, ...props }, ref) {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isControlled = controlledChecked !== undefined;
    const currentChecked = isControlled ? controlledChecked : internalChecked;
    const handleToggle = useCallback(() => {
        if (disabled)
            return;
        const next = !currentChecked;
        if (!isControlled)
            setInternalChecked(next);
        onCheckedChange?.(next);
    }, [currentChecked, disabled, isControlled, onCheckedChange]);
    return (_jsxs("button", { type: "button", role: "switch", "aria-checked": currentChecked, disabled: disabled, onClick: handleToggle, className: cn('peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors', 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', currentChecked ? 'bg-primary' : 'bg-input', disabled && 'cursor-not-allowed opacity-50', className), children: [_jsx("input", { ref: ref, type: "checkbox", role: "switch", checked: currentChecked, disabled: disabled, name: name, required: required, value: value, className: "sr-only", onChange: handleToggle, ...props }), _jsx("span", { className: cn('pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform', currentChecked ? 'translate-x-5' : 'translate-x-0') })] }));
});
//# sourceMappingURL=Switch.js.map