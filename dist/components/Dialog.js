import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cn } from '../lib/utils';
import { useFocusTrap, useScrollLock } from '../hooks/useDialog';
export function Dialog({ open, onOpenChange, children }) {
    const containerRef = useRef(null);
    useFocusTrap(open, containerRef);
    useScrollLock(open);
    useEffect(() => {
        if (!open)
            return;
        const onKeyDown = (event) => {
            if (event.key === 'Escape')
                onOpenChange(false);
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [open, onOpenChange]);
    return open ? createPortal(_jsx("div", { ref: containerRef, className: "fixed inset-0 z-50", children: children }), document.body) : null;
}
export function DialogTrigger({ ...props }) {
    return _jsx("button", { type: "button", ...props });
}
export function DialogOverlay({ className, ...props }) {
    return _jsx("div", { className: cn('fixed inset-0 bg-black/50 backdrop-blur-sm', className), ...props });
}
export function DialogContent({ className, children, ...props }) {
    const contentRef = useRef(null);
    // Find the Dialog's onOpenChange from context - we'll use a data attribute approach
    // or the parent can handle click outside via DialogOverlay
    return (_jsx("div", { ref: contentRef, className: cn('fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl border bg-background p-6 shadow-lg', className), ...props, children: children }));
}
export function DialogHeader({ className, ...props }) {
    return _jsx("div", { className: cn('flex flex-col gap-2 text-left', className), ...props });
}
export function DialogFooter({ className, ...props }) {
    return _jsx("div", { className: cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className), ...props });
}
export function DialogTitle({ className, ...props }) {
    return _jsx("h3", { className: cn('text-lg font-semibold', className), ...props });
}
export function DialogDescription({ className, ...props }) {
    return _jsx("p", { className: cn('text-sm text-muted-foreground', className), ...props });
}
export function DialogClose({ className, children, ...props }) {
    return (_jsx("button", { type: "button", className: cn('inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground', className), ...props, children: children ?? _jsx(X, { className: "h-4 w-4" }) }));
}
//# sourceMappingURL=Dialog.js.map