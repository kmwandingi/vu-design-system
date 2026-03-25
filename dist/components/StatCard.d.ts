import type { HTMLAttributes, ReactNode } from 'react';
type StatCardProps = HTMLAttributes<HTMLDivElement> & {
    label: ReactNode;
    value: ReactNode;
    trend?: ReactNode;
    meta?: ReactNode;
    icon?: ReactNode;
};
export declare function StatCard({ className, label, value, trend, meta, icon, ...props }: StatCardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=StatCard.d.ts.map