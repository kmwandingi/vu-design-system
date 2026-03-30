import { forwardRef, type ReactElement, cloneElement, isValidElement } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants, type ButtonVariants } from '@/styles/components';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    asChild?: boolean;
    href?: string;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, shape, type = 'button', asChild, href, ...props },
  ref,
) {
  const classes = cn(buttonVariants({ variant, size, shape }), className);

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  if (asChild && isValidElement(props.children)) {
    return cloneElement(props.children as ReactElement, {
      ref,
      className: cn(classes, (props.children as ReactElement).props.className),
      ...props,
    });
  }

  return <button ref={ref} type={type} className={classes} {...props} />;
});
