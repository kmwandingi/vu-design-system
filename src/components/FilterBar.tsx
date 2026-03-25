import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/Card';

type FilterBarProps = HTMLAttributes<HTMLDivElement> & {
  leading?: ReactNode;
  filters?: ReactNode;
  actions?: ReactNode;
};

export function FilterBar({ className, leading, filters, actions, ...props }: FilterBarProps) {
  return (
    <Card className={cn('border-dashed', className)} padding="md" {...props}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center">{leading}{filters}</div>
        {actions ? <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div> : null}
      </div>
    </Card>
  );
}
