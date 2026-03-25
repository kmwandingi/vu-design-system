import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants, type ButtonVariants } from '@/styles/components';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, shape, type = 'button', ...props },
  ref,
) {
  return <button ref={ref} type={type} className={cn(buttonVariants({ variant, size, shape }), className)} {...props} />;
});
