import { type InputHTMLAttributes, type ReactNode } from 'react';
export declare const Checkbox: import("react").ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "onChange" | "checked"> & {
    checked?: boolean | "indeterminate";
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean | "indeterminate") => void;
    value?: string;
} & import("react").RefAttributes<HTMLInputElement>>;
type CheckboxIndicatorProps = {
    className?: string;
    onClick?: () => void;
};
export declare function CheckboxIndicator({ className, onClick }: CheckboxIndicatorProps): import("react/jsx-runtime").JSX.Element;
type CheckboxLabelProps = {
    children: ReactNode;
    className?: string;
    htmlFor?: string;
};
export declare function CheckboxLabel({ children, className, htmlFor }: CheckboxLabelProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Checkbox.d.ts.map