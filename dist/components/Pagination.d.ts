import type { AnchorHTMLAttributes, HTMLAttributes } from 'react';
export declare function Pagination({ className, ...props }: HTMLAttributes<HTMLElement>): import("react/jsx-runtime").JSX.Element;
export declare function PaginationContent({ className, ...props }: HTMLAttributes<HTMLUListElement>): import("react/jsx-runtime").JSX.Element;
export declare function PaginationItem(props: HTMLAttributes<HTMLLIElement>): import("react/jsx-runtime").JSX.Element;
type PaginationLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    isActive?: boolean;
};
export declare function PaginationLink({ className, isActive, ...props }: PaginationLinkProps): import("react/jsx-runtime").JSX.Element;
export declare function PaginationPrevious({ className, ...props }: PaginationLinkProps): import("react/jsx-runtime").JSX.Element;
export declare function PaginationNext({ className, ...props }: PaginationLinkProps): import("react/jsx-runtime").JSX.Element;
export declare function PaginationEllipsis({ className, ...props }: HTMLAttributes<HTMLSpanElement>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Pagination.d.ts.map