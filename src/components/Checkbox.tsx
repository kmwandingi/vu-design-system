import { useState, useCallback, createContext, useContext, forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type CheckboxContextValue = {
  checked: boolean | 'indeterminate';
  onCheckedChange: (checked: boolean | 'indeterminate') => void;
  disabled?: boolean;
  name?: string;
  required?: boolean;
  value?: string;
};

const CheckboxContext = createContext<CheckboxContextValue | null>(null);

function useCheckboxContext() {
  const context = useContext(CheckboxContext);
  if (!context) throw new Error('Checkbox components must be used within <Checkbox>');
  return context;
}

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'onChange' | 'value'> & {
  checked?: boolean | 'indeterminate';
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  value?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  {
    checked: controlledChecked,
    defaultChecked = false,
    onCheckedChange,
    disabled,
    name,
    required,
    value,
    className,
    children,
    id,
    ...props
  },
  ref,
) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = controlledChecked !== undefined;
  const currentChecked = isControlled ? controlledChecked : internalChecked;

  const handleCheckedChange = useCallback((newChecked: boolean | 'indeterminate') => {
    if (!isControlled) setInternalChecked(newChecked === true);
    onCheckedChange?.(newChecked);
  }, [isControlled, onCheckedChange]);

  const toggle = useCallback(() => {
    if (disabled) return;
    const next = currentChecked === true ? false : true;
    handleCheckedChange(next);
  }, [currentChecked, disabled, handleCheckedChange]);

  return (
    <CheckboxContext.Provider
      value={{
        checked: currentChecked,
        onCheckedChange: handleCheckedChange,
        disabled,
        name,
        required,
        value,
      }}
    >
      <div className={cn('flex items-center gap-2', className)} {...props}>
        <input
          ref={ref}
          type="checkbox"
          id={id}
          checked={currentChecked === true}
          disabled={disabled}
          name={name}
          required={required}
          value={value}
          className="sr-only"
          onChange={toggle}
        />
        {children || (
          <CheckboxIndicator
            onClick={toggle}
            className={cn(disabled && 'cursor-not-allowed opacity-50')}
          />
        )}
      </div>
    </CheckboxContext.Provider>
  );
});

type CheckboxIndicatorProps = {
  className?: string;
  onClick?: () => void;
};

export function CheckboxIndicator({ className, onClick }: CheckboxIndicatorProps) {
  const { checked, disabled } = useCheckboxContext();

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked === 'indeterminate' ? 'mixed' : checked}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'flex h-4 w-4 shrink-0 items-center justify-center rounded border border-primary bg-background shadow',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        checked === true && 'bg-primary text-primary-foreground',
        checked === 'indeterminate' && 'bg-primary text-primary-foreground',
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
    >
      {checked === true && <Check className="h-3.5 w-3.5" />}
      {checked === 'indeterminate' && (
        <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
          <path d="M5 12H19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}

type CheckboxLabelProps = {
  children: ReactNode;
  className?: string;
  htmlFor?: string;
};

export function CheckboxLabel({ children, className, htmlFor }: CheckboxLabelProps) {
  const { disabled } = useCheckboxContext();

  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        disabled && 'cursor-not-allowed opacity-70',
        className
      )}
    >
      {children}
    </label>
  );
}
