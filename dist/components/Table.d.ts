import { type HTMLAttributes, type TableHTMLAttributes, type TdHTMLAttributes, type ThHTMLAttributes } from 'react';
export type SortDirection = 'asc' | 'desc' | null;
type SortState = {
    column: string | null;
    direction: SortDirection;
};
type TableContextValue = {
    sort: SortState;
    onSort: (column: string) => void;
    sortableColumns: Set<string>;
    registerSortableColumn: (column: string) => void;
};
export declare function useTableContext(): TableContextValue | null;
type TableProps = TableHTMLAttributes<HTMLTableElement> & {
    sortable?: boolean;
    sortColumn?: string | null;
    sortDirection?: SortDirection;
    onSort?: (column: string, direction: SortDirection) => void;
};
export declare function Table({ className, sortable, sortColumn: controlledColumn, sortDirection: controlledDirection, onSort, children, ...props }: TableProps): import("react/jsx-runtime").JSX.Element;
type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement> & {
    sticky?: boolean;
};
export declare function TableHeader({ className, sticky, ...props }: TableHeaderProps): import("react/jsx-runtime").JSX.Element;
export declare function TableBody({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>): import("react/jsx-runtime").JSX.Element;
export declare function TableFooter({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>): import("react/jsx-runtime").JSX.Element;
type TableRowProps = HTMLAttributes<HTMLTableRowElement> & {
    selectable?: boolean;
    selected?: boolean;
    onSelect?: () => void;
};
export declare function TableRow({ className, selectable, selected, onSelect, ...props }: TableRowProps): import("react/jsx-runtime").JSX.Element;
type TableHeadProps = ThHTMLAttributes<HTMLTableCellElement> & {
    sortable?: boolean;
    sortKey?: string;
};
export declare function TableHead({ className, sortable, sortKey, children, ...props }: TableHeadProps): import("react/jsx-runtime").JSX.Element;
export declare function TableCell({ className, ...props }: TdHTMLAttributes<HTMLTableCellElement>): import("react/jsx-runtime").JSX.Element;
export declare function TableCaption({ className, ...props }: HTMLAttributes<HTMLElement>): import("react/jsx-runtime").JSX.Element;
export declare function useTableSort<T>(data: T[], initialColumn?: string, initialDirection?: SortDirection): {
    data: T[];
    sortColumn: string | null;
    sortDirection: SortDirection;
    onSort: (column: string, direction: SortDirection) => void;
};
export {};
//# sourceMappingURL=Table.d.ts.map