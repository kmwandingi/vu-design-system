import { useState, useCallback, createContext, useContext, forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

type RadioGroupContextValue = {
  value: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
  name?: string;
  required?: boolean;
};

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

function useRadioGroupContext() {
  const context = useContext(RadioGroupContext);
  if (!context) throw new Error('Radio components must be used within <RadioGroup>');
  return context;
}

type RadioGroupProps = {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  name?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
};

export function RadioGroup({
  value: controlledValue,
  defaultValue,
  onValueChange,
  disabled,
  name,
  required,
  children,
  className,
}: RadioGroupProps) {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const handleValueChange = useCallback((newValue: string) => {
    if (!isControlled) setInternalValue(newValue);
    onValueChange?.(newValue);
  }, [isControlled, onValueChange]);

  return (
    <RadioGroupContext.Provider
      value={{
        value: currentValue,
        onValueChange: handleValueChange,
        disabled,
        name,
        required,
      }}
    >
      <div
        role="radiogroup"
        className={cn('grid gap-2', className)}
        aria-disabled={disabled}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}

type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'onChange' | 'value'> & {
  value: string;
  id?: string;
  children?: ReactNode;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { value, disabled: itemDisabled, className, children, id, ...props },
  ref,
) {
  const { value: selectedValue, onValueChange, disabled: groupDisabled, name, required } = useRadioGroupContext();
  const isSelected = selectedValue === value;
  const isDisabled = groupDisabled || itemDisabled;

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <input
        ref={ref}
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={isSelected}
        disabled={isDisabled}
        required={required}
        className="sr-only"
        onChange={() => onValueChange(value)}
        {...props}
      />
      <RadioIndicator
        checked={isSelected}
        disabled={isDisabled}
        onClick={() => !isDisabled && onValueChange(value)}
      />
      {children}
    </div>
  );
});

type RadioIndicatorProps = {
  checked: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export function RadioIndicator({ checked, disabled, onClick, className }: RadioIndicatorProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-primary bg-background shadow',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        checked && 'border-primary',
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
    >
      {checked && <Circle className="h-2.5 w-2.5 fill-current text-primary" />}
    </button>
  );
}

type RadioLabelProps = {
  children: ReactNode;
  className?: string;
  htmlFor?: string;
};

export function RadioLabel({ children, className, htmlFor }: RadioLabelProps) {
  const { disabled } = useRadioGroupContext();

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
