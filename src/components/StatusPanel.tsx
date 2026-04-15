import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Alert } from '@/components/Alert';
import { Progress } from '@/components/Progress';

type StatusPanelProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  description?: ReactNode;
  progress?: number;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  icon?: ReactNode;
  meta?: ReactNode;
};

export function StatusPanel({ className, title, description, progress, variant = 'info', icon, meta, ...props }: StatusPanelProps) {
  const progressVariant =
    variant === 'primary'
      ? 'primary'
      : variant === 'success'
        ? 'success'
        : variant === 'warning'
          ? 'warning'
          : variant === 'error'
            ? 'error'
            : 'info';

  return (
    <Alert className={cn(className)} variant={variant} icon={icon} title={title} description={description} {...props}>
      {(typeof progress === 'number' || meta) ? (
        <div className="mt-4 space-y-2.5">
          {typeof progress === 'number' ? <Progress value={progress} variant={progressVariant} size="md" /> : null}
          {meta ? <div className="text-xs leading-none text-muted-foreground">{meta}</div> : null}
        </div>
      ) : null}
    </Alert>
  );
}
