import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '../lib/utils';
import { buttonVariants } from '../styles/components';
export function Pagination({ className, ...props }) {
    return _jsx("nav", { "aria-label": "pagination", className: cn('mx-auto flex w-full justify-center', className), ...props });
}
export function PaginationContent({ className, ...props }) {
    return _jsx("ul", { className: cn('flex flex-row items-center gap-1', className), ...props });
}
export function PaginationItem(props) {
    return _jsx("li", { ...props });
}
export function PaginationLink({ className, isActive, ...props }) {
    return _jsx("a", { "aria-current": isActive ? 'page' : undefined, className: cn(buttonVariants({ variant: isActive ? 'outline' : 'ghost', size: 'icon' }), className), ...props });
}
export function PaginationPrevious({ className, ...props }) {
    return _jsxs(PaginationLink, { className: cn('gap-1 px-3 w-auto', className), ...props, children: [_jsx(ChevronLeft, { className: "h-4 w-4" }), _jsx("span", { children: "Previous" })] });
}
export function PaginationNext({ className, ...props }) {
    return _jsxs(PaginationLink, { className: cn('gap-1 px-3 w-auto', className), ...props, children: [_jsx("span", { children: "Next" }), _jsx(ChevronRight, { className: "h-4 w-4" })] });
}
export function PaginationEllipsis({ className, ...props }) {
    return _jsx("span", { "aria-hidden": true, className: cn('flex h-9 w-9 items-center justify-center', className), ...props, children: _jsx(MoreHorizontal, { className: "h-4 w-4" }) });
}
//# sourceMappingURL=Pagination.js.map