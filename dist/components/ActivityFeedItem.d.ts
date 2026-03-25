import type { HTMLAttributes, ReactNode } from 'react';
type ActivityFeedItemProps = HTMLAttributes<HTMLDivElement> & {
    icon?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    meta?: ReactNode;
};
export declare function ActivityFeedItem({ className, icon, title, description, meta, ...props }: ActivityFeedItemProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ActivityFeedItem.d.ts.map