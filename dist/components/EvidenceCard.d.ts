import type { HTMLAttributes, ReactNode } from 'react';
type EvidenceCardProps = HTMLAttributes<HTMLDivElement> & {
    title: ReactNode;
    source?: ReactNode;
    summary?: ReactNode;
    relevance?: ReactNode;
};
export declare function EvidenceCard({ className, title, source, summary, relevance, ...props }: EvidenceCardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=EvidenceCard.d.ts.map