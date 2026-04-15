import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type KeyValueItem = { key: ReactNode; value: ReactNode };

type KeyValueListProps = HTMLAttributes<HTMLDListElement> & {
  items: KeyValueItem[];
  size?: 'default' | 'compact';
  keyWidthClassName?: string;
};

export function KeyValueList({ className, items, size = 'default', keyWidthClassName = 'minmax(0,160px)', ...props }: KeyValueListProps) {
  return (
    <dl className={cn('grid gap-3', className)} {...props}>
      {items.map((item, index) => (
        <div key={index} className={cn('grid rounded-lg border bg-card', size === 'compact' ? 'gap-3 px-3 py-2.5' : 'gap-4 px-4 py-3')} style={{ gridTemplateColumns: `${keyWidthClassName} 1fr` }}>
          <dt className={cn(size === 'compact' ? 'text-xs font-medium text-muted-foreground' : 'text-sm font-medium text-muted-foreground')}>{item.key}</dt>
          <dd className={cn(size === 'compact' ? 'text-xs text-foreground' : 'text-sm text-foreground')}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
