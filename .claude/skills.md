# VU Design System - AI Assistant Skill

## Identity

You are an expert in the VU Design System, a comprehensive React component library built for VU-branded web applications. You understand the system taxonomy, component patterns, token usage, and best practices for building consistent, accessible interfaces.

## System Overview

The VU Design System is organized around **recurring UI situations** observed across VU projects.

### Core Principles

1. **Taxonomy-driven organization** — Components grouped by purpose, not just type
2. **VU brand alignment** — Colors, typography, and patterns reflect VU identity
3. **Package-first** — Everything consumable via `@vu/design-system`
4. **Accessibility by default** — WCAG 2.2 AA compliance built-in
5. **Composability** — Small primitives that compose into complex patterns
6. **Showcase fidelity** — Downstream applications should feel like the showcase, not like generic apps with VU-colored buttons

## Design Philosophy (CRITICAL)

The VU aesthetic is **academic clarity** — information-dense yet breathable, professional without being corporate, colorful only when communicating meaning.

### Non-Negotiable Adoption Rule

When applying this design system to another product, do **not** stop at primitive replacement.

The target is **showcase-level adoption of the whole interface language**:

- page framing must resemble the showcase
- spacing rhythm must resemble the showcase
- headers and sections must resemble the showcase
- cards, status surfaces, summaries, and filter rows must resemble the showcase
- button hierarchy, icon treatment, and status color usage must resemble the showcase

If a page imports `Button`, `Card`, and `Input` but still looks generic or flat, the design-system adoption is **incomplete**.

Agents should optimize for the **look and feel of the whole page**, not mere component presence.

### The Five Rules

1. **Color with purpose AND depth** — Modern interfaces need visual interest. Use color for:
   - Primary actions (buttons, links) — VU Blue
   - Status indicators (success, warning, error, info)
   - Data visualization
   - **Visual hierarchy through color shades** — lighter tints for subtle, deeper tones for emphasis
   - **Sidebar accents** — `bg-vu-blue-50` or `bg-slate-50` instead of flat white
   - **Card highlights** — left-border accents (`border-l-2 border-vu-blue-500`), subtle background tints (`bg-vu-blue-50/50`)
   - **Section differentiation** — alternating `bg-muted/30` and `bg-slate-50`, not everything white
   - **Active/selected states** — `bg-vu-blue-100` for selected items, `bg-orange-50` for warnings

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
  <aside className="w-[280px] border-r bg-slate-50 p-6 flex flex-col gap-8">
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

### Showcase-First Composition Rule

When redesigning or upgrading an application, follow this order:

1. Start from the **showcase patterns**, not from local ad hoc markup.
2. Use shared page-level compositions first:
   - `PageHeader`
   - `SectionHeader`
   - `FormField`
   - `LoadingState`
   - `StatusPanel`
   - `AIState`
   - `StatCard`
   - `FilterBar`
   - `SearchInput`
   - `ResultSummary`
   - `EmptyState`
   - `KeyValueList`
3. Only fall back to primitives when the composition layer truly does not fit.
4. If a page still needs a local wrapper, first ask whether the wrapper should become a reusable design-system pattern.

The goal is not "use more components." The goal is **make the app feel like the showcase**.

### Whole-Page Feel Checklist

Before considering a downstream page aligned with the design system, verify:

- `PageHeader` or an equivalent top-level system header is used
- sections use system spacing and rhythm, not ad hoc margins
- cards use system variants and padding
- search/filter/action areas use `FilterBar` and `SearchInput` where appropriate
- forms use `FormField` rather than bespoke label/helper/error wrappers
- status/loading/review surfaces use `LoadingState`, `StatusPanel`, `AIState`, or `ResultSummary`
- metrics use `StatCard` rather than one-off KPI boxes
- metadata inspection uses `KeyValueList` rather than hand-built rows
- buttons reflect a single-primary-action hierarchy
- brand colors are semantic and restrained, never decorative

If several of these are missing, the page is **not yet truly on the design system**.

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

**Table Rules:**
- Always wrap in `Card`
- Headers: uppercase, tracking-wider, muted-foreground
- Row height: `h-12` with hover state
- IDs/timestamps: monospace, muted
- Actions: right-aligned, ghost buttons

### Form Pattern

```tsx
<form className="space-y-6">
  <div className="space-y-4">
    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
      Configuration
    </h3>
    
    <div className="grid gap-4 sm:grid-cols-2">
      <FormField label="Field Name" description="Helper text">
        <Input />
      </FormField>
      
      <FormField label="Selection">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="opt1">Option 1</SelectItem>
          </SelectContent>
        </Select>
      </FormField>
    </div>
  </div>
  
  <Separator />
  
  <div className="flex justify-end gap-2">
    <Button variant="outline">Cancel</Button>
    <Button variant="primary">Save Changes</Button>
  </div>
</form>
```

### Loading States

```tsx
// Progressive loading - skeleton rows in table
<TableBody>
  {isLoading ? (
    Array.from({ length: 3 }).map((_, i) => (
      <TableRow key={i}>
        <TableCell><Skeleton className="h-4 w-12" /></TableCell>
        <TableCell><Skeleton className="h-4 w-full" /></TableCell>
      </TableRow>
    ))
  ) : (
    data.map((item) => <TableRow>...</TableRow>)
  )}
</TableBody>

// Button loading state
<Button variant="primary" disabled>
  <Spinner size="sm" className="mr-2" />
  Processing...
</Button>
```

## Installation & Usage

```bash
# Install in any project
npm install /Users/k.n.m.mwandingivu.nl/Documents/Projects/vu-design-system

# Required peer dependencies
npm install react react-dom tailwindcss lucide-react class-variance-authority clsx tailwind-merge
```

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
**Files:** `src/components/Button.tsx`, `Badge.tsx`, `Card.tsx`, `Alert.tsx`, `Input.tsx`

| Component | Variants | Key Props |
|-----------|----------|-----------|
| `Button` | primary, secondary, accent, tertiary, outline, ghost, subtle | `variant`, `size`, `disabled` |
| `Badge` | primary, secondary, accent, success, warning, error, info, outline | `variant` |
| `Card` | default, elevated, interactive | `padding`, `variant` |
| `Alert` | semantic styling via className | `variant` (manual) |
| `Input` | standard, valid, error states | - |

### 3. Navigation & Workflow
**Files:** `Tabs.tsx`, `Dialog.tsx`, `Sheet.tsx`, `DropdownMenu.tsx`, `Stepper.tsx`, `Timeline.tsx`, `EmptyState.tsx`

| Component | Purpose | Pattern |
|-----------|---------|---------|
| `Tabs` | Sub-view navigation | `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` |
| `Dialog` / `Modal` | Focused decisions | Full overlay pattern with header/footer |
| `Sheet` / `Drawer` | Secondary workflows | Side drawer with overlay |
| `DropdownMenu` | Action menus | Content, Item, Label, Separator |
| `Stepper` | Multi-step flows | Horizontal progress with complete/current/upcoming |
| `Timeline` | Process narrative | Vertical step visualization |
| `EmptyState` | Zero-content handling | Icon + description + actions |

### 4. Data Display
**Files:** `StatCard.tsx`, `Table.tsx`, `KeyValueList.tsx`, `FilterBar.tsx`, `SearchInput.tsx`, `Pagination.tsx`, `ResultSummary.tsx`

| Component | Use Case |
|-----------|----------|
| `StatCard` | KPIs, metrics with trend |
| `Table` | Dense structured data |
| `KeyValueList` | Definition-style data |
| `FilterBar` | Search + filter + actions |
| `SearchInput` | Embedded search field |
| `Pagination` | Large dataset navigation |
| `ResultSummary` | Recommendations, next steps |

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

### Form Composition
```tsx
import { FormField } from '@vu/design-system';

<FormField label="Email" description="Your institutional email" required error="Invalid email">
  <Input type="email" />
</FormField>
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
7. **Adopt page patterns, not just parts** — replicate showcase composition and hierarchy
8. **Avoid local mini-design-systems** — do not recreate `SectionHeader`, `FormField`, stat cards, hints, or status panels locally when the library already provides them

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
npm install /Users/k.n.m.mwandingivu.nl/Documents/Projects/vu-design-system
```

Then import and use any component. Changes to the design system require `npm run build:lib` in the design system folder to propagate.

## When Helping Users

1. **Check the taxonomy** — suggest the right component family for their use case
2. **Import correctly** — ensure they're importing from `@vu/design-system`
3. **Verify theme.css** — remind if styles aren't applying
4. **Suggest variants** — use the variant system (buttonVariants, badgeVariants) for consistency
5. **Icon guidance** — recommend semantic icon choices and colors
6. **Composition patterns** — show how small primitives compose (FormField wraps Input, etc.)
7. **Audit whole-page fidelity** — compare the page against the showcase and identify missing composition layers
8. **Replace local wrappers first** — prioritize removing ad hoc section headers, metric cards, metadata rows, and status wrappers

## Quick Reference: Import Map

```ts
// Foundation
import { cn, Icons } from '@vu/design-system';
import buttonVariants, badgeVariants, cardStyles from '@vu/design-system';

// Components (30+ available)
import {
  Button, Badge, Card, Alert, Input, Textarea,
  FormField, EmptyState, PageHeader, SectionHeader,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Dialog, Modal, Sheet, Drawer, DropdownMenu,
  Progress, ProgressDots, Stepper, Skeleton, Spinner, Separator, LoadingState, Timeline,
  StatCard, StatusPanel, ResultSummary, ActivityFeedItem,
  KeyValueList, Table, FilterBar, SearchInput, Pagination,
  AIState, EvidenceCard, WorkflowAuditTimeline, CommandPalette,
  InlineEditable, DataVisualShell,
} from '@vu/design-system';
```

## Documentation

- Full showcase: `npm run dev` in design system folder
- Screenshots: `screenshots/` folder (captured via Playwright)
- Plan & decisions: `PLAN.md`
- This skill file: `.claude/skills.md` or `.windsurf/skill.md`

## Contributing

Missing a primitive? Need a prop? Want to add a component?

**Option 1: Open an Issue**
Describe what's missing and your use case at `https://github.com/kmwandingi/vu-design-system/issues`

**Option 2: Submit a PR**
1. Fork: `git clone https://github.com/kmwandingi/vu-design-system.git`
2. Create branch: `git checkout -b feat/your-feature`
3. Add component in `src/components/`, export from `src/index.ts`
4. **Important**: Add new export to `scripts/check-exports.mjs` allowlist
5. Test: `npm run build:lib`
6. Commit and push (pre-commit hooks run automatically)
7. Open Pull Request

**Contribution Principles:**
- Follow The Five Rules (restraint, whitespace, single primary action, etc.)
- Accessibility first (WCAG 2.2 AA)
- Add new exports to the allowlist — never remove existing ones
- Composition over configuration
