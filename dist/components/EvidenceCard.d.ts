import type { HTMLAttributes, ReactNode } from 'react';
import type { CardStyles } from '../styles/components';
type EvidenceCardProps = HTMLAttributes<HTMLDivElement> & {
    title: ReactNode;
    source?: ReactNode;
    summary?: ReactNode;
    relevance?: ReactNode;
} & Pick<CardStyles, 'tone' | 'accent'>;
export declare function EvidenceCard({ className, title, source, summary, relevance, tone, accent, ...props }: EvidenceCardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=EvidenceCard.d.ts.map