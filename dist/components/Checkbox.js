import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback, createContext, useContext, forwardRef } from 'react';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';
const CheckboxContext = createContext(null);
function useCheckboxContext() {
    const context = useContext(CheckboxContext);
    if (!context)
        throw new Error('Checkbox components must be used within <Checkbox>');
    return context;
}
export const Checkbox = forwardRef(function Checkbox({ checked: controlledChecked, defaultChecked = false, onCheckedChange, disabled, name, required, value, className, children, id, ...props }, ref) {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isControlled = controlledChecked !== undefined;
    const currentChecked = isControlled ? controlledChecked : internalChecked;
    const handleCheckedChange = useCallback((newChecked) => {
        if (!isControlled)
            setInternalChecked(newChecked === true);
        onCheckedChange?.(newChecked);
    }, [isControlled, onCheckedChange]);
    const toggle = useCallback(() => {
        if (disabled)
            return;
        const next = currentChecked === true ? false : true;
        handleCheckedChange(next);
    }, [currentChecked, disabled, handleCheckedChange]);
    return (_jsx(CheckboxContext.Provider, { value: {
            checked: currentChecked,
            onCheckedChange: handleCheckedChange,
            disabled,
            name,
            required,
            value,
        }, children: _jsxs("div", { className: cn('flex items-center gap-2', className), ...props, children: [_jsx("input", { ref: ref, type: "checkbox", id: id, checked: currentChecked === true, disabled: disabled, name: name, required: required, value: value, className: "sr-only", onChange: toggle }), children || (_jsx(CheckboxIndicator, { onClick: toggle, className: cn(disabled && 'cursor-not-allowed opacity-50') }))] }) }));
});
export function CheckboxIndicator({ className, onClick }) {
    const { checked, disabled } = useCheckboxContext();
    return (_jsxs("button", { type: "button", role: "checkbox", "aria-checked": checked === 'indeterminate' ? 'mixed' : checked, disabled: disabled, onClick: onClick, className: cn('flex h-4 w-4 shrink-0 items-center justify-center rounded border border-primary bg-background shadow', 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', checked === true && 'bg-primary text-primary-foreground', checked === 'indeterminate' && 'bg-primary text-primary-foreground', disabled && 'cursor-not-allowed opacity-50', className), children: [checked === true && _jsx(Check, { className: "h-3.5 w-3.5" }), checked === 'indeterminate' && (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", className: "h-3.5 w-3.5", children: _jsx("path", { d: "M5 12H19", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round" }) }))] }));
}
export function CheckboxLabel({ children, className, htmlFor }) {
    const { disabled } = useCheckboxContext();
    return (_jsx("label", { htmlFor: htmlFor, className: cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', disabled && 'cursor-not-allowed opacity-70', className), children: children }));
}
//# sourceMappingURL=Checkbox.js.map