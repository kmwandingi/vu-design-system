import type { HTMLAttributes, ReactNode } from 'react';
type ResultSummaryProps = HTMLAttributes<HTMLDivElement> & {
    title: ReactNode;
    eyebrow?: ReactNode;
    summary: ReactNode;
    highlights?: ReactNode;
    actions?: ReactNode;
    meta?: ReactNode;
    tone?: 'default' | 'info' | 'success' | 'warning';
};
export declare function ResultSummary({ className, title, eyebrow, summary, highlights, actions, meta, tone, ...props }: ResultSummaryProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ResultSummary.d.ts.map