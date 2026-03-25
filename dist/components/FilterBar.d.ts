import type { HTMLAttributes, ReactNode } from 'react';
type FilterBarProps = HTMLAttributes<HTMLDivElement> & {
    leading?: ReactNode;
    filters?: ReactNode;
    actions?: ReactNode;
};
export declare function FilterBar({ className, leading, filters, actions, ...props }: FilterBarProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FilterBar.d.ts.map