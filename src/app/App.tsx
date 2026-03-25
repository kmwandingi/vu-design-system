import { useState } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/styles/components';
import { Icons } from '@/styles/icons';
import { CommandPalette, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogTitle, KeyValueList, Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from '@/index';
import { ShowcaseContent } from '@/app/ShowcaseContent';

export default function DesignSystemShowcase() {
  const [darkMode, setDarkMode] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <div className={cn('min-h-screen bg-background', darkMode && 'dark')}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-[1720px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-vu-blue flex items-center justify-center">
              <span className="text-white font-bold text-xl">VU</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Design System</h1>
              <p className="text-sm text-muted-foreground">Vrije Universiteit Amsterdam</p>
            </div>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={buttonVariants({ variant: 'outline', size: 'sm' })}
          >
            <Icons.Actions.Sun className="h-4 w-4 mr-2" />
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1720px] px-4 py-8 space-y-12 sm:px-6 lg:px-8">
        <ShowcaseContent
          onOpenCommand={() => setCommandOpen(true)}
          onOpenDialog={() => setDialogOpen(true)}
          onOpenSheet={() => setSheetOpen(true)}
        />

        {/* Footer */}
        <footer className="border-t pt-8 text-center text-muted-foreground">
          <p>VU Design System - Vrije Universiteit Amsterdam</p>
          <p className="text-sm mt-1">Built with Tailwind CSS, Radix UI, and Lucide Icons</p>
        </footer>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogOverlay onClick={() => setDialogOpen(false)} />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Shared modal pattern</DialogTitle>
              <DialogDescription>
                Use modal surfaces for short, high-focus decisions and confirmations that should temporarily take over the interface.
              </DialogDescription>
            </DialogHeader>
            <div className="rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground">
              This modal follows the same spacing, radius, and typographic language as the rest of the system.
            </div>
            <DialogFooter>
              <button className={buttonVariants({ variant: 'outline' })} onClick={() => setDialogOpen(false)}>Cancel</button>
              <button className={buttonVariants({ variant: 'primary' })} onClick={() => setDialogOpen(false)}>Confirm</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetContent side="right">
            <div className="flex h-full flex-col">
              <SheetHeader>
                <SheetTitle>Context sheet</SheetTitle>
                <SheetDescription>
                  Sheets are useful for secondary workflows, filters, details, or progressive disclosure without leaving the page.
                </SheetDescription>
              </SheetHeader>
              <div className="flex-1 space-y-4 p-5">
                <div className="rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground">
                  This example keeps the visual language aligned with cards, forms, and dashboards instead of introducing a separate aesthetic.
                </div>
                <KeyValueList
                  items={[
                    { key: 'Surface', value: 'Sheet / drawer' },
                    { key: 'Use case', value: 'Secondary tasks and contextual details' },
                  ]}
                />
              </div>
              <SheetFooter>
                <button className={buttonVariants({ variant: 'outline' })} onClick={() => setSheetOpen(false)}>Close</button>
                <button className={buttonVariants({ variant: 'secondary' })} onClick={() => setSheetOpen(false)}>Apply</button>
              </SheetFooter>
            </div>
          </SheetContent>
        </Sheet>

        <CommandPalette
          open={commandOpen}
          onOpenChange={setCommandOpen}
          items={[
            { label: 'Open shortlist', hint: '⌘K', icon: <Icons.Actions.Search className="h-4 w-4" /> },
            { label: 'Create research summary', hint: 'AI', icon: <Icons.Analytics.Activity className="h-4 w-4" /> },
            { label: 'Review evidence sources', hint: 'Docs', icon: <Icons.Documents.File className="h-4 w-4" /> },
          ]}
        />
      </main>
    </div>
  );
}
