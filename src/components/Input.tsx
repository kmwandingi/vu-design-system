import { forwardRef } from 'react';
import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { inputStyles, type InputStyles } from '@/styles/components';

type InputProps = InputHTMLAttributes<HTMLInputElement> & InputStyles;
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & Omit<InputStyles, 'size'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, variant, size, state, ...props },
  ref,
) {
  return <input ref={ref} className={cn(inputStyles({ variant, size, state }), className)} {...props} />;
});

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, variant, state, ...props },
  ref,
) {
  return (
    <textarea
      ref={ref}
      className={cn(inputStyles({ variant, size: 'md', state }), 'min-h-[120px] resize-y py-3', className)}
      {...props}
    />
  );
});
