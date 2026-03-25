import type { HTMLAttributes, ReactNode } from 'react';
import { Link2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/Card';

type EvidenceCardProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  source?: ReactNode;
  summary?: ReactNode;
  relevance?: ReactNode;
};

export function EvidenceCard({ className, title, source, summary, relevance, ...props }: EvidenceCardProps) {
  return (
    <Card className={cn('space-y-3', className)} variant="default" padding="md" {...props}>
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-muted p-2 text-muted-foreground"><Link2 className="h-4 w-4" /></div>
        <div className="space-y-1">
          <h4 className="font-semibold">{title}</h4>
          {source ? <p className="text-xs text-muted-foreground">{source}</p> : null}
        </div>
      </div>
      {summary ? <p className="text-sm text-muted-foreground">{summary}</p> : null}
      {relevance ? <div className="text-xs text-vu-blue-700">{relevance}</div> : null}
    </Card>
  );
}
