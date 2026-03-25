import { type HTMLAttributes } from 'react';
type InlineEditableProps = HTMLAttributes<HTMLDivElement> & {
    value: string;
    onSave?: (value: string) => void;
    placeholder?: string;
};
export declare function InlineEditable({ className, value, onSave, placeholder, ...props }: InlineEditableProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=InlineEditable.d.ts.map