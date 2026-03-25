import type { HTMLAttributes, ReactNode } from 'react';
import { SearchX } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/Card';

type EmptyStateProps = HTMLAttributes<HTMLDivElement> & {
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
};

export function EmptyState({ className, icon, title, description, actions, ...props }: EmptyStateProps) {
  return (
    <Card className={cn('border-dashed text-center', className)} padding="lg" {...props}>
      <div className="flex flex-col items-center gap-4 py-4">
        <div className="rounded-full bg-muted p-3 text-muted-foreground">{icon ?? <SearchX className="h-5 w-5" />}</div>
        <div className="space-y-1">
          <h3 className="text-base font-semibold">{title}</h3>
          {description ? <p className="max-w-md text-sm text-muted-foreground">{description}</p> : null}
        </div>
        {actions ? <div className="flex flex-wrap items-center justify-center gap-3">{actions}</div> : null}
      </div>
    </Card>
  );
}
