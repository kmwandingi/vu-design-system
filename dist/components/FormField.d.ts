import type { HTMLAttributes, ReactNode } from 'react';
type FormFieldProps = HTMLAttributes<HTMLDivElement> & {
    label?: ReactNode;
    description?: ReactNode;
    error?: ReactNode;
    required?: boolean;
    labelSuffix?: ReactNode;
    orientation?: 'stacked' | 'inline';
};
export declare function FormField({ className, label, description, error, required, labelSuffix, orientation, children, ...props }: FormFieldProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FormField.d.ts.map