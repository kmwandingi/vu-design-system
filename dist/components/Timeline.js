import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckCircle2, Circle } from 'lucide-react';
import { cn } from '../lib/utils.js';
const statusStyles = {
    complete: {
        dot: 'border-vu-green bg-vu-green text-white',
        line: 'bg-vu-green/30',
        text: 'text-vu-green-900',
    },
    current: {
        dot: 'border-vu-blue bg-vu-blue-50 text-vu-blue',
        line: 'bg-vu-blue/20',
        text: 'text-vu-blue-900',
    },
    upcoming: {
        dot: 'border-border bg-background text-muted-foreground',
        line: 'bg-border',
        text: 'text-foreground',
    },
};
export function Timeline({ className, items, ...props }) {
    return (_jsx("ol", { className: cn('space-y-0', className), ...props, children: items.map((item, index) => {
            const status = item.status ?? 'upcoming';
            const styles = statusStyles[status];
            const isLast = index === items.length - 1;
            return (_jsxs("li", { className: "grid grid-cols-[2rem_1fr] gap-4 pb-5 last:pb-0", children: [_jsxs("div", { className: "flex flex-col items-center", children: [_jsx("div", { className: cn('flex h-8 w-8 items-center justify-center rounded-full border-2', styles.dot), children: status === 'complete' ? _jsx(CheckCircle2, { className: "h-4 w-4" }) : _jsx(Circle, { className: "h-3.5 w-3.5" }) }), !isLast ? _jsx("div", { className: cn('mt-2 w-px flex-1', styles.line) }) : null] }), _jsxs("div", { className: "space-y-1 pt-1", children: [_jsxs("div", { className: "flex flex-wrap items-center gap-x-3 gap-y-1", children: [_jsx("h4", { className: cn('text-sm font-semibold', styles.text), children: item.title }), item.meta ? _jsx("span", { className: "text-xs text-muted-foreground", children: item.meta }) : null] }), item.description ? _jsx("p", { className: "text-sm text-muted-foreground", children: item.description }) : null] })] }, index));
        }) }));
}
//# sourceMappingURL=Timeline.js.map