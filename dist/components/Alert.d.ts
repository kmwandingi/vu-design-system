import type { HTMLAttributes, ReactNode } from 'react';
import { type AlertVariants } from '../styles/components';
type AlertProps = HTMLAttributes<HTMLDivElement> & AlertVariants & {
    icon?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
};
export declare function Alert({ className, variant, icon, title, description, children, ...props }: AlertProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Alert.d.ts.map