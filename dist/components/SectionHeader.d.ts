import type { HTMLAttributes, ReactNode } from 'react';
type SectionHeaderProps = HTMLAttributes<HTMLDivElement> & {
    title: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
};
export declare function SectionHeader({ className, title, description, actions, ...props }: SectionHeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SectionHeader.d.ts.map