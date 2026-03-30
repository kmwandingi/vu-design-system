# VU Design System

A shared UI foundation for VU-branded web projects.

## Purpose

This project defines reusable design tokens, icons, and component primitives for building consistent, accessible, high-quality interfaces across projects.

## Setup

```bash
npm install
```

## Run the showcase

```bash
npm run dev
```

## Build the showcase

```bash
npm run build
```

## Installation

### Install from GitHub (public)

```bash
npm install github:kmwandingi/vu-design-system
```

### Local development

Install from local path into any project:

```bash
cd /path/to/your/project
npm install /Users/k.n.m.mwandingivu.nl/Documents/Projects/vu-design-system
```

Or add to `package.json`:

```json
{
  "dependencies": {
    "@vu/design-system": "file:/Users/k.n.m.mwandingivu.nl/Documents/Projects/vu-design-system"
  }
}
```

Then run:

```bash
npm install
```

### Build the library (when making changes)

```bash
cd /Users/k.n.m.mwandingivu.nl/Documents/Projects/vu-design-system
npm run build:lib
```

This compiles TypeScript to `dist/` and prepares the package for consumption.

### Development workflow

When you install via local path, npm creates a **symlink** (not a copy):

```
node_modules/@vu/design-system → ../../vu-design-system
```

This means:
- Edit components in the design system folder
- Run `npm run build:lib` to recompile
- Changes appear **immediately** in consuming projects
- No reinstall needed

Iterate rapidly across all your projects with one build command.

## Dependencies

The package requires these peer dependencies in your consuming project:

```bash
npm install react react-dom tailwindcss lucide-react class-variance-authority clsx tailwind-merge
```

## Shared package usage

Core public entrypoint:

```ts
import {
  Button,
  Alert,
  Card,
  Input,
  Textarea,
  Badge,
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  RadioGroup,
  Radio,
  RadioIndicator,
  RadioLabel,
  Switch,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  FormField,
  EmptyState,
  PageHeader,
  SectionHeader,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Dialog,
  Modal,
  Sheet,
  Drawer,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  Progress,
  ProgressDots,
  Stepper,
  Skeleton,
  Spinner,
  Separator,
  LoadingState,
  Timeline,
  StatCard,
  StatusPanel,
  ResultSummary,
  ActivityFeedItem,
  KeyValueList,
  Table,
  useTableSort,
  FilterBar,
  SearchInput,
  Pagination,
  AIState,
  EvidenceCard,
  WorkflowAuditTimeline,
  CommandPalette,
  InlineEditable,
  DataVisualShell,
  Icons,
} from '@vu/design-system';
```

Theme preset:

```js
import vuPreset from '@vu/design-system/tailwind.preset';

export default {
  presets: [vuPreset],
};
```

Global styles (import in your app entry):

```ts
import '@vu/design-system/theme.css';
```

## Architecture

- `src/components` — reusable component primitives intended for package consumption, including form, feedback, loading, and flow components
- `src/styles/components.ts` — variant definitions and shared styling contracts
- `src/styles/theme.css` — tokens and theme variables
- `src/styles/icons.ts` — curated icon surface
- `src/index.ts` — public package entrypoint
- `src/app/App.tsx` — showcase and validation surface
- `tailwind.preset.js` — reusable Tailwind preset for downstream projects

## System taxonomy

The package is organized conceptually around recurring UI situations observed across funding, matching, learning, and modern AI-assisted interfaces.

- `Foundation`
  - tokens, theme variables, icons, spacing, gradients, surfaces, focus, motion

- `Inputs`
  - `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `FormField`, inline editing, search, filter composition

- `Feedback`
  - `Alert`, `Badge`, `Progress`, `Spinner`, `Skeleton`, `LoadingState`, `EmptyState`

- `Navigation`
  - `Tabs`, `Dialog` / `Modal`, `Sheet` / `Drawer`, `DropdownMenu`, `Pagination`, headers

- `Data Display`
  - `Card`, `StatCard`, `KeyValueList`, `Table`, `ResultSummary`, `DataVisualShell`

- `Workflow`
  - `Timeline`, `WorkflowAuditTimeline`, `ProgressDots`, `Stepper`, `StatusPanel`

- `AI / Async`
  - `AIState`, `EvidenceCard`, `CommandPalette`, activity and reasoning surfaces

## Recurring product situations covered

- dense forms and validation flows
- page-level structure and section framing
- loading, waiting, syncing, and incremental progress states
- filtered search and exploration surfaces
- dashboards, summaries, and structured decision views
- step-based journeys and process visibility
- agentic / AI-assisted evidence and reasoning patterns
