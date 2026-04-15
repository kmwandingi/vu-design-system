import type { HTMLAttributes, ReactNode } from 'react';
type SectionHeaderProps = HTMLAttributes<HTMLDivElement> & {
    title: ReactNode;
    eyebrow?: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
    size?: 'default' | 'compact';
};
export declare function SectionHeader({ className, title, eyebrow, description, actions, size, ...props }: SectionHeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SectionHeader.d.ts.map