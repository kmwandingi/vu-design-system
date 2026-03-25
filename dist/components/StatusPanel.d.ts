import type { HTMLAttributes, ReactNode } from 'react';
type StatusPanelProps = HTMLAttributes<HTMLDivElement> & {
    title: ReactNode;
    description?: ReactNode;
    progress?: number;
    variant?: 'primary' | 'success' | 'warning' | 'error' | 'info';
    icon?: ReactNode;
    meta?: ReactNode;
};
export declare function StatusPanel({ className, title, description, progress, variant, icon, meta, ...props }: StatusPanelProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=StatusPanel.d.ts.map