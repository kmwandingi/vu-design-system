# VU Design Manual

## Philosophy

The VU Design System embodies **academic clarity** — information-dense interfaces that remain breathable and professional. Every element serves a purpose. Color is intentional, not decorative. Whitespace creates hierarchy, not emptiness.

### Core Principles

1. **Restraint over abundance** — Use color only to communicate meaning
2. **Information hierarchy** — Users should scan and find what matters
3. **Breathing room** — Generous padding reduces cognitive load
4. **Consistency in density** — Data-heavy can still be clean
5. **Progressive disclosure** — Show what's needed, when it's needed

---

## Layout Patterns

### Two-Column Application Layout

The standard application structure (as seen in SharePoint Duplicate Detection):

```
┌─────────────────────────────────────────────────────────┐
│  Header (minimal, breadcrumb or title only)              │
├──────────┬────────────────────────────────────────────────┤
│          │                                                │
│  Sidebar │  Main Content                                  │
│  280px   │  (flexible)                                   │
│  fixed   │                                                │
│          │  • Data tables, forms, or dashboard cards     │
│  • Nav   │  • Primary actions in context                 │
│  • Meta  │  • Secondary actions subtle                   │
│          │                                                │
└──────────┴────────────────────────────────────────────────┘
```

**Rules:**
- Sidebar: `w-[280px]`, `border-r`, `bg-muted/30`
- Main content: `flex-1`, `p-8` minimum padding
- Header: `h-14`, `border-b`, minimal visual weight

### Sidebar Navigation Pattern

```tsx
<aside className="w-[280px] border-r bg-muted/30 p-6 flex flex-col gap-8">
  {/* Section 1: Primary Actions */}
  <div className="space-y-3">
    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
      Step Label
    </h3>
    <Button variant="primary" className="w-full">
      Primary Action
    </Button>
    
    {/* Status meta */}
    <div className="text-sm text-muted-foreground space-y-1">
      <div className="flex justify-between">
        <span>Label:</span>
        <span className="text-foreground font-medium">Value</span>
      </div>
    </div>
  </div>
  
  {/* Section 2: Progress/Stats */}
  <div className="space-y-3">
    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
      Results
    </h3>
    <div className="grid grid-cols-2 gap-3">
      <StatCard compact value="7" label="Clusters" />
      <StatCard compact value="30" label="Duplicates" />
    </div>
  </div>
</aside>
```

### Data Table Layout

**When to use:** Dense information display where users scan multiple items.

```tsx
<main className="flex-1 p-8">
  <PageHeader title="Analysis Results" description="Review and take action" />
  
  <Card className="mt-6">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-16">Cluster</TableHead>
          <TableHead>Filename</TableHead>
          <TableHead className="w-24">Size</TableHead>
          <TableHead className="w-32">Role</TableHead>
          <TableHead className="w-32">Classification</TableHead>
          <TableHead className="w-24">Score</TableHead>
          <TableHead className="w-24">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* Rows */}
      </TableBody>
    </Table>
  </Card>
</main>
```

**Table Rules:**
- Use `Card` as container, not bare table
- Column widths: Explicit classes (`w-24`, `w-32`) prevent shifting
- Header: `text-muted-foreground uppercase text-xs tracking-wider`
- Row hover: `hover:bg-muted/50`
- Actions column: Right-aligned, subtle buttons

---

## Component Composition Rules

### Primary Action Pattern

**Context:** One main action per view/section.

```tsx
// CORRECT - Single prominent primary
<Button variant="primary" size="lg" className="w-full">
  <Icons.Actions.Play className="mr-2 h-4 w-4" />
  Detect Duplicates
</Button>

// INCORRECT - Multiple competing primaries
<Button variant="primary">Detect</Button>
<Button variant="primary">Export</Button>
<Button variant="primary">Settings</Button>
```

### Secondary Actions Pattern

**Rule:** Secondary actions must be visually subordinate.

```tsx
// CORRECT - Outline or ghost variants
<div className="flex gap-2">
  <Button variant="outline" size="sm">Export</Button>
  <Button variant="ghost" size="sm">Filter</Button>
</div>

// CORRECT - Icon-only for familiar actions
<Button variant="ghost" size="icon">
  <Icons.Actions.Download className="h-4 w-4" />
</Button>
```

### Status Display Pattern

**Rule:** Status should be glanceable, not attention-grabbing.

```tsx
// CORRECT - Subtle inline text with color
<span className="text-vu-blue-600 font-medium">● Primary</span>
<span className="text-muted-foreground">Duplicate of A.docx</span>
<span className="text-vu-orange-600">Suspected duplicate</span>

// INCORRECT - Heavy badges everywhere
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Duplicate</Badge>
```

### Form Layout Pattern

```tsx
<form className="space-y-6">
  {/* Section with header */}
  <div className="space-y-4">
    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
      Configuration
    </h3>
    
    <div className="grid gap-4 sm:grid-cols-2">
      <FormField label="Similarity Threshold" description="0.0 to 1.0">
        <Input type="number" step="0.1" min="0" max="1" defaultValue="0.7" />
      </FormField>
      
      <FormField label="Folder Path">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select folder..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="folder1">KM Testfiles</SelectItem>
          </SelectContent>
        </Select>
      </FormField>
    </div>
  </div>
  
  {/* Checkbox pattern */}
  <div className="flex items-start gap-3">
    <input type="checkbox" id="dry-run" className="mt-1" />
    <label htmlFor="dry-run" className="text-sm">
      <span className="font-medium text-foreground">Dry run (preview only)</span>
      <p className="text-muted-foreground">Tag files without modifying SharePoint</p>
    </label>
  </div>
</form>
```

---

## Color Philosophy

### The Restraint Rule

**Primary rule:** Default to grays. Use brand colors only for:
1. Primary actions (buttons, links)
2. Status indicators (success, warning, error)
3. Data visualization
4. Brand moments (logos, headers)

### Color Usage Matrix

| Context | Color | Usage |
|---------|-------|-------|
| **Backgrounds** | White, `bg-muted`, `bg-card` | 95% of surfaces |
| **Text** | `text-foreground`, `text-muted-foreground` | All typography |
| **Primary Actions** | VU Blue | CTAs, submit, confirm |
| **Secondary Actions** | VU Purple | Alternative actions |
| **Accent/Warning** | VU Orange | Highlights, caution, attention |
| **Success** | VU Green | Completion, positive status |
| **Error** | Red | Destructive, validation errors |

### Anti-Patterns (NEVER DO)

```tsx
// ❌ DON'T: Color for decoration
<Card className="border-vu-blue-500 shadow-vu-blue">
  {/* Content */}
</Card>

// ❌ DON'T: Multiple brand colors in one view
<Button variant="primary">Blue</Button>
<Button variant="accent">Orange</Button>
<Button variant="tertiary">Green</Button>

// ❌ DON'T: Bright backgrounds
<div className="bg-vu-blue-100 p-4">
  {/* Content */}
</div>
```

### Correct Patterns

```tsx
// ✅ DO: White cards, subtle borders
<Card className="border">
  <CardHeader className="border-b bg-muted/30">
    <CardTitle>Section Title</CardTitle>
  </CardHeader>
  <CardContent className="p-6">
    {/* Content */}
  </CardContent>
</Card>

// ✅ DO: Single primary, rest secondary/ghost
<div className="flex gap-2">
  <Button variant="primary">Save Changes</Button>
  <Button variant="outline">Cancel</Button>
  <Button variant="ghost">Delete</Button>
</div>

// ✅ DO: Status as subtle text with semantic color
<div className="flex items-center gap-2">
  <span className="h-2 w-2 rounded-full bg-vu-green-500" />
  <span className="text-sm text-muted-foreground">Active</span>
</div>
```

---

## Spacing Philosophy

### Density Scale

| Density | Use Case | Classes |
|---------|----------|---------|
| **Compact** | Dense data tables, admin lists | `p-3`, `gap-2`, `space-y-2` |
| **Standard** | Forms, cards, modals | `p-6`, `gap-4`, `space-y-4` |
| **Spacious** | Landing pages, empty states | `p-8`, `gap-6`, `space-y-6` |

### Section Spacing Rule

Sections within a page need clear visual separation:

```tsx
// ✅ CORRECT - Clear section breaks
<main className="p-8 space-y-8">
  <section>
    <h2 className="text-lg font-semibold mb-4">Configuration</h2>
    <Card className="p-6">...</Card>
  </section>
  
  <Separator />
  
  <section>
    <h2 className="text-lg font-semibold mb-4">Results</h2>
    <Card className="p-6">...</Card>
  </section>
</main>

// ❌ INCORRECT - Unclear boundaries
<main className="p-4">
  <h2>Config</h2>
  <Card>...</Card>
  <h2>Results</h2>
  <Card>...</Card>
</main>
```

### Table Row Spacing

```tsx
<TableRow className="h-12">
  {/* Content with py-3 for vertical centering */}
</TableRow>
```

---

## Typography Hierarchy

### Data-Heavy Interface Scale

| Element | Size | Weight | Color | Usage |
|---------|------|--------|-------|-------|
| Page Title | `text-xl` | `font-semibold` | `foreground` | Top-level header |
| Section Header | `text-sm` | `font-medium` | `muted-foreground` uppercase | Card headers, form sections |
| Table Header | `text-xs` | `font-medium` | `muted-foreground` uppercase tracking-wider | Column labels |
| Body | `text-sm` | `font-normal` | `foreground` | Primary content |
| Secondary | `text-sm` | `font-normal` | `muted-foreground` | Descriptions, meta |
| Tertiary | `text-xs` | `font-normal` | `muted-foreground` | Timestamps, IDs |

### Monospace for Data

```tsx
// File sizes, IDs, timestamps
<code className="text-xs font-mono text-muted-foreground">
  15071.5 KB
</code>
```

---

## State Patterns

### Loading States

**Rule:** Show progress without blocking the entire interface.

```tsx
// ✅ Progressive loading - table skeleton
<Card>
  <Table>
    <TableHeader>...</TableHeader>
    <TableBody>
      {[1,2,3].map((i) => (
        <TableRow key={i}>
          <TableCell><Skeleton className="h-4 w-12" /></TableCell>
          <TableCell><Skeleton className="h-4 w-full" /></TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</Card>

// ✅ Action loading - button state
<Button variant="primary" disabled>
  <Spinner size="sm" className="mr-2" />
  Processing...
</Button>

// ✅ Full-page loading - only for initial load
<LoadingState 
  title="Indexing documents" 
  description="Scanning files for duplicates..."
  progress={45}
/>
```

### Empty States

```tsx
// ✅ Contextual empty state
<Card className="p-12">
  <EmptyState
    icon={<Icons.Documents.Folder className="h-12 w-12 text-muted-foreground/50" />}
    title="No documents found"
    description="Select a folder to begin analysis"
    action={<Button variant="outline">Select Folder</Button>}
  />
</Card>
```

### Error States

```tsx
// ✅ Inline error - subtle but clear
<div className="rounded-md border border-red-200 bg-red-50 p-4">
  <div className="flex gap-3">
    <Icons.Status.AlertTriangle className="h-5 w-5 text-red-600" />
    <div>
      <h4 className="text-sm font-medium text-red-900">Analysis failed</h4>
      <p className="text-sm text-red-700 mt-1">
        Unable to connect to SharePoint. Check credentials and try again.
      </p>
    </div>
  </div>
</div>

// ❌ DON'T: Error as alert banner (too heavy)
<Alert variant="destructive">Error message</Alert>
```

---

## Data Display Guidelines

### When to Use What

| Data Type | Component | Example |
|-----------|-----------|---------|
| List of items (5-20) | `Card` with rows | Settings, simple lists |
| Tabular data (20+) | `Table` | Results, logs, analytics |
| Key-value pairs | `KeyValueList` | Details panel, metadata |
| Metrics/KPIs | `StatCard` | Dashboard, summaries |
| Hierarchical | `Timeline` or nested `Card` | Processes, history |

### Table vs Card Decision Tree

```
Need comparison across items? → Table
Need rich content per item (images, descriptions)? → Card
Need both? → Expandable table rows or master-detail
```

### Action Placement

```tsx
// ✅ Row actions - subtle, discoverable
<TableCell className="text-right">
  <DropdownMenu
    trigger={<Button variant="ghost" size="icon"><MoreHorizontal /></Button>}
  >
    <DropdownMenuItem>View</DropdownMenuItem>
    <DropdownMenuItem>Tag</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
  </DropdownMenu>
</TableCell>

// ✅ Bulk actions - above table
<div className="flex items-center justify-between mb-4">
  <div className="flex items-center gap-2">
    <Checkbox />
    <span className="text-sm text-muted-foreground">
      {selectedCount} selected
    </span>
  </div>
  <div className="flex gap-2">
    <Button variant="outline" size="sm">Tag Selected</Button>
    <Button variant="outline" size="sm" className="text-red-600">
      Delete Selected
    </Button>
  </div>
</div>
```

---

## Do and Don't

### Layout

| ✅ DO | ❌ DON'T |
|-------|----------|
| Generous padding (`p-6` minimum for cards) | Cramped content (`p-2` on containers) |
| Clear section separation with `Separator` | Walls of content without breaks |
| Consistent 8px grid (space-2, space-4, space-8) | Arbitrary spacing values |
| Fixed sidebar width (280px) | Fluid sidebars that compress content |

### Color

| ✅ DO | ❌ DON'T |
|-------|----------|
| Default to white/muted backgrounds | Colored backgrounds for containers |
| Single primary action per view | Multiple competing primary buttons |
| Subtle status indicators (text + small dot) | Big colored badges everywhere |
| Brand colors only for actions and status | Brand colors for decoration |

### Typography

| ✅ DO | ❌ DON'T |
|-------|----------|
| Uppercase tracking-wider for section headers | All-caps body text |
| Monospace for file sizes, IDs, timestamps | Monospace for everything |
| 3-level hierarchy max (title → section → body) | 5+ font sizes on one screen |
| Muted color for secondary info | Everything black/dark |

### Components

| ✅ DO | ❌ DON'T |
|-------|----------|
| Ghost buttons for icon actions | Solid buttons for everything |
| Dropdown menus for 3+ actions | Buttons visible for every possible action |
| Card containers for table views | Bare tables without context |
| Skeleton loading for progressive data | Full-page spinner for everything |

### Spacing

| ✅ DO | ❌ DON'T |
|-------|----------|
| `space-y-6` between major sections | Everything crammed together |
| `gap-4` for related elements | `gap-8` for everything |
| Consistent vertical rhythm | Random spacing between similar elements |
| `h-px` separators between sections | Thick borders or shadows as dividers |

---

## Quick Reference: Component Combinations

### Standard Application Page

```tsx
<div className="flex h-screen">
  <aside className="w-[280px] border-r bg-muted/30 p-6">
    {/* Sidebar content */}
  </aside>
  
  <main className="flex-1 overflow-auto p-8">
    <PageHeader 
      title="Page Title" 
      description="What this page does"
    />
    
    <Card className="mt-6">
      {/* Main content */}
    </Card>
  </main>
</div>
```

### Data Results Page

```tsx
<main className="flex-1 p-8">
  <div className="flex items-center justify-between">
    <div>
      <h1 className="text-xl font-semibold">Results</h1>
      <p className="text-sm text-muted-foreground">
        {count} items found
      </p>
    </div>
    <div className="flex gap-2">
      <Button variant="outline" size="sm">Export</Button>
      <Button variant="primary" size="sm">Action</Button>
    </div>
  </div>
  
  <Card className="mt-6">
    <Table>
      {/* Table content */}
    </Table>
  </Card>
  
  <div className="mt-4 flex justify-end">
    <Pagination />
  </div>
</main>
```

### Configuration Form

```tsx
<Card className="max-w-2xl">
  <CardHeader className="border-b bg-muted/30">
    <CardTitle>Configuration</CardTitle>
    <CardDescription>Set your preferences</CardDescription>
  </CardHeader>
  
  <CardContent className="p-6 space-y-6">
    <div className="grid gap-4 sm:grid-cols-2">
      <FormField label="Field 1">
        <Input />
      </FormField>
      <FormField label="Field 2">
        <Select>...</Select>
      </FormField>
    </div>
    
    <Separator />
    
    <div className="flex justify-end gap-2">
      <Button variant="outline">Cancel</Button>
      <Button variant="primary">Save Changes</Button>
    </div>
  </CardContent>
</Card>
```

---

## For AI Agents

When building interfaces with this design system:

1. **Start with white space** — Default to white/muted backgrounds
2. **One primary action** — Only one button gets `variant="primary"`
3. **Restrain color** — Use semantic colors only for status and actions
4. **Generous padding** — Cards need `p-6`, sections need `space-y-6`
5. **Clear hierarchy** — Use section headers with uppercase tracking
6. **Data in tables** — Dense info belongs in tables, not card lists
7. **Subtle status** — Use text + small dot, not big badges
8. **Progressive disclosure** — Don't show all actions, use dropdowns

Before implementing, ask:
- Is this color communicating meaning or just decorating?
- Is there more than one primary action visible?
- Would a user know where to look first?
- Is there enough breathing room between sections?
