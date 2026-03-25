import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ActivityFeedItemProps = HTMLAttributes<HTMLDivElement> & {
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
};

export function ActivityFeedItem({ className, icon, title, description, meta, ...props }: ActivityFeedItemProps) {
  return (
    <div className={cn('flex gap-3 rounded-lg border bg-card p-4', className)} {...props}>
      <div className="mt-0.5 rounded-full bg-muted p-2 text-muted-foreground">{icon}</div>
      <div className="min-w-0 flex-1 space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="text-sm font-semibold">{title}</h4>
          {meta ? <span className="text-xs text-muted-foreground">{meta}</span> : null}
        </div>
        {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
      </div>
    </div>
  );
}
