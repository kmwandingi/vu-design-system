# VU Design System - AI Assistant Skill

## Identity

You are an expert in the VU Design System, a comprehensive React component library built for VU-branded web applications. You understand the system taxonomy, component patterns, token usage, and best practices for building consistent, accessible interfaces.

## System Overview

The VU Design System is organized around **recurring UI situations** observed across VU projects (funding, matching, learning-platform, and AI-assisted interfaces).

### Core Principles

1. **Taxonomy-driven organization** — Components grouped by purpose, not just type
2. **VU brand alignment** — Colors, typography, and patterns reflect VU identity
3. **Package-first** — Everything consumable via `@vu/design-system`
4. **Accessibility by default** — WCAG 2.2 AA compliance built-in
5. **Composability** — Small primitives that compose into complex patterns

## Design Philosophy (CRITICAL)

The VU aesthetic is **academic clarity** — information-dense yet breathable, professional without being corporate, colorful only when communicating meaning.

### The Five Rules

1. **Restraint over abundance** — Default to grays. Use brand colors ONLY for:
   - Primary actions (buttons, links)
   - Status indicators (success, warning, error, info)
   - Data visualization
   - Never for decoration or "visual interest"

2. **Generous whitespace** — Cramped interfaces look unprofessional:
   - Cards: minimum `p-6` (24px)
   - Sections: `space-y-6` (24px gap)
   - Tables: row height `h-12` with `py-3`
   - Page padding: `p-8` (32px)

3. **Single primary action** — Only ONE button gets `variant="primary"` per view:
   - Primary: The main thing user should do
   - Secondary: `variant="outline"` or `variant="secondary"`
   - Tertiary: `variant="ghost"` or icon-only

4. **Subtle status indicators** — Status should be glanceable, not attention-grabbing:
   - ✅ `<span className="text-vu-blue-600">● Primary</span>`
   - ❌ `<Badge variant="primary">Primary</Badge>` (too heavy)
   - Use colored dots + text, not big badges

5. **Clear information hierarchy** — Users scan in F-patterns:
   - Section headers: `text-sm uppercase tracking-wider text-muted-foreground`
   - Page titles: `text-xl font-semibold`
   - Body: `text-sm text-foreground`
   - Secondary info: `text-sm text-muted-foreground`

### Standard Application Layout

```tsx
// Two-column layout (sidebar + main)
<div className="flex h-screen">
  <aside className="w-[280px] border-r bg-muted/30 p-6 flex flex-col gap-8">
    {/* Sidebar: Navigation, primary actions, stats */}
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
        Section Label
      </h3>
      <Button variant="primary" className="w-full">Primary Action</Button>
    </div>
  </aside>
  
  <main className="flex-1 p-8 overflow-auto">
    <PageHeader title="Page Title" description="What this page does" />
    
    <Card className="mt-6">
      {/* Main content */}
    </Card>
  </main>
</div>
```

### Color Usage Matrix

| Context | Correct | Incorrect |
|---------|---------|-----------|
| **Backgrounds** | White, `bg-muted`, `bg-card` | `bg-vu-blue-100`, `bg-vu-orange-50` |
| **Primary Action** | `variant="primary"` (VU Blue) | Multiple primary buttons |
| **Status** | Text + small dot | Large colored badges |
| **Cards** | Subtle border (`border`) | Heavy shadows, colored borders |
| **Text** | `text-foreground`, `text-muted-foreground` | Everything black |

### Data Table Pattern

**When to use:** Dense information display (20+ items)

```tsx
<Card>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-16 text-xs uppercase tracking-wider text-muted-foreground">
          ID
        </TableHead>
        <TableHead className="text-xs uppercase tracking-wider text-muted-foreground">
          Name
        </TableHead>
        <TableHead className="w-24 text-right">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {items.map((item) => (
        <TableRow key={item.id} className="h-12 hover:bg-muted/50">
          <TableCell className="font-mono text-xs text-muted-foreground">
            {item.id}
          </TableCell>
          <TableCell className="text-sm">{item.name}</TableCell>
          <TableCell className="text-right">
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</Card>
```

## Installation & Usage

### Install from GitHub

```bash
npm install github:kmwandingi/vu-design-system
```

### Local development

```bash
npm install /Users/k.n.m.mwandingivu.nl/Documents/Projects/vu-design-system
```

# Required peer dependencies
npm install react react-dom tailwindcss lucide-react class-variance-authority clsx tailwind-merge

```ts
// Import components
import { Button, Card, Alert, Input, Badge } from '@vu/design-system';

// Import styles (in app entry)
import '@vu/design-system/theme.css';

// Use Tailwind preset
import vuPreset from '@vu/design-system/tailwind.preset';
```

## System Taxonomy

### 1. Foundation
**Files:** `tailwind.preset.js`, `src/styles/theme.css`, `src/styles/icons.ts`

- **Tokens:** colors (vu-blue, vu-orange, vu-green, vu-purple), spacing, typography, shadows
- **Icons:** `Icons.Navigation`, `Icons.Status`, `Icons.Actions`, `Icons.Documents`, `Icons.Analytics`
- **Utilities:** `cn()` for class merging

### 2. Interface Components
**Files:** `src/components/Button.tsx`, `Badge.tsx`, `Card.tsx`, `Alert.tsx`, `Input.tsx`, `Checkbox.tsx`, `RadioGroup.tsx`, `Switch.tsx`

| Component | Variants | Key Props | Accessibility |
|-----------|----------|-----------|---------------|
| `Button` | primary, secondary, accent, tertiary, outline, ghost, subtle | `variant`, `size`, `disabled`, `href`, `asChild` | Focus ring, keyboard |
| `Badge` | primary, secondary, accent, success, warning, error, info, outline | `variant` | - |
| `Card` | default, elevated, interactive | `padding`, `variant` | - |
| `Alert` | semantic styling via className | `variant` (manual) | ARIA roles |
| `Input` | standard, valid, error states | - | Focus ring |
| `Checkbox` | checked, unchecked, indeterminate | `checked`, `onCheckedChange`, `disabled` | ARIA checkbox |
| `RadioGroup` | controlled/uncontrolled | `value`, `onValueChange`, `name` | ARIA radiogroup |
| `Switch` | on/off toggle | `checked`, `onCheckedChange`, `disabled` | ARIA switch |

### 3. Navigation & Workflow
**Files:** `Tabs.tsx`, `Dialog.tsx`, `Sheet.tsx`, `DropdownMenu.tsx`, `Stepper.tsx`, `Timeline.tsx`, `EmptyState.tsx`, `Select.tsx`

| Component | Purpose | Pattern | Accessibility |
|-----------|---------|---------|---------------|
| `Tabs` | Sub-view navigation | `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` | ARIA tabs |
| `Dialog` / `Modal` | Focused decisions | Full overlay with focus trap, scroll lock, escape close | ARIA dialog, focus trap |
| `Sheet` / `Drawer` | Secondary workflows | Side drawer with overlay | ARIA dialog |
| `DropdownMenu` | Action menus | `Trigger`, `Content`, `Item`, `Label`, `Separator`, checkbox/radio items | ARIA menu, keyboard nav |
| `Select` | Single-choice dropdown | `Select`, `Trigger`, `Value`, `Content`, `Item`, `Group`, `Label` | ARIA listbox, keyboard nav |
| `Stepper` | Multi-step flows | Horizontal progress with complete/current/upcoming | - |
| `Timeline` | Process narrative | Vertical step visualization | - |
| `EmptyState` | Zero-content handling | Icon + description + actions | - |

### 4. Data Display
**Files:** `StatCard.tsx`, `Table.tsx`, `KeyValueList.tsx`, `FilterBar.tsx`, `SearchInput.tsx`, `Pagination.tsx`, `ResultSummary.tsx`

| Component | Use Case |
|-----------|----------|
| `StatCard` | KPIs, metrics with trend |
| `Table` | Dense structured data with sorting support |
| `KeyValueList` | Definition-style data |
| `FilterBar` | Search + filter + actions |
| `SearchInput` | Embedded search field |
| `Pagination` | Large dataset navigation |
| `ResultSummary` | Recommendations, next steps |

### Table Sorting

Use the `useTableSort` hook for client-side sorting:

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, useTableSort } from '@vu/design-system';

const data = [{ name: 'A', value: 10 }, { name: 'B', value: 5 }];
const { data: sortedData, sortColumn, sortDirection, onSort } = useTableSort(data, { initialColumn: 'name', initialDirection: 'asc' });

<Table>
  <TableHeader>
    <TableRow>
      <TableHead sortable column="name" direction={sortColumn === 'name' ? sortDirection : undefined} onSort={onSort}>Name</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>{/* rows */}</TableBody>
</Table>
```

### 5. AI / Async
**Files:** `AIState.tsx`, `EvidenceCard.tsx`, `WorkflowAuditTimeline.tsx`, `CommandPalette.tsx`, `DataVisualShell.tsx`, `ActivityFeedItem.tsx`

| Component | Use Case |
|-----------|----------|
| `AIState` | Agent/reasoning status |
| `EvidenceCard` | Explainable outputs |
| `WorkflowAuditTimeline` | Reviewable AI actions |
| `CommandPalette` | Command-driven interaction |
| `DataVisualShell` | Chart/analytics containers |
| `ActivityFeedItem` | Update streams, events |

## Brand Colors

```
vu-blue:      #0077B3  (Primary action, links)
vu-orange:    #CC4100  (Accent, warnings, highlights)
vu-green:     #008053  (Success, positive trends)
vu-purple:    #3B2171  (Secondary, premium)
```

Each has a 50-900 scale: `bg-vu-blue-500`, `text-vu-blue-700`, etc.

## Common Patterns

### 5. Form Primitives

Accessible form components with built-in ARIA support:

**Checkbox**
```tsx
import { Checkbox, CheckboxIndicator, CheckboxLabel } from '@vu/design-system';

<Checkbox checked={checked} onCheckedChange={setChecked}>
  <CheckboxIndicator />
  <CheckboxLabel>Accept terms</CheckboxLabel>
</Checkbox>
```

**RadioGroup**
```tsx
import { RadioGroup, Radio, RadioIndicator, RadioLabel } from '@vu/design-system';

<RadioGroup value={value} onValueChange={setValue}>
  <Radio value="a">
    <RadioIndicator />
    <RadioLabel>Option A</RadioLabel>
  </Radio>
  <Radio value="b">
    <RadioIndicator />
    <RadioLabel>Option B</RadioLabel>
  </Radio>
</RadioGroup>
```

**Switch**
```tsx
import { Switch } from '@vu/design-system';

<Switch checked={on} onCheckedChange={setOn} />
```

**Select (with keyboard navigation)**
```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@vu/design-system';

<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select option..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="a">Option A</SelectItem>
    <SelectItem value="b">Option B</SelectItem>
  </SelectContent>
</Select>
```

### Loading States
```tsx
import { LoadingState, Spinner, Progress, Skeleton } from '@vu/design-system';

// Full card
<LoadingState title="Processing" description="Analyzing data..." progress={45} />

// Inline
<Spinner size="md" variant="primary" />
<Progress value={68} variant="primary" />

// Content placeholder
<Skeleton variant="text" />
```

### Data Presentation
```tsx
import { StatCard, StatusPanel, KeyValueList } from '@vu/design-system';

<StatCard 
  label="Completion" 
  value="82%" 
  trend="+6.4%" 
  icon={<Icons.Analytics.TrendingUp />}
/>

<StatusPanel 
  title="In progress" 
  description="Processing your request" 
  progress={58}
  variant="info"
/>
```

## Best Practices

1. **Always import theme.css** in your app entry point
2. **Use the Tailwind preset** for token consistency
3. **Prefer composed components** (FormField, LoadingState) over raw primitives
4. **Use semantic colors** for status: success=green, warning=orange, error=red, info=blue
5. **Icons communicate meaning** — use colored icons intentionally
6. **Accessibility:** All interactive components have proper ARIA, focus rings, keyboard support

## File Locations

```
src/
  components/          # All 30+ reusable components
  styles/
    components.ts    # Variant contracts (buttonVariants, badgeVariants, etc.)
    icons.ts         # Icon registry
    theme.css        # CSS tokens and variables
  lib/
    utils.ts         # cn() utility
  index.ts           # Public exports
  app/               # Showcase (not packaged)

tailwind.preset.js   # Downstream Tailwind config
```

## Build Commands

```bash
# Showcase dev server
npm run dev

# Build showcase
npm run build

# Build library for consumption
npm run build:lib

# Prepare (runs build:lib automatically on install)
npm run prepare
```

## Testing Installation

```bash
cd /path/to/your-project
npm install github:kmwandingi/vu-design-system
```

Then import and use any component.

## When Helping Users

1. **Check the taxonomy** — suggest the right component family for their use case
2. **Import correctly** — ensure they're importing from `@vu/design-system`
3. **Verify theme.css** — remind if styles aren't applying
4. **Suggest variants** — use the variant system (buttonVariants, badgeVariants) for consistency
5. **Icon guidance** — recommend semantic icon choices and colors
6. **Composition patterns** — show how small primitives compose (FormField wraps Input, etc.)

## Quick Reference: Import Map

```ts
// Foundation
import { cn, Icons } from '@vu/design-system';
import buttonVariants, badgeVariants, cardStyles from '@vu/design-system';

// Components (40+ available)
import {
  Button, Badge, Card, Alert, Input, Textarea,
  Checkbox, CheckboxIndicator, CheckboxLabel,
  RadioGroup, Radio, RadioIndicator, RadioLabel,
  Switch,
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectSeparator,
  FormField, EmptyState, PageHeader, SectionHeader,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Dialog, Modal, Sheet, Drawer, DropdownMenu, DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuRadioItem,
  Progress, ProgressDots, Stepper, Skeleton, Spinner, Separator, LoadingState, Timeline,
  StatCard, StatusPanel, ResultSummary, ActivityFeedItem,
  KeyValueList, Table, useTableSort, FilterBar, SearchInput, Pagination,
  AIState, EvidenceCard, WorkflowAuditTimeline, CommandPalette,
  InlineEditable, DataVisualShell,
} from '@vu/design-system';
```

## Documentation

- Full showcase: `npm run dev` in design system folder
- Screenshots: `screenshots/` folder (captured via Playwright)
- Plan & decisions: `PLAN.md`
- This skill file: `.claude/skills.md` or `.windsurf/skill.md`
