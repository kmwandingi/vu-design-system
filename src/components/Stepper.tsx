import type { HTMLAttributes, ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type StepStatus = 'complete' | 'current' | 'upcoming';

type StepperItem = {
  title: ReactNode;
  description?: ReactNode;
  status?: StepStatus;
};

type StepperProps = HTMLAttributes<HTMLOListElement> & {
  items: StepperItem[];
};

export function Stepper({ className, items, ...props }: StepperProps) {
  return (
    <ol className={cn('grid gap-4 md:grid-cols-3', className)} {...props}>
      {items.map((item, index) => {
        const status = item.status ?? 'upcoming';
        const isComplete = status === 'complete';
        const isCurrent = status === 'current';

        return (
          <li key={index} className="relative rounded-lg border bg-card p-4">
            <div className="mb-3 flex items-center gap-3">
              <div
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold',
                  isComplete && 'border-vu-green bg-vu-green text-white',
                  isCurrent && 'border-vu-blue bg-vu-blue-50 text-vu-blue',
                  !isComplete && !isCurrent && 'border-border bg-background text-muted-foreground',
                )}
              >
                {isComplete ? <Check className="h-4 w-4" /> : index + 1}
              </div>
              <h4 className="font-semibold">{item.title}</h4>
            </div>
            {item.description ? <p className="text-sm text-muted-foreground">{item.description}</p> : null}
          </li>
        );
      })}
    </ol>
  );
}
