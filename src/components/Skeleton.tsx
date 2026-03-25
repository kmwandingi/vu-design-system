import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { skeletonStyles, type SkeletonStyles } from '@/styles/components';

type SkeletonProps = HTMLAttributes<HTMLDivElement> & SkeletonStyles;

export function Skeleton({ className, variant, ...props }: SkeletonProps) {
  return <div className={cn(skeletonStyles({ variant }), className)} {...props} />;
}
