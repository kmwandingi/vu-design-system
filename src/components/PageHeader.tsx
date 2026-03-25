import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type PageHeaderProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
};

export function PageHeader({ className, eyebrow, title, description, actions, ...props }: PageHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-4 border-b pb-6 md:flex-row md:items-end md:justify-between', className)} {...props}>
      <div className="space-y-2">
        {eyebrow ? <p className="text-sm font-medium text-vu-blue">{eyebrow}</p> : null}
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {description ? <p className="max-w-2xl text-sm text-muted-foreground">{description}</p> : null}
        </div>
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
    </div>
  );
}
