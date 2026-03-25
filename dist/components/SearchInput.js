import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/Input';
export const SearchInput = forwardRef(function SearchInput({ className, containerClassName, ...props }, ref) {
    return (_jsxs("div", { className: cn('relative w-full', containerClassName), children: [_jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), _jsx(Input, { ref: ref, className: cn('pl-9', className), ...props })] }));
});
//# sourceMappingURL=SearchInput.js.map