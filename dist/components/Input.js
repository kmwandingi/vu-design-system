import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '../lib/utils.js';
import { inputStyles } from '../styles/components.js';
export const Input = forwardRef(function Input({ className, variant, size, state, ...props }, ref) {
    return _jsx("input", { ref: ref, className: cn(inputStyles({ variant, size, state }), className), ...props });
});
export const Textarea = forwardRef(function Textarea({ className, variant, state, ...props }, ref) {
    return (_jsx("textarea", { ref: ref, className: cn(inputStyles({ variant, size: 'md', state }), 'min-h-[120px] resize-y py-3', className), ...props }));
});
//# sourceMappingURL=Input.js.map