import type { HTMLAttributes, ReactNode } from 'react';
type PageHeaderProps = HTMLAttributes<HTMLDivElement> & {
    eyebrow?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
};
export declare function PageHeader({ className, eyebrow, title, description, actions, ...props }: PageHeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PageHeader.d.ts.map