import { type InputHTMLAttributes, type ReactNode } from 'react';
type RadioGroupProps = {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
    name?: string;
    required?: boolean;
    children: ReactNode;
    className?: string;
};
export declare function RadioGroup({ value: controlledValue, defaultValue, onValueChange, disabled, name, required, children, className, }: RadioGroupProps): import("react/jsx-runtime").JSX.Element;
export declare const Radio: import("react").ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "onChange" | "checked"> & {
    value: string;
    id?: string;
    children?: ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
type RadioIndicatorProps = {
    checked: boolean;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
};
export declare function RadioIndicator({ checked, disabled, onClick, className }: RadioIndicatorProps): import("react/jsx-runtime").JSX.Element;
type RadioLabelProps = {
    children: ReactNode;
    className?: string;
    htmlFor?: string;
};
export declare function RadioLabel({ children, className, htmlFor }: RadioLabelProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RadioGroup.d.ts.map