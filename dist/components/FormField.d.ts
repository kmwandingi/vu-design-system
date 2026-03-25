import type { HTMLAttributes, ReactNode } from 'react';
type FormFieldProps = HTMLAttributes<HTMLDivElement> & {
    label?: ReactNode;
    description?: ReactNode;
    error?: ReactNode;
    required?: boolean;
};
export declare function FormField({ className, label, description, error, required, children, ...props }: FormFieldProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FormField.d.ts.map