import type { HTMLAttributes } from 'react';
import { type ProgressStyles } from '@/styles/components';
type ProgressProps = HTMLAttributes<HTMLDivElement> & ProgressStyles & {
    value?: number;
    indicatorClassName?: string;
};
export declare function Progress({ className, indicatorClassName, variant, size, value, ...props }: ProgressProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Progress.d.ts.map