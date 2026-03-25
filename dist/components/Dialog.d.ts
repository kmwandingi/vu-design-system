import { type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode } from 'react';
type DialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: ReactNode;
};
export declare function Dialog({ open, onOpenChange, children }: DialogProps): import("react").ReactPortal | null;
export declare function DialogTrigger({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>): import("react/jsx-runtime").JSX.Element;
export declare function DialogOverlay({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export declare function DialogContent({ className, children, ...props }: HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export declare function DialogHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export declare function DialogFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export declare function DialogTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>): import("react/jsx-runtime").JSX.Element;
export declare function DialogDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>): import("react/jsx-runtime").JSX.Element;
export declare function DialogClose({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Dialog.d.ts.map