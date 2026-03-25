import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/Card';

type DataVisualShellProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  footer?: ReactNode;
};

export function DataVisualShell({ className, title, subtitle, actions, footer, children, ...props }: DataVisualShellProps) {
  return (
    <Card className={cn('space-y-4', className)} variant="default" padding="lg" {...props}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <h3 className="font-semibold">{title}</h3>
          {subtitle ? <p className="text-sm text-muted-foreground">{subtitle}</p> : null}
        </div>
        {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
      </div>
      <div className="rounded-lg border border-dashed bg-muted/30 p-6">{children}</div>
      {footer ? <div className="text-sm text-muted-foreground">{footer}</div> : null}
    </Card>
  );
}
