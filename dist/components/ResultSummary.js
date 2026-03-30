import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../lib/utils';
import { Card } from '../components/Card';
export function ResultSummary({ className, title, summary, highlights, actions, ...props }) {
    return (_jsxs(Card, { className: cn('space-y-4', className), variant: "elevated", padding: "lg", ...props, children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h3", { className: "text-lg font-semibold", children: title }), _jsx("p", { className: "text-sm text-muted-foreground", children: summary })] }), highlights ? _jsx("div", { className: "rounded-lg bg-muted/60 p-4 text-sm", children: highlights }) : null, actions ? _jsx("div", { className: "flex flex-wrap gap-3", children: actions }) : null] }));
}
//# sourceMappingURL=ResultSummary.js.map