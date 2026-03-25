import type { HTMLAttributes, ReactNode } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

type TimelineStatus = 'complete' | 'current' | 'upcoming';

type TimelineItem = {
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  status?: TimelineStatus;
};

type TimelineProps = HTMLAttributes<HTMLOListElement> & {
  items: TimelineItem[];
};

const statusStyles: Record<TimelineStatus, { dot: string; line: string; text: string }> = {
  complete: {
    dot: 'border-vu-green bg-vu-green text-white',
    line: 'bg-vu-green/30',
    text: 'text-vu-green-900',
  },
  current: {
    dot: 'border-vu-blue bg-vu-blue-50 text-vu-blue',
    line: 'bg-vu-blue/20',
    text: 'text-vu-blue-900',
  },
  upcoming: {
    dot: 'border-border bg-background text-muted-foreground',
    line: 'bg-border',
    text: 'text-foreground',
  },
};

export function Timeline({ className, items, ...props }: TimelineProps) {
  return (
    <ol className={cn('space-y-0', className)} {...props}>
      {items.map((item, index) => {
        const status = item.status ?? 'upcoming';
        const styles = statusStyles[status];
        const isLast = index === items.length - 1;

        return (
          <li key={index} className="grid grid-cols-[2rem_1fr] gap-4 pb-5 last:pb-0">
            <div className="flex flex-col items-center">
              <div className={cn('flex h-8 w-8 items-center justify-center rounded-full border-2', styles.dot)}>
                {status === 'complete' ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-3.5 w-3.5" />}
              </div>
              {!isLast ? <div className={cn('mt-2 w-px flex-1', styles.line)} /> : null}
            </div>
            <div className="space-y-1 pt-1">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h4 className={cn('text-sm font-semibold', styles.text)}>{item.title}</h4>
                {item.meta ? <span className="text-xs text-muted-foreground">{item.meta}</span> : null}
              </div>
              {item.description ? <p className="text-sm text-muted-foreground">{item.description}</p> : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
