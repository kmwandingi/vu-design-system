import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/Card';
export function EvidenceCard({ className, title, source, summary, relevance, ...props }) {
    return (_jsxs(Card, { className: cn('space-y-3', className), variant: "default", padding: "md", ...props, children: [_jsxs("div", { className: "flex items-start gap-3", children: [_jsx("div", { className: "rounded-lg bg-muted p-2 text-muted-foreground", children: _jsx(Link2, { className: "h-4 w-4" }) }), _jsxs("div", { className: "space-y-1", children: [_jsx("h4", { className: "font-semibold", children: title }), source ? _jsx("p", { className: "text-xs text-muted-foreground", children: source }) : null] })] }), summary ? _jsx("p", { className: "text-sm text-muted-foreground", children: summary }) : null, relevance ? _jsx("div", { className: "text-xs text-vu-blue-700", children: relevance }) : null] }));
}
//# sourceMappingURL=EvidenceCard.js.map