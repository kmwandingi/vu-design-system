import { useMemo, useState, type ReactNode } from 'react';
import { Search } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/Dialog';
import { Input } from '@/components/Input';
import { cn } from '@/lib/utils';

type CommandItem = { label: string; hint?: string; icon?: ReactNode };

type CommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: CommandItem[];
  title?: string;
  description?: string;
};

export function CommandPalette({ open, onOpenChange, items, title = 'Command Palette', description = 'Search for an action', }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())), [items, query]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <div className="fixed inset-0 z-50">
        <div className="fixed inset-0 bg-black/50" onClick={() => onOpenChange(false)} />
        <DialogContent className="overflow-hidden p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className="border-b p-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input value={query} onChange={(event) => setQuery(event.target.value)} className="pl-9" placeholder="Type to search..." />
            </div>
          </div>
          <div className="max-h-[320px] overflow-y-auto p-2">
            {filtered.length === 0 ? <div className="py-8 text-center text-sm text-muted-foreground">No results found.</div> : filtered.map((item) => (
              <button key={item.label} type="button" className={cn('flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm hover:bg-muted')}>
                {item.icon}
                <span>{item.label}</span>
                {item.hint ? <span className="ml-auto text-xs text-muted-foreground">{item.hint}</span> : null}
              </button>
            ))}
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
}
