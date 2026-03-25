import type { HTMLAttributes, ReactNode } from 'react';
type LoadingStateProps = HTMLAttributes<HTMLDivElement> & {
    title: ReactNode;
    description?: ReactNode;
    progress?: number;
};
export declare function LoadingState({ className, title, description, progress, ...props }: LoadingStateProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LoadingState.d.ts.map