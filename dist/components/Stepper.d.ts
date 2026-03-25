import type { HTMLAttributes, ReactNode } from 'react';
type StepStatus = 'complete' | 'current' | 'upcoming';
type StepperItem = {
    title: ReactNode;
    description?: ReactNode;
    status?: StepStatus;
};
type StepperProps = HTMLAttributes<HTMLOListElement> & {
    items: StepperItem[];
};
export declare function Stepper({ className, items, ...props }: StepperProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Stepper.d.ts.map