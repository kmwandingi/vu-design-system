import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback, createContext, useContext } from 'react';
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react';
import { cn } from '../lib/utils';
const TableContext = createContext(null);
export function useTableContext() {
    return useContext(TableContext);
}
export function Table({ className, sortable = false, sortColumn: controlledColumn, sortDirection: controlledDirection, onSort, children, ...props }) {
    const [internalSort, setInternalSort] = useState({ column: null, direction: null });
    const [sortableColumns, setSortableColumns] = useState(new Set());
    const isControlled = controlledColumn !== undefined;
    const currentSort = isControlled
        ? { column: controlledColumn || null, direction: controlledDirection || null }
        : internalSort;
    const handleSort = useCallback((column) => {
        const nextDirection = currentSort.column === column
            ? currentSort.direction === 'asc'
                ? 'desc'
                : currentSort.direction === 'desc'
                    ? null
                    : 'asc'
            : 'asc';
        const nextSort = nextDirection
            ? { column, direction: nextDirection }
            : { column: null, direction: null };
        if (!isControlled) {
            setInternalSort(nextSort);
        }
        onSort?.(column, nextDirection);
    }, [currentSort, isControlled, onSort]);
    const registerSortableColumn = useCallback((column) => {
        setSortableColumns(prev => new Set(prev).add(column));
    }, []);
    return (_jsx(TableContext.Provider, { value: {
            sort: currentSort,
            onSort: handleSort,
            sortableColumns,
            registerSortableColumn,
        }, children: _jsx("div", { className: "relative w-full overflow-x-auto rounded-lg border", children: _jsx("table", { className: cn('w-full caption-bottom text-sm', className), ...props, children: children }) }) }));
}
export function TableHeader({ className, sticky, ...props }) {
    return (_jsx("thead", { className: cn('[&_tr]:border-b bg-muted/40', sticky && 'sticky top-0 z-10', className), ...props }));
}
export function TableBody({ className, ...props }) {
    return _jsx("tbody", { className: cn('[&_tr:last-child]:border-0', className), ...props });
}
export function TableFooter({ className, ...props }) {
    return _jsx("tfoot", { className: cn('border-t bg-muted/40 font-medium', className), ...props });
}
export function TableRow({ className, selectable, selected, onSelect, ...props }) {
    return (_jsx("tr", { className: cn('border-b transition-colors', selectable && 'cursor-pointer', selected ? 'bg-muted' : 'hover:bg-muted/30', className), onClick: onSelect, ...props }));
}
export function TableHead({ className, sortable, sortKey, children, ...props }) {
    const context = useTableContext();
    const canSort = sortable && context && sortKey;
    const isSorted = canSort && context.sort.column === sortKey;
    const sortDirection = isSorted ? context.sort.direction : null;
    const SortIcon = () => {
        if (!canSort)
            return null;
        if (sortDirection === 'asc')
            return _jsx(ArrowUp, { className: "ml-2 h-3 w-3" });
        if (sortDirection === 'desc')
            return _jsx(ArrowDown, { className: "ml-2 h-3 w-3" });
        return _jsx(ArrowUpDown, { className: "ml-2 h-3 w-3 opacity-0 group-hover:opacity-50" });
    };
    const handleClick = () => {
        if (canSort && sortKey) {
            context.onSort(sortKey);
        }
    };
    return (_jsx("th", { className: cn('h-11 px-4 text-left align-middle text-sm font-medium text-foreground', canSort && 'cursor-pointer select-none', className), onClick: canSort ? handleClick : undefined, ...props, children: _jsxs("div", { className: cn('flex items-center', canSort && 'group'), children: [children, _jsx(SortIcon, {})] }) }));
}
export function TableCell({ className, ...props }) {
    return _jsx("td", { className: cn('px-4 py-3 align-middle text-sm', className), ...props });
}
export function TableCaption({ className, ...props }) {
    return _jsx("caption", { className: cn('mt-4 text-sm text-muted-foreground', className), ...props });
}
// Utility hook for sorting data
export function useTableSort(data, initialColumn, initialDirection = null) {
    const [sortColumn, setSortColumn] = useState(initialColumn || null);
    const [sortDirection, setSortDirection] = useState(initialDirection);
    const handleSort = useCallback((column, direction) => {
        setSortColumn(column);
        setSortDirection(direction);
    }, []);
    const sortedData = sortColumn && sortDirection
        ? [...data].sort((a, b) => {
            const aVal = a[sortColumn];
            const bVal = b[sortColumn];
            if (aVal === bVal)
                return 0;
            const comparison = aVal < bVal ? -1 : 1;
            return sortDirection === 'asc' ? comparison : -comparison;
        })
        : data;
    return {
        data: sortedData,
        sortColumn,
        sortDirection,
        onSort: handleSort,
    };
}
//# sourceMappingURL=Table.js.map