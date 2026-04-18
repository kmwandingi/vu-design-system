import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/Card';

type ResultSummaryProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  eyebrow?: ReactNode;
  summary: ReactNode;
  highlights?: ReactNode;
  actions?: ReactNode;
  meta?: ReactNode;
  tone?: 'default' | 'info' | 'success' | 'warning';
};

export function ResultSummary({ className, title, eyebrow, summary, highlights, actions, meta, tone = 'default', ...props }: ResultSummaryProps) {
  const cardTone =
    tone === 'info'
      ? 'primary'
      : tone === 'success'
        ? 'tertiary'
        : tone === 'warning'
          ? 'accent'
          : 'default';

  return (
    <Card className={cn('space-y-4', className)} variant="elevated" tone={cardTone} accent={tone === 'default' ? 'none' : 'left'} padding="lg" {...props}>
      <div className="space-y-2">
        {eyebrow ? <p className="text-sm font-medium text-vu-blue">{eyebrow}</p> : null}
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{summary}</p>
      </div>
      {highlights ? <div className="rounded-lg bg-muted/60 p-4 text-sm">{highlights}</div> : null}
      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      {meta ? <p className="text-xs text-muted-foreground">{meta}</p> : null}
    </Card>
  );
}
