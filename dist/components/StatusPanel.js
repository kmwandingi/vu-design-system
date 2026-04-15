import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../lib/utils.js';
import { Alert } from '../components/Alert.js';
import { Progress } from '../components/Progress.js';
export function StatusPanel({ className, title, description, progress, variant = 'info', icon, meta, ...props }) {
    const progressVariant = variant === 'primary'
        ? 'primary'
        : variant === 'success'
            ? 'success'
            : variant === 'warning'
                ? 'warning'
                : variant === 'error'
                    ? 'error'
                    : 'info';
    return (_jsx(Alert, { className: cn(className), variant: variant, icon: icon, title: title, description: description, ...props, children: (typeof progress === 'number' || meta) ? (_jsxs("div", { className: "mt-4 space-y-2.5", children: [typeof progress === 'number' ? _jsx(Progress, { value: progress, variant: progressVariant, size: "md" }) : null, meta ? _jsx("div", { className: "text-xs leading-none text-muted-foreground", children: meta }) : null] })) : null }));
}
//# sourceMappingURL=StatusPanel.js.map