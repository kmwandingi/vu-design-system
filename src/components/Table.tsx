import { useState, useCallback, createContext, useContext, type HTMLAttributes, type TableHTMLAttributes, type TdHTMLAttributes, type ThHTMLAttributes } from 'react';
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

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

const TableContext = createContext<TableContextValue | null>(null);

export function useTableContext() {
  return useContext(TableContext);
}

type TableProps = TableHTMLAttributes<HTMLTableElement> & {
  sortable?: boolean;
  sortColumn?: string | null;
  sortDirection?: SortDirection;
  onSort?: (column: string, direction: SortDirection) => void;
};

export function Table({
  className,
  sortable = false,
  sortColumn: controlledColumn,
  sortDirection: controlledDirection,
  onSort,
  children,
  ...props
}: TableProps) {
  const [internalSort, setInternalSort] = useState<SortState>({ column: null, direction: null });
  const [sortableColumns, setSortableColumns] = useState<Set<string>>(new Set());

  const isControlled = controlledColumn !== undefined;
  const currentSort: SortState = isControlled
    ? { column: controlledColumn || null, direction: controlledDirection || null }
    : internalSort;

  const handleSort = useCallback((column: string) => {
    const nextDirection: SortDirection =
      currentSort.column === column
        ? currentSort.direction === 'asc'
          ? 'desc'
          : currentSort.direction === 'desc'
            ? null
            : 'asc'
        : 'asc';

    const nextSort: SortState = nextDirection
      ? { column, direction: nextDirection }
      : { column: null, direction: null };

    if (!isControlled) {
      setInternalSort(nextSort);
    }
    onSort?.(column, nextDirection);
  }, [currentSort, isControlled, onSort]);

  const registerSortableColumn = useCallback((column: string) => {
    setSortableColumns(prev => new Set(prev).add(column));
  }, []);

  return (
    <TableContext.Provider
      value={{
        sort: currentSort,
        onSort: handleSort,
        sortableColumns,
        registerSortableColumn,
      }}
    >
      <div className="relative w-full overflow-x-auto rounded-lg border">
        <table className={cn('w-full caption-bottom text-sm', className)} {...props}>
          {children}
        </table>
      </div>
    </TableContext.Provider>
  );
}

type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement> & {
  sticky?: boolean;
};

export function TableHeader({ className, sticky, ...props }: TableHeaderProps) {
  return (
    <thead
      className={cn(
        '[&_tr]:border-b bg-muted/40',
        sticky && 'sticky top-0 z-10',
        className
      )}
      {...props}
    />
  );
}

export function TableBody({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn('[&_tr:last-child]:border-0', className)} {...props} />;
}

export function TableFooter({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return <tfoot className={cn('border-t bg-muted/40 font-medium', className)} {...props} />;
}

type TableRowProps = HTMLAttributes<HTMLTableRowElement> & {
  selectable?: boolean;
  selected?: boolean;
  onSelect?: () => void;
};

export function TableRow({ className, selectable, selected, onSelect, ...props }: TableRowProps) {
  return (
    <tr
      className={cn(
        'border-b transition-colors',
        selectable && 'cursor-pointer',
        selected ? 'bg-muted' : 'hover:bg-muted/30',
        className
      )}
      onClick={onSelect}
      {...props}
    />
  );
}

type TableHeadProps = ThHTMLAttributes<HTMLTableCellElement> & {
  sortable?: boolean;
  sortKey?: string;
};

export function TableHead({ className, sortable, sortKey, children, ...props }: TableHeadProps) {
  const context = useTableContext();
  const canSort = sortable && context && sortKey;

  const isSorted = canSort && context.sort.column === sortKey;
  const sortDirection = isSorted ? context.sort.direction : null;

  const SortIcon = () => {
    if (!canSort) return null;
    if (sortDirection === 'asc') return <ArrowUp className="ml-2 h-3 w-3" />;
    if (sortDirection === 'desc') return <ArrowDown className="ml-2 h-3 w-3" />;
    return <ArrowUpDown className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-50" />;
  };

  const handleClick = () => {
    if (canSort && sortKey) {
      context.onSort(sortKey);
    }
  };

  return (
    <th
      className={cn(
        'h-11 px-4 text-left align-middle text-sm font-medium text-foreground',
        canSort && 'cursor-pointer select-none',
        className
      )}
      onClick={canSort ? handleClick : undefined}
      {...props}
    >
      <div className={cn('flex items-center', canSort && 'group')}>
        {children}
        <SortIcon />
      </div>
    </th>
  );
}

export function TableCell({ className, ...props }: TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={cn('px-4 py-3 align-middle text-sm', className)} {...props} />;
}

export function TableCaption({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <caption className={cn('mt-4 text-sm text-muted-foreground', className)} {...props} />;
}

// Utility hook for sorting data
export function useTableSort<T>(
  data: T[],
  initialColumn?: string,
  initialDirection: SortDirection = null
) {
  const [sortColumn, setSortColumn] = useState<string | null>(initialColumn || null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(initialDirection);

  const handleSort = useCallback((column: string, direction: SortDirection) => {
    setSortColumn(column);
    setSortDirection(direction);
  }, []);

  const sortedData = sortColumn && sortDirection
    ? [...data].sort((a, b) => {
        const aVal = (a as Record<string, string | number>)[sortColumn];
        const bVal = (b as Record<string, string | number>)[sortColumn];

        if (aVal === bVal) return 0;

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
