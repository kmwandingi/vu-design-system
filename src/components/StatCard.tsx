import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/Card';

type StatCardProps = HTMLAttributes<HTMLDivElement> & {
  label: ReactNode;
  value: ReactNode;
  trend?: ReactNode;
  meta?: ReactNode;
  icon?: ReactNode;
};

export function StatCard({ className, label, value, trend, meta, icon, ...props }: StatCardProps) {
  return (
    <Card className={cn('min-h-[148px]', className)} variant="elevated" padding="lg" {...props}>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <div className="space-y-1">
            <p className="text-3xl font-bold tracking-tight">{value}</p>
            {trend ? <p className="text-sm text-vu-green-700">{trend}</p> : null}
          </div>
        </div>
        {icon ? <div className="rounded-lg bg-muted p-2 text-muted-foreground">{icon}</div> : null}
      </div>
      {meta ? <p className="mt-4 text-sm text-muted-foreground">{meta}</p> : null}
    </Card>
  );
}
