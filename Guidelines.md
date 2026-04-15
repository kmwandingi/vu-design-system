# VU Design System Guidelines

> **For AI Agents:** This is a human reference document. Agents must follow `PROMPT.txt` and the `skills.md` files as the authoritative source. Key differences: PROMPT.txt mandates lucide-react icons only (no emojis), prohibits bouncing/spring animations, and requires "Whitespace is luxury" (2-3x more than comfortable).

## Overview

This design system is based on the **Vrije Universiteit Amsterdam** brand identity, featuring:
- **VU Blue** (#0077B3) - Primary brand color
- **VU Orange** (#CC4100) - Accent color for calls-to-action
- **VU Green** (#008053) - Success and sustainability
- **VU Purple** (#3B2171) - Secondary/institutional color

## Brand Colors (WCAG 2.2 AA Compliant)

Only primary brand colors are suitable as background colors for white text according to WCAG 2.2 guidelines.

| Color | Hex | Usage |
|-------|-----|-------|
| VU Blue | #0077B3 | Primary actions, links, branding |
| VU Orange | #CC4100 | CTAs, highlights, warnings |
| VU Green | #008053 | Success states, sustainability |
| VU Purple | #3B2171 | Secondary actions, institutional |

## Component Guidelines

### Buttons

**Primary Button**
- Purpose: Main action in a section or page
- Visual: Bold, filled with VU Blue (#0077B3)
- Usage: One primary button per section
- Classes: `variant="primary"`

**Secondary Button**
- Purpose: Alternative or supporting actions
- Visual: VU Purple (#3B2171) or outlined style
- Usage: Can appear alongside primary button
- Classes: `variant="secondary"` or `variant="secondary-outline"`

**Accent Button**
- Purpose: Calls-to-action and highlights
- Visual: VU Orange (#CC4100)
- Usage: Special actions that need emphasis
- Classes: `variant="accent"`

**Tertiary Button**
- Purpose: Success actions, sustainability themes
- Visual: VU Green (#008053)
- Usage: Confirm actions, eco-friendly contexts
- Classes: `variant="tertiary"`

### Form Primitives

**Checkbox**
- States: checked, unchecked, indeterminate
- Use for: Binary choices, multiple selections
- Accessibility: ARIA checkbox role, keyboard support

**RadioGroup**
- Use for: Single selection from mutually exclusive options
- Pattern: RadioGroup wraps Radio items with RadioIndicator and RadioLabel
- Accessibility: ARIA radiogroup role, arrow key navigation

**Switch**
- Use for: Immediate on/off toggles
- Accessibility: ARIA switch role, keyboard toggle with Space

**Select (Dropdown)**
- Use for: Single selection from many options
- Pattern: SelectTrigger, SelectValue, SelectContent, SelectItem
- Accessibility: ARIA listbox, keyboard navigation (arrows, enter, escape)

### Size Variants
- `size="xs"` - 1.5rem height, for compact spaces
- `size="sm"` - 2rem height, for dense UIs
- `size="md"` - 2.5rem height, default
- `size="lg"` - 3rem height, for emphasis
- `size="xl"` - 3.5rem height, for hero sections

### Cards

**Default Card**
- White background, subtle border
- Use for: Content containers, forms, info panels

**Elevated Card**
- Shadow and hover elevation
- Use for: Featured content, pricing cards

**Interactive Card**
- Hover state with border highlight
- Use for: Clickable cards, selection items

### Badges

**Status Badges**
- Success: VU Green background
- Warning: Amber/Yellow background
- Error: Red background
- Info: VU Blue background

**Variant Badges**
- Primary: VU Blue
- Secondary: VU Purple
- Accent: VU Orange
- Tertiary: VU Green

### Typography

**Font Stack**
```
--font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-serif: Georgia, Cambria, 'Times New Roman', Times, serif;
--font-mono: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
```

**Type Scale**
- H1: 2.25rem (36px), Bold
- H2: 1.875rem (30px), Bold
- H3: 1.5rem (24px), Semibold
- H4: 1.25rem (20px), Semibold
- Body: 1rem (16px), Normal
- Small: 0.875rem (14px)

### Spacing Scale

Base unit: 0.25rem (4px)

- space-1: 0.25rem (4px)
- space-2: 0.5rem (8px)
- space-3: 0.75rem (12px)
- space-4: 1rem (16px) - Base
- space-6: 1.5rem (24px)
- space-8: 2rem (32px)
- space-12: 3rem (48px)
- space-16: 4rem (64px)
- space-24: 6rem (96px)

### Border Radius

- radius-sm: 0.25rem (4px)
- radius-md: 0.375rem (6px) - Default
- radius-lg: 0.5rem (8px)
- radius-xl: 0.75rem (12px)
- radius-2xl: 1rem (16px)
- radius-full: 9999px (Pill)

### Shadows

- shadow-xs: Subtle, for inputs
- shadow-sm: Small elevation, for buttons
- shadow-md: Medium elevation, for cards
- shadow-lg: Large elevation, for modals
- shadow-xl: Extra large, for overlays

**Colored Shadows**
- shadow-blue: VU Blue glow
- shadow-orange: VU Orange glow
- shadow-green: VU Green glow
- shadow-purple: VU Purple glow

## Icon Usage

**Always use lucide-react.** Never use:
- ❌ Emoji characters (🤖 💡 🎯 ⚡ etc.)
- ❌ Custom SVGs when lucide has a matching icon
- ❌ Icon-only buttons without tooltips or text labels

### Semantic Icon Choices

| Category | Icons | Usage |
|----------|-------|-------|
| **Actions** | `Pencil`, `Trash2`, `Copy`, `Download` | Edit, delete, duplicate, save |
| **Navigation** | `ChevronLeft`, `ChevronRight`, `Home`, `Settings` | Directional, app nav |
| **Status** | `CheckCircle`, `AlertCircle`, `Info`, `Loader2` | Success, warning, info, loading |
| **Data** | `BarChart3`, `PieChart`, `Table`, `FileText` | Analytics, reports, documents |

### Legacy Icon Categories (for reference)
- Navigation: Menu, Arrow directions, User, Globe
- Status: XCircle (error), AlertTriangle (warning), Bell (notifications), Shield (security)
- Actions: Plus, Minus, Edit, Upload, Play, Pause, Stop
- Documents: File, Folder, Image, Video, Music, Book

## Animation Guidelines

> **Academic Restraint:** Motion separates good from extraordinary — but keep it professional. Subtle transitions only.

**Subtle Transitions (USE THESE)**
- Button hover: `hover:bg-vu-blue-600` (color shift, not transform)
- Card hover: `hover:border-vu-blue-200` (subtle border glow)
- Input focus: ring using `ring-vu-blue-500/20`
- Loading states: Use `LoadingState` component with skeletons

**Timing**
- Fast: 100-150ms (hover states) — `transition-colors duration-150`
- Normal: 200ms (standard transitions)
- Slow: 300ms (page transitions)

**NEVER USE:**
- ❌ Parallax scrolling
- ❌ Bouncing animations (`ease-spring`, `ease-bounce`)
- ❌ Transform scale on hover (feels toy-like)
- ❌ Multiple simultaneous animations
- ❌ `transition: all` — always target specific properties

## Accessibility

### Focus States
All interactive elements must have visible focus indicators:
```
focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
```

### Color Contrast
- All text meets WCAG 2.2 AA standards
- Interactive elements have 3:1 contrast minimum
- Brand colors are tested for white text legibility

### Reduced Motion
Respect user preferences:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Usage Examples

### Button with Icon
```tsx
import { buttonVariants } from '@/styles/components';
import { Icons } from '@/styles/icons';

<button className={buttonVariants({ variant: 'primary', size: 'md' })}>
  <Icons.Actions.Search className="h-4 w-4" />
  Search
</button>
```

### Status Badge
```tsx
import { badgeVariants } from '@/styles/components';

<span className={badgeVariants({ variant: 'success' })}>
  Active
</span>
```

### Card with Subtle Tint (NOT Gradients)
```tsx
// ✅ DO: Subtle color tint for visual depth
<Card className="border-l-2 border-vu-blue-500 bg-vu-blue-50/50">
  <CardHeader>Featured Content</CardHeader>
  <CardContent>...</CardContent>
</Card>

// ❌ DON'T: Use gradients
<Card className="bg-gradient-to-r from-purple-500 to-pink-500">
  Content
</Card>
```

## Dark Mode

The design system includes a comprehensive dark mode with:
- Inverted color tokens
- Adjusted shadows for depth
- Maintained contrast ratios
- Semantic color preservation

Enable with `.dark` class on root element.
