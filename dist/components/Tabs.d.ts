import { type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode } from 'react';
type TabsProps = HTMLAttributes<HTMLDivElement> & {
    defaultValue: string;
    value?: string;
    onValueChange?: (value: string) => void;
};
export declare function Tabs({ className, defaultValue, value, onValueChange, children, ...props }: TabsProps): import("react/jsx-runtime").JSX.Element;
export declare function TabsList({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
type TabsTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    value: string;
    icon?: ReactNode;
};
export declare function TabsTrigger({ className, value, icon, children, ...props }: TabsTriggerProps): import("react/jsx-runtime").JSX.Element;
type TabsContentProps = HTMLAttributes<HTMLDivElement> & {
    value: string;
};
export declare function TabsContent({ className, value, children, ...props }: TabsContentProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=Tabs.d.ts.map