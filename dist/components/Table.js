import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
export function Table({ className, ...props }) {
    return (_jsx("div", { className: "relative w-full overflow-x-auto rounded-lg border", children: _jsx("table", { className: cn('w-full caption-bottom text-sm', className), ...props }) }));
}
export function TableHeader({ className, ...props }) {
    return _jsx("thead", { className: cn('[&_tr]:border-b bg-muted/40', className), ...props });
}
export function TableBody({ className, ...props }) {
    return _jsx("tbody", { className: cn('[&_tr:last-child]:border-0', className), ...props });
}
export function TableFooter({ className, ...props }) {
    return _jsx("tfoot", { className: cn('border-t bg-muted/40 font-medium', className), ...props });
}
export function TableRow({ className, ...props }) {
    return _jsx("tr", { className: cn('border-b transition-colors hover:bg-muted/30', className), ...props });
}
export function TableHead({ className, ...props }) {
    return _jsx("th", { className: cn('h-11 px-4 text-left align-middle text-sm font-medium text-foreground', className), ...props });
}
export function TableCell({ className, ...props }) {
    return _jsx("td", { className: cn('px-4 py-3 align-middle text-sm', className), ...props });
}
export function TableCaption({ className, ...props }) {
    return _jsx("caption", { className: cn('mt-4 text-sm text-muted-foreground', className), ...props });
}
//# sourceMappingURL=Table.js.map