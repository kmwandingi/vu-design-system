# VU Design System - Primitive Validation Report

**Date:** March 27, 2026  
**Components Reviewed:** 37  
**Status:** Gaps Identified - No Changes Made

---

## Critical Gaps (High Priority)

### 1. Button - Missing Link Support
**File:** `src/components/Button.tsx`

**Gap:** Button only renders `<button>` element. No support for:
- Navigation links (`<a>` tag rendering)
- React Router/Next.js Link component integration
- External link props (`href`, `target`, `rel`)

**Evidence:**
```tsx
// Current implementation only supports button element
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, shape, type = 'button', ...props },
  ref,
) {
  return <button ref={ref} type={type} className={cn(buttonVariants({ variant, size, shape }), className)} {...props} />;
});
```

**Impact:** Developers cannot create link-styled buttons for navigation, requiring workarounds.

---

### 2. Input - Missing Critical HTML5 Input Features
**File:** `src/components/Input.tsx`

**Gaps:**
- No `label` prop or automatic label association (accessibility gap)
- No `error` prop for validation state display
- No `helperText` prop for field descriptions
- No `startIcon`/`endIcon` props for common patterns (search, password visibility)
- No `clearable` prop to show clear button

**Comparison to FormField:** FormField exists but requires separate composition. Input should support inline labeling for simple cases.

---

### 3. Select - Missing Accessibility & Features
**File:** `src/components/Select.tsx`

**Gaps:**
- No `disabled` prop on Select root
- No `name` prop for form submission
- No `required` prop for validation
- No `placeholder` on Select root (only on SelectValue)
- No `labelId` for aria-labelledby association
- No keyboard navigation (arrow keys, escape, enter)
- No `onOpenChange` callback for controlled open state
- No `position` prop (content always renders below, no "top" flip)
- No `sameWidth` prop to match trigger width
- Missing `SelectGroup` and `SelectLabel` for option grouping

**Evidence:** Uses context but lacks full accessibility implementation compared to Radix UI or native select.

---

### 4. Dialog - Missing Critical Accessibility & Features
**File:** `src/components/Dialog.tsx`

**Gaps:**
- No `modal` prop (cannot create non-modal dialogs)
- No `onInteractOutside` callback
- No `onFocusOutside` callback
- No `disableOutsidePointerEvents` option
- No `container` prop for portal target customization
- No `forceMount` for animation libraries (Framer Motion)
- No `Description` as required aria-describedby (has DialogDescription but no auto-linking)
- No focus trapping - users can tab outside dialog while open
- No `initialFocus` prop to control where focus lands
- No `preventScroll` option (scrolls body while dialog open)
- Missing `X` button auto-injection into DialogContent (must manually add DialogClose)

---

### 5. DropdownMenu - Missing Features
**File:** `src/components/DropdownMenu.tsx`

**Gaps:**
- No `open`/`onOpenChange` props (only internal state via click)
- No `defaultOpen` prop
- No `modal` prop
- No `side` prop (content always right-aligned, no "bottom", "left", "top")
- No `align` prop for fine-tuning alignment
- No `sideOffset`/`alignOffset` for positioning adjustments
- No `avoidCollisions` prop (doesn't flip when hitting viewport edge)
- No submenu support (DropdownMenuSubTrigger exists but no actual nested menu implementation)
- No `DropdownMenuCheckboxItem` for toggle items
- No `DropdownMenuRadioGroup` for single-select items
- No keyboard navigation (arrow keys, escape)
- No `disabled` prop on items

---

### 6. Sheet - Missing Position Options
**File:** `src/components/Sheet.tsx`

**Gaps:**
- Only supports `left` and `right` sides
- No `top` or `bottom` sheet variants (for mobile-style drawers)
- No `size` prop (width only via className override)
- No `snapPoints` for partial opening
- No `modal` prop
- No `interactOutside` behavior control
- Missing SheetClose component (unlike DialogClose)

---

### 7. Tabs - Missing Advanced Features
**File:** `src/components/Tabs.tsx`

**Gaps:**
- No `orientation` prop (only horizontal)
- No `activationMode` (automatic vs manual activation)
- No `loop` prop for circular navigation
- No keyboard navigation (arrow keys don't switch tabs)
- No ` TabsIndicator` for animated underline indicator
- No `disabled` prop on individual TabsTrigger

---

### 8. Table - Missing Sort & Selection Features
**File:** `src/components/Table.tsx`

**Gaps:**
- No `sortable` prop on TableHead
- No `sortDirection` indicator icons
- No `onSort` callback
- No `selectable` prop (no row selection checkboxes)
- No `selectedRows` state management
- No `onRowSelect` callback
- No `stickyHeader` prop
- No `striped` rows variant
- No `dense`/`comfortable` size variants
- No `emptyState` slot for custom empty rendering
- No `loading` state with skeleton rows
- No `pagination` integration

---

## Medium Priority Gaps

### 9. Card - Missing Structural Slots
**File:** `src/components/Card.tsx`

**Gaps:**
- No `CardTitle` component (unlike Dialog which has DialogTitle)
- No `CardDescription` component
- No `CardImage` for media cards
- No `clickable` prop with hover states for card-as-link pattern
- No `footer` dedicated prop (manual composition only)

---

### 10. Badge - Missing Interactive Features
**File:** `src/components/Badge.tsx`

**Gaps:**
- No `clickable` prop (badges often act as filters/tags)
- No `onRemove` prop for removable badges
- No `outline` variant
- No `dot` variant (status dot before text)
- No `pulse` animation prop for live indicators

---

### 11. Alert - Missing Actions & Variants
**File:** `src/components/Alert.tsx`

**Gaps:**
- No `actions` prop (alerts often need dismiss/undo buttons)
- No `onDismiss` prop
- No `dismissible` boolean
- No `autoClose` with duration
- No `icon` auto-mapping per variant (must manually pass)
- No `compact` variant for inline alerts

---

### 12. Textarea - Missing Features
**File:** `src/components/Input.tsx` (Textarea exported from same file)

**Gaps:**
- No `autoResize` prop for height auto-expansion
- No `maxLength` display (character counter)
- No `rows` prop exposed (only min-h-[120px] hardcoded)
- No `resizable` prop to control resize handle

---

### 13. Spinner - Missing Variants
**File:** `src/components/Spinner.tsx`

**Gaps:**
- Only has Loader2 icon - no circular progress variant
- No `thickness` prop for stroke width
- No `speed` prop for animation duration
- No `determinate` mode (as circular progress with value)

---

### 14. Skeleton - Missing Patterns
**File:** `src/components/Skeleton.tsx`

**Gaps:**
- No `SkeletonText` for paragraph blocks
- No `SkeletonCircle` for avatars
- No `SkeletonCard` composite pattern
- No `pulse` vs `wave` animation variants

---

### 15. Progress - Missing Features
**File:** `src/components/Progress.tsx`

**Gaps:**
- No `label` prop for percentage text
- No `showValue` boolean
- No `indeterminate` state (for unknown duration)
- No `buffer` prop for buffered progress (video loading)
- No `steps` prop for stepped progress
- No `success` state when value reaches 100%

---

### 16. Separator - Missing Features
**File:** `src/components/Separator.tsx`

**Gaps:**
- No `decorative` prop for semantic control
- No `label` prop for labeled dividers ("OR" separator)
- No `spacing` prop (always relies on margin utilities)

---

### 17. FormField - Missing Layout Options
**File:** `src/components/FormField.tsx`

**Gaps:**
- No `layout` prop ("vertical" vs "horizontal" label placement)
- No `labelWidth` for horizontal layout
- No `tooltip` prop for label info icon
- No `counter` prop for character-limited inputs

---

### 18. EmptyState - Missing Variants
**File:** `src/components/EmptyState.tsx`

**Gaps:**
- No `size` prop ("sm", "md", "lg", "fullscreen")
- No `variant` prop ("default", "compact", "feature-promo")
- No `video` or `illustration` slot (only icon)
- No `secondaryAction` prop

---

### 19. Pagination - Missing Features
**File:** `src/components/Pagination.tsx`

**Gaps:**
- No `totalPages` prop with automatic page number generation
- No `siblingCount` prop for controlling ellipsis position
- No `boundaryCount` prop for edge page display
- No `showFirst`/`showLast` boolean props
- No `disabled` state for prev/next at boundaries
- No `size` prop
- No `jumpInput` for "Go to page" input
- No `pageSizeSelector` for rows-per-page dropdown

---

### 20. StatCard - Missing Trends
**File:** `src/components/StatCard.tsx`

**Gaps:**
- `trend` prop exists but no automatic calculation from previous value
- No `trendDirection` prop ("up", "down", "neutral")
- No sparkline chart slot for mini-trend visualization
- No `loading` state
- No `comparative` value ("vs last month")

---

### 21. SearchInput - Missing Features
**File:** `src/components/SearchInput.tsx`

**Gaps:**
- No `loading` prop for async search indicator
- No `onClear` callback with clear button
- No `results` slot for dropdown results
- No `recentSearches` feature
- No `voiceSearch` button support

---

### 22. InlineEditable - Missing Modes
**File:** `src/components/InlineEditable.tsx`

**Gaps:**
- No `multiline` prop (always single-line)
- No `alwaysEdit` mode (no display mode)
- No `onCancel` separate from save
- No `validation` function support
- No `saveOnBlur` boolean
- No `escapeToCancel` boolean

---

### 23. Timeline - Missing Features
**File:** `src/components/Timeline.tsx`

**Gaps:**
- No `horizontal` orientation
- No `alternate` alignment (items on both sides)
- No `connector` customization (line vs dotted)
- No collapsible items
- No `loading` skeleton state

---

### 24. Stepper - Missing Features
**File:** `src/components/Stepper.tsx`

**Gaps:**
- No `clickable` prop (can't jump to steps)
- No `vertical` orientation
- No `error` state for individual steps
- No `optional` prop for optional steps
- No connector line between steps
- No step content expansion (accordion style)

---

### 25. CommandPalette - Missing Advanced Features
**File:** `src/components/CommandPalette.tsx`

**Gaps:**
- No `groups` prop (commands grouped by category)
- No `recent` commands section
- No keyboard shortcut hints display
- No `emptyState` customization
- No `footer` slot
- No `onSelect` callback per item
- No `loading` state
- No `debounce` for search

---

### 26. Select - Missing Multi-Select
**File:** `src/components/Select.tsx`

**Gap:** No multi-select mode with:
- `multiple` boolean prop
- Selected items as chips/tags in trigger
- "Select All" option support
- Checkboxes in dropdown items

---

## Low Priority / Nice-to-Have Gaps

### 27. PageHeader - Missing Breadcrumbs
**File:** `src/components/PageHeader.tsx`

**Gap:** No built-in `breadcrumbs` prop or Breadcrumb component integration.

---

### 28. SectionHeader - Missing Collapse
**File:** `src/components/SectionHeader.tsx`

**Gap:** No `collapsible` prop with expand/collapse chevron.

---

### 29. StatusPanel - Missing Auto-Icon
**File:** `src/components/StatusPanel.tsx`

**Gap:** Variant doesn't auto-map to icons (must manually pass icon prop).

---

### 30. ProgressDots - Missing Labels
**File:** `src/components/ProgressDots.tsx`

**Gap:** No `labels` prop to show step names below dots.

---

### 31. ActivityFeedItem - Missing Avatar
**File:** `src/components/ActivityFeedItem.tsx`

**Gap:** No `avatar` prop (currently only generic `icon`).

---

### 32. KeyValueList - Missing Variants
**File:** `src/components/KeyValueList.tsx`

**Gap:** No `variant` prop ("grid" vs "stacked" vs "table" layouts).

---

### 33. DataVisualShell - Missing Tabs
**File:** `src/components/DataVisualShell.tsx`

**Gap:** No built-in `tabs` prop for view-switching.

---

### 34. ResultSummary - Missing Expand
**File:** `src/components/ResultSummary.tsx`

**Gap:** No `expandable` prop for collapsible highlights.

---

### 35. EvidenceCard - Missing Actions
**File:** `src/components/EvidenceCard.tsx`

**Gap:** No `actions` prop for card-level operations.

---

### 36. FilterBar - Missing Presets
**File:** `src/components/FilterBar.tsx`

**Gap:** No `presets` prop for saved filter sets.

---

### 37. LoadingState - Missing States
**File:** `src/components/LoadingState.tsx`

**Gap:** No `state` prop for "processing", "queued", "connecting" variants with different icons.

---

## Missing Entire Primitives (Not Implemented)

The following common primitives are **completely absent** from the design system:

1. **Accordion** / Collapsible - Expand/collapse content sections
2. **Avatar** - User/profile image with fallback
3. **Breadcrumb** - Navigation path indicator
4. **Calendar** / DatePicker - Date selection UI
5. **Carousel** - Content slider
6. **Checkbox** - Form checkbox input
7. **Collapsible** - Simple expand/collapse wrapper
8. **Combobox** - Select with search/filter
9. **ContextMenu** - Right-click menu
10. **HoverCard** - Rich tooltip on hover
11. **Label** - Form label primitive (FormField has inline label but no standalone)
12. **Menubar** - Application menu bar
13. **NavigationMenu** - Site navigation with mega-menu support
14. **Popover** - Floating content panel (distinct from tooltip)
15. **RadioGroup** - Single-select radio buttons
16. **ScrollArea** - Custom scrollable container
17. **Slider** - Range value selector
18. **Switch** / Toggle - Binary on/off input
19. **Toast** / Notification - Non-blocking notification system
20. **ToggleGroup** - Pressable button group (like text alignment)
21. **Tooltip** - Simple text hover hint
22. **Resizable** - Split pane container
23. **CollapsiblePanel** - Sidebar panel that collapses to icons

---

## Summary by Impact

### Must Fix (Blocking Common Use Cases)
1. Button - Link support
2. Input - Label/error/helper integration
3. Select - Keyboard navigation & accessibility
4. Dialog - Focus trapping & scroll prevention
5. DropdownMenu - Keyboard navigation & positioning
6. Table - Sorting & selection

### Should Fix (Frequent Developer Friction)
7. Sheet - Top/bottom positions
8. Tabs - Keyboard navigation
9. Card - Title/Description slots
10. Alert - Dismissible actions
11. Pagination - Automatic page numbers
12. Textarea - Auto-resize

### Missing Primitives (Needed for Complete System)
13. Checkbox
14. RadioGroup
15. Switch/Toggle
16. Tooltip
17. Popover
18. Toast/Notification
19. Avatar
20. DatePicker/Calendar
21. Slider
22. Breadcrumb
23. Accordion

---

**Report Compiled:** March 27, 2026  
**Reviewer:** AI Assistant  
**Next Action:** Prioritize fixes based on user requirements
