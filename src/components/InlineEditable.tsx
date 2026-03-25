import { useState, type HTMLAttributes } from 'react';
import { Check, Pencil, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/styles/components';
import { Input } from '@/components/Input';

type InlineEditableProps = HTMLAttributes<HTMLDivElement> & {
  value: string;
  onSave?: (value: string) => void;
  placeholder?: string;
};

export function InlineEditable({ className, value, onSave, placeholder = 'Enter value', ...props }: InlineEditableProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  return (
    <div className={cn('flex items-center gap-2 rounded-lg border bg-card p-3', className)} {...props}>
      {editing ? (
        <Input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder={placeholder} className="flex-1" />
      ) : (
        <div className="flex-1 text-sm">{draft || placeholder}</div>
      )}
      {editing ? (
        <>
          <button type="button" className={buttonVariants({ variant: 'tertiary', size: 'icon-sm' })} onClick={() => { setEditing(false); onSave?.(draft); }}><Check className="h-4 w-4" /></button>
          <button type="button" className={buttonVariants({ variant: 'outline', size: 'icon-sm' })} onClick={() => { setDraft(value); setEditing(false); }}><X className="h-4 w-4" /></button>
        </>
      ) : (
        <button type="button" className={buttonVariants({ variant: 'outline', size: 'icon-sm' })} onClick={() => setEditing(true)}><Pencil className="h-4 w-4" /></button>
      )}
    </div>
  );
}
