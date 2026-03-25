import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/Card';
import { Progress } from '@/components/Progress';
import { Spinner } from '@/components/Spinner';
export function LoadingState({ className, title, description, progress, ...props }) {
    return (_jsx(Card, { className: cn('border-vu-blue/20 bg-vu-blue-50/80', className), padding: "lg", ...props, children: _jsxs("div", { className: "flex items-start gap-3", children: [_jsx("div", { className: "mt-0.5 rounded-full bg-vu-blue/10 p-2", children: _jsx(Sparkles, { className: "h-4 w-4 text-vu-blue" }) }), _jsxs("div", { className: "min-w-0 flex-1 space-y-3", children: [_jsxs("div", { className: "space-y-1", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Spinner, { size: "sm", variant: "primary" }), _jsx("p", { className: "text-sm font-medium text-vu-blue-800", children: title })] }), description ? _jsx("p", { className: "text-sm text-vu-blue-700/80", children: description }) : null] }), typeof progress === 'number' ? _jsx(Progress, { value: progress, variant: "primary", size: "md" }) : null] })] }) }));
}
//# sourceMappingURL=LoadingState.js.map