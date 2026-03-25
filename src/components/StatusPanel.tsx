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
  return (
    <Alert className={cn('space-y-4', className)} variant={variant} icon={icon} title={title} description={description} {...props}>
      {typeof progress === 'number' ? <Progress value={progress} variant={variant === 'primary' ? 'primary' : variant === 'success' ? 'success' : variant === 'warning' ? 'warning' : variant === 'error' ? 'error' : 'info'} /> : null}
      {meta ? <div className="text-xs text-muted-foreground">{meta}</div> : null}
    </Alert>
  );
}
