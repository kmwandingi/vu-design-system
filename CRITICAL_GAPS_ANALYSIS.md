# VU Design System - Critical Gap Analysis

**Analysis Date:** March 27, 2026  
**Purpose:** Identify smoking gun gaps that block real-world usage

---

## Executive Summary

After reviewing 37 components, **7 critical gaps** stand out as blockers for production use. These aren't nice-to-haves—they're fundamental features that every design system needs.

---

## The 7 Critical Gaps (Ranked by Impact)

### 1. 🔴 Button: No Link Support (SEVERITY: CRITICAL)

**Why it matters:** Every app needs "Cancel and go back" or "View details" buttons that are actually links. Without this, developers must choose between:
- Using a `<button>` with `onClick={() => navigate()}` (bad for SEO, accessibility, cmd+click)
- Using an `<a>` styled manually (loses Button variants/design)

**Real-world scenario:**
```tsx
// CANNOT DO THIS TODAY:
<Button variant="ghost" href="/settings">Settings</Button>
<Button asChild><Link to="/profile">Profile</Link></Button>
```

**Standard pattern used by:** Radix, shadcn/ui, MUI, Chakra, Mantine

---

### 2. 🔴 Dialog: No Focus Trap (SEVERITY: CRITICAL)

**Why it matters:** Users can tab outside an open dialog. This breaks:
- Keyboard accessibility (users tab into background, confused)
- Modal behavior (clicking outside should close, but tabbing shouldn't escape)
- Screen reader expectations (background should be `aria-hidden`)

**Real-world scenario:**
```
1. User opens "Delete Account" dialog
2. User presses Tab 3 times
3. Focus moves to navbar button in background
4. User presses Enter
5. Navigates away while dialog still visually open
```

**This is an accessibility violation (WCAG 2.4.3).**

---

### 3. 🔴 Select: No Keyboard Navigation (SEVERITY: CRITICAL)

**Why it matters:** The Select component is mouse-only. Users cannot:
- Open with Enter/Space
- Navigate options with Arrow keys
- Select with Enter
- Close with Escape

**Real-world scenario:** Power users, accessibility tools, and keyboard-only users cannot use forms with Select components.

**Standard requirement:** All interactive components must be keyboard accessible.

---

### 4. 🔴 Table: No Sorting or Selection (SEVERITY: HIGH)

**Why it matters:** Data tables without sorting are nearly useless for:
- Finding the largest/smallest value
- Alphabetical organization
- Date ordering

Without selection:
- No bulk operations (delete 5 items)
- No "select all" checkbox pattern
- Can't build admin interfaces

**Real-world scenario:** The SharePoint Duplicate Detection screenshot you showed has a table with "Cluster", "Filename", "Size", "Score" columns. Users WILL want to sort by Score to find highest confidence duplicates.

---

### 5. 🔴 Missing Form Primitives (SEVERITY: HIGH)

**Completely absent:** Checkbox, RadioGroup, Switch/Toggle

**Why it matters:** These are fundamental form inputs. You cannot build:
- Settings pages ("Enable notifications" toggle)
- Filters ("Show only active" checkbox)
- Preference forms ("Dark mode" switch)
- Multi-choice questions (RadioGroup)

**Real-world scenario:**
```tsx
// CANNOT BUILD THIS:
<form>
  <Checkbox checked={notifications} onChange={...}>
    Enable email notifications
  </Checkbox>
  
  <RadioGroup value={theme} onChange={...}>
    <Radio value="light">Light</Radio>
    <Radio value="dark">Dark</Radio>
  </RadioGroup>
</form>
```

---

### 6. 🔴 Input: No Built-in Label/Error Support (SEVERITY: MEDIUM-HIGH)

**Why it matters:** Every accessible input needs a label. Currently:
- No `label` prop on Input
- No `error` prop for validation messages
- No `helperText` for field descriptions

**Current workaround:** Must wrap every Input with FormField:
```tsx
// VERBOSE - must do this for every input:
<FormField label="Email" error={errors.email}>
  <Input />
</FormField>
```

**Standard pattern (MUI, Ant Design):**
```tsx
// CLEAN:
<Input label="Email" error={errors.email} helperText="We'll never share your email" />
```

---

### 7. 🔴 DropdownMenu: No Controlled State (SEVERITY: MEDIUM-HIGH)

**Why it matters:** Cannot programmatically open/close the menu. Blocks:
- "Open menu on hover" patterns
- Keyboard shortcuts ("Press ? to open actions menu")
- Parent component controlling visibility
- Synchronized menus (radio group behavior)

**Real-world scenario:**
```tsx
// CANNOT DO:
const [open, setOpen] = useState(false);

useEffect(() => {
  if (userPressesQuestionMark) setOpen(true);
}, []);

<DropdownMenu open={open} onOpenChange={setOpen}>
  {/* items */}
</DropdownMenu>
```

---

## Secondary Gaps (Important but Workaround-able)

### 8. Dialog: No Scroll Prevention
- Body scrolls behind dialog
- Fixed with CSS `body { overflow: hidden }` wrapper

### 9. Textarea: No Auto-resize
- Fixed with manual `rows` calculation or external library

### 10. Sheet: Only Left/Right (No Top/Bottom)
- Mobile drawers need bottom sheets
- Fixed by using different component or custom CSS

### 11. Pagination: No Auto Page Generation
- Must manually create PaginationItem array
- Verbose but functional

---

## Missing Primitives (Complete Absence)

These primitives are **completely missing** and commonly needed:

| Primitive | Use Case | Workaround |
|-----------|----------|------------|
| **Checkbox** | Settings toggles, multi-select | Manual `<input type="checkbox">` styling |
| **RadioGroup** | Single-choice selection | Manual `<input type="radio">` styling |
| **Switch/Toggle** | On/off preferences | Manual CSS toggle switch |
| **Tooltip** | Icon explanations, hints | Manual `title` attribute or popover |
| **Popover** | Floating panels, date pickers | Manual popover implementation |
| **Toast** | Notifications, success messages | Manual toast system |
| **Accordion** | FAQ sections, collapsible content | Manual show/hide state |
| **Avatar** | User profiles, comment lists | Manual `<img>` with fallback |
| **Breadcrumb** | Navigation hierarchy | Manual `<nav>` with links |
| **Slider** | Range values, volume control | Manual `<input type="range">` |

---

## Recommended Fix Priority

### Phase 1: Blockers (Must Fix)
1. **Button** - Add `asChild` or `href` prop for link support
2. **Dialog** - Implement focus trap
3. **Select** - Add keyboard navigation
4. **Checkbox** - Create new primitive
5. **RadioGroup** - Create new primitive

### Phase 2: High Value (Should Fix)
6. **Input** - Add `label`, `error`, `helperText` props
7. **DropdownMenu** - Add controlled `open`/`onOpenChange`
8. **Table** - Add sorting infrastructure
9. **Switch/Toggle** - Create new primitive

### Phase 3: Polish (Nice to Have)
10. **Dialog** - Add scroll prevention
11. **Textarea** - Add auto-resize
12. **Sheet** - Add top/bottom positions
13. **Toast** - Create notification system
14. **Tooltip** - Create hover hints

---

## Evidence from Screenshots

Your SharePoint Duplicate Detection screenshot validates these gaps:

**What we see:**
- ✅ Table with data (needs sorting)
- ✅ Select dropdown for folder (needs keyboard nav)
- ✅ Buttons for actions (need link variants for "View in SharePoint")
- ❌ No checkboxes for bulk selection (missing primitive)
- ❌ No toggles for settings (missing primitive)

---

## Conclusion

The design system has **solid foundations** but **critical gaps in interactivity**. The most glaring:

1. **Button as link** - Every app needs this
2. **Focus trapping** - Accessibility requirement
3. **Keyboard navigation** - Select is mouse-only
4. **Missing form primitives** - Can't build settings pages

**Verdict:** Not production-ready for complex apps until Phase 1 gaps are fixed.

---

**Analyst:** AI Assistant  
**Date:** March 27, 2026
