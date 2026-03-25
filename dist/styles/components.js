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
import { cva } from 'class-variance-authority';
// ============================================================================
// BUTTON VARIANTS
// ============================================================================
export const buttonVariants = cva(
// Base styles
'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]', {
    variants: {
        variant: {
            // Primary variants
            primary: 'bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm hover:shadow-md',
            'primary-subtle': 'bg-primary-subtle text-primary-subtle-foreground hover:bg-primary/10',
            'primary-outline': 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
            'primary-ghost': 'text-primary hover:bg-primary/10',
            // Secondary variants
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover shadow-sm hover:shadow-md',
            'secondary-subtle': 'bg-secondary-subtle text-secondary-subtle-foreground hover:bg-secondary/10',
            'secondary-outline': 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground',
            'secondary-ghost': 'text-secondary hover:bg-secondary/10',
            // Accent (Orange) variants
            accent: 'bg-accent text-accent-foreground hover:bg-accent-hover shadow-sm hover:shadow-md',
            'accent-subtle': 'bg-accent-subtle text-accent-subtle-foreground hover:bg-accent/10',
            'accent-outline': 'border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground',
            'accent-ghost': 'text-accent hover:bg-accent/10',
            // Tertiary (Green) variants
            tertiary: 'bg-tertiary text-tertiary-foreground hover:bg-tertiary-hover shadow-sm hover:shadow-md',
            'tertiary-subtle': 'bg-tertiary-subtle text-tertiary-subtle-foreground hover:bg-tertiary/10',
            'tertiary-outline': 'border-2 border-tertiary text-tertiary hover:bg-tertiary hover:text-tertiary-foreground',
            'tertiary-ghost': 'text-tertiary hover:bg-tertiary/10',
            // Destructive variants
            destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive-hover shadow-sm hover:shadow-md',
            'destructive-subtle': 'bg-destructive-subtle text-destructive-subtle-foreground hover:bg-destructive/10',
            'destructive-outline': 'border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground',
            'destructive-ghost': 'text-destructive hover:bg-destructive/10',
            // Neutral variants
            outline: 'border border-border bg-background hover:bg-muted hover:text-foreground',
            ghost: 'hover:bg-muted hover:text-foreground',
            link: 'text-primary underline-offset-4 hover:underline',
            'link-subtle': 'text-muted-foreground underline-offset-4 hover:text-foreground hover:underline',
        },
        size: {
            xs: 'h-6 px-2 text-xs',
            sm: 'h-8 px-3 text-sm',
            md: 'h-10 px-4 text-sm',
            lg: 'h-12 px-6 text-base',
            xl: 'h-14 px-8 text-base',
            icon: 'h-10 w-10',
            'icon-sm': 'h-8 w-8',
            'icon-lg': 'h-12 w-12',
        },
        shape: {
            default: 'rounded-md',
            square: 'rounded-none',
            rounded: 'rounded-lg',
            pill: 'rounded-full',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
        shape: 'default',
    },
});
// ============================================================================
// BADGE VARIANTS
// ============================================================================
export const badgeVariants = cva('inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2', {
    variants: {
        variant: {
            // Primary variants
            primary: 'border-transparent bg-primary text-primary-foreground hover:bg-primary-hover',
            'primary-subtle': 'border-transparent bg-primary-subtle text-primary-subtle-foreground hover:bg-primary/10',
            'primary-outline': 'border-primary text-primary hover:bg-primary hover:text-primary-foreground',
            // Secondary variants
            secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary-hover',
            'secondary-subtle': 'border-transparent bg-secondary-subtle text-secondary-subtle-foreground hover:bg-secondary/10',
            'secondary-outline': 'border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground',
            // Accent variants
            accent: 'border-transparent bg-accent text-accent-foreground hover:bg-accent-hover',
            'accent-subtle': 'border-transparent bg-accent-subtle text-accent-subtle-foreground hover:bg-accent/10',
            'accent-outline': 'border-accent text-accent hover:bg-accent hover:text-accent-foreground',
            // Tertiary variants
            tertiary: 'border-transparent bg-tertiary text-tertiary-foreground hover:bg-tertiary-hover',
            'tertiary-subtle': 'border-transparent bg-tertiary-subtle text-tertiary-subtle-foreground hover:bg-tertiary/10',
            'tertiary-outline': 'border-tertiary text-tertiary hover:bg-tertiary hover:text-tertiary-foreground',
            // Destructive variants
            destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive-hover',
            'destructive-subtle': 'border-transparent bg-destructive-subtle text-destructive-subtle-foreground hover:bg-destructive/10',
            'destructive-outline': 'border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground',
            // Semantic variants
            success: 'border-transparent bg-success-500 text-white hover:bg-success-600',
            'success-subtle': 'border-transparent bg-success-50 text-success-700 hover:bg-success-100',
            'success-outline': 'border-success-500 text-success-700 hover:bg-success-50',
            warning: 'border-transparent bg-warning-500 text-white hover:bg-warning-600',
            'warning-subtle': 'border-transparent bg-warning-50 text-warning-700 hover:bg-warning-100',
            'warning-outline': 'border-warning-500 text-warning-700 hover:bg-warning-50',
            error: 'border-transparent bg-error-500 text-white hover:bg-error-600',
            'error-subtle': 'border-transparent bg-error-50 text-error-700 hover:bg-error-100',
            'error-outline': 'border-error-500 text-error-700 hover:bg-error-50',
            info: 'border-transparent bg-info-500 text-white hover:bg-info-600',
            'info-subtle': 'border-transparent bg-info-50 text-info-700 hover:bg-info-100',
            'info-outline': 'border-info-500 text-info-700 hover:bg-info-50',
            // Neutral variants
            outline: 'text-foreground border-border hover:bg-muted',
            ghost: 'hover:bg-muted hover:text-foreground',
            dot: 'border-transparent bg-muted text-muted-foreground',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
});
// ============================================================================
// CARD STYLES
// ============================================================================
export const cardStyles = cva('rounded-lg border bg-card text-card-foreground shadow-sm', {
    variants: {
        variant: {
            default: '',
            elevated: 'shadow-md hover:shadow-lg transition-shadow',
            flat: 'shadow-none border-0 bg-muted',
            outlined: 'shadow-none border-2',
            interactive: 'cursor-pointer hover:border-primary/50 hover:shadow-md transition-all duration-200',
        },
        padding: {
            none: '',
            sm: 'p-3',
            md: 'p-4',
            lg: 'p-6',
            xl: 'p-8',
        },
    },
    defaultVariants: {
        variant: 'default',
        padding: 'md',
    },
});
// ============================================================================
// INPUT STYLES
// ============================================================================
export const inputStyles = cva('flex w-full rounded-md border border-input bg-input-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-input-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', {
    variants: {
        variant: {
            default: '',
            filled: 'bg-muted border-transparent focus-visible:bg-background',
            flushed: 'rounded-none border-0 border-b-2 border-border px-0 focus-visible:ring-0 focus-visible:border-primary',
            ghost: 'border-0 bg-transparent focus-visible:bg-muted',
        },
        size: {
            sm: 'h-8 px-2 text-xs',
            md: 'h-10 px-3 text-sm',
            lg: 'h-12 px-4 text-base',
            xl: 'h-14 px-4 text-base',
        },
        state: {
            default: '',
            error: 'border-error-500 focus-visible:ring-error-500/20',
            success: 'border-success-500 focus-visible:ring-success-500/20',
            warning: 'border-warning-500 focus-visible:ring-warning-500/20',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'md',
        state: 'default',
    },
});
// ============================================================================
// ALERT STYLES
// ============================================================================
export const alertVariants = cva('relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground', {
    variants: {
        variant: {
            default: 'bg-background text-foreground',
            primary: 'border-vu-blue/50 text-vu-blue-800 bg-vu-blue-50 [&>svg]:text-vu-blue-600',
            secondary: 'border-vu-purple/50 text-vu-purple-800 bg-vu-purple-50 [&>svg]:text-vu-purple-600',
            accent: 'border-vu-orange/50 text-vu-orange-800 bg-vu-orange-50 [&>svg]:text-vu-orange-600',
            tertiary: 'border-vu-green/50 text-vu-green-800 bg-vu-green-50 [&>svg]:text-vu-green-600',
            destructive: 'border-[#DC2626]/30 bg-[#FEF2F2] text-[#7F1D1D] [&>svg]:text-[#B91C1C]',
            success: 'border-[#008053]/30 bg-[#E6F5F0] text-[#004D32] [&>svg]:text-[#008053]',
            warning: 'border-[#F59E0B]/30 bg-[#FFFBEB] text-[#92400E] [&>svg]:text-[#D97706]',
            error: 'border-[#DC2626]/30 bg-[#FEF2F2] text-[#7F1D1D] [&>svg]:text-[#B91C1C]',
            info: 'border-[#0077B3]/30 bg-[#E6F4FA] text-[#002F47] [&>svg]:text-[#0077B3]',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
// ============================================================================
// TOAST STYLES
// ============================================================================
export const toastVariants = cva('group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full', {
    variants: {
        variant: {
            default: 'border bg-background text-foreground',
            primary: 'border-primary/50 bg-primary/10 text-primary-foreground',
            secondary: 'border-secondary/50 bg-secondary/10 text-secondary-foreground',
            accent: 'border-accent/50 bg-accent/10 text-accent-foreground',
            tertiary: 'border-tertiary/50 bg-tertiary/10 text-tertiary-foreground',
            destructive: 'border-destructive/50 bg-destructive/10 text-destructive-foreground',
            success: 'border-success-500/50 bg-success-50 text-success-foreground',
            warning: 'border-warning-500/50 bg-warning-50 text-warning-foreground',
            error: 'border-error-500/50 bg-error-50 text-error-foreground',
            info: 'border-info-500/50 bg-info-50 text-info-foreground',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
// ============================================================================
// AVATAR STYLES
// ============================================================================
export const avatarStyles = cva('relative flex shrink-0 overflow-hidden rounded-full', {
    variants: {
        size: {
            xs: 'h-6 w-6 text-xs',
            sm: 'h-8 w-8 text-xs',
            md: 'h-10 w-10 text-sm',
            lg: 'h-12 w-12 text-base',
            xl: 'h-16 w-16 text-lg',
            '2xl': 'h-20 w-20 text-xl',
        },
        variant: {
            default: '',
            bordered: 'ring-2 ring-background',
            squared: 'rounded-lg',
        },
    },
    defaultVariants: {
        size: 'md',
        variant: 'default',
    },
});
// ============================================================================
// SEPARATOR STYLES
// ============================================================================
export const separatorStyles = cva('shrink-0 bg-border', {
    variants: {
        orientation: {
            horizontal: 'h-[1px] w-full',
            vertical: 'h-full w-[1px]',
        },
        variant: {
            default: '',
            dashed: 'border-dashed border-border',
            dotted: 'border-dotted border-border',
        },
    },
    defaultVariants: {
        orientation: 'horizontal',
        variant: 'default',
    },
});
// ============================================================================
// SKELETON STYLES
// ============================================================================
export const skeletonStyles = cva('animate-pulse rounded-md bg-muted', {
    variants: {
        variant: {
            default: '',
            circle: 'rounded-full',
            text: 'h-4 w-full',
            avatar: 'h-10 w-10 rounded-full',
            card: 'h-32 w-full',
            button: 'h-10 w-24',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
// ============================================================================
// PROGRESS STYLES
// ============================================================================
export const progressStyles = cva('relative h-4 w-full overflow-hidden rounded-full bg-secondary', {
    variants: {
        variant: {
            default: '',
            primary: '[&>div]:bg-primary',
            secondary: '[&>div]:bg-secondary',
            accent: '[&>div]:bg-accent',
            tertiary: '[&>div]:bg-tertiary',
            success: '[&>div]:bg-success-500',
            warning: '[&>div]:bg-warning-500',
            error: '[&>div]:bg-error-500',
            info: '[&>div]:bg-info-500',
        },
        size: {
            sm: 'h-1',
            md: 'h-2',
            lg: 'h-4',
            xl: 'h-6',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'md',
    },
});
// ============================================================================
// SPINNER STYLES
// ============================================================================
export const spinnerStyles = cva('animate-spin text-muted-foreground', {
    variants: {
        size: {
            xs: 'h-3 w-3',
            sm: 'h-4 w-4',
            md: 'h-5 w-5',
            lg: 'h-6 w-6',
            xl: 'h-8 w-8',
        },
        variant: {
            default: 'text-muted-foreground',
            primary: 'text-primary',
            secondary: 'text-secondary',
            accent: 'text-accent',
            tertiary: 'text-tertiary',
            white: 'text-white',
        },
    },
    defaultVariants: {
        size: 'md',
        variant: 'default',
    },
});
// ============================================================================
// UTILITY CLASSES
// ============================================================================
/**
 * Container styles for consistent layout
 */
export const containerStyles = {
    default: 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
    sm: 'mx-auto w-full max-w-3xl px-4 sm:px-6',
    md: 'mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8',
    lg: 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
    xl: 'mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8',
    full: 'mx-auto w-full px-4 sm:px-6 lg:px-8',
};
/**
 * Focus ring styles for interactive elements
 */
export const focusRingStyles = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';
/**
 * Disabled styles
 */
export const disabledStyles = 'disabled:pointer-events-none disabled:opacity-50';
/**
 * Active/pressed styles
 */
export const activeStyles = 'active:scale-[0.98]';
/**
 * Hover lift effect
 */
export const hoverLiftStyles = 'transition-transform duration-200 hover:-translate-y-0.5';
/**
 * Card hover effect
 */
export const cardHoverStyles = 'transition-all duration-200 hover:shadow-md hover:border-primary/20';
/**
 * Gradient backgrounds
 */
export const gradientStyles = {
    primary: 'bg-gradient-to-r from-vu-blue to-vu-blue-600',
    secondary: 'bg-gradient-to-r from-vu-purple to-vu-purple-600',
    accent: 'bg-gradient-to-r from-vu-orange to-vu-orange-600',
    tertiary: 'bg-gradient-to-r from-vu-green to-vu-green-600',
    'primary-subtle': 'bg-gradient-to-r from-vu-blue-50 to-vu-blue-100',
    'secondary-subtle': 'bg-gradient-to-r from-vu-purple-50 to-vu-purple-100',
    'accent-subtle': 'bg-gradient-to-r from-vu-orange-50 to-vu-orange-100',
    'tertiary-subtle': 'bg-gradient-to-r from-vu-green-50 to-vu-green-100',
};
/**
 * Text gradient styles
 */
export const textGradientStyles = {
    primary: 'bg-gradient-to-r from-vu-blue to-vu-blue-600 bg-clip-text text-transparent',
    secondary: 'bg-gradient-to-r from-vu-purple to-vu-purple-600 bg-clip-text text-transparent',
    accent: 'bg-gradient-to-r from-vu-orange to-vu-orange-600 bg-clip-text text-transparent',
    tertiary: 'bg-gradient-to-r from-vu-green to-vu-green-600 bg-clip-text text-transparent',
};
/**
 * Animation utilities
 */
export const animationStyles = {
    fadeIn: 'animate-[fade-in_0.2s_ease-out]',
    fadeOut: 'animate-[fade-out_0.2s_ease-in]',
    slideInRight: 'animate-[slide-in-right_0.3s_ease-out]',
    slideInLeft: 'animate-[slide-in-left_0.3s_ease-out]',
    slideInUp: 'animate-[slide-in-up_0.3s_ease-out]',
    slideInDown: 'animate-[slide-in-down_0.3s_ease-out]',
    scaleIn: 'animate-[scale-in_0.2s_ease-out]',
    scaleOut: 'animate-[scale-out_0.2s_ease-in]',
    spin: 'animate-spin',
    pulse: 'animate-pulse',
    bounce: 'animate-bounce',
    shake: 'animate-[shake_0.5s_ease-in-out]',
};
/**
 * Glassmorphism effect
 */
export const glassStyles = 'bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg';
/**
 * Backdrop blur styles
 */
export const backdropStyles = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
};
//# sourceMappingURL=components.js.map