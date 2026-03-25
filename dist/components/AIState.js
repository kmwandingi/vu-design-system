import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/Card';
import { Progress } from '@/components/Progress';
export function AIState({ className, title, description, status, progress, ...props }) {
    return (_jsx(Card, { className: cn('border-vu-purple/20 bg-vu-purple-50/50', className), padding: "lg", ...props, children: _jsxs("div", { className: "flex items-start gap-3", children: [_jsx("div", { className: "rounded-full bg-vu-purple/10 p-2 text-vu-purple", children: _jsx(Bot, { className: "h-4 w-4" }) }), _jsxs("div", { className: "min-w-0 flex-1 space-y-3", children: [_jsxs("div", { className: "space-y-1", children: [_jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [_jsx("h4", { className: "font-semibold text-vu-purple-900", children: title }), status ? _jsx("span", { className: "text-xs text-vu-purple-700", children: status }) : null] }), description ? _jsx("p", { className: "text-sm text-vu-purple-800/80", children: description }) : null] }), typeof progress === 'number' ? _jsx(Progress, { value: progress, variant: "secondary" }) : null] })] }) }));
}
//# sourceMappingURL=AIState.js.map