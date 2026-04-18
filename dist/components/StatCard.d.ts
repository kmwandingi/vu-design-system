import type { HTMLAttributes, ReactNode } from 'react';
import type { CardStyles } from '../styles/components';
type StatCardProps = HTMLAttributes<HTMLDivElement> & {
    label: ReactNode;
    value: ReactNode;
    trend?: ReactNode;
    meta?: ReactNode;
    icon?: ReactNode;
    hint?: ReactNode;
    size?: 'default' | 'compact';
} & Pick<CardStyles, 'tone' | 'accent'>;
export declare function StatCard({ className, label, value, trend, meta, icon, hint, size, tone, accent, ...props }: StatCardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=StatCard.d.ts.map