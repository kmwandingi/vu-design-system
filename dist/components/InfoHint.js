import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Info } from 'lucide-react';
import { cn } from '../lib/utils.js';
export function InfoHint({ className, text, align = 'center', icon, ...props }) {
    const alignment = {
        left: 'left-0',
        center: 'left-1/2 -translate-x-1/2',
        right: 'right-0',
    };
    return (_jsxs("span", { className: cn('group relative inline-flex items-center', className), ...props, children: [_jsx("span", { className: "inline-flex h-4 w-4 items-center justify-center rounded-full text-muted-foreground/70 transition-colors duration-150 hover:text-foreground focus:text-foreground", tabIndex: 0, "aria-label": typeof text === 'string' ? text : 'More information', children: icon ?? _jsx(Info, { className: "h-3.5 w-3.5" }) }), _jsx("span", { role: "tooltip", className: cn('pointer-events-none absolute top-[calc(100%+0.5rem)] z-20 w-56 rounded-md border border-border/70 bg-popover px-3 py-2 text-left text-[11px] font-normal leading-5 text-popover-foreground opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100', alignment[align]), children: text })] }));
}
//# sourceMappingURL=InfoHint.js.map