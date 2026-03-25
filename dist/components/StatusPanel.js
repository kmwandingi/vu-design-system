import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
import { Alert } from '@/components/Alert';
import { Progress } from '@/components/Progress';
export function StatusPanel({ className, title, description, progress, variant = 'info', icon, meta, ...props }) {
    return (_jsxs(Alert, { className: cn('space-y-4', className), variant: variant, icon: icon, title: title, description: description, ...props, children: [typeof progress === 'number' ? _jsx(Progress, { value: progress, variant: variant === 'primary' ? 'primary' : variant === 'success' ? 'success' : variant === 'warning' ? 'warning' : variant === 'error' ? 'error' : 'info' }) : null, meta ? _jsx("div", { className: "text-xs text-muted-foreground", children: meta }) : null] }));
}
//# sourceMappingURL=StatusPanel.js.map