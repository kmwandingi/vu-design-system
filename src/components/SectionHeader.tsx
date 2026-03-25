import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionHeaderProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
};

export function SectionHeader({ className, title, description, actions, ...props }: SectionHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between', className)} {...props}>
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
      </div>
      {actions ? <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div> : null}
    </div>
  );
}
