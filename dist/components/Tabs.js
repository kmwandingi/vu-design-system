import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
const TabsContext = createContext(null);
function useTabsContext() {
    const context = useContext(TabsContext);
    if (!context)
        throw new Error('Tabs components must be used within <Tabs>.');
    return context;
}
export function Tabs({ className, defaultValue, value, onValueChange, children, ...props }) {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const currentValue = value ?? internalValue;
    const setValue = (nextValue) => {
        if (value === undefined)
            setInternalValue(nextValue);
        onValueChange?.(nextValue);
    };
    const contextValue = useMemo(() => ({ value: currentValue, setValue }), [currentValue]);
    return (_jsx(TabsContext.Provider, { value: contextValue, children: _jsx("div", { className: cn('flex flex-col gap-4', className), ...props, children: children }) }));
}
export function TabsList({ className, ...props }) {
    return _jsx("div", { className: cn('inline-flex h-10 w-fit items-center gap-1 rounded-xl bg-muted p-1', className), ...props });
}
export function TabsTrigger({ className, value, icon, children, ...props }) {
    const context = useTabsContext();
    const isActive = context.value === value;
    return (_jsxs("button", { type: "button", className: cn('inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors', isActive ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground', className), onClick: () => context.setValue(value), ...props, children: [icon, children] }));
}
export function TabsContent({ className, value, children, ...props }) {
    const context = useTabsContext();
    if (context.value !== value)
        return null;
    return _jsx("div", { className: cn('outline-none', className), ...props, children: children });
}
//# sourceMappingURL=Tabs.js.map