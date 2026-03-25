import type { HTMLAttributes, ReactNode } from 'react';
import { Timeline } from '@/components/Timeline';

type WorkflowAuditItem = {
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  status?: 'complete' | 'current' | 'upcoming';
};

type WorkflowAuditTimelineProps = HTMLAttributes<HTMLOListElement> & { items: WorkflowAuditItem[] };

export function WorkflowAuditTimeline({ items, ...props }: WorkflowAuditTimelineProps) {
  return <Timeline items={items} {...props} />;
}
