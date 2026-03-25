import type { HTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { spinnerStyles, type SpinnerStyles } from '@/styles/components';

type SpinnerProps = HTMLAttributes<HTMLDivElement> &
  SpinnerStyles & {
    label?: ReactNode;
  };

export function Spinner({ className, size, variant, label, ...props }: SpinnerProps) {
  return (
    <div className={cn('inline-flex items-center gap-2', className)} {...props}>
      <Loader2 className={spinnerStyles({ size, variant })} />
      {label ? <span className="text-sm text-muted-foreground">{label}</span> : null}
    </div>
  );
}
