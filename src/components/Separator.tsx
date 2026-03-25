import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { separatorStyles, type SeparatorStyles } from '@/styles/components';

type SeparatorProps = HTMLAttributes<HTMLDivElement> & SeparatorStyles;

export function Separator({ className, orientation, variant, ...props }: SeparatorProps) {
  return <div aria-hidden="true" className={cn(separatorStyles({ orientation, variant }), className)} {...props} />;
}
