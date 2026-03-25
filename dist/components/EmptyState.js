import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SearchX } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/Card';
export function EmptyState({ className, icon, title, description, actions, ...props }) {
    return (_jsx(Card, { className: cn('border-dashed text-center', className), padding: "lg", ...props, children: _jsxs("div", { className: "flex flex-col items-center gap-4 py-4", children: [_jsx("div", { className: "rounded-full bg-muted p-3 text-muted-foreground", children: icon ?? _jsx(SearchX, { className: "h-5 w-5" }) }), _jsxs("div", { className: "space-y-1", children: [_jsx("h3", { className: "text-base font-semibold", children: title }), description ? _jsx("p", { className: "max-w-md text-sm text-muted-foreground", children: description }) : null] }), actions ? _jsx("div", { className: "flex flex-wrap items-center justify-center gap-3", children: actions }) : null] }) }));
}
//# sourceMappingURL=EmptyState.js.map