import type { HTMLAttributes, ReactNode } from 'react';
type SheetProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: ReactNode;
};
type SheetContentProps = HTMLAttributes<HTMLDivElement> & {
    side?: 'left' | 'right';
};
export declare function Sheet({ open, onOpenChange, children }: SheetProps): import("react/jsx-runtime").JSX.Element;
export declare function SheetTrigger(props: React.ButtonHTMLAttributes<HTMLButtonElement>): import("react/jsx-runtime").JSX.Element;
export declare function SheetContent({ className, side, ...props }: SheetContentProps): import("react/jsx-runtime").JSX.Element;
export declare function SheetHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export declare function SheetFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export declare function SheetTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>): import("react/jsx-runtime").JSX.Element;
export declare function SheetDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Sheet.d.ts.map