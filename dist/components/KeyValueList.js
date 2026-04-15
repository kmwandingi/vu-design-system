import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../lib/utils.js';
export function KeyValueList({ className, items, size = 'default', keyWidthClassName = 'minmax(0,160px)', ...props }) {
    return (_jsx("dl", { className: cn('grid gap-3', className), ...props, children: items.map((item, index) => (_jsxs("div", { className: cn('grid rounded-lg border bg-card', size === 'compact' ? 'gap-3 px-3 py-2.5' : 'gap-4 px-4 py-3'), style: { gridTemplateColumns: `${keyWidthClassName} 1fr` }, children: [_jsx("dt", { className: cn(size === 'compact' ? 'text-xs font-medium text-muted-foreground' : 'text-sm font-medium text-muted-foreground'), children: item.key }), _jsx("dd", { className: cn(size === 'compact' ? 'text-xs text-foreground' : 'text-sm text-foreground'), children: item.value })] }, index))) }));
}
//# sourceMappingURL=KeyValueList.js.map