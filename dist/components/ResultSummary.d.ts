import type { HTMLAttributes, ReactNode } from 'react';
type ResultSummaryProps = HTMLAttributes<HTMLDivElement> & {
    title: ReactNode;
    summary: ReactNode;
    highlights?: ReactNode;
    actions?: ReactNode;
};
export declare function ResultSummary({ className, title, summary, highlights, actions, ...props }: ResultSummaryProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ResultSummary.d.ts.map