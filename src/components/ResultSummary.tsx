import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/Card';

type ResultSummaryProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  summary: ReactNode;
  highlights?: ReactNode;
  actions?: ReactNode;
};

export function ResultSummary({ className, title, summary, highlights, actions, ...props }: ResultSummaryProps) {
  return (
    <Card className={cn('space-y-4', className)} variant="elevated" padding="lg" {...props}>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{summary}</p>
      </div>
      {highlights ? <div className="rounded-lg bg-muted/60 p-4 text-sm">{highlights}</div> : null}
      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </Card>
  );
}
