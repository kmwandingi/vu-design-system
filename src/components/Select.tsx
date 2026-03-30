import { useEffect, useRef, useState, useCallback, createContext, useContext, type HTMLAttributes, type ReactNode, forwardRef } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type SelectContextValue = {
  value: string;
  onValueChange: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  highlightedValue: string | null;
  setHighlightedValue: (value: string | null) => void;
  itemValues: string[];
  registerItem: (value: string) => void;
  unregisterItem: (value: string) => void;
};

const SelectContext = createContext<SelectContextValue | null>(null);

function useSelectContext() {
  const context = useContext(SelectContext);
  if (!context) throw new Error('Select components must be used within <Select>');
  return context;
}

type SelectProps = {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  name?: string;
  required?: boolean;
  children: ReactNode;
};

export function Select({
  value: controlledValue,
  defaultValue,
  onValueChange,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  name,
  required,
  children,
}: SelectProps) {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [highlightedValue, setHighlightedValue] = useState<string | null>(null);
  const [itemValues, setItemValues] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledValue !== undefined;
  const isOpenControlled = controlledOpen !== undefined;

  const currentValue = isControlled ? controlledValue : internalValue;
  const currentOpen = isOpenControlled ? controlledOpen : internalOpen;

  const setOpen = useCallback((open: boolean) => {
    if (!isOpenControlled) setInternalOpen(open);
    onOpenChange?.(open);
    if (!open) setHighlightedValue(null);
  }, [isOpenControlled, onOpenChange]);

  const handleValueChange = useCallback((newValue: string) => {
    if (!isControlled) setInternalValue(newValue);
    onValueChange?.(newValue);
    setOpen(false);
  }, [isControlled, onValueChange, setOpen]);

  const registerItem = useCallback((value: string) => {
    setItemValues(prev => [...prev, value]);
  }, []);

  const unregisterItem = useCallback((value: string) => {
    setItemValues(prev => prev.filter(v => v !== value));
  }, []);

  // Click outside to close
  useEffect(() => {
    if (!currentOpen) return;
    const onClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [currentOpen, setOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!currentOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (itemValues.length === 0) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setHighlightedValue(prev => {
            const currentIndex = prev ? itemValues.indexOf(prev) : -1;
            const nextIndex = currentIndex < itemValues.length - 1 ? currentIndex + 1 : 0;
            return itemValues[nextIndex];
          });
          break;
        case 'ArrowUp':
          event.preventDefault();
          setHighlightedValue(prev => {
            const currentIndex = prev ? itemValues.indexOf(prev) : -1;
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : itemValues.length - 1;
            return itemValues[prevIndex];
          });
          break;
        case 'Enter':
          event.preventDefault();
          if (highlightedValue) {
            handleValueChange(highlightedValue);
          }
          break;
        case 'Escape':
          event.preventDefault();
          setOpen(false);
          break;
        case 'Home':
          event.preventDefault();
          setHighlightedValue(itemValues[0]);
          break;
        case 'End':
          event.preventDefault();
          setHighlightedValue(itemValues[itemValues.length - 1]);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentOpen, highlightedValue, itemValues, handleValueChange, setOpen]);

  return (
    <SelectContext.Provider
      value={{
        value: currentValue,
        onValueChange: handleValueChange,
        open: currentOpen,
        setOpen,
        highlightedValue,
        setHighlightedValue,
        itemValues,
        registerItem,
        unregisterItem,
      }}
    >
      <div ref={containerRef} className="relative inline-flex w-full">
        {children}
        {name && <input type="hidden" name={name} value={currentValue} required={required} />}
      </div>
    </SelectContext.Provider>
  );
}

type SelectTriggerProps = HTMLAttributes<HTMLButtonElement> & { children?: ReactNode };

export const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, onKeyDown, ...props }, ref) => {
    const { open, setOpen } = useSelectContext();

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setOpen(!open);
      }
      onKeyDown?.(event);
    };

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => setOpen(!open)}
        onKeyDown={handleKeyDown}
        aria-expanded={open}
        className={cn(
          'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className={cn('h-4 w-4 opacity-50 transition-transform', open && 'rotate-180')} />
      </button>
    );
  }
);
SelectTrigger.displayName = 'SelectTrigger';

type SelectValueProps = HTMLAttributes<HTMLSpanElement> & { placeholder?: string };

export function SelectValue({ className, placeholder, ...props }: SelectValueProps) {
  const { value } = useSelectContext();
  return (
    <span className={cn('text-sm', !value && 'text-muted-foreground', className)} {...props}>
      {value || placeholder}
    </span>
  );
}

type SelectContentProps = HTMLAttributes<HTMLDivElement>;

export function SelectContent({ className, children, ...props }: SelectContentProps) {
  const { open } = useSelectContext();
  if (!open) return null;

  return (
    <div
      className={cn(
        'absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md',
        'top-[calc(100%+0.25rem)] left-0 right-0',
        className
      )}
      {...props}
    >
      <div className="p-1">{children}</div>
    </div>
  );
}

type SelectItemProps = HTMLAttributes<HTMLDivElement> & { value: string; children: ReactNode; disabled?: boolean };

export function SelectItem({ className, value, children, disabled, ...props }: SelectItemProps) {
  const { value: selectedValue, onValueChange, highlightedValue, setHighlightedValue, registerItem, unregisterItem } = useSelectContext();
  const isSelected = selectedValue === value;
  const isHighlighted = highlightedValue === value;
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerItem(value);
    return () => unregisterItem(value);
  }, [value, registerItem, unregisterItem]);

  // Scroll into view when highlighted
  useEffect(() => {
    if (isHighlighted && itemRef.current) {
      itemRef.current.scrollIntoView({ block: 'nearest' });
    }
  }, [isHighlighted]);

  return (
    <div
      ref={itemRef}
      role="option"
      aria-selected={isSelected}
      aria-disabled={disabled}
      onClick={() => !disabled && onValueChange(value)}
      onMouseEnter={() => setHighlightedValue(value)}
      className={cn(
        'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
        !disabled && 'hover:bg-muted',
        isSelected && 'bg-accent text-accent-foreground',
        isHighlighted && !isSelected && 'bg-muted',
        disabled && 'pointer-events-none opacity-50',
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {isSelected && <Check className="h-4 w-4" />}
      </span>
      {children}
    </div>
  );
}

type SelectGroupProps = HTMLAttributes<HTMLDivElement> & { children: ReactNode };

export function SelectGroup({ children, ...props }: SelectGroupProps) {
  return <div role="group" {...props}>{children}</div>;
}

type SelectLabelProps = HTMLAttributes<HTMLDivElement>;

export function SelectLabel({ className, ...props }: SelectLabelProps) {
  return (
    <div
      className={cn('px-2 py-1.5 text-xs font-medium text-muted-foreground', className)}
      {...props}
    />
  );
}

type SelectSeparatorProps = HTMLAttributes<HTMLDivElement>;

export function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
  return <div className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />;
}
