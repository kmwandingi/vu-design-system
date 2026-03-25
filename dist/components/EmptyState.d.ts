import type { HTMLAttributes, ReactNode } from 'react';
type EmptyStateProps = HTMLAttributes<HTMLDivElement> & {
    icon?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
};
export declare function EmptyState({ className, icon, title, description, actions, ...props }: EmptyStateProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=EmptyState.d.ts.map