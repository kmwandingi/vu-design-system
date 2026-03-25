import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
export function DropdownMenu({ trigger, children }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const onClick = (event) => {
            if (ref.current && !ref.current.contains(event.target))
                setOpen(false);
        };
        document.addEventListener('mousedown', onClick);
        return () => document.removeEventListener('mousedown', onClick);
    }, []);
    return (_jsxs("div", { ref: ref, className: "relative inline-flex", children: [_jsx("button", { type: "button", onClick: () => setOpen((value) => !value), children: trigger }), open ? _jsx("div", { className: "absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-[12rem] rounded-lg border bg-popover p-1 shadow-lg", children: children }) : null] }));
}
export function DropdownMenuContent({ className, ...props }) {
    return _jsx("div", { className: cn('grid gap-1', className), ...props });
}
export function DropdownMenuItem({ className, inset, children, ...props }) {
    return _jsx("button", { type: "button", className: cn('flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm transition-colors hover:bg-muted', inset && 'pl-8', className), ...props, children: children });
}
export function DropdownMenuLabel({ className, ...props }) {
    return _jsx("div", { className: cn('px-2 py-1.5 text-sm font-medium', className), ...props });
}
export function DropdownMenuSeparator({ className, ...props }) {
    return _jsx("div", { className: cn('my-1 h-px bg-border', className), ...props });
}
export function DropdownMenuShortcut({ className, ...props }) {
    return _jsx("span", { className: cn('ml-auto text-xs tracking-widest text-muted-foreground', className), ...props });
}
export function DropdownMenuSubTrigger({ className, children, ...props }) {
    return _jsxs("div", { className: cn('flex items-center rounded-md px-2 py-2 text-sm', className), ...props, children: [children, _jsx(ChevronRight, { className: "ml-auto h-4 w-4" })] });
}
export function DropdownMenuIconTrigger({ className, ...props }) {
    return _jsx("button", { type: "button", className: cn('inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background hover:bg-muted', className), ...props, children: _jsx(MoreHorizontal, { className: "h-4 w-4" }) });
}
//# sourceMappingURL=DropdownMenu.js.map