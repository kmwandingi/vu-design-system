import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback, createContext, useContext, forwardRef } from 'react';
import { Circle } from 'lucide-react';
import { cn } from '../lib/utils';
const RadioGroupContext = createContext(null);
function useRadioGroupContext() {
    const context = useContext(RadioGroupContext);
    if (!context)
        throw new Error('Radio components must be used within <RadioGroup>');
    return context;
}
export function RadioGroup({ value: controlledValue, defaultValue, onValueChange, disabled, name, required, children, className, }) {
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : internalValue;
    const handleValueChange = useCallback((newValue) => {
        if (!isControlled)
            setInternalValue(newValue);
        onValueChange?.(newValue);
    }, [isControlled, onValueChange]);
    return (_jsx(RadioGroupContext.Provider, { value: {
            value: currentValue,
            onValueChange: handleValueChange,
            disabled,
            name,
            required,
        }, children: _jsx("div", { role: "radiogroup", className: cn('grid gap-2', className), "aria-disabled": disabled, children: children }) }));
}
export const Radio = forwardRef(function Radio({ value, disabled: itemDisabled, className, children, id, ...props }, ref) {
    const { value: selectedValue, onValueChange, disabled: groupDisabled, name, required } = useRadioGroupContext();
    const isSelected = selectedValue === value;
    const isDisabled = groupDisabled || itemDisabled;
    return (_jsxs("div", { className: cn('flex items-center gap-2', className), children: [_jsx("input", { ref: ref, type: "radio", id: id, name: name, value: value, checked: isSelected, disabled: isDisabled, required: required, className: "sr-only", onChange: () => onValueChange(value), ...props }), _jsx(RadioIndicator, { checked: isSelected, disabled: isDisabled, onClick: () => !isDisabled && onValueChange(value) }), children] }));
});
export function RadioIndicator({ checked, disabled, onClick, className }) {
    return (_jsx("button", { type: "button", role: "radio", "aria-checked": checked, disabled: disabled, onClick: onClick, className: cn('flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-primary bg-background shadow', 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', checked && 'border-primary', disabled && 'cursor-not-allowed opacity-50', className), children: checked && _jsx(Circle, { className: "h-2.5 w-2.5 fill-current text-primary" }) }));
}
export function RadioLabel({ children, className, htmlFor }) {
    const { disabled } = useRadioGroupContext();
    return (_jsx("label", { htmlFor: htmlFor, className: cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', disabled && 'cursor-not-allowed opacity-70', className), children: children }));
}
//# sourceMappingURL=RadioGroup.js.map