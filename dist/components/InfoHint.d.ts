import type { HTMLAttributes, ReactNode } from 'react';
type InfoHintProps = HTMLAttributes<HTMLSpanElement> & {
    text: ReactNode;
    align?: 'left' | 'center' | 'right';
    icon?: ReactNode;
};
export declare function InfoHint({ className, text, align, icon, ...props }: InfoHintProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=InfoHint.d.ts.map