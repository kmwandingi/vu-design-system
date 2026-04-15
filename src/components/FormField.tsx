import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type FormFieldProps = HTMLAttributes<HTMLDivElement> & {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  labelSuffix?: ReactNode;
  orientation?: 'stacked' | 'inline';
};

export function FormField({ className, label, description, error, required, labelSuffix, orientation = 'stacked', children, ...props }: FormFieldProps) {
  return (
    <div className={cn('grid gap-2', orientation === 'inline' && 'gap-3 sm:grid-cols-[minmax(0,200px)_1fr] sm:items-start', className)} {...props}>
      {label ? (
        <div className={cn('space-y-1', orientation === 'inline' && 'pt-2')}>
          <div className="flex items-center gap-1 text-sm font-medium text-foreground">
            <span>{label}</span>
            {required ? <span className="text-error-600">*</span> : null}
            {labelSuffix ? <span className="ml-auto">{labelSuffix}</span> : null}
          </div>
          {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
        </div>
      ) : null}
      <div className="grid gap-2">
        {!label && description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
        {children}
        {error ? <p className="text-sm text-error-600">{error}</p> : null}
      </div>
    </div>
  );
}
