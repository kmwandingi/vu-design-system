import { type HTMLAttributes, type ReactNode } from 'react';
type SelectProps = {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
    name?: string;
    required?: boolean;
    children: ReactNode;
};
export declare function Select({ value: controlledValue, defaultValue, onValueChange, open: controlledOpen, defaultOpen, onOpenChange, name, required, children, }: SelectProps): import("react/jsx-runtime").JSX.Element;
export declare const SelectTrigger: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode;
} & import("react").RefAttributes<HTMLButtonElement>>;
type SelectValueProps = HTMLAttributes<HTMLSpanElement> & {
    placeholder?: string;
};
export declare function SelectValue({ className, placeholder, ...props }: SelectValueProps): import("react/jsx-runtime").JSX.Element;
type SelectContentProps = HTMLAttributes<HTMLDivElement>;
export declare function SelectContent({ className, children, ...props }: SelectContentProps): import("react/jsx-runtime").JSX.Element | null;
type SelectItemProps = HTMLAttributes<HTMLDivElement> & {
    value: string;
    children: ReactNode;
    disabled?: boolean;
};
export declare function SelectItem({ className, value, children, disabled, ...props }: SelectItemProps): import("react/jsx-runtime").JSX.Element;
type SelectGroupProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
};
export declare function SelectGroup({ children, ...props }: SelectGroupProps): import("react/jsx-runtime").JSX.Element;
type SelectLabelProps = HTMLAttributes<HTMLDivElement>;
export declare function SelectLabel({ className, ...props }: SelectLabelProps): import("react/jsx-runtime").JSX.Element;
type SelectSeparatorProps = HTMLAttributes<HTMLDivElement>;
export declare function SelectSeparator({ className, ...props }: SelectSeparatorProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Select.d.ts.map