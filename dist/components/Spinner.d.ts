import type { HTMLAttributes, ReactNode } from 'react';
import { type SpinnerStyles } from '../styles/components';
type SpinnerProps = HTMLAttributes<HTMLDivElement> & SpinnerStyles & {
    label?: ReactNode;
};
export declare function Spinner({ className, size, variant, label, ...props }: SpinnerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Spinner.d.ts.map