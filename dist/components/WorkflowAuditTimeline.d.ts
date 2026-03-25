import type { HTMLAttributes, ReactNode } from 'react';
type WorkflowAuditItem = {
    title: ReactNode;
    description?: ReactNode;
    meta?: ReactNode;
    status?: 'complete' | 'current' | 'upcoming';
};
type WorkflowAuditTimelineProps = HTMLAttributes<HTMLOListElement> & {
    items: WorkflowAuditItem[];
};
export declare function WorkflowAuditTimeline({ items, ...props }: WorkflowAuditTimelineProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=WorkflowAuditTimeline.d.ts.map