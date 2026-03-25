import type { HTMLAttributes, ReactNode } from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/Card';
import { Progress } from '@/components/Progress';
import { Spinner } from '@/components/Spinner';

type LoadingStateProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  description?: ReactNode;
  progress?: number;
};

export function LoadingState({ className, title, description, progress, ...props }: LoadingStateProps) {
  return (
    <Card className={cn('border-vu-blue/20 bg-vu-blue-50/80', className)} padding="lg" {...props}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-full bg-vu-blue/10 p-2">
          <Sparkles className="h-4 w-4 text-vu-blue" />
        </div>
        <div className="min-w-0 flex-1 space-y-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Spinner size="sm" variant="primary" />
              <p className="text-sm font-medium text-vu-blue-800">{title}</p>
            </div>
            {description ? <p className="text-sm text-vu-blue-700/80">{description}</p> : null}
          </div>
          {typeof progress === 'number' ? <Progress value={progress} variant="primary" size="md" /> : null}
        </div>
      </div>
    </Card>
  );
}
