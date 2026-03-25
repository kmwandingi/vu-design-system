import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogOverlay } from '@/components/Dialog';

type SheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
};

type SheetContentProps = HTMLAttributes<HTMLDivElement> & { side?: 'left' | 'right' };

export function Sheet({ open, onOpenChange, children }: SheetProps) {
  return <Dialog open={open} onOpenChange={onOpenChange}>{children}</Dialog>;
}

export function SheetTrigger(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" {...props} />;
}

export function SheetContent({ className, side = 'right', ...props }: SheetContentProps) {
  return (
    <div className="fixed inset-0 z-50">
      <DialogOverlay />
      <div className={cn('fixed top-0 h-full w-full max-w-md border bg-background shadow-xl', side === 'right' ? 'right-0 border-l' : 'left-0 border-r', className)} {...props} />
    </div>
  );
}

export function SheetHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-2 border-b p-5', className)} {...props} />;
}

export function SheetFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mt-auto flex flex-col gap-2 border-t p-5', className)} {...props} />;
}

export function SheetTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('font-semibold', className)} {...props} />;
}

export function SheetDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm text-muted-foreground', className)} {...props} />;
}
