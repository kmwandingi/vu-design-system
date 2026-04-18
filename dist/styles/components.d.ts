/**
 * VU Design System - Component Styles
 * Pre-built Tailwind classes for common component patterns
 *
 * These utilities provide consistent styling across the application
 * and should be used with the `cn()` utility for conditional classes.
 *
 * @example
 * import { buttonVariants, cardStyles, inputStyles } from './components';
 * <button className={cn(buttonVariants({ variant: 'primary', size: 'md' }))} />
 */
import { type VariantProps } from 'class-variance-authority';
export declare const buttonVariants: (props?: ({
    variant?: "primary" | "primary-subtle" | "primary-outline" | "primary-ghost" | "secondary" | "secondary-subtle" | "secondary-outline" | "secondary-ghost" | "accent" | "accent-subtle" | "accent-outline" | "accent-ghost" | "tertiary" | "tertiary-subtle" | "tertiary-outline" | "tertiary-ghost" | "destructive" | "destructive-subtle" | "destructive-outline" | "destructive-ghost" | "outline" | "ghost" | "link" | "link-subtle" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
    shape?: "default" | "square" | "rounded" | "pill" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type ButtonVariants = VariantProps<typeof buttonVariants>;
export declare const badgeVariants: (props?: ({
    variant?: "primary" | "primary-subtle" | "primary-outline" | "secondary" | "secondary-subtle" | "secondary-outline" | "accent" | "accent-subtle" | "accent-outline" | "tertiary" | "tertiary-subtle" | "tertiary-outline" | "destructive" | "destructive-subtle" | "destructive-outline" | "outline" | "ghost" | "success" | "success-subtle" | "success-outline" | "warning" | "warning-subtle" | "warning-outline" | "error" | "error-subtle" | "error-outline" | "info" | "info-subtle" | "info-outline" | "dot" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type BadgeVariants = VariantProps<typeof badgeVariants>;
export declare const cardStyles: (props?: ({
    variant?: "default" | "elevated" | "flat" | "outlined" | "interactive" | null | undefined;
    tone?: "primary" | "secondary" | "accent" | "tertiary" | "default" | null | undefined;
    accent?: "none" | "top" | "left" | null | undefined;
    padding?: "sm" | "md" | "lg" | "xl" | "none" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type CardStyles = VariantProps<typeof cardStyles>;
export declare const inputStyles: (props?: ({
    variant?: "ghost" | "default" | "filled" | "flushed" | null | undefined;
    size?: "sm" | "md" | "lg" | "xl" | null | undefined;
    state?: "default" | "success" | "warning" | "error" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type InputStyles = VariantProps<typeof inputStyles>;
export declare const alertVariants: (props?: ({
    variant?: "primary" | "secondary" | "accent" | "tertiary" | "destructive" | "default" | "success" | "warning" | "error" | "info" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type AlertVariants = VariantProps<typeof alertVariants>;
export declare const toastVariants: (props?: ({
    variant?: "primary" | "secondary" | "accent" | "tertiary" | "destructive" | "default" | "success" | "warning" | "error" | "info" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type ToastVariants = VariantProps<typeof toastVariants>;
export declare const avatarStyles: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | null | undefined;
    variant?: "default" | "bordered" | "squared" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type AvatarStyles = VariantProps<typeof avatarStyles>;
export declare const separatorStyles: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
    variant?: "default" | "dashed" | "dotted" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type SeparatorStyles = VariantProps<typeof separatorStyles>;
export declare const skeletonStyles: (props?: ({
    variant?: "default" | "circle" | "text" | "avatar" | "card" | "button" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type SkeletonStyles = VariantProps<typeof skeletonStyles>;
export declare const progressStyles: (props?: ({
    variant?: "primary" | "secondary" | "accent" | "tertiary" | "default" | "success" | "warning" | "error" | "info" | null | undefined;
    size?: "sm" | "md" | "lg" | "xl" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type ProgressStyles = VariantProps<typeof progressStyles>;
export declare const spinnerStyles: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    variant?: "primary" | "secondary" | "accent" | "tertiary" | "default" | "white" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type SpinnerStyles = VariantProps<typeof spinnerStyles>;
/**
 * Container styles for consistent layout
 */
export declare const containerStyles: {
    readonly default: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
    readonly sm: "mx-auto w-full max-w-3xl px-4 sm:px-6";
    readonly md: "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8";
    readonly lg: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
    readonly xl: "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";
    readonly full: "mx-auto w-full px-4 sm:px-6 lg:px-8";
};
/**
 * Focus ring styles for interactive elements
 */
export declare const focusRingStyles = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
/**
 * Disabled styles
 */
export declare const disabledStyles = "disabled:pointer-events-none disabled:opacity-50";
/**
 * Active/pressed styles
 */
export declare const activeStyles = "active:scale-[0.98]";
/**
 * Hover lift effect
 */
export declare const hoverLiftStyles = "transition-transform duration-200 hover:-translate-y-0.5";
/**
 * Card hover effect
 */
export declare const cardHoverStyles = "transition-all duration-200 hover:shadow-md hover:border-primary/20";
/**
 * Gradient backgrounds
 */
export declare const gradientStyles: {
    readonly primary: "bg-gradient-to-r from-vu-blue to-vu-blue-600";
    readonly secondary: "bg-gradient-to-r from-vu-purple to-vu-purple-600";
    readonly accent: "bg-gradient-to-r from-vu-orange to-vu-orange-600";
    readonly tertiary: "bg-gradient-to-r from-vu-green to-vu-green-600";
    readonly 'primary-subtle': "bg-gradient-to-r from-vu-blue-50 to-vu-blue-100";
    readonly 'secondary-subtle': "bg-gradient-to-r from-vu-purple-50 to-vu-purple-100";
    readonly 'accent-subtle': "bg-gradient-to-r from-vu-orange-50 to-vu-orange-100";
    readonly 'tertiary-subtle': "bg-gradient-to-r from-vu-green-50 to-vu-green-100";
};
/**
 * Text gradient styles
 */
export declare const textGradientStyles: {
    readonly primary: "bg-gradient-to-r from-vu-blue to-vu-blue-600 bg-clip-text text-transparent";
    readonly secondary: "bg-gradient-to-r from-vu-purple to-vu-purple-600 bg-clip-text text-transparent";
    readonly accent: "bg-gradient-to-r from-vu-orange to-vu-orange-600 bg-clip-text text-transparent";
    readonly tertiary: "bg-gradient-to-r from-vu-green to-vu-green-600 bg-clip-text text-transparent";
};
/**
 * Animation utilities
 */
export declare const animationStyles: {
    readonly fadeIn: "animate-[fade-in_0.2s_ease-out]";
    readonly fadeOut: "animate-[fade-out_0.2s_ease-in]";
    readonly slideInRight: "animate-[slide-in-right_0.3s_ease-out]";
    readonly slideInLeft: "animate-[slide-in-left_0.3s_ease-out]";
    readonly slideInUp: "animate-[slide-in-up_0.3s_ease-out]";
    readonly slideInDown: "animate-[slide-in-down_0.3s_ease-out]";
    readonly scaleIn: "animate-[scale-in_0.2s_ease-out]";
    readonly scaleOut: "animate-[scale-out_0.2s_ease-in]";
    readonly spin: "animate-spin";
    readonly pulse: "animate-pulse";
    readonly bounce: "animate-bounce";
    readonly shake: "animate-[shake_0.5s_ease-in-out]";
};
/**
 * Glassmorphism effect
 */
export declare const glassStyles = "bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg";
/**
 * Backdrop blur styles
 */
export declare const backdropStyles: {
    readonly sm: "backdrop-blur-sm";
    readonly md: "backdrop-blur-md";
    readonly lg: "backdrop-blur-lg";
    readonly xl: "backdrop-blur-xl";
};
//# sourceMappingURL=components.d.ts.map