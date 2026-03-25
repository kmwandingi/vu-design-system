import { type HTMLAttributes, type ReactNode } from 'react';
type DropdownMenuProps = {
    trigger: ReactNode;
    children: ReactNode;
};
export declare function DropdownMenu({ trigger, children }: DropdownMenuProps): import("react/jsx-runtime").JSX.Element;
export declare function DropdownMenuContent({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export declare function DropdownMenuItem({ className, inset, children, ...props }: HTMLAttributes<HTMLButtonElement> & {
    inset?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export declare function DropdownMenuLabel({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export declare function DropdownMenuSeparator({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export declare function DropdownMenuShortcut({ className, ...props }: HTMLAttributes<HTMLSpanElement>): import("react/jsx-runtime").JSX.Element;
export declare function DropdownMenuSubTrigger({ className, children, ...props }: HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export declare function DropdownMenuIconTrigger({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DropdownMenu.d.ts.map