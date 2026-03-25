import type { HTMLAttributes, ReactNode } from 'react';
type KeyValueItem = {
    key: ReactNode;
    value: ReactNode;
};
type KeyValueListProps = HTMLAttributes<HTMLDListElement> & {
    items: KeyValueItem[];
};
export declare function KeyValueList({ className, items, ...props }: KeyValueListProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=KeyValueList.d.ts.map