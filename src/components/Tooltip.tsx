import { type HTMLAttributes, type ReactNode, useState, useRef, useEffect } from 'react';
import { HelpCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ─── Variants ─────────────────────────────────────────────────────────────

const tooltipVariants = cva(
  'rounded-md border px-3 py-2.5 text-left shadow-lg',
  {
    variants: {
      variant: {
        default:    'bg-popover border-border/70 text-popover-foreground',
        primary:    'bg-vu-blue-50 border-vu-blue/50 text-vu-blue-800',
        secondary:  'bg-vu-purple-50 border-vu-purple/50 text-vu-purple-800',
        accent:     'bg-vu-orange-50 border-vu-orange/50 text-vu-orange-800',
        tertiary:   'bg-vu-green-50 border-vu-green/50 text-vu-green-800',
        info:       'bg-[#E6F4FA] border-[#0077B3]/30 text-[#002F47]',
        success:    'bg-[#E6F5F0] border-[#008053]/30 text-[#004D32]',
        warning:    'bg-[#FFFBEB] border-[#F59E0B]/30 text-[#92400E]',
        error:      'bg-[#FEF2F2] border-[#DC2626]/30 text-[#7F1D1D]',
      },
      size: {
        sm: 'w-44',
        md: 'w-64',
        lg: 'w-80',
        xl: 'w-96',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

const tooltipTitleVariants = cva(
  'mb-1.5 text-[11px] font-semibold uppercase tracking-wide',
  {
    variants: {
      variant: {
        default:   'text-muted-foreground',
        primary:   'text-vu-blue-600',
        secondary: 'text-vu-purple-600',
        accent:    'text-vu-orange-600',
        tertiary:  'text-vu-green-600',
        info:      'text-[#0077B3]',
        success:   'text-[#008053]',
        warning:   'text-[#D97706]',
        error:     'text-[#B91C1C]',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

const tooltipNoteVariants = cva(
  'mt-2 border-t pt-2 text-[11px] leading-4',
  {
    variants: {
      variant: {
        default:   'border-border/50 text-muted-foreground',
        primary:   'border-vu-blue/20 text-vu-blue-600/70',
        secondary: 'border-vu-purple/20 text-vu-purple-600/70',
        accent:    'border-vu-orange/20 text-vu-orange-600/70',
        tertiary:  'border-vu-green/20 text-vu-green-600/70',
        info:      'border-[#0077B3]/20 text-[#0077B3]/70',
        success:   'border-[#008053]/20 text-[#008053]/70',
        warning:   'border-[#D97706]/20 text-[#D97706]/70',
        error:     'border-[#DC2626]/20 text-[#B91C1C]/70',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

export type TooltipVariantProps = VariantProps<typeof tooltipVariants>;

// ─── Shared positioning ───────────────────────────────────────────────────

type Side = 'top' | 'bottom' | 'left' | 'right';

const sideStyles: Record<Side, string> = {
  top:    'bottom-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2',
  bottom: 'top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2',
  left:   'right-[calc(100%+0.5rem)] top-1/2 -translate-y-1/2',
  right:  'left-[calc(100%+0.5rem)] top-1/2 -translate-y-1/2',
};

const motionOffset: Record<Side, { y?: number; x?: number }> = {
  top:    { y: 4 },
  bottom: { y: -4 },
  left:   { x: 4 },
  right:  { x: -4 },
};

// ─── Shared popup ─────────────────────────────────────────────────────────

type PopupProps = TooltipVariantProps & {
  title?: ReactNode;
  description: ReactNode;
  note?: ReactNode;
  className?: string;
};

function TooltipPopup({ title, description, note, variant, size, className }: PopupProps) {
  return (
    <div className={cn(tooltipVariants({ variant, size }), className)}>
      {title && <p className={tooltipTitleVariants({ variant })}>{title}</p>}
      <p className="text-[13px] leading-5">{description}</p>
      {note && <p className={tooltipNoteVariants({ variant })}>{note}</p>}
    </div>
  );
}

// ─── Hover tooltip — wraps any trigger element ────────────────────────────

export type TooltipProps = HTMLAttributes<HTMLSpanElement> & TooltipVariantProps & {
  title?: ReactNode;
  description: ReactNode;
  note?: ReactNode;
  side?: Side;
  children: ReactNode;
};

export function Tooltip({
  title,
  description,
  note,
  variant,
  size,
  side = 'top',
  className,
  children,
  ...props
}: TooltipProps) {
  return (
    <span className={cn('group relative inline-flex items-center', className)} {...props}>
      {children}
      <span
        role="tooltip"
        className={cn(
          'pointer-events-none absolute z-20 opacity-0 transition-opacity duration-150',
          'group-hover:opacity-100 group-focus-within:opacity-100',
          sideStyles[side],
        )}
      >
        <TooltipPopup title={title} description={description} note={note} variant={variant} size={size} />
      </span>
    </span>
  );
}

// ─── Click hint — standalone ? button, opens/closes on click ─────────────

export type TooltipHintProps = HTMLAttributes<HTMLSpanElement> & TooltipVariantProps & {
  title?: ReactNode;
  description: ReactNode;
  note?: ReactNode;
  side?: Side;
};

export function TooltipHint({
  title,
  description,
  note,
  variant,
  size,
  side = 'top',
  className,
  ...props
}: TooltipHintProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  const offset = motionOffset[side];

  return (
    <span ref={ref} className={cn('relative inline-flex items-center', className)} {...props}>
      <button
        type="button"
        aria-label="More information"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        className="inline-flex h-4 w-4 items-center justify-center rounded-full text-muted-foreground/70 transition-colors duration-150 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
      >
        <HelpCircle className="h-3.5 w-3.5" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.span
            role="tooltip"
            initial={{ opacity: 0, scale: 0.95, ...offset }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, ...offset }}
            transition={{ duration: 0.12 }}
            className={cn('absolute z-20', sideStyles[side])}
          >
            <TooltipPopup title={title} description={description} note={note} variant={variant} size={size} />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
