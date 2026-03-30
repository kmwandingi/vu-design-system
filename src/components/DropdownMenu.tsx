import { useEffect, useRef, useState, useCallback, createContext, useContext, type HTMLAttributes, type ReactNode, type ButtonHTMLAttributes, type Dispatch, type SetStateAction } from 'react';
import { ChevronRight, MoreHorizontal, Check, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

type DropdownMenuContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  highlightedIndex: number;
  setHighlightedIndex: Dispatch<SetStateAction<number>>;
  itemCount: number;
  registerItem: () => number;
};

const DropdownMenuContext = createContext<DropdownMenuContextValue | null>(null);

function useDropdownMenuContext() {
  const context = useContext(DropdownMenuContext);
  if (!context) throw new Error('DropdownMenu components must be used within <DropdownMenu>');
  return context;
}

type DropdownMenuProps = {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
};

export function DropdownMenu({ children, open: controlledOpen, defaultOpen = false, onOpenChange, modal: _modal }: DropdownMenuProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const itemCountRef = useRef(0);

  const isControlled = controlledOpen !== undefined;
  const currentOpen = isControlled ? controlledOpen : internalOpen;

  const setOpen = useCallback((open: boolean) => {
    if (!isControlled) setInternalOpen(open);
    onOpenChange?.(open);
    if (!open) setHighlightedIndex(-1);
  }, [isControlled, onOpenChange]);

  const registerItem = useCallback(() => {
    const index = itemCountRef.current;
    itemCountRef.current += 1;
    return index;
  }, []);

  return (
    <DropdownMenuContext.Provider
      value={{
        open: currentOpen,
        setOpen,
        highlightedIndex,
        setHighlightedIndex,
        itemCount: itemCountRef.current,
        registerItem,
      }}
    >
      <div className="relative inline-flex">{children}</div>
    </DropdownMenuContext.Provider>
  );
}

type DropdownMenuTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export function DropdownMenuTrigger({ asChild, children, onClick, ...props }: DropdownMenuTriggerProps) {
  const { open, setOpen } = useDropdownMenuContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(!open);
    onClick?.(event);
  };

  if (asChild && children) {
    return (
      <span onClick={handleClick}>
        {children}
      </span>
    );
  }

  return (
    <button type="button" onClick={handleClick} {...props}>
      {children}
    </button>
  );
}

type DropdownMenuContentProps = HTMLAttributes<HTMLDivElement> & {
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
};

export function DropdownMenuContent({
  className,
  align = 'end',
  side = 'bottom',
  sideOffset = 4,
  children,
  ...props
}: DropdownMenuContentProps) {
  const { open, setOpen, setHighlightedIndex, itemCount } = useDropdownMenuContext();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setHighlightedIndex(prev => (prev < itemCount - 1 ? prev + 1 : prev));
          break;
        case 'ArrowUp':
          event.preventDefault();
          setHighlightedIndex(prev => (prev > 0 ? prev - 1 : prev));
          break;
        case 'Home':
          event.preventDefault();
          setHighlightedIndex(0);
          break;
        case 'End':
          event.preventDefault();
          setHighlightedIndex(itemCount - 1);
          break;
        case 'Escape':
          event.preventDefault();
          setOpen(false);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, itemCount, setHighlightedIndex, setOpen]);

  // Click outside to close
  useEffect(() => {
    if (!open) return;

    const handleClick = (event: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open, setOpen]);

  if (!open) return null;

  const alignClass = {
    start: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    end: 'right-0',
  }[align];

  const sideClass = {
    top: `bottom-[calc(100%+${sideOffset}px)]`,
    right: `left-[calc(100%+${sideOffset}px)] top-0`,
    bottom: `top-[calc(100%+${sideOffset}px)]`,
    left: `right-[calc(100%+${sideOffset}px)] top-0`,
  }[side];

  return (
    <div
      ref={contentRef}
      className={cn(
        'absolute z-50 min-w-[12rem] rounded-lg border bg-popover p-1 shadow-lg',
        alignClass,
        sideClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

type DropdownMenuItemProps = HTMLAttributes<HTMLDivElement> & {
  inset?: boolean;
  disabled?: boolean;
  onSelect?: () => void;
};

export function DropdownMenuItem({
  className,
  inset,
  disabled,
  onSelect,
  children,
  onClick,
  ...props
}: DropdownMenuItemProps) {
  const { setOpen, highlightedIndex, setHighlightedIndex, registerItem } = useDropdownMenuContext();
  const [itemIndex] = useState(() => registerItem());
  const isHighlighted = highlightedIndex === itemIndex;
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHighlighted && itemRef.current) {
      itemRef.current.focus();
    }
  }, [isHighlighted]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    onSelect?.();
    setOpen(false);
    onClick?.(event);
  };

  return (
    <div
      ref={itemRef}
      role="menuitem"
      tabIndex={-1}
      aria-disabled={disabled}
      onClick={handleClick}
      onMouseEnter={() => setHighlightedIndex(itemIndex)}
      className={cn(
        'flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-left text-sm transition-colors',
        'focus:bg-muted hover:bg-muted',
        inset && 'pl-8',
        disabled && 'pointer-events-none opacity-50',
        isHighlighted && 'bg-muted',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

type DropdownMenuCheckboxItemProps = HTMLAttributes<HTMLDivElement> & {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  onSelect?: () => void;
};

export function DropdownMenuCheckboxItem({
  className,
  checked,
  onCheckedChange,
  disabled,
  onSelect,
  children,
  onClick,
  ...props
}: DropdownMenuCheckboxItemProps) {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    onCheckedChange?.(!checked);
    onSelect?.();
    onClick?.(event);
  };

  return (
    <DropdownMenuItem
      className={cn('pl-8', className)}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {checked && <Check className="h-4 w-4" />}
      </span>
      {children}
    </DropdownMenuItem>
  );
}

type DropdownMenuRadioGroupProps = {
  children: ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
};

export function DropdownMenuRadioGroup({ children }: DropdownMenuRadioGroupProps) {
  return (
    <div role="group">
      {children}
    </div>
  );
}

type DropdownMenuRadioItemProps = HTMLAttributes<HTMLDivElement> & {
  value: string;
  disabled?: boolean;
  onSelect?: () => void;
};

export function DropdownMenuRadioItem({
  className,
  value: _value,
  disabled,
  onSelect,
  children,
  ...props
}: DropdownMenuRadioItemProps) {
  return (
    <DropdownMenuItem className={cn('pl-8', className)} disabled={disabled} {...props}>
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <Circle className="h-2 w-2 fill-current" />
      </span>
      {children}
    </DropdownMenuItem>
  );
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
  return (
    <div className={cn('flex items-center rounded-md px-2 py-2 text-sm', className)} {...props}>
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </div>
  );
}

export function DropdownMenuIconTrigger({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn('inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background hover:bg-muted', className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
    </button>
  );
}
