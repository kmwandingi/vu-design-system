import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/styles/components';
export const Button = forwardRef(function Button({ className, variant, size, shape, type = 'button', ...props }, ref) {
    return _jsx("button", { ref: ref, type: type, className: cn(buttonVariants({ variant, size, shape }), className), ...props });
});
//# sourceMappingURL=Button.js.map