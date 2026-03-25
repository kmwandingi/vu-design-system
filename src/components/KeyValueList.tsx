import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type KeyValueItem = { key: ReactNode; value: ReactNode };

type KeyValueListProps = HTMLAttributes<HTMLDListElement> & { items: KeyValueItem[] };

export function KeyValueList({ className, items, ...props }: KeyValueListProps) {
  return (
    <dl className={cn('grid gap-3', className)} {...props}>
      {items.map((item, index) => (
        <div key={index} className="grid grid-cols-[minmax(0,160px)_1fr] gap-4 rounded-lg border bg-card px-4 py-3">
          <dt className="text-sm font-medium text-muted-foreground">{item.key}</dt>
          <dd className="text-sm text-foreground">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
