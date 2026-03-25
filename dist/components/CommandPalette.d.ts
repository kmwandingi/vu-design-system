import { type ReactNode } from 'react';
type CommandItem = {
    label: string;
    hint?: string;
    icon?: ReactNode;
};
type CommandPaletteProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    items: CommandItem[];
    title?: string;
    description?: string;
};
export declare function CommandPalette({ open, onOpenChange, items, title, description, }: CommandPaletteProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CommandPalette.d.ts.map