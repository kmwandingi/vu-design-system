import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../lib/utils.js';
import { Dialog, DialogOverlay } from '../components/Dialog.js';
export function Sheet({ open, onOpenChange, children }) {
    return _jsx(Dialog, { open: open, onOpenChange: onOpenChange, children: children });
}
export function SheetTrigger(props) {
    return _jsx("button", { type: "button", ...props });
}
export function SheetContent({ className, side = 'right', ...props }) {
    return (_jsxs("div", { className: "fixed inset-0 z-50", children: [_jsx(DialogOverlay, {}), _jsx("div", { className: cn('fixed top-0 h-full w-full max-w-md border bg-background shadow-xl', side === 'right' ? 'right-0 border-l' : 'left-0 border-r', className), ...props })] }));
}
export function SheetHeader({ className, ...props }) {
    return _jsx("div", { className: cn('flex flex-col gap-2 border-b p-5', className), ...props });
}
export function SheetFooter({ className, ...props }) {
    return _jsx("div", { className: cn('mt-auto flex flex-col gap-2 border-t p-5', className), ...props });
}
export function SheetTitle({ className, ...props }) {
    return _jsx("h3", { className: cn('font-semibold', className), ...props });
}
export function SheetDescription({ className, ...props }) {
    return _jsx("p", { className: cn('text-sm text-muted-foreground', className), ...props });
}
//# sourceMappingURL=Sheet.js.map