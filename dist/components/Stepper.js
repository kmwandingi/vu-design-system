import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Check } from 'lucide-react';
import { cn } from '../lib/utils.js';
export function Stepper({ className, items, ...props }) {
    return (_jsx("ol", { className: cn('grid gap-4 md:grid-cols-3', className), ...props, children: items.map((item, index) => {
            const status = item.status ?? 'upcoming';
            const isComplete = status === 'complete';
            const isCurrent = status === 'current';
            return (_jsxs("li", { className: "relative rounded-lg border bg-card p-4", children: [_jsxs("div", { className: "mb-3 flex items-center gap-3", children: [_jsx("div", { className: cn('flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold', isComplete && 'border-vu-green bg-vu-green text-white', isCurrent && 'border-vu-blue bg-vu-blue-50 text-vu-blue', !isComplete && !isCurrent && 'border-border bg-background text-muted-foreground'), children: isComplete ? _jsx(Check, { className: "h-4 w-4" }) : index + 1 }), _jsx("h4", { className: "font-semibold", children: item.title })] }), item.description ? _jsx("p", { className: "text-sm text-muted-foreground", children: item.description }) : null] }, index));
        }) }));
}
//# sourceMappingURL=Stepper.js.map