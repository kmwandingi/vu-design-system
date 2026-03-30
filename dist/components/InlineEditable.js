import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Check, Pencil, X } from 'lucide-react';
import { cn } from '../lib/utils.js';
import { buttonVariants } from '../styles/components.js';
import { Input } from '../components/Input.js';
export function InlineEditable({ className, value, onSave, placeholder = 'Enter value', ...props }) {
    const [editing, setEditing] = useState(false);
    const [draft, setDraft] = useState(value);
    return (_jsxs("div", { className: cn('flex items-center gap-2 rounded-lg border bg-card p-3', className), ...props, children: [editing ? (_jsx(Input, { value: draft, onChange: (event) => setDraft(event.target.value), placeholder: placeholder, className: "flex-1" })) : (_jsx("div", { className: "flex-1 text-sm", children: draft || placeholder })), editing ? (_jsxs(_Fragment, { children: [_jsx("button", { type: "button", className: buttonVariants({ variant: 'tertiary', size: 'icon-sm' }), onClick: () => { setEditing(false); onSave?.(draft); }, children: _jsx(Check, { className: "h-4 w-4" }) }), _jsx("button", { type: "button", className: buttonVariants({ variant: 'outline', size: 'icon-sm' }), onClick: () => { setDraft(value); setEditing(false); }, children: _jsx(X, { className: "h-4 w-4" }) })] })) : (_jsx("button", { type: "button", className: buttonVariants({ variant: 'outline', size: 'icon-sm' }), onClick: () => setEditing(true), children: _jsx(Pencil, { className: "h-4 w-4" }) }))] }));
}
//# sourceMappingURL=InlineEditable.js.map