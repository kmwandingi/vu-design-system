import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState, useCallback, createContext, useContext } from 'react';
import { ChevronRight, MoreHorizontal, Check, Circle } from 'lucide-react';
import { cn } from '../lib/utils.js';
const DropdownMenuContext = createContext(null);
function useDropdownMenuContext() {
    const context = useContext(DropdownMenuContext);
    if (!context)
        throw new Error('DropdownMenu components must be used within <DropdownMenu>');
    return context;
}
export function DropdownMenu({ children, open: controlledOpen, defaultOpen = false, onOpenChange, modal: _modal }) {
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const itemCountRef = useRef(0);
    const isControlled = controlledOpen !== undefined;
    const currentOpen = isControlled ? controlledOpen : internalOpen;
    const setOpen = useCallback((open) => {
        if (!isControlled)
            setInternalOpen(open);
        onOpenChange?.(open);
        if (!open)
            setHighlightedIndex(-1);
    }, [isControlled, onOpenChange]);
    const registerItem = useCallback(() => {
        const index = itemCountRef.current;
        itemCountRef.current += 1;
        return index;
    }, []);
    return (_jsx(DropdownMenuContext.Provider, { value: {
            open: currentOpen,
            setOpen,
            highlightedIndex,
            setHighlightedIndex,
            itemCount: itemCountRef.current,
            registerItem,
        }, children: _jsx("div", { className: "relative inline-flex", children: children }) }));
}
export function DropdownMenuTrigger({ asChild, children, onClick, ...props }) {
    const { open, setOpen } = useDropdownMenuContext();
    const handleClick = (event) => {
        setOpen(!open);
        onClick?.(event);
    };
    if (asChild && children) {
        return (_jsx("span", { onClick: handleClick, children: children }));
    }
    return (_jsx("button", { type: "button", onClick: handleClick, ...props, children: children }));
}
export function DropdownMenuContent({ className, align = 'end', side = 'bottom', sideOffset = 4, children, ...props }) {
    const { open, setOpen, setHighlightedIndex, itemCount } = useDropdownMenuContext();
    const contentRef = useRef(null);
    useEffect(() => {
        if (!open)
            return;
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowDown':
                    event.preventDefault();
                    setHighlightedIndex(prev => (prev < itemCount - 1 ? prev + 1 : prev));
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    setHighlightedIndex(prev => (prev > 0 ? prev - 1 : prev));
                    break;
                case 'Home':
                    event.preventDefault();
                    setHighlightedIndex(0);
                    break;
                case 'End':
                    event.preventDefault();
                    setHighlightedIndex(itemCount - 1);
                    break;
                case 'Escape':
                    event.preventDefault();
                    setOpen(false);
                    break;
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, itemCount, setHighlightedIndex, setOpen]);
    // Click outside to close
    useEffect(() => {
        if (!open)
            return;
        const handleClick = (event) => {
            if (contentRef.current && !contentRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [open, setOpen]);
    if (!open)
        return null;
    const alignClass = {
        start: 'left-0',
        center: 'left-1/2 -translate-x-1/2',
        end: 'right-0',
    }[align];
    const sideClass = {
        top: `bottom-[calc(100%+${sideOffset}px)]`,
        right: `left-[calc(100%+${sideOffset}px)] top-0`,
        bottom: `top-[calc(100%+${sideOffset}px)]`,
        left: `right-[calc(100%+${sideOffset}px)] top-0`,
    }[side];
    return (_jsx("div", { ref: contentRef, className: cn('absolute z-50 min-w-[12rem] rounded-lg border bg-popover p-1 shadow-lg', alignClass, sideClass, className), ...props, children: children }));
}
export function DropdownMenuItem({ className, inset, disabled, onSelect, children, onClick, ...props }) {
    const { setOpen, highlightedIndex, setHighlightedIndex, registerItem } = useDropdownMenuContext();
    const [itemIndex] = useState(() => registerItem());
    const isHighlighted = highlightedIndex === itemIndex;
    const itemRef = useRef(null);
    useEffect(() => {
        if (isHighlighted && itemRef.current) {
            itemRef.current.focus();
        }
    }, [isHighlighted]);
    const handleClick = (event) => {
        if (disabled)
            return;
        onSelect?.();
        setOpen(false);
        onClick?.(event);
    };
    return (_jsx("div", { ref: itemRef, role: "menuitem", tabIndex: -1, "aria-disabled": disabled, onClick: handleClick, onMouseEnter: () => setHighlightedIndex(itemIndex), className: cn('flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-left text-sm transition-colors', 'focus:bg-muted hover:bg-muted', inset && 'pl-8', disabled && 'pointer-events-none opacity-50', isHighlighted && 'bg-muted', className), ...props, children: children }));
}
export function DropdownMenuCheckboxItem({ className, checked, onCheckedChange, disabled, onSelect, children, onClick, ...props }) {
    const handleClick = (event) => {
        if (disabled)
            return;
        onCheckedChange?.(!checked);
        onSelect?.();
        onClick?.(event);
    };
    return (_jsxs(DropdownMenuItem, { className: cn('pl-8', className), disabled: disabled, onClick: handleClick, ...props, children: [_jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: checked && _jsx(Check, { className: "h-4 w-4" }) }), children] }));
}
export function DropdownMenuRadioGroup({ children }) {
    return (_jsx("div", { role: "group", children: children }));
}
export function DropdownMenuRadioItem({ className, value: _value, disabled, onSelect, children, ...props }) {
    return (_jsxs(DropdownMenuItem, { className: cn('pl-8', className), disabled: disabled, ...props, children: [_jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: _jsx(Circle, { className: "h-2 w-2 fill-current" }) }), children] }));
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
    return (_jsxs("div", { className: cn('flex items-center rounded-md px-2 py-2 text-sm', className), ...props, children: [children, _jsx(ChevronRight, { className: "ml-auto h-4 w-4" })] }));
}
export function DropdownMenuIconTrigger({ className, ...props }) {
    return (_jsx("button", { type: "button", className: cn('inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background hover:bg-muted', className), ...props, children: _jsx(MoreHorizontal, { className: "h-4 w-4" }) }));
}
//# sourceMappingURL=DropdownMenu.js.map