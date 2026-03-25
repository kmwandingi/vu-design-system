import type { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/styles/components';

export function Pagination({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <nav aria-label="pagination" className={cn('mx-auto flex w-full justify-center', className)} {...props} />;
}

export function PaginationContent({ className, ...props }: HTMLAttributes<HTMLUListElement>) {
  return <ul className={cn('flex flex-row items-center gap-1', className)} {...props} />;
}

export function PaginationItem(props: HTMLAttributes<HTMLLIElement>) {
  return <li {...props} />;
}

type PaginationLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { isActive?: boolean };

export function PaginationLink({ className, isActive, ...props }: PaginationLinkProps) {
  return <a aria-current={isActive ? 'page' : undefined} className={cn(buttonVariants({ variant: isActive ? 'outline' : 'ghost', size: 'icon' }), className)} {...props} />;
}

export function PaginationPrevious({ className, ...props }: PaginationLinkProps) {
  return <PaginationLink className={cn('gap-1 px-3 w-auto', className)} {...props}><ChevronLeft className="h-4 w-4" /><span>Previous</span></PaginationLink>;
}

export function PaginationNext({ className, ...props }: PaginationLinkProps) {
  return <PaginationLink className={cn('gap-1 px-3 w-auto', className)} {...props}><span>Next</span><ChevronRight className="h-4 w-4" /></PaginationLink>;
}

export function PaginationEllipsis({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span aria-hidden className={cn('flex h-9 w-9 items-center justify-center', className)} {...props}><MoreHorizontal className="h-4 w-4" /></span>;
}
