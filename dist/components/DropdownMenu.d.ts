import { type HTMLAttributes, type ReactNode, type ButtonHTMLAttributes } from 'react';
type DropdownMenuProps = {
    children: ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    modal?: boolean;
};
export declare function DropdownMenu({ children, open: controlledOpen, defaultOpen, onOpenChange, modal: _modal }: DropdownMenuProps): import("react/jsx-runtime").JSX.Element;
type DropdownMenuTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
};
export declare function DropdownMenuTrigger({ asChild, children, onClick, ...props }: DropdownMenuTriggerProps): import("react/jsx-runtime").JSX.Element;
type DropdownMenuContentProps = HTMLAttributes<HTMLDivElement> & {
    align?: 'start' | 'center' | 'end';
    side?: 'top' | 'right' | 'bottom' | 'left';
    sideOffset?: number;
};
export declare function DropdownMenuContent({ className, align, side, sideOffset, children, ...props }: DropdownMenuContentProps): import("react/jsx-runtime").JSX.Element | null;
type DropdownMenuItemProps = HTMLAttributes<HTMLDivElement> & {
    inset?: boolean;
    disabled?: boolean;
    onSelect?: () => void;
};
export declare function DropdownMenuItem({ className, inset, disabled, onSelect, children, onClick, ...props }: DropdownMenuItemProps): import("react/jsx-runtime").JSX.Element;
type DropdownMenuCheckboxItemProps = HTMLAttributes<HTMLDivElement> & {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
    onSelect?: () => void;
};
export declare function DropdownMenuCheckboxItem({ className, checked, onCheckedChange, disabled, onSelect, children, onClick, ...props }: DropdownMenuCheckboxItemProps): import("react/jsx-runtime").JSX.Element;
type DropdownMenuRadioGroupProps = {
    children: ReactNode;
    value?: string;
    onValueChange?: (value: string) => void;
};
export declare function DropdownMenuRadioGroup({ children }: DropdownMenuRadioGroupProps): import("react/jsx-runtime").JSX.Element;
type DropdownMenuRadioItemProps = HTMLAttributes<HTMLDivElement> & {
    value: string;
    disabled?: boolean;
    onSelect?: () => void;
};
export declare function DropdownMenuRadioItem({ className, value: _value, disabled, onSelect, children, ...props }: DropdownMenuRadioItemProps): import("react/jsx-runtime").JSX.Element;
export declare function DropdownMenuLabel({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export declare function DropdownMenuSeparator({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export declare function DropdownMenuShortcut({ className, ...props }: HTMLAttributes<HTMLSpanElement>): import("react/jsx-runtime").JSX.Element;
export declare function DropdownMenuSubTrigger({ className, children, ...props }: HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export declare function DropdownMenuIconTrigger({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DropdownMenu.d.ts.map