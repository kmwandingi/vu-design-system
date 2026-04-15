import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/Card';
import { InfoHint } from '@/components/InfoHint';

type StatCardProps = HTMLAttributes<HTMLDivElement> & {
  label: ReactNode;
  value: ReactNode;
  trend?: ReactNode;
  meta?: ReactNode;
  icon?: ReactNode;
  hint?: ReactNode;
  size?: 'default' | 'compact';
};

export function StatCard({ className, label, value, trend, meta, icon, hint, size = 'default', ...props }: StatCardProps) {
  return (
    <Card className={cn(size === 'compact' ? 'min-h-0' : 'min-h-[148px]', className)} variant="elevated" padding={size === 'compact' ? 'md' : 'lg'} {...props}>
      <div className="flex items-start justify-between gap-4">
        <div className={cn(size === 'compact' ? 'space-y-2' : 'space-y-3')}>
          <div className="flex items-center gap-1.5">
            <p className="text-sm font-medium text-muted-foreground">{label}</p>
            {hint ? <InfoHint text={hint} align="left" /> : null}
          </div>
          <div className="space-y-1">
            <p className={cn(size === 'compact' ? 'text-lg font-semibold' : 'text-3xl font-bold tracking-tight')}>{value}</p>
            {trend ? <p className="text-sm text-vu-green-700">{trend}</p> : null}
          </div>
        </div>
        {icon ? <div className={cn('rounded-lg bg-muted text-muted-foreground', size === 'compact' ? 'p-1.5' : 'p-2')}>{icon}</div> : null}
      </div>
      {meta ? <p className={cn(size === 'compact' ? 'mt-3 text-xs text-muted-foreground' : 'mt-4 text-sm text-muted-foreground')}>{meta}</p> : null}
    </Card>
  );
}
