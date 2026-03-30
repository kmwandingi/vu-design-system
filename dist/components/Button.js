import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, cloneElement, isValidElement } from 'react';
import { cn } from '../lib/utils.js';
import { buttonVariants } from '../styles/components.js';
export const Button = forwardRef(function Button({ className, variant, size, shape, type = 'button', asChild, href, ...props }, ref) {
    const classes = cn(buttonVariants({ variant, size, shape }), className);
    if (href) {
        return (_jsx("a", { ref: ref, href: href, className: classes, ...props }));
    }
    if (asChild && isValidElement(props.children)) {
        return cloneElement(props.children, {
            ref,
            className: cn(classes, props.children.props.className),
            ...props,
        });
    }
    return _jsx("button", { ref: ref, type: type, className: classes, ...props });
});
//# sourceMappingURL=Button.js.map