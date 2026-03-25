import type { HTMLAttributes, ReactNode } from 'react';
import { Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/Card';
import { Progress } from '@/components/Progress';

type AIStateProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  description?: ReactNode;
  status?: ReactNode;
  progress?: number;
};

export function AIState({ className, title, description, status, progress, ...props }: AIStateProps) {
  return (
    <Card className={cn('border-vu-purple/20 bg-vu-purple-50/50', className)} padding="lg" {...props}>
      <div className="flex items-start gap-3">
        <div className="rounded-full bg-vu-purple/10 p-2 text-vu-purple"><Bot className="h-4 w-4" /></div>
        <div className="min-w-0 flex-1 space-y-3">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="font-semibold text-vu-purple-900">{title}</h4>
              {status ? <span className="text-xs text-vu-purple-700">{status}</span> : null}
            </div>
            {description ? <p className="text-sm text-vu-purple-800/80">{description}</p> : null}
          </div>
          {typeof progress === 'number' ? <Progress value={progress} variant="secondary" /> : null}
        </div>
      </div>
    </Card>
  );
}
