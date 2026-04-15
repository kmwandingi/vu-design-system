# Plan

- [x] Audit the current design system for package-readiness and missing shared primitives
- [x] Expand the design system showcase with balanced icon coverage and consistent icon tiles
- [x] Add reusable component entrypoints for buttons, badges, cards, alerts, inputs, and textareas
- [x] Prepare shared-package entrypoints and a reusable Tailwind preset for downstream projects
- [x] Research recurring UI situations across funding, Matching, learning-platform, and modern AI interfaces
- [x] Add shared navigation, workflow, data display, and AI/async component primitives
- [x] Expand the showcase so the package surface is visible by taxonomy, not just tokens
- [x] Reorganize the showcase so all existing and new surfaces are grouped under taxonomy-first tabs
- [ ] Add a dedicated library build and publishing workflow when package distribution is needed
- [x] Add a root `start.sh` wrapper for launching the showcase with a single command

# File Index

- `src/app/App.tsx` — showcase app shell, theme toggle, and overlay wiring for the design system demo
- `src/app/ShowcaseContent.tsx` — taxonomy-first showcase composition that groups all system surfaces into tabbed sections
- `src/components/Button.tsx` — reusable button primitive wrapping shared button variants
- `src/components/Badge.tsx` — reusable badge primitive wrapping shared badge variants
- `src/components/Card.tsx` — reusable card primitive wrapping shared card styles
- `src/components/Alert.tsx` — reusable alert primitive for semantic status messaging
- `src/components/Input.tsx` — reusable input and textarea primitives for form controls
- `src/components/Progress.tsx` — reusable progress bar primitive for determinate loading and completion states
- `src/components/Skeleton.tsx` — reusable skeleton primitive for content-loading placeholders
- `src/components/Spinner.tsx` — reusable spinner primitive for busy and syncing states
- `src/components/Separator.tsx` — reusable separator primitive for subtle structural division
- `src/components/LoadingState.tsx` — reusable composed loading card for richer busy-state messaging
- `src/components/Timeline.tsx` — reusable steps/timeline primitive for process and journey visualization
- `src/components/FormField.tsx` — reusable field composition wrapper for labels, helper text, and validation messaging
- `src/components/InfoHint.tsx` — reusable inline tooltip helper for compact explanatory affordances and metric hints
- `src/components/EmptyState.tsx` — reusable empty-state pattern with icon, description, and actions
- `src/components/PageHeader.tsx` — reusable page-level heading and action pattern
- `src/components/SectionHeader.tsx` — reusable section framing pattern with optional actions
- `src/components/Tabs.tsx` — reusable tabbed navigation primitive for related subviews
- `src/components/Dialog.tsx` — reusable modal/dialog primitive for focused decisions and confirmations
- `src/components/Sheet.tsx` — reusable drawer/sheet primitive for contextual secondary workflows
- `src/components/DropdownMenu.tsx` — reusable lightweight dropdown action menu
- `src/components/ProgressDots.tsx` — reusable compact progress indicator for step-based flows
- `src/components/Stepper.tsx` — reusable horizontal multi-step journey component
- `src/components/StatCard.tsx` — reusable metric and KPI presentation card
- `src/components/StatusPanel.tsx` — reusable structured status surface for progress and async operations
- `src/components/ResultSummary.tsx` — reusable summary block for recommendations and next-step outputs
- `src/components/ActivityFeedItem.tsx` — reusable activity/event row for updates and feeds
- `src/components/KeyValueList.tsx` — reusable definition-style structured information list
- `src/components/Table.tsx` — reusable data table primitives for dense information display
- `src/components/FilterBar.tsx` — reusable filter/search/action composition bar
- `src/components/SearchInput.tsx` — reusable search field pattern with embedded icon
- `src/components/Pagination.tsx` — reusable pagination navigation primitives
- `src/components/AIState.tsx` — reusable AI/agent state surface for reasoning and background work
- `src/components/EvidenceCard.tsx` — reusable evidence/source card for explainable outputs
- `src/components/WorkflowAuditTimeline.tsx` — reusable audit-oriented workflow timeline wrapper
- `src/components/CommandPalette.tsx` — reusable command-driven interaction surface
- `src/components/InlineEditable.tsx` — reusable inline edit control for structured updates
- `src/components/DataVisualShell.tsx` — reusable shell for charts and analytical modules
- `src/index.ts` — public package export surface for shared consumption
- `src/lib/utils.ts` — utility helpers including class merging via `cn()`
- `src/styles/components.ts` — canonical variant and style contracts for shared UI primitives
- `src/styles/icons.ts` — curated Lucide icon registry exposed through `Icons`
- `src/styles/theme.css` — shared design tokens and theme variables
- `tailwind.config.js` — showcase Tailwind configuration
- `tailwind.preset.js` — reusable Tailwind preset for other projects
- `package.json` — project metadata and scripts for showcase/package preparation
- `start.sh` — shell wrapper that installs dependencies if needed and starts the Vite showcase server
- `README.md` — top-level usage and architecture overview
- `Guidelines.md` — legacy design guidance reference pending consolidation into README/PLAN

# Changelog

- 2026-04-12: Expanded the reusable application-pattern surface so downstream apps can replace local mini-systems with shared page framing, compact headers, richer form fields, compact stat cards, metadata layouts, and inline hints. Files: `src/components/SectionHeader.tsx`, `src/components/FormField.tsx`, `src/components/StatCard.tsx`, `src/components/ResultSummary.tsx`, `src/components/KeyValueList.tsx`, `src/components/InfoHint.tsx`, `src/index.ts`, `README.md`, `PLAN.md`.
- 2026-04-12: Added a root `start.sh` entrypoint so the showcase can be launched with one command and documented the workflow. Files: `start.sh`, `README.md`, `PLAN.md`.
- 2026-03-25: Expanded icon library coverage and normalized icon tile widths to improve showcase balance and horizontal rhythm. Files: `src/app/App.tsx`, `src/styles/icons.ts`.
- 2026-03-25: Improved layout rails, short-section pairing, and alert rendering for a cleaner, more production-like showcase. Files: `src/app/App.tsx`, `src/styles/components.ts`, `tailwind.config.js`.
- 2026-03-25: Added reusable component primitives and a package entrypoint to prepare the design system for cross-project consumption. Files: `src/components/Button.tsx`, `src/components/Badge.tsx`, `src/components/Card.tsx`, `src/components/Alert.tsx`, `src/components/Input.tsx`, `src/index.ts`.
- 2026-03-25: Added `tailwind.preset.js` and project documentation to support reuse as a shared package. Files: `tailwind.preset.js`, `README.md`, `PLAN.md`.
- 2026-03-25: Recorded `Guidelines.md` as a legacy exception to the repo markdown policy until its contents are consolidated. Files: `PLAN.md`.
- 2026-03-25: Added reusable loading, progress, skeleton, separator, and timeline primitives and showcased them as part of the shared system language. Files: `src/components/Progress.tsx`, `src/components/Skeleton.tsx`, `src/components/Spinner.tsx`, `src/components/Separator.tsx`, `src/components/LoadingState.tsx`, `src/components/Timeline.tsx`, `src/app/App.tsx`, `src/index.ts`.
- 2026-03-25: Researched recurring cross-project UI situations and expanded the package into navigation, workflow, data-display, and AI/async tiers aligned with the existing VU language. Files: `src/components/FormField.tsx`, `src/components/EmptyState.tsx`, `src/components/PageHeader.tsx`, `src/components/SectionHeader.tsx`, `src/components/Tabs.tsx`, `src/components/Dialog.tsx`, `src/components/Sheet.tsx`, `src/components/DropdownMenu.tsx`, `src/components/ProgressDots.tsx`, `src/components/Stepper.tsx`, `src/components/StatCard.tsx`, `src/components/StatusPanel.tsx`, `src/components/ResultSummary.tsx`, `src/components/ActivityFeedItem.tsx`, `src/components/KeyValueList.tsx`, `src/components/Table.tsx`, `src/components/FilterBar.tsx`, `src/components/SearchInput.tsx`, `src/components/Pagination.tsx`, `src/components/AIState.tsx`, `src/components/EvidenceCard.tsx`, `src/components/WorkflowAuditTimeline.tsx`, `src/components/CommandPalette.tsx`, `src/components/InlineEditable.tsx`, `src/components/DataVisualShell.tsx`, `src/app/App.tsx`, `src/index.ts`, `README.md`, `PLAN.md`.
- 2026-03-25: Reorganized the full showcase so existing and new system surfaces are grouped under top-level taxonomy tabs, improving navigability and making the system map coherent across foundations, components, workflow, data, and AI/async. Files: `src/app/App.tsx`, `src/app/ShowcaseContent.tsx`, `PLAN.md`.

# Figma Integration Plan

Three viable approaches for syncing the design system into Figma, ranked by sustainability and effort.

## Approach 1: Token Studio + Manual Components (Recommended)

**Goal:** Keep tokens in sync automatically; designers build components manually in Figma using the synced tokens.

**Why this approach:**
- Most sustainable long-term
- Native Figma components maintain full editability
- Token changes propagate automatically
- Designers own the component layer; code owns the token layer

**Implementation steps:**
1. Export Tailwind tokens to Token Studio JSON format (`tailwind.preset.js` → `tokens.json`)
2. Install Token Studio plugin in Figma
3. Import tokens as the single source of truth for colors, typography, spacing, shadows
4. Designers manually recreate each showcased component in Figma using the imported tokens
5. Use showcase screenshots as reference frames during component building
6. Establish token update cadence (weekly or per-release)

**Success criteria:**
- All brand colors appear in Figma color styles
- Typography scale matches code exactly
- Components in Figma use only token-backed styles
- Showcase remains the interaction/behavior reference

**Files involved:** `tailwind.preset.js`, new `tokens.json` export script

---

## Approach 2: React-to-Figma Tools (Bootstrap Option)

**Goal:** One-time import of React components into editable Figma frames for bootstrapping.

**Tools to evaluate:**
- **Anima** — best for component fidelity, supports variants
- **Locofy** — good for layout-heavy components, has Figma sync
- **CopyCat** — quick paste-to-Figma conversion

**Why this approach:**
- Fast way to get initial component shells into Figma
- Good for teams without dedicated design system designers
- Bridges the gap while manual Figma components are being built

**Implementation steps:**
1. Select 3-5 representative components (Button, Card, Alert, Input, Badge)
2. Export component code or use browser extension to capture
3. Run through chosen tool to generate Figma frames
4. Review and clean up: fix auto-layout, naming, variant structure
5. Use as temporary reference while building proper Token Studio-based components

**Caveats:**
- Output often needs significant cleanup
- Not suitable for ongoing sync (one-way, manual)
- Complex components (Dialog, Sheet, DropdownMenu) rarely translate well

**Decision point:** Use this only if the team lacks capacity for full manual rebuild in Approach 1.

---

## Approach 3: Figma Widgets/Plugins (Interactive Demos)

**Goal:** Embed the live showcase inside Figma for reference without sync maintenance.

**Why this approach:**
- Zero sync issues
- Designers see the real, interactive implementation
- Quick win for design-system adoption
- Useful for complex interactive patterns (tabs, steppers, command palette)

**Implementation steps:**
1. Build or configure a simple Figma widget that embeds an iframe
2. Point widget to the deployed showcase URL (or local dev server during design sessions)
3. Position widget in a dedicated "System Reference" page in Figma
4. Document the widget location in design system onboarding

**When to use:**
- As a companion to Approaches 1 or 2
- For patterns where seeing real interaction matters more than static mockups
- When the design system is evolving rapidly and Figma components lag behind

**Limitations:**
- Not editable; purely reference
- Requires live deployment of showcase
- Cannot be used for handoff or specs

---

## Decision Matrix

| Approach | Setup Effort | Maintenance | Fidelity | Longevity | Recommended For |
|----------|--------------|-------------|----------|-----------|-----------------|
| Token Studio + Manual | Medium | Low | High | High | **Primary recommendation** |
| React-to-Figma Tools | Low | High (manual) | Medium | Low | Bootstrap/temporary |
| Figma Widgets | Very Low | None | Exact (live) | High | Companion to primary |

## Recommended Hybrid Strategy

1. **Immediate (this week):** Deploy Approach 3 — add a Figma widget pointing to the live showcase for instant reference
2. **Short-term (2-4 weeks):** Implement Approach 1 — export tokens, designers begin manual component rebuild
3. **Optional:** Use Approach 2 selectively if specific components need fast bootstrapping
4. **Ongoing:** Showcase remains the interaction source of truth; Figma remains the visual exploration layer

## Next Steps

- [ ] Create token export script from `tailwind.preset.js`
- [ ] Set up Token Studio in Figma and import initial tokens
- [ ] Deploy showcase to accessible URL for widget embedding
- [ ] Schedule design-system handoff session with designers using the showcase as spec reference
