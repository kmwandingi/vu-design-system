import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from 'react';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

type DropdownMenuProps = { trigger: ReactNode; children: ReactNode };

export function DropdownMenu({ trigger, children }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div ref={ref} className="relative inline-flex">
      <button type="button" onClick={() => setOpen((value) => !value)}>{trigger}</button>
      {open ? <div className="absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-[12rem] rounded-lg border bg-popover p-1 shadow-lg">{children}</div> : null}
    </div>
  );
}

export function DropdownMenuContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('grid gap-1', className)} {...props} />;
}

export function DropdownMenuItem({ className, inset, children, ...props }: HTMLAttributes<HTMLButtonElement> & { inset?: boolean }) {
  return <button type="button" className={cn('flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm transition-colors hover:bg-muted', inset && 'pl-8', className)} {...props}>{children}</button>;
}

export function DropdownMenuLabel({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-2 py-1.5 text-sm font-medium', className)} {...props} />;
}

export function DropdownMenuSeparator({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('my-1 h-px bg-border', className)} {...props} />;
}

export function DropdownMenuShortcut({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)} {...props} />;
}

export function DropdownMenuSubTrigger({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex items-center rounded-md px-2 py-2 text-sm', className)} {...props}>{children}<ChevronRight className="ml-auto h-4 w-4" /></div>;
}

export function DropdownMenuIconTrigger({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" className={cn('inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background hover:bg-muted', className)} {...props}><MoreHorizontal className="h-4 w-4" /></button>;
}
