import type { ReactNode } from 'react';
export type GuidedTourStep = {
    id: string;
    title: string;
    body: ReactNode;
    points?: ReactNode[];
    target?: string;
    fallbackTarget?: string;
    before?: () => void;
    missingBody?: ReactNode;
};
type GuidedTourProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    steps: GuidedTourStep[];
    startIndex?: number;
    className?: string;
};
export declare function GuidedTour({ open, onOpenChange, steps, startIndex, className }: GuidedTourProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=GuidedTour.d.ts.map