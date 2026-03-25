import type { HTMLAttributes, ReactNode } from 'react';
type AIStateProps = HTMLAttributes<HTMLDivElement> & {
    title: ReactNode;
    description?: ReactNode;
    status?: ReactNode;
    progress?: number;
};
export declare function AIState({ className, title, description, status, progress, ...props }: AIStateProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AIState.d.ts.map