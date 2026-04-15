import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionHeaderProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  eyebrow?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  size?: 'default' | 'compact';
};

export function SectionHeader({ className, title, eyebrow, description, actions, size = 'default', ...props }: SectionHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between', className)} {...props}>
      <div className={cn(size === 'compact' ? 'space-y-0.5' : 'space-y-1')}>
        {eyebrow ? (
          <p className={cn(size === 'compact' ? 'text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground' : 'text-sm font-medium text-vu-blue')}>
            {eyebrow}
          </p>
        ) : null}
        <h3 className={cn(size === 'compact' ? 'text-xs font-medium uppercase tracking-wider text-muted-foreground' : 'text-lg font-semibold')}>
          {title}
        </h3>
        {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
      </div>
      {actions ? <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div> : null}
    </div>
  );
}
