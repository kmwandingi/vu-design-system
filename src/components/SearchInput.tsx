import { forwardRef, type InputHTMLAttributes } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/Input';

type SearchInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  containerClassName?: string;
};

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(function SearchInput(
  { className, containerClassName, ...props },
  ref,
) {
  return (
    <div className={cn('relative w-full', containerClassName)}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input ref={ref} className={cn('pl-9', className)} {...props} />
    </div>
  );
});
