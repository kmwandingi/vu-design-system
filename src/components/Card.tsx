import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { cardStyles, type CardStyles } from '@/styles/components';

type CardProps = HTMLAttributes<HTMLDivElement> & CardStyles;

export function Card({ className, variant, padding, ...props }: CardProps) {
  return <div className={cn(cardStyles({ variant, padding }), className)} {...props} />;
}
