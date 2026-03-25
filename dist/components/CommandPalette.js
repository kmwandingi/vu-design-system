import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/Dialog';
import { Input } from '@/components/Input';
import { cn } from '@/lib/utils';
export function CommandPalette({ open, onOpenChange, items, title = 'Command Palette', description = 'Search for an action', }) {
    const [query, setQuery] = useState('');
    const filtered = useMemo(() => items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())), [items, query]);
    return (_jsx(Dialog, { open: open, onOpenChange: onOpenChange, children: _jsxs("div", { className: "fixed inset-0 z-50", children: [_jsx("div", { className: "fixed inset-0 bg-black/50", onClick: () => onOpenChange(false) }), _jsxs(DialogContent, { className: "overflow-hidden p-0", children: [_jsxs(DialogHeader, { className: "sr-only", children: [_jsx(DialogTitle, { children: title }), _jsx(DialogDescription, { children: description })] }), _jsx("div", { className: "border-b p-3", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), _jsx(Input, { value: query, onChange: (event) => setQuery(event.target.value), className: "pl-9", placeholder: "Type to search..." })] }) }), _jsx("div", { className: "max-h-[320px] overflow-y-auto p-2", children: filtered.length === 0 ? _jsx("div", { className: "py-8 text-center text-sm text-muted-foreground", children: "No results found." }) : filtered.map((item) => (_jsxs("button", { type: "button", className: cn('flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm hover:bg-muted'), children: [item.icon, _jsx("span", { children: item.label }), item.hint ? _jsx("span", { className: "ml-auto text-xs text-muted-foreground", children: item.hint }) : null] }, item.label))) })] })] }) }));
}
//# sourceMappingURL=CommandPalette.js.map