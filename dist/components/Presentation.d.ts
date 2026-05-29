import { type ReactNode } from 'react';
export interface SlideProps {
    /** Layout archetype */
    variant?: 'title' | 'content' | 'two-col' | 'quote' | 'summary';
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    body?: string;
    /** Max 5 items — less is more */
    bullets?: string[];
    left?: ReactNode;
    right?: ReactNode;
    quote?: string;
    attribution?: string;
    /** Background tone */
    tone?: 'default' | 'subtle' | 'brand';
    className?: string;
}
export declare function Slide({ variant, eyebrow, title, subtitle, body, bullets, left, right, quote, attribution, tone, className, }: SlideProps): import("react/jsx-runtime").JSX.Element;
export interface PresentationProps {
    children: ReactNode;
    className?: string;
}
export declare function Presentation({ children, className }: PresentationProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Presentation.d.ts.map