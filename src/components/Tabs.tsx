import { createContext, useContext, useMemo, useState, type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type TabsContextValue = {
  value: string;
  setValue: (value: string) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) throw new Error('Tabs components must be used within <Tabs>.');
  return context;
}

type TabsProps = HTMLAttributes<HTMLDivElement> & {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
};

export function Tabs({ className, defaultValue, value, onValueChange, children, ...props }: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = value ?? internalValue;
  const setValue = (nextValue: string) => {
    if (value === undefined) setInternalValue(nextValue);
    onValueChange?.(nextValue);
  };
  const contextValue = useMemo(() => ({ value: currentValue, setValue }), [currentValue]);

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={cn('flex flex-col gap-4', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('inline-flex h-10 w-fit items-center gap-1 rounded-xl bg-muted p-1', className)} {...props} />;
}

type TabsTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & { value: string; icon?: ReactNode };

export function TabsTrigger({ className, value, icon, children, ...props }: TabsTriggerProps) {
  const context = useTabsContext();
  const isActive = context.value === value;

  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
        isActive ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground',
        className,
      )}
      onClick={() => context.setValue(value)}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}

type TabsContentProps = HTMLAttributes<HTMLDivElement> & { value: string };

export function TabsContent({ className, value, children, ...props }: TabsContentProps) {
  const context = useTabsContext();
  if (context.value !== value) return null;
  return <div className={cn('outline-none', className)} {...props}>{children}</div>;
}
