import type { HTMLAttributes, ReactNode } from 'react';
type TimelineStatus = 'complete' | 'current' | 'upcoming';
type TimelineItem = {
    title: ReactNode;
    description?: ReactNode;
    meta?: ReactNode;
    status?: TimelineStatus;
};
type TimelineProps = HTMLAttributes<HTMLOListElement> & {
    items: TimelineItem[];
};
export declare function Timeline({ className, items, ...props }: TimelineProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Timeline.d.ts.map