import type { HTMLAttributes, ReactNode } from 'react';
type DataVisualShellProps = HTMLAttributes<HTMLDivElement> & {
    title: ReactNode;
    subtitle?: ReactNode;
    actions?: ReactNode;
    footer?: ReactNode;
};
export declare function DataVisualShell({ className, title, subtitle, actions, footer, children, ...props }: DataVisualShellProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DataVisualShell.d.ts.map