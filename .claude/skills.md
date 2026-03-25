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
