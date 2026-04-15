import type { HTMLAttributes, ReactNode } from 'react';
type KeyValueItem = {
    key: ReactNode;
    value: ReactNode;
};
type KeyValueListProps = HTMLAttributes<HTMLDListElement> & {
    items: KeyValueItem[];
    size?: 'default' | 'compact';
    keyWidthClassName?: string;
};
export declare function KeyValueList({ className, items, size, keyWidthClassName, ...props }: KeyValueListProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=KeyValueList.d.ts.map