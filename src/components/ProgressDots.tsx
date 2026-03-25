import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type ProgressDotsProps = HTMLAttributes<HTMLDivElement> & {
  total: number;
  current: number;
};

export function ProgressDots({ className, total, current, ...props }: ProgressDotsProps) {
  return (
    <div className={cn('flex items-center gap-2', className)} {...props}>
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'h-2.5 w-2.5 rounded-full transition-colors',
            index < current ? 'bg-vu-blue' : 'bg-muted-foreground/25',
          )}
        />
      ))}
    </div>
  );
}
