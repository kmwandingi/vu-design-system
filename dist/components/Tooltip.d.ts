import { type HTMLAttributes, type ReactNode } from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const tooltipVariants: (props?: ({
    variant?: "primary" | "secondary" | "accent" | "tertiary" | "default" | "success" | "warning" | "error" | "info" | null | undefined;
    size?: "sm" | "md" | "lg" | "xl" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type TooltipVariantProps = VariantProps<typeof tooltipVariants>;
type Side = 'top' | 'bottom' | 'left' | 'right';
export type TooltipProps = HTMLAttributes<HTMLSpanElement> & TooltipVariantProps & {
    title?: ReactNode;
    description: ReactNode;
    note?: ReactNode;
    side?: Side;
    children: ReactNode;
};
export declare function Tooltip({ title, description, note, variant, size, side, className, children, ...props }: TooltipProps): import("react/jsx-runtime").JSX.Element;
export type TooltipHintProps = HTMLAttributes<HTMLSpanElement> & TooltipVariantProps & {
    title?: ReactNode;
    description: ReactNode;
    note?: ReactNode;
    side?: Side;
};
export declare function TooltipHint({ title, description, note, variant, size, side, className, ...props }: TooltipHintProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Tooltip.d.ts.map