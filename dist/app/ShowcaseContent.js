import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Check, Code2, Copy } from 'lucide-react';
import { cn } from '../lib/utils.js';
import { alertVariants, badgeVariants, buttonVariants, cardStyles } from '../styles/components.js';
import { Icons } from '../styles/icons.js';
import { ActivityFeedItem, AIState, DataVisualShell, DropdownMenu, DropdownMenuContent, DropdownMenuIconTrigger, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, EmptyState, EvidenceCard, FilterBar, FormField, InfoHint, InlineEditable, KeyValueList, LoadingState, PageHeader, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Progress, ProgressDots, ResultSummary, SearchInput, SectionHeader, Skeleton, Spinner, StatCard, StatusPanel, Stepper, Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Timeline, WorkflowAuditTimeline, } from '../index.js';
export function ShowcaseContent({ onOpenCommand, onOpenDialog, onOpenSheet }) {
    const [liveProgress, setLiveProgress] = useState(12);
    const [threshold, setThreshold] = useState(72);
    useEffect(() => {
        const id = setInterval(() => setLiveProgress(p => p >= 96 ? 8 : p + 2), 400);
        return () => clearInterval(id);
    }, []);
    const loadingProgress = liveProgress;
    const statusProgress = Math.min(100, Math.round(liveProgress * 0.8 + 10));
    const aiProgress = Math.min(100, Math.round(liveProgress * 1.1 - 5));
    return (_jsxs(_Fragment, { children: [_jsx(PageHeader, { eyebrow: "Shared Package Surface", title: "Reusable VU interface language", description: "A cross-project component system for modern, minimal, and intuitive VU-branded products, including workflow, data, navigation, and AI interaction patterns.", actions: _jsxs(_Fragment, { children: [_jsxs("button", { className: buttonVariants({ variant: 'primary' }), onClick: onOpenCommand, children: [_jsx(Icons.Actions.Search, { className: "h-4 w-4" }), "Open Commands"] }), _jsx("button", { className: buttonVariants({ variant: 'outline' }), onClick: onOpenDialog, children: "Open Modal" })] }) }), _jsxs(Tabs, { defaultValue: "foundations", className: "space-y-8", children: [_jsxs(TabsList, { className: "w-full flex-wrap h-auto bg-muted/70 p-1.5", children: [_jsx(TabsTrigger, { value: "foundations", children: "Foundations" }), _jsx(TabsTrigger, { value: "components", children: "Interface Components" }), _jsx(TabsTrigger, { value: "workflow", children: "Navigation & Workflow" }), _jsx(TabsTrigger, { value: "data", children: "Data & Decision" }), _jsx(TabsTrigger, { value: "ai", children: "AI & Async" })] }), _jsxs(TabsContent, { value: "foundations", className: "space-y-12", children: [_jsx(SectionHeader, { title: "Brand, tokens, and visual foundations", description: "Core tokens and visual assets that define the system language: colors, typography, shadows, and the icon surface." }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start", children: [_jsxs("section", { children: [_jsx(SectionHeader, { title: "Brand Colors" }), _jsx(ShowcaseItem, { code: `// Brand color utility classes — use directly in className
// VU Blue:   bg-vu-blue   text-vu-blue   border-vu-blue
// VU Orange: bg-vu-orange text-vu-orange border-vu-orange
// VU Green:  bg-vu-green  text-vu-green  border-vu-green
// VU Purple: bg-vu-purple text-vu-purple border-vu-purple

<div className="rounded-lg p-6 bg-vu-blue text-white">
  <p className="font-bold text-lg">VU Blue</p>
  <p className="text-sm opacity-90">#0077B3</p>
</div>`, children: _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsx(ColorCard, { name: "VU Blue", color: "bg-vu-blue", textColor: "text-white", hex: "#0077B3" }), _jsx(ColorCard, { name: "VU Orange", color: "bg-vu-orange", textColor: "text-white", hex: "#CC4100" }), _jsx(ColorCard, { name: "VU Green", color: "bg-vu-green", textColor: "text-white", hex: "#008053" }), _jsx(ColorCard, { name: "VU Purple", color: "bg-vu-purple", textColor: "text-white", hex: "#3B2171" })] }) })] }), _jsxs("section", { children: [_jsx(SectionHeader, { title: "Badges" }), _jsx(ShowcaseItem, { code: `import { badgeVariants } from '@vu/design-system';

// Available variants: primary · secondary · accent · tertiary
//                     success · warning · error · info · outline · ghost
// Subtle / outline variants: primary-subtle, warning-subtle, etc.

<span className={badgeVariants({ variant: 'success' })}>Approved</span>
<span className={badgeVariants({ variant: 'warning' })}>Needs review</span>
<span className={badgeVariants({ variant: 'info' })}>Conditional</span>
<span className={badgeVariants({ variant: 'outline' })}>Draft</span>`, children: _jsx("div", { className: "flex flex-wrap gap-3", children: ['primary', 'secondary', 'accent', 'tertiary', 'success', 'warning', 'error', 'info', 'outline', 'ghost'].map((variant) => (_jsx("span", { className: badgeVariants({ variant: variant }), children: variant[0].toUpperCase() + variant.slice(1) }, variant))) }) })] })] }), _jsxs("section", { children: [_jsx(SectionHeader, { title: "Color Scales" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [_jsx(ColorScale, { title: "VU Blue", colors: [['50', 'bg-vu-blue-50', 'text-vu-blue-900'], ['100', 'bg-vu-blue-100', 'text-vu-blue-900'], ['200', 'bg-vu-blue-200', 'text-vu-blue-900'], ['300', 'bg-vu-blue-300', 'text-vu-blue-900'], ['400', 'bg-vu-blue-400', 'text-white'], ['500', 'bg-vu-blue-500', 'text-white'], ['600', 'bg-vu-blue-600', 'text-white'], ['700', 'bg-vu-blue-700', 'text-white'], ['800', 'bg-vu-blue-800', 'text-white'], ['900', 'bg-vu-blue-900', 'text-white']] }), _jsx(ColorScale, { title: "VU Orange", colors: [['50', 'bg-vu-orange-50', 'text-vu-orange-900'], ['100', 'bg-vu-orange-100', 'text-vu-orange-900'], ['200', 'bg-vu-orange-200', 'text-vu-orange-900'], ['300', 'bg-vu-orange-300', 'text-vu-orange-900'], ['400', 'bg-vu-orange-400', 'text-white'], ['500', 'bg-vu-orange-500', 'text-white'], ['600', 'bg-vu-orange-600', 'text-white'], ['700', 'bg-vu-orange-700', 'text-white'], ['800', 'bg-vu-orange-800', 'text-white'], ['900', 'bg-vu-orange-900', 'text-white']] }), _jsx(ColorScale, { title: "VU Green", colors: [['50', 'bg-vu-green-50', 'text-vu-green-900'], ['100', 'bg-vu-green-100', 'text-vu-green-900'], ['200', 'bg-vu-green-200', 'text-vu-green-900'], ['300', 'bg-vu-green-300', 'text-vu-green-900'], ['400', 'bg-vu-green-400', 'text-white'], ['500', 'bg-vu-green-500', 'text-white'], ['600', 'bg-vu-green-600', 'text-white'], ['700', 'bg-vu-green-700', 'text-white'], ['800', 'bg-vu-green-800', 'text-white'], ['900', 'bg-vu-green-900', 'text-white']] }), _jsx(ColorScale, { title: "VU Purple", colors: [['50', 'bg-vu-purple-50', 'text-vu-purple-900'], ['100', 'bg-vu-purple-100', 'text-vu-purple-900'], ['200', 'bg-vu-purple-200', 'text-vu-purple-900'], ['300', 'bg-vu-purple-300', 'text-vu-purple-900'], ['400', 'bg-vu-purple-400', 'text-white'], ['500', 'bg-vu-purple-500', 'text-white'], ['600', 'bg-vu-purple-600', 'text-white'], ['700', 'bg-vu-purple-700', 'text-white'], ['800', 'bg-vu-purple-800', 'text-white'], ['900', 'bg-vu-purple-900', 'text-white']] })] })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start", children: [_jsxs("section", { children: [_jsx(SectionHeader, { title: "Typography" }), _jsxs("div", { className: "space-y-6", children: [_jsx("div", { children: _jsx("h1", { children: "Heading 1 (2.25rem / 36px)" }) }), _jsx("div", { children: _jsx("h2", { children: "Heading 2 (1.875rem / 30px)" }) }), _jsx("div", { children: _jsx("h3", { children: "Heading 3 (1.5rem / 24px)" }) }), _jsx("div", { children: _jsx("h4", { children: "Heading 4 (1.25rem / 20px)" }) }), _jsx("div", { children: _jsx("p", { children: "Body text (1rem / 16px) \u2014 default text size for most content." }) }), _jsx("div", { children: _jsx("small", { children: "Small text (0.875rem / 14px) \u2014 captions, labels, secondary info." }) })] })] }), _jsxs("section", { children: [_jsx(SectionHeader, { title: "Shadows" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: ['shadow-xs', 'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl', 'shadow-blue', 'shadow-orange'].map((shadow) => (_jsx(ShadowCard, { name: shadow, className: shadow }, shadow))) })] })] }), _jsxs("section", { children: [_jsx(SectionHeader, { title: "Icon Library" }), _jsx(ShowcaseItem, { code: `import { Icons } from '@vu/design-system';
// or import directly from lucide-react

<Icons.Navigation.Home className="h-5 w-5 text-vu-blue" />
<Icons.Status.CheckCircle className="h-5 w-5 text-vu-green" />
<Icons.Actions.Download className="h-5 w-5 text-vu-orange" />
<Icons.Analytics.BarChart className="h-5 w-5 text-vu-purple" />`, children: _jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-8", children: [_jsx(IconGroup, { title: "Navigation", items: [['Home', _jsx(Icons.Navigation.Home, { className: "h-5 w-5 text-vu-blue" })], ['Menu', _jsx(Icons.Navigation.Menu, { className: "h-5 w-5 text-vu-purple" })], ['Search', _jsx(Icons.Navigation.Search, { className: "h-5 w-5 text-vu-blue-700" })], ['User', _jsx(Icons.Navigation.User, { className: "h-5 w-5 text-vu-green" })], ['Settings', _jsx(Icons.Navigation.Settings, { className: "h-5 w-5 text-vu-purple-700" })], ['ArrowLeft', _jsx(Icons.Navigation.ArrowLeft, { className: "h-5 w-5 text-vu-blue-600" })], ['ArrowRight', _jsx(Icons.Navigation.ArrowRight, { className: "h-5 w-5 text-vu-orange" })], ['Compass', _jsx(Icons.Navigation.Compass, { className: "h-5 w-5 text-vu-green-700" })]] }), _jsx(IconGroup, { title: "Status & Feedback", items: [['CheckCircle', _jsx(Icons.Status.CheckCircle, { className: "h-5 w-5 text-success-500" })], ['ErrorCircle', _jsx(Icons.Status.ErrorCircle, { className: "h-5 w-5 text-error-500" })], ['Warning', _jsx(Icons.Status.Warning, { className: "h-5 w-5 text-warning-500" })], ['Info', _jsx(Icons.Status.Info, { className: "h-5 w-5 text-info-500" })], ['Bell', _jsx(Icons.Status.Bell, { className: "h-5 w-5 text-vu-orange" })], ['Shield', _jsx(Icons.Status.Shield, { className: "h-5 w-5 text-vu-purple" })], ['Bookmark', _jsx(Icons.Status.Bookmark, { className: "h-5 w-5 text-vu-green" })], ['Eye', _jsx(Icons.Status.Eye, { className: "h-5 w-5 text-vu-blue" })]] }), _jsx(IconGroup, { title: "Actions", items: [['Plus', _jsx(Icons.Actions.Plus, { className: "h-5 w-5 text-vu-blue" })], ['Edit', _jsx(Icons.Actions.Edit, { className: "h-5 w-5 text-vu-purple" })], ['Download', _jsx(Icons.Actions.Download, { className: "h-5 w-5 text-vu-green" })], ['Upload', _jsx(Icons.Actions.Upload, { className: "h-5 w-5 text-vu-orange" })], ['Refresh', _jsx(Icons.Actions.Refresh, { className: "h-5 w-5 text-vu-blue-700" })], ['Filter', _jsx(Icons.Actions.Filter, { className: "h-5 w-5 text-vu-purple-700" })], ['Share', _jsx(Icons.Actions.Share, { className: "h-5 w-5 text-vu-orange-700" })], ['Archive', _jsx(Icons.Actions.Archive, { className: "h-5 w-5 text-vu-green-700" })]] }), _jsx(IconGroup, { title: "Documents & Analytics", items: [['File', _jsx(Icons.Documents.File, { className: "h-5 w-5 text-vu-blue" })], ['Folder', _jsx(Icons.Documents.Folder, { className: "h-5 w-5 text-vu-orange" })], ['Book', _jsx(Icons.Documents.Book, { className: "h-5 w-5 text-vu-purple" })], ['Calendar', _jsx(Icons.Documents.Calendar, { className: "h-5 w-5 text-vu-green" })], ['BarChart', _jsx(Icons.Analytics.BarChart, { className: "h-5 w-5 text-vu-blue-700" })], ['LineChart', _jsx(Icons.Analytics.LineChart, { className: "h-5 w-5 text-vu-purple-700" })], ['TrendingUp', _jsx(Icons.Analytics.TrendingUp, { className: "h-5 w-5 text-vu-green-700" })], ['Workflow', _jsx(Icons.Analytics.Workflow, { className: "h-5 w-5 text-vu-orange-700" })]] })] }) })] })] }), _jsxs(TabsContent, { value: "components", className: "space-y-12", children: [_jsx(SectionHeader, { title: "Core interface components", description: "Primary interactive and feedback building blocks for general product interfaces: buttons, cards, alerts, forms, loading, and content states." }), _jsxs("section", { children: [_jsx(SectionHeader, { title: "Buttons" }), _jsx("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-8 mb-8", children: [
                                            ['Primary Variants (VU Blue)', 'primary', 'primary-subtle', 'primary-outline', 'primary-ghost'],
                                            ['Secondary Variants (VU Purple)', 'secondary', 'secondary-subtle', 'secondary-outline', 'secondary-ghost'],
                                            ['Accent Variants (VU Orange)', 'accent', 'accent-subtle', 'accent-outline', 'accent-ghost'],
                                            ['Tertiary Variants (VU Green)', 'tertiary', 'tertiary-subtle', 'tertiary-outline', 'tertiary-ghost'],
                                        ].map(([title, a, b, c, d]) => (_jsx(ShowcaseItem, { code: `import { buttonVariants } from '@vu/design-system';

<button className={buttonVariants({ variant: '${a}' })}>Filled</button>
<button className={buttonVariants({ variant: '${b}' })}>Subtle</button>
<button className={buttonVariants({ variant: '${c}' })}>Outline</button>
<button className={buttonVariants({ variant: '${d}' })}>Ghost</button>`, children: _jsxs("div", { children: [_jsx("h3", { className: cn('text-lg font-semibold mb-4', title.includes('Blue') ? 'text-vu-blue-700' : title.includes('Purple') ? 'text-vu-purple-700' : title.includes('Orange') ? 'text-vu-orange-700' : 'text-vu-green-700'), children: title }), _jsx("div", { className: "flex flex-wrap gap-3", children: [a, b, c, d].map((variant) => (_jsx("button", { className: buttonVariants({ variant: variant }), children: String(variant).split('-')[1] ? String(variant).split('-')[1][0].toUpperCase() + String(variant).split('-')[1].slice(1) : String(title).split(' ')[0] }, variant))) })] }) }, title))) }), _jsx(ShowcaseItem, { code: `import { buttonVariants } from '@vu/design-system';

// Sizes: xs · sm · md (default) · lg · xl
<button className={buttonVariants({ variant: 'primary', size: 'xs' })}>XS</button>
<button className={buttonVariants({ variant: 'primary', size: 'sm' })}>SM</button>
<button className={buttonVariants({ variant: 'primary', size: 'md' })}>MD</button>
<button className={buttonVariants({ variant: 'primary', size: 'lg' })}>LG</button>
<button className={buttonVariants({ variant: 'primary', size: 'xl' })}>XL</button>`, children: _jsxs("div", { className: "mb-8", children: [_jsx("h3", { className: "text-lg font-semibold mb-4 text-muted-foreground", children: "Button Sizes" }), _jsx("div", { className: "flex flex-wrap items-center gap-3", children: ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (_jsx("button", { className: cn(buttonVariants({ variant: 'primary', size: size }), 'transition-colors duration-150'), children: size.toUpperCase() }, size))) })] }) }), _jsx(ShowcaseItem, { code: `import { buttonVariants } from '@vu/design-system';
import { Icons } from '@vu/design-system';

<button className={buttonVariants({ variant: 'primary' })}>
  <Icons.Actions.Search className="h-4 w-4" />
  Search
</button>
<button className={buttonVariants({ variant: 'secondary' })}>
  <Icons.Actions.Download className="h-4 w-4" />
  Download
</button>`, children: _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-4 text-muted-foreground", children: "With Icons" }), _jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsxs("button", { className: buttonVariants({ variant: 'primary' }), children: [_jsx(Icons.Actions.Search, { className: "h-4 w-4" }), "Search"] }), _jsxs("button", { className: buttonVariants({ variant: 'secondary' }), children: [_jsx(Icons.Actions.Download, { className: "h-4 w-4" }), "Download"] }), _jsxs("button", { className: buttonVariants({ variant: 'accent' }), children: [_jsx(Icons.Status.Star, { className: "h-4 w-4" }), "Favorite"] }), _jsxs("button", { className: buttonVariants({ variant: 'tertiary' }), children: [_jsx(Icons.Status.CheckCircle, { className: "h-4 w-4" }), "Complete"] })] })] }) })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start", children: [_jsxs("section", { children: [_jsx(SectionHeader, { title: "Cards" }), _jsx(ShowcaseItem, { code: `import { cardStyles } from '@vu/design-system';

// variants: default · elevated · interactive
// tone:     default · primary · secondary · accent · tertiary
// accent:   none · top · left
// padding:  sm · md · lg

<div className={cardStyles({ variant: 'default', tone: 'default', accent: 'none', padding: 'md' })}>
  <h3 className="font-semibold mb-2">Default Card</h3>
  <p className="text-sm text-muted-foreground">Standard card with border.</p>
</div>

<div className={cardStyles({ variant: 'default', tone: 'primary', accent: 'left', padding: 'md' })}>
  Featured card — subtle semantic emphasis
</div>

<div className={cardStyles({ variant: 'elevated', tone: 'accent', accent: 'top', padding: 'md' })}>
  Metric card — restrained top accent
</div>

<div className={cardStyles({ variant: 'interactive', tone: 'secondary', accent: 'left', padding: 'md' })}>
  Interactive card — hover effects plus semantic grouping
</div>`, children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: cardStyles({ variant: 'default', padding: 'md' }), children: [_jsx("h3", { className: "font-semibold mb-2", children: "Default Card" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "A standard card with border and subtle shadow." })] }), _jsxs("div", { className: cardStyles({ variant: 'default', tone: 'primary', accent: 'left', padding: 'md' }), children: [_jsx("h3", { className: "font-semibold mb-2", children: "Left-accent card" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Use this for featured decisions, highlighted evidence, and semantic grouping." })] }), _jsxs("div", { className: cardStyles({ variant: 'elevated', tone: 'accent', accent: 'top', padding: 'md' }), children: [_jsx("h3", { className: "font-semibold mb-2", children: "Top-accent card" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Use this for metrics and compact summary cards that need scanable differentiation." })] }), _jsxs("div", { className: cardStyles({ variant: 'interactive', tone: 'secondary', accent: 'left', padding: 'md' }), children: [_jsx("h3", { className: "font-semibold mb-2", children: "Interactive Card" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "A clickable card with hover effects and restrained semantic emphasis." })] })] }) })] }), _jsxs("section", { children: [_jsx(SectionHeader, { title: "Alerts" }), _jsx(ShowcaseItem, { code: `import { alertVariants } from '@vu/design-system';
import { cn } from '@vu/design-system';

// Apply semantic VU colors via className override
<div className={cn(alertVariants({ variant: 'default' }), 'border-vu-blue/50 bg-vu-blue-50 text-vu-blue-800 [&>svg]:text-vu-blue-600')}>
  <Info className="h-4 w-4" />
  <div>
    <h5 className="font-medium">Primary Alert</h5>
    <p className="text-sm">This is a primary alert using VU Blue.</p>
  </div>
</div>`, children: _jsxs("div", { className: "space-y-4", children: [_jsx(AlertPreview, { title: "Primary Alert", text: "This is a primary alert using VU Blue.", className: "border-vu-blue/50 bg-vu-blue-50 text-vu-blue-800 [&>svg]:text-vu-blue-600", icon: _jsx(Icons.Status.Info, { className: "h-4 w-4" }) }), _jsx(AlertPreview, { title: "Success Alert", text: "This is a success alert using VU Green.", className: "border-[#008053]/30 bg-[#E6F5F0] text-[#004D32] [&>svg]:text-[#008053]", icon: _jsx(Icons.Status.CheckCircle, { className: "h-4 w-4" }) }), _jsx(AlertPreview, { title: "Warning Alert", text: "This is a warning alert using warm amber.", className: "border-[#F59E0B]/30 bg-[#FFFBEB] text-[#92400E] [&>svg]:text-[#D97706]", icon: _jsx(Icons.Status.Warning, { className: "h-4 w-4" }) }), _jsx(AlertPreview, { title: "Error Alert", text: "This is an error alert using red.", className: "border-[#DC2626]/30 bg-[#FEF2F2] text-[#7F1D1D] [&>svg]:text-[#B91C1C]", icon: _jsx(Icons.Status.ErrorCircle, { className: "h-4 w-4" }) })] }) })] })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start", children: [_jsxs("section", { children: [_jsx(SectionHeader, { title: "Inputs" }), _jsx(ShowcaseItem, { code: `import { FormField, InfoHint } from '@vu/design-system';

// Default
<FormField label="Field label" description="Helper text." required>
  <input type="text" placeholder="Enter value…"
    className="w-full rounded-lg border px-4 py-2.5 text-sm
               focus:outline-none focus:ring-2 focus:ring-ring" />
</FormField>

// Inline orientation
<FormField label="Similarity threshold" orientation="inline"
  labelSuffix={<InfoHint text="Tooltip text here." align="right" />}>
  <input type="range" min="0" max="100" className="w-full accent-vu-blue" />
</FormField>

// Valid state
<FormField label="Email">
  <div className="relative">
    <input type="email" className="w-full rounded-lg border-2 border-vu-green/50 bg-vu-green-50/30 px-4 py-2.5 pr-10" />
    <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-vu-green" />
  </div>
</FormField>

// Error state
<FormField label="Email" error="Please enter a valid email.">
  <input type="email" className="w-full rounded-lg border-2 border-error-500/50 px-4 py-2.5" />
</FormField>`, children: _jsxs("div", { className: "space-y-8", children: [_jsx(FormField, { label: "Textfield/Default", children: _jsx("input", { type: "text", placeholder: "Textfield text", className: "w-full px-4 py-2.5 rounded-lg border border-vu-blue-200 bg-vu-blue-50/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-vu-blue/30 focus:border-vu-blue" }) }), _jsx(FormField, { label: "Textfield/Valid", children: _jsxs("div", { className: "relative", children: [_jsx("input", { type: "email", defaultValue: "email@domain.com", className: "w-full px-4 py-2.5 pr-10 rounded-lg border-2 border-vu-green/50 bg-vu-green-50/30 text-vu-green-900 focus:outline-none" }), _jsx(Icons.Status.CheckCircle, { className: "absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-vu-green" })] }) }), _jsx(FormField, { label: "Textfield/Error", error: "Please enter a valid email address", children: _jsxs("div", { className: "relative", children: [_jsx("input", { type: "email", defaultValue: "email@", className: "w-full px-4 py-2.5 pr-10 rounded-lg border-2 border-error-500/50 bg-error-50/30 text-error-900 focus:outline-none" }), _jsx(Icons.Status.ErrorCircle, { className: "absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-error-500" })] }) }), _jsx(FormField, { label: "Textfield/Multiline", children: _jsx("textarea", { rows: 4, placeholder: "Multiline text field", className: "w-full px-4 py-3 rounded-lg border border-vu-purple-200 bg-vu-purple-50/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-vu-purple/30 focus:border-vu-purple resize-y" }) })] }) }), _jsx("div", { className: "mt-6", children: _jsx(ShowcaseItem, { code: `import { FormField, InfoHint, SectionHeader, buttonVariants } from '@vu/design-system';

// Live-controlled slider with colour-coded value pill + preset buttons
const [threshold, setThreshold] = useState(72);

<FormField
  label={<span className="flex items-center gap-1.5">
    Similarity threshold
    <InfoHint text="Higher thresholds reduce noise but may hide near-duplicate cases." align="right" />
  </span>}
  orientation="inline"
>
  <div className="space-y-2">
    <div className="flex items-center gap-3">
      <input type="range" min="0" max="100" value={threshold}
        onChange={e => setThreshold(Number(e.target.value))}
        className="flex-1 accent-vu-blue" />
      <span className={cn('w-14 text-center text-sm font-semibold rounded-full px-2 py-0.5 transition-colors duration-300',
        threshold >= 75 ? 'bg-vu-orange-50 text-vu-orange'
          : threshold <= 40 ? 'bg-vu-green-50 text-vu-green'
          : 'bg-vu-blue-50 text-vu-blue'
      )}>{threshold}%</span>
    </div>
    <div className="flex justify-between text-xs text-muted-foreground px-0.5">
      <span>Loose</span>
      <span>{threshold <= 40 ? 'More results' : threshold >= 75 ? 'Fewer, higher confidence' : 'Balanced'}</span>
      <span>Strict</span>
    </div>
  </div>
</FormField>

<div className="flex gap-2 pt-1">
  {[['Loose', 30], ['Balanced', 65], ['Strict', 85]].map(([label, val]) => (
    <button key={label} onClick={() => setThreshold(val)}
      className={cn(buttonVariants({ variant: threshold === val ? 'primary' : 'outline', size: 'sm' }), 'flex-1')}>
      {label}
    </button>
  ))}
</div>`, children: _jsxs("div", { className: cardStyles({ variant: 'default', padding: 'md' }), children: [_jsx(SectionHeader, { title: "Enhanced field composition", size: "compact", eyebrow: "Utility heading" }), _jsxs("div", { className: "mt-4 space-y-4", children: [_jsx(FormField, { label: _jsxs("span", { className: "flex items-center gap-1.5", children: ["Similarity threshold ", _jsx(InfoHint, { text: "Higher thresholds reduce noise but may hide near-duplicate cases.", align: "right" })] }), orientation: "inline", children: _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("input", { type: "range", min: "0", max: "100", value: threshold, onChange: e => setThreshold(Number(e.target.value)), className: "flex-1 accent-vu-blue" }), _jsxs("span", { className: cn('w-14 text-center text-sm font-semibold rounded-full px-2 py-0.5 transition-colors duration-300', threshold >= 75 ? 'bg-vu-orange-50 text-vu-orange' : threshold <= 40 ? 'bg-vu-green-50 text-vu-green' : 'bg-vu-blue-50 text-vu-blue'), children: [threshold, "%"] })] }), _jsxs("div", { className: "flex justify-between text-xs text-muted-foreground px-0.5", children: [_jsx("span", { children: "Loose" }), _jsx("span", { className: cn('transition-colors duration-300', threshold >= 75 ? 'text-vu-orange font-medium' : threshold <= 40 ? 'text-vu-green font-medium' : 'text-vu-blue font-medium'), children: threshold <= 40 ? 'More results' : threshold >= 75 ? 'Fewer, higher confidence' : 'Balanced' }), _jsx("span", { children: "Strict" })] })] }) }), _jsx("div", { className: "flex gap-2 pt-1", children: [['Loose', 30], ['Balanced', 65], ['Strict', 85]].map(([label, val]) => (_jsx("button", { onClick: () => setThreshold(val), className: cn(buttonVariants({ variant: threshold === val ? 'primary' : 'outline', size: 'sm' }), 'flex-1 transition-colors duration-150'), children: label }, label))) })] })] }) }) })] }), _jsxs("section", { children: [_jsx(SectionHeader, { title: "Feedback States", description: "LoadingState for multi-step page loads. Spinner for inline async actions. Skeleton for initial content load. For agent-driven async, see AIState in the AI & Async tab." }), _jsxs("div", { className: "space-y-6", children: [_jsx(ShowcaseItem, { code: `import { LoadingState } from '@vu/design-system';

// progress: 0–100, animates the bar
<LoadingState
  title="Building your page"
  description="Tokens, layouts, and content are being assembled into a polished interface."
  progress={68}
/>`, children: _jsx(LoadingState, { title: "Building your page", description: "Tokens, layouts, and content are being assembled into a polished interface.", progress: loadingProgress }) }), _jsx(ShowcaseItem, { code: `import { Spinner, Progress } from '@vu/design-system';

// Spinner — inline async action indicator
<Spinner size="md" variant="primary" label="Syncing" />

// Progress bar — standalone progress indicator
// variants: primary · secondary · accent · success · warning
// sizes: sm · md · lg
<Progress value={72} variant="primary" size="lg" />`, children: _jsxs("div", { className: cardStyles({ variant: 'default', padding: 'md' }), children: [_jsxs("div", { className: "flex items-center justify-between gap-4 mb-4", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: "Inline async action" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Use Spinner for button-level or field-level async \u2014 not for full-page loads." })] }), _jsx(Spinner, { size: "md", variant: "primary", label: "Syncing" })] }), _jsx(Progress, { value: statusProgress, variant: "primary", size: "lg" })] }) }), _jsx(ShowcaseItem, { code: `import { Skeleton } from '@vu/design-system';

// variants: text · avatar · button · thumbnail · card
// Use to replace content shapes during initial data load
<Skeleton variant="text" />
<Skeleton variant="text" className="w-4/5" />
<Skeleton variant="avatar" />
<Skeleton variant="button" />`, children: _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [_jsxs("div", { className: cardStyles({ variant: 'default', padding: 'md' }), children: [_jsx(Skeleton, { variant: "text", className: "mb-3" }), _jsx(Skeleton, { variant: "text", className: "w-4/5 mb-2" }), _jsx(Skeleton, { variant: "text", className: "w-3/5" })] }), _jsxs("div", { className: cardStyles({ variant: 'default', padding: 'md' }), children: [_jsx(Skeleton, { variant: "avatar", className: "mb-3" }), _jsx(Skeleton, { variant: "text", className: "w-2/3" })] }), _jsxs("div", { className: cardStyles({ variant: 'default', padding: 'md' }), children: [_jsx(Skeleton, { variant: "button", className: "mb-3" }), _jsx(Skeleton, { variant: "text", className: "w-1/2" })] })] }) })] })] })] })] }), _jsxs(TabsContent, { value: "workflow", className: "space-y-12", children: [_jsx(SectionHeader, { title: "Navigation, composition, and workflow", description: "Page structure, overlay navigation, form composition, and guided progression patterns for multi-step journeys and task flows.", actions: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { className: buttonVariants({ variant: 'secondary' }), onClick: onOpenSheet, children: "Open Sheet" }), _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsx(DropdownMenuIconTrigger, {}) }), _jsxs(DropdownMenuContent, { children: [_jsx(DropdownMenuLabel, { children: "Actions" }), _jsx(DropdownMenuItem, { children: "Duplicate page" }), _jsx(DropdownMenuItem, { children: "Share preview" }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuItem, { children: "Archive draft" })] })] })] }) }), _jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-12 items-start", children: [_jsxs("div", { className: "space-y-6", children: [_jsx(ShowcaseItem, { code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@vu/design-system';

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="activity">Activity</TabsTrigger>
    <TabsTrigger value="governance">Governance</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    Overview content
  </TabsContent>
  <TabsContent value="activity">
    Activity content
  </TabsContent>
  <TabsContent value="governance">
    Governance content
  </TabsContent>
</Tabs>`, children: _jsxs("div", { className: cardStyles({ variant: 'default', padding: 'lg' }), children: [_jsx(SectionHeader, { title: "Tabs", description: "Use tabs for short, closely related views inside a shared context." }), _jsxs(Tabs, { defaultValue: "overview", className: "mt-4", children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "overview", children: "Overview" }), _jsx(TabsTrigger, { value: "activity", children: "Activity" }), _jsx(TabsTrigger, { value: "governance", children: "Governance" })] }), _jsx(TabsContent, { value: "overview", className: "rounded-lg border bg-card p-4 text-sm text-muted-foreground", children: "Shared foundations keep the system visually coherent across pages, teams, and agent-generated interfaces." }), _jsx(TabsContent, { value: "activity", className: "rounded-lg border bg-card p-4 text-sm text-muted-foreground", children: "Activity and workflow surfaces should be lightweight and easy to scan." }), _jsx(TabsContent, { value: "governance", className: "rounded-lg border bg-card p-4 text-sm text-muted-foreground", children: "Package-first adoption helps teams enforce the design language with less drift." })] })] }) }), _jsx(ShowcaseItem, { code: `import { FormField } from '@vu/design-system';

<FormField label="Project title" description="A concise descriptive name." required>
  <input type="text" placeholder="Award-winning VU experience"
    className="w-full rounded-lg border bg-muted/50 px-4 py-2.5 text-sm
               focus:outline-none focus:ring-2 focus:ring-ring" />
</FormField>

<FormField label="Owner email" error="Please provide a valid institutional email.">
  <input type="email" defaultValue="kenneth@"
    className="w-full rounded-lg border-2 border-error-500/40 bg-error-50/40 px-4 py-2.5 text-sm
               focus:outline-none" />
</FormField>`, children: _jsxs("div", { className: cardStyles({ variant: 'default', padding: 'lg' }), children: [_jsx(SectionHeader, { title: "Form composition", description: "FormField creates a reusable label, helper, and error pattern." }), _jsxs("div", { className: "mt-4 grid gap-5", children: [_jsx(FormField, { label: "Project title", description: "A concise descriptive name for the initiative.", required: true, children: _jsx("input", { type: "text", placeholder: "Award-winning VU experience", className: "w-full rounded-lg border bg-muted/50 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" }) }), _jsx(FormField, { label: "Owner email", error: "Please provide a valid institutional email address.", children: _jsx("input", { type: "email", defaultValue: "kenneth@", className: "w-full rounded-lg border-2 border-error-500/40 bg-error-50/40 px-4 py-2.5 text-sm focus:outline-none" }) })] })] }) })] }), _jsxs("div", { className: "space-y-6", children: [_jsx(ShowcaseItem, { code: `import { Stepper, ProgressDots } from '@vu/design-system';

<Stepper items={[
  { title: 'Intent',     description: 'Clarify the problem and outcome.',                status: 'complete' },
  { title: 'Structure',  description: 'Compose the interface from reusable system parts.', status: 'current'  },
  { title: 'Ship',       description: 'Package, test, and distribute across projects.',   status: 'upcoming' },
]} />

// Compact dot indicator for onboarding / task flows
<ProgressDots total={5} current={3} />`, children: _jsxs("div", { className: cardStyles({ variant: 'default', padding: 'lg' }), children: [_jsx(SectionHeader, { title: "Stepper", description: "For multi-step creation, onboarding, and guided decision flows." }), _jsx(Stepper, { className: "mt-4", items: [{ title: 'Intent', description: 'Clarify the problem and outcome.', status: 'complete' }, { title: 'Structure', description: 'Compose the interface from reusable system parts.', status: 'current' }, { title: 'Ship', description: 'Package, test, and distribute across projects.', status: 'upcoming' }] }), _jsxs("div", { className: "mt-4 flex items-center justify-between rounded-lg border bg-muted/30 px-4 py-3", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium", children: "Compact flow indicator" }), _jsx("p", { className: "text-xs text-muted-foreground", children: "Useful for onboarding, task flows, and guided forms." })] }), _jsx(ProgressDots, { total: 5, current: 3 })] })] }) }), _jsx(ShowcaseItem, { code: `import { Timeline } from '@vu/design-system';

// status: 'complete' | 'current' | 'upcoming'
<Timeline items={[
  { title: 'Discovery',    description: 'Clarified the system language.',           meta: 'Done',        status: 'complete' },
  { title: 'Composition',  description: 'Assembled reusable primitives.',            meta: 'In progress', status: 'current'  },
  { title: 'Adoption',     description: 'Package for team consumption.',             meta: 'Next',        status: 'upcoming' },
]} />`, children: _jsxs("div", { className: cardStyles({ variant: 'default', padding: 'lg' }), children: [_jsx(SectionHeader, { title: "Journey timeline", description: "Use timelines when users need narrative progression instead of discrete step navigation." }), _jsx(Timeline, { className: "mt-4", items: [{ title: 'Discovery', description: 'Clarified the system language and the component responsibilities.', meta: 'Done', status: 'complete' }, { title: 'Composition', description: 'Assembled reusable primitives for loading, progress, and structured status flows.', meta: 'In progress', status: 'current' }, { title: 'Adoption', description: 'Package the system so teams and agents can consume it consistently across products.', meta: 'Next', status: 'upcoming' }] })] }) }), _jsx(ShowcaseItem, { code: `import { EmptyState, buttonVariants } from '@vu/design-system';

<EmptyState
  title="No filtered results"
  description="When users narrow a list down to nothing, give them a calm explanation and an obvious next action."
  actions={
    <button className={buttonVariants({ variant: 'primary' })}>
      Reset filters
    </button>
  }
/>`, children: _jsx(EmptyState, { title: "No filtered results", description: "When users narrow a list down to nothing, give them a calm explanation and an obvious next action.", actions: _jsx("button", { className: buttonVariants({ variant: 'primary' }), children: "Reset filters" }) }) })] })] })] }), _jsxs(TabsContent, { value: "data", className: "space-y-12", children: [_jsx(SectionHeader, { title: "Data display and decision support", description: "Structured information, summaries, filters, metrics, and navigation for research, funding, matching, dashboards, and administrative surfaces." }), _jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-12 items-start", children: [_jsxs("div", { className: "space-y-6", children: [_jsx(ShowcaseItem, { code: `import { StatCard } from '@vu/design-system';
import { TrendingUp, Folder, CheckCircle, Workflow, Star } from 'lucide-react';

// Full StatCard with trend and meta
<StatCard
  label="Completion rate"
  value="82%"
  trend="+6.4% vs last month"
  meta="Across active journeys"
  icon={<TrendingUp className="h-4 w-4 text-vu-green" />}
/>

// Compact StatCard (size="compact")
<StatCard label="Clusters" value="12" size="compact"
  icon={<Workflow className="h-4 w-4" />} />

// With hint tooltip
<StatCard label="Flagged passages" value="48" size="compact"
  hint="Highlights from primary and compared document review panes."
  icon={<Star className="h-4 w-4" />} />`, children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [_jsx(StatCard, { label: "Completion rate", value: "82%", trend: "+6.4% vs last month", meta: "Across active journeys", icon: _jsx(Icons.Analytics.TrendingUp, { className: "h-4 w-4 text-vu-green" }) }), _jsx(StatCard, { label: "Open opportunities", value: "124", trend: "12 newly matched", meta: "Funding discovery surface", icon: _jsx(Icons.Documents.Folder, { className: "h-4 w-4 text-vu-orange" }) })] }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [_jsx(StatCard, { label: "Clusters", value: "12", size: "compact", icon: _jsx(Icons.Analytics.Workflow, { className: "h-4 w-4" }) }), _jsx(StatCard, { label: "Flagged passages", value: "48", size: "compact", hint: "Highlights combine extracted evidence from the primary and compared document review panes.", icon: _jsx(Icons.Status.Star, { className: "h-4 w-4" }) }), _jsx(StatCard, { label: "Review confidence", value: "High", size: "compact", meta: "Updated after comparison analysis", icon: _jsx(Icons.Status.CheckCircle, { className: "h-4 w-4 text-vu-green" }) })] })] }) }), _jsx(ShowcaseItem, { code: `import { StatusPanel } from '@vu/design-system';
import { Info } from 'lucide-react';

// variants: default · info · success · warning · error
<StatusPanel
  title="Application shortlist in progress"
  description="Candidate programmes are being compared against user preferences."
  progress={58}
  variant="info"
  icon={<Info className="h-4 w-4 text-vu-blue" />}
  meta="Updated 40 seconds ago"
/>`, children: _jsx(StatusPanel, { title: "Application shortlist in progress", description: "Candidate programmes are being compared against user preferences and completion evidence.", progress: statusProgress, variant: "info", icon: _jsx(Icons.Status.Info, { className: "h-4 w-4 text-vu-blue" }), meta: "Updated 40 seconds ago" }) }), _jsx(ShowcaseItem, { code: `import { KeyValueList } from '@vu/design-system';

// Default size
<KeyValueList items={[
  { key: 'Programme', value: 'Business Analytics' },
  { key: 'Faculty',   value: 'School of Business and Economics' },
  { key: 'Language',  value: 'English' },
]} />

// Compact size with custom key width
<KeyValueList size="compact" keyWidthClassName="minmax(0,120px)" items={[
  { key: 'Primary file', value: 'Advice memo v4.docx' },
  { key: 'Cluster',      value: '12' },
  { key: 'Matched on',   value: 'Title, content, metadata' },
]} />`, children: _jsxs("div", { className: cardStyles({ variant: 'default', padding: 'lg' }), children: [_jsx(SectionHeader, { title: "Structured data", description: "Tables and key-value lists should feel readable rather than heavy." }), _jsxs("div", { className: "mt-4 space-y-6", children: [_jsx(KeyValueList, { items: [{ key: 'Programme', value: 'Business Analytics' }, { key: 'Faculty', value: 'School of Business and Economics' }, { key: 'Language', value: 'English' }] }), _jsx(KeyValueList, { size: "compact", keyWidthClassName: "minmax(0,120px)", items: [{ key: 'Primary file', value: 'Advice memo v4.docx' }, { key: 'Cluster', value: '12' }, { key: 'Matched on', value: 'Title, content, metadata' }] })] })] }) }), _jsx(ShowcaseItem, { code: `import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from '@vu/design-system';

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Project</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Owner</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Funding Explorer</TableCell>
      <TableCell>
        <span className="inline-flex items-center rounded-full bg-vu-orange-50 px-2.5 py-0.5 text-xs font-medium text-vu-orange-800">
          In review
        </span>
      </TableCell>
      <TableCell>Kenneth</TableCell>
    </TableRow>
  </TableBody>
  <TableCaption>Example data table</TableCaption>
</Table>`, children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Project" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, { children: "Owner" })] }) }), _jsxs(TableBody, { children: [_jsxs(TableRow, { children: [_jsx(TableCell, { children: "Funding Explorer" }), _jsx(TableCell, { children: _jsx("span", { className: "inline-flex items-center rounded-full bg-vu-orange-50 px-2.5 py-0.5 text-xs font-medium text-vu-orange-800", children: "In review" }) }), _jsx(TableCell, { children: "Kenneth" })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Matching Journey" }), _jsx(TableCell, { children: _jsx("span", { className: "inline-flex items-center rounded-full bg-vu-green-50 px-2.5 py-0.5 text-xs font-medium text-vu-green-800", children: "Live" }) }), _jsx(TableCell, { children: "VU Team" })] })] }), _jsx(TableCaption, { children: "Example data-display shell for shared admin or decision interfaces." })] }) })] }), _jsxs("div", { className: "space-y-6", children: [_jsx(ShowcaseItem, { code: `import { FilterBar, SearchInput, badgeVariants, buttonVariants } from '@vu/design-system';

<FilterBar
  leading={
    <SearchInput placeholder="Search projects or opportunities"
      containerClassName="w-full sm:max-w-sm" />
  }
  filters={
    <div className="flex flex-wrap gap-2">
      <span className={badgeVariants({ variant: 'primary-subtle' })}>Open</span>
      <span className={badgeVariants({ variant: 'secondary-subtle' })}>Recommended</span>
      <span className={badgeVariants({ variant: 'accent-subtle' })}>Deadline soon</span>
    </div>
  }
  actions={
    <button className={buttonVariants({ variant: 'secondary-outline' })}>Export</button>
  }
/>`, children: _jsx(FilterBar, { leading: _jsx(SearchInput, { placeholder: "Search projects or opportunities", containerClassName: "w-full sm:max-w-sm" }), filters: _jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx("span", { className: badgeVariants({ variant: 'primary-subtle' }), children: "Open" }), _jsx("span", { className: badgeVariants({ variant: 'secondary-subtle' }), children: "Recommended" }), _jsx("span", { className: badgeVariants({ variant: 'accent-subtle' }), children: "Deadline soon" })] }), actions: _jsx("button", { className: buttonVariants({ variant: 'secondary-outline' }), children: "Export" }) }) }), _jsx(ShowcaseItem, { code: `import { ResultSummary, buttonVariants } from '@vu/design-system';

// tone: 'default' | 'success' | 'warning' | 'info'
<ResultSummary
  title="Recommended next step"
  summary="The current evidence suggests surfacing a small shortlist with strong programme-fit rationale."
  highlights="Shortlist business, data, and behavioural science pathways."
  actions={
    <button className={buttonVariants({ variant: 'secondary-outline' })}>View shortlist</button>
  }
/>

<ResultSummary
  eyebrow="Review summary"
  title="Duplicate-review decision"
  summary="The evidence indicates this pair is safe to collapse into a single retained document."
  highlights={<div className="space-y-2"><p>Strong content overlap with minor filename drift.</p><p>Metadata and extraction timestamps support consolidation.</p></div>}
  meta="Confidence high · 2 documents · Last analysed 40 seconds ago"
  tone="info"
  actions={
    <>
      <button className={buttonVariants({ variant: 'primary' })}>Accept recommendation</button>
      <button className={buttonVariants({ variant: 'outline' })}>Inspect evidence</button>
    </>
  }
/>`, children: _jsxs("div", { className: "space-y-4", children: [_jsx(ResultSummary, { title: "Recommended next step", summary: "The current evidence suggests surfacing a small shortlist with strong programme-fit rationale and a clear next action.", highlights: "Shortlist business, data, and behavioural science pathways. Show one confident recommendation, then present two alternative paths with evidence.", actions: _jsx("button", { className: buttonVariants({ variant: 'secondary-outline' }), children: "View shortlist" }) }), _jsx(ResultSummary, { eyebrow: "Review summary", title: "Duplicate-review decision", summary: "The evidence indicates this pair is safe to collapse into a single retained document, with a manual check on naming before tagging.", highlights: _jsxs("div", { className: "space-y-2", children: [_jsx("p", { children: "Strong content overlap with minor filename drift." }), _jsx("p", { children: "Metadata and extraction timestamps support consolidation." })] }), meta: "Confidence high \u00B7 2 documents \u00B7 Last analysed 40 seconds ago", tone: "info", actions: _jsxs(_Fragment, { children: [_jsx("button", { className: buttonVariants({ variant: 'primary' }), children: "Accept recommendation" }), _jsx("button", { className: buttonVariants({ variant: 'outline' }), children: "Inspect evidence" })] }) })] }) }), _jsx(ShowcaseItem, { code: `import { Pagination, PaginationContent, PaginationItem, PaginationLink,
         PaginationNext, PaginationPrevious, PaginationEllipsis } from '@vu/design-system';

<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
    <PaginationItem><PaginationEllipsis /></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>`, children: _jsxs("div", { className: cardStyles({ variant: 'default', padding: 'lg' }), children: [_jsx(SectionHeader, { title: "Pagination", description: "For dense listings and structured navigation across larger datasets." }), _jsx(Pagination, { className: "mt-4", children: _jsxs(PaginationContent, { children: [_jsx(PaginationItem, { children: _jsx(PaginationPrevious, { href: "#" }) }), _jsx(PaginationItem, { children: _jsx(PaginationLink, { href: "#", isActive: true, children: "1" }) }), _jsx(PaginationItem, { children: _jsx(PaginationLink, { href: "#", children: "2" }) }), _jsx(PaginationItem, { children: _jsx(PaginationLink, { href: "#", children: "3" }) }), _jsx(PaginationItem, { children: _jsx(PaginationEllipsis, {}) }), _jsx(PaginationItem, { children: _jsx(PaginationNext, { href: "#" }) })] }) })] }) })] })] })] }), _jsxs(TabsContent, { value: "ai", className: "space-y-12", children: [_jsx(SectionHeader, { title: "AI, async systems, and advanced interfaces", description: "Agentic states, evidence-rich outputs, auditability, command-driven interaction, and advanced analytical shells." }), _jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-12 items-start", children: [_jsxs("div", { className: "space-y-6", children: [_jsx(ShowcaseItem, { code: `import { AIState } from '@vu/design-system';

// progress: 0–100 — wire to your actual async progress value
// status: string shown next to the progress bar
<AIState
  title="Synthesising guidance"
  description="The assistant is clustering relevant evidence, ranking options, and composing a concise recommendation."
  status="Reasoning · 74% complete"
  progress={74}
/>`, children: _jsx(AIState, { title: "Synthesising guidance", description: "The assistant is clustering relevant evidence, ranking options, and composing a concise recommendation.", status: `Reasoning · ${aiProgress}% complete`, progress: aiProgress }) }), _jsx(ShowcaseItem, { code: `import { ActivityFeedItem } from '@vu/design-system';
import { Activity } from 'lucide-react';

<ActivityFeedItem
  icon={<Activity className="h-4 w-4 text-vu-purple" />}
  title="Model summary refreshed"
  description="Re-ranked evidence after new programme metadata was added to the comparison set."
  meta="2 min ago"
/>`, children: _jsx(ActivityFeedItem, { icon: _jsx(Icons.Analytics.Activity, { className: "h-4 w-4 text-vu-purple" }), title: "Model summary refreshed", description: "Re-ranked evidence after new programme metadata was added to the comparison set.", meta: "2 min ago" }) }), _jsx(ShowcaseItem, { code: `import { EvidenceCard } from '@vu/design-system';

<EvidenceCard
  title="Primary source evidence"
  source="Student survey synthesis · Confidence high"
  summary="Students who prefer structured, analytical work and interdisciplinary collaboration show the highest completion and satisfaction in this route."
  relevance="Most relevant to current recommendation"
/>`, children: _jsx(EvidenceCard, { title: "Primary source evidence", source: "Student survey synthesis \u00B7 Confidence high", summary: "Students who prefer structured, analytical work and interdisciplinary collaboration show the highest completion and satisfaction in this route.", relevance: "Most relevant to current recommendation" }) }), _jsx(ShowcaseItem, { code: `import { DataVisualShell } from '@vu/design-system';

<DataVisualShell
  title="Advanced data visual shell"
  subtitle="A lightweight chart container and framing component for richer dashboard modules."
  footer="Use this shell to standardise spacing, actions, annotations, and explanatory text around data visualisations."
>
  {/* Drop any chart library here */}
  <div className="grid grid-cols-6 gap-2">
    <div className="h-20 rounded bg-vu-blue-200" />
    <div className="h-28 rounded bg-vu-purple-300" />
    {/* ... */}
  </div>
</DataVisualShell>`, children: _jsx(DataVisualShell, { title: "Advanced data visual shell", subtitle: "A lightweight chart container and framing component for richer dashboard modules.", footer: "Use this shell to standardise spacing, actions, annotations, and explanatory text around data visualisations.", children: _jsxs("div", { className: "grid grid-cols-6 gap-2", children: [_jsx("div", { className: "h-20 rounded bg-vu-blue-200" }), _jsx("div", { className: "h-28 rounded bg-vu-purple-300" }), _jsx("div", { className: "h-16 rounded bg-vu-green-200" }), _jsx("div", { className: "h-32 rounded bg-vu-blue-400" }), _jsx("div", { className: "h-24 rounded bg-vu-orange-300" }), _jsx("div", { className: "h-36 rounded bg-vu-green-500" })] }) }) })] }), _jsxs("div", { className: "space-y-6", children: [_jsx(ShowcaseItem, { code: `import { WorkflowAuditTimeline } from '@vu/design-system';

// status: 'complete' | 'current' | 'upcoming'
// meta: timestamp or short label shown on the right
<WorkflowAuditTimeline
  items={[
    {
      title: 'Sources retrieved',
      description: 'Pulled fit signals from user profile, programme metadata, and prior responses.',
      meta: '12:01',
      status: 'complete',
    },
    {
      title: 'Evidence ranked',
      description: 'Scored and clustered the most relevant decision factors.',
      meta: '12:02',
      status: 'complete',
    },
    {
      title: 'Recommendation drafted',
      description: 'Composing a recommendation with explanation and next-step actions.',
      meta: '12:03',
      status: 'current',
    },
  ]}
/>`, children: _jsxs("div", { className: cardStyles({ variant: 'default', padding: 'lg' }), children: [_jsx(SectionHeader, { title: "Workflow audit trail", description: "A specialised timeline for AI-assisted, reviewable system actions." }), _jsx(WorkflowAuditTimeline, { className: "mt-4", items: [{ title: 'Sources retrieved', description: 'Pulled fit signals from user profile, programme metadata, and prior responses.', meta: '12:01', status: 'complete' }, { title: 'Evidence ranked', description: 'Scored and clustered the most relevant decision factors.', meta: '12:02', status: 'complete' }, { title: 'Recommendation drafted', description: 'Composing a recommendation with explanation and next-step actions.', meta: '12:03', status: 'current' }] })] }) }), _jsx(ShowcaseItem, { code: `import { InlineEditable } from '@vu/design-system';

// Click the text to edit inline — no modal required
<InlineEditable value="Student-fit recommendation title" />`, children: _jsxs("div", { className: cardStyles({ variant: 'default', padding: 'lg' }), children: [_jsx(SectionHeader, { title: "Inline editing", description: "Useful for profile surfaces, settings, or structured data refinement." }), _jsx(InlineEditable, { className: "mt-4", value: "Student-fit recommendation title" })] }) })] })] })] })] })] }));
}
// ---------------------------------------------------------------------------
// ShowcaseItem — hover the card to reveal a "Code" button; click to expand
// ---------------------------------------------------------------------------
function ShowcaseItem({ code, children }) {
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    function copy() {
        navigator.clipboard.writeText(code.trim());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
    return (_jsxs("div", { className: "group/si relative", children: [_jsxs("div", { className: "relative", children: [children, _jsxs("button", { onClick: () => setOpen(o => !o), "aria-label": "Toggle code", className: cn('absolute top-2 right-2 flex items-center gap-1 rounded-md border px-2 py-1 text-xs transition-colors duration-150', 'opacity-0 group-hover/si:opacity-100', open
                            ? 'bg-vu-blue text-white border-vu-blue'
                            : 'bg-background/90 text-muted-foreground border-border hover:border-vu-blue/40 hover:text-vu-blue'), children: [_jsx(Code2, { className: "h-3 w-3" }), open ? 'Hide' : 'Code'] })] }), open && (_jsxs("div", { className: "mt-2 rounded-lg border overflow-hidden shadow-sm", children: [_jsxs("div", { className: "flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700", children: [_jsx("span", { className: "text-xs font-mono text-slate-400", children: "JSX \u2014 copy and paste into your project" }), _jsx("button", { onClick: copy, className: "flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors duration-150", children: copied
                                    ? _jsxs(_Fragment, { children: [_jsx(Check, { className: "h-3 w-3 text-vu-green" }), " Copied!"] })
                                    : _jsxs(_Fragment, { children: [_jsx(Copy, { className: "h-3 w-3" }), " Copy"] }) })] }), _jsx("pre", { className: "overflow-x-auto bg-slate-900 p-4 text-xs font-mono text-slate-200 leading-relaxed whitespace-pre", children: _jsx("code", { children: code.trim() }) })] }))] }));
}
function ColorCard({ name, color, textColor, hex }) {
    return _jsxs("div", { className: cn('rounded-lg p-6', color, textColor), children: [_jsx("p", { className: "font-bold text-lg", children: name }), _jsx("p", { className: "text-sm opacity-90", children: hex })] });
}
function ColorScale({ title, colors }) {
    return _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-3", children: title }), _jsx("div", { className: "space-y-1", children: colors.map(([shade, bg, text]) => _jsx("div", { className: cn('h-10 flex items-center justify-between px-3 text-xs', bg, text), children: _jsx("span", { children: shade }) }, shade)) })] });
}
function IconItem({ icon, name }) {
    return _jsxs("div", { className: "flex w-[88px] shrink-0 flex-col items-center gap-2 rounded-lg p-3 text-center hover:bg-muted transition-colors duration-150", children: [icon, _jsx("span", { className: "text-xs text-muted-foreground", children: name })] });
}
function IconGroup({ title, items }) {
    return _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-4 text-muted-foreground", children: title }), _jsx("div", { className: "flex flex-wrap gap-4", children: items.map(([name, icon]) => _jsx(IconItem, { name: name, icon: icon }, name)) })] });
}
function ShadowCard({ name, className }) {
    return _jsx("div", { className: cn('h-24 rounded-lg bg-card border flex items-center justify-center', className), children: _jsx("span", { className: "text-sm font-medium", children: name }) });
}
function AlertPreview({ title, text, className, icon }) {
    return _jsxs("div", { className: cn(alertVariants({ variant: 'default' }), className), children: [icon, _jsxs("div", { children: [_jsx("h5", { className: "font-medium", children: title }), _jsx("p", { className: "text-sm", children: text })] })] });
}
//# sourceMappingURL=ShowcaseContent.js.map