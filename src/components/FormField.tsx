import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type FormFieldProps = HTMLAttributes<HTMLDivElement> & {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  required?: boolean;
};

export function FormField({ className, label, description, error, required, children, ...props }: FormFieldProps) {
  return (
    <div className={cn('grid gap-2', className)} {...props}>
      {label ? (
        <div className="flex items-center gap-1 text-sm font-medium text-foreground">
          <span>{label}</span>
          {required ? <span className="text-error-600">*</span> : null}
        </div>
      ) : null}
      {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
      {children}
      {error ? <p className="text-sm text-error-600">{error}</p> : null}
    </div>
  );
}
