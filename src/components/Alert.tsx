import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { alertVariants, type AlertVariants } from '@/styles/components';

type AlertProps = HTMLAttributes<HTMLDivElement> &
  AlertVariants & {
    icon?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
  };

export function Alert({ className, variant, icon, title, description, children, ...props }: AlertProps) {
  return (
    <div className={cn(alertVariants({ variant }), className)} role="alert" {...props}>
      {icon}
      <div>
        {title ? <h5 className="font-medium">{title}</h5> : null}
        {description ? <p className="text-sm">{description}</p> : null}
        {children}
      </div>
    </div>
  );
}
