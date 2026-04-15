import { type ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { alertVariants, badgeVariants, buttonVariants, cardStyles } from '@/styles/components';
import { Icons } from '@/styles/icons';
import {
  ActivityFeedItem,
  AIState,
  DataVisualShell,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuIconTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  EmptyState,
  EvidenceCard,
  FilterBar,
  FormField,
  InfoHint,
  InlineEditable,
  KeyValueList,
  LoadingState,
  PageHeader,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Progress,
  ProgressDots,
  ResultSummary,
  SearchInput,
  SectionHeader,
  Skeleton,
  Spinner,
  StatCard,
  StatusPanel,
  Stepper,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Timeline,
  WorkflowAuditTimeline,
} from '@/index';

type ShowcaseContentProps = {
  onOpenCommand: () => void;
  onOpenDialog: () => void;
  onOpenSheet: () => void;
};

export function ShowcaseContent({ onOpenCommand, onOpenDialog, onOpenSheet }: ShowcaseContentProps) {
  // Animated progress — shared ticker for all loading demos so they feel live
  const [liveProgress, setLiveProgress] = useState(12);
  const [threshold, setThreshold] = useState(72);
  useEffect(() => {
    const id = setInterval(() => setLiveProgress(p => p >= 96 ? 8 : p + 2), 400);
    return () => clearInterval(id);
  }, []);
  // Stagger the three loaders so they read as independent contexts
  const loadingProgress  = liveProgress;
  const statusProgress   = Math.min(100, Math.round(liveProgress * 0.8 + 10));
  const aiProgress       = Math.min(100, Math.round(liveProgress * 1.1 - 5));

  return (
    <>
      <PageHeader
        eyebrow="Shared Package Surface"
        title="Reusable VU interface language"
        description="A cross-project component system for modern, minimal, and intuitive VU-branded products, including workflow, data, navigation, and AI interaction patterns."
        actions={
          <>
            <button className={buttonVariants({ variant: 'primary' })} onClick={onOpenCommand}>
              <Icons.Actions.Search className="h-4 w-4" />
              Open Commands
            </button>
            <button className={buttonVariants({ variant: 'outline' })} onClick={onOpenDialog}>
              Open Modal
            </button>
          </>
        }
      />

      <Tabs defaultValue="foundations" className="space-y-8">
        <TabsList className="w-full flex-wrap h-auto bg-muted/70 p-1.5">
          <TabsTrigger value="foundations">Foundations</TabsTrigger>
          <TabsTrigger value="components">Interface Components</TabsTrigger>
          <TabsTrigger value="workflow">Navigation & Workflow</TabsTrigger>
          <TabsTrigger value="data">Data & Decision</TabsTrigger>
          <TabsTrigger value="ai">AI & Async</TabsTrigger>
        </TabsList>

        <TabsContent value="foundations" className="space-y-12">
          <SectionHeader title="Brand, tokens, and visual foundations" description="Core tokens and visual assets that define the system language: colors, typography, shadows, and the icon surface." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <section>
              <SectionHeader title="Brand Colors" />
              <div className="grid grid-cols-2 gap-4">
                <ColorCard name="VU Blue" color="bg-vu-blue" textColor="text-white" hex="#0077B3" />
                <ColorCard name="VU Orange" color="bg-vu-orange" textColor="text-white" hex="#CC4100" />
                <ColorCard name="VU Green" color="bg-vu-green" textColor="text-white" hex="#008053" />
                <ColorCard name="VU Purple" color="bg-vu-purple" textColor="text-white" hex="#3B2171" />
              </div>
            </section>
            <section>
              <SectionHeader title="Badges" />
              <div className="flex flex-wrap gap-3">
                {['primary','secondary','accent','tertiary','success','warning','error','info','outline','ghost'].map((variant) => (
                  <span key={variant} className={badgeVariants({ variant: variant as never })}>{variant[0].toUpperCase() + variant.slice(1)}</span>
                ))}
              </div>
            </section>
          </div>
          <section>
            <SectionHeader title="Color Scales" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ColorScale title="VU Blue" colors={[['50','bg-vu-blue-50','text-vu-blue-900'],['100','bg-vu-blue-100','text-vu-blue-900'],['200','bg-vu-blue-200','text-vu-blue-900'],['300','bg-vu-blue-300','text-vu-blue-900'],['400','bg-vu-blue-400','text-white'],['500','bg-vu-blue-500','text-white'],['600','bg-vu-blue-600','text-white'],['700','bg-vu-blue-700','text-white'],['800','bg-vu-blue-800','text-white'],['900','bg-vu-blue-900','text-white']]} />
              <ColorScale title="VU Orange" colors={[['50','bg-vu-orange-50','text-vu-orange-900'],['100','bg-vu-orange-100','text-vu-orange-900'],['200','bg-vu-orange-200','text-vu-orange-900'],['300','bg-vu-orange-300','text-vu-orange-900'],['400','bg-vu-orange-400','text-white'],['500','bg-vu-orange-500','text-white'],['600','bg-vu-orange-600','text-white'],['700','bg-vu-orange-700','text-white'],['800','bg-vu-orange-800','text-white'],['900','bg-vu-orange-900','text-white']]} />
              <ColorScale title="VU Green" colors={[['50','bg-vu-green-50','text-vu-green-900'],['100','bg-vu-green-100','text-vu-green-900'],['200','bg-vu-green-200','text-vu-green-900'],['300','bg-vu-green-300','text-vu-green-900'],['400','bg-vu-green-400','text-white'],['500','bg-vu-green-500','text-white'],['600','bg-vu-green-600','text-white'],['700','bg-vu-green-700','text-white'],['800','bg-vu-green-800','text-white'],['900','bg-vu-green-900','text-white']]} />
              <ColorScale title="VU Purple" colors={[['50','bg-vu-purple-50','text-vu-purple-900'],['100','bg-vu-purple-100','text-vu-purple-900'],['200','bg-vu-purple-200','text-vu-purple-900'],['300','bg-vu-purple-300','text-vu-purple-900'],['400','bg-vu-purple-400','text-white'],['500','bg-vu-purple-500','text-white'],['600','bg-vu-purple-600','text-white'],['700','bg-vu-purple-700','text-white'],['800','bg-vu-purple-800','text-white'],['900','bg-vu-purple-900','text-white']]} />
            </div>
          </section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <section>
              <SectionHeader title="Typography" />
              <div className="space-y-6"><div><h1>Heading 1 (2.25rem / 36px)</h1></div><div><h2>Heading 2 (1.875rem / 30px)</h2></div><div><h3>Heading 3 (1.5rem / 24px)</h3></div><div><h4>Heading 4 (1.25rem / 20px)</h4></div><div><p>Body text (1rem / 16px) - The default text size for most content.</p></div><div><small>Small text (0.875rem / 14px) - Used for captions, labels, and secondary information.</small></div></div>
            </section>
            <section>
              <SectionHeader title="Shadows" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">{['shadow-xs','shadow-sm','shadow-md','shadow-lg','shadow-xl','shadow-2xl','shadow-blue','shadow-orange'].map((shadow) => <ShadowCard key={shadow} name={shadow} className={shadow} />)}</div>
            </section>
          </div>
          <section>
            <SectionHeader title="Icon Library" />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <IconGroup title="Navigation" items={[['Home',<Icons.Navigation.Home className="h-5 w-5 text-vu-blue" />],['Menu',<Icons.Navigation.Menu className="h-5 w-5 text-vu-purple" />],['Search',<Icons.Navigation.Search className="h-5 w-5 text-vu-blue-700" />],['User',<Icons.Navigation.User className="h-5 w-5 text-vu-green" />],['Settings',<Icons.Navigation.Settings className="h-5 w-5 text-vu-purple-700" />],['ArrowLeft',<Icons.Navigation.ArrowLeft className="h-5 w-5 text-vu-blue-600" />],['ArrowRight',<Icons.Navigation.ArrowRight className="h-5 w-5 text-vu-orange" />],['Compass',<Icons.Navigation.Compass className="h-5 w-5 text-vu-green-700" />]]} />
              <IconGroup title="Status & Feedback" items={[['CheckCircle',<Icons.Status.CheckCircle className="h-5 w-5 text-success-500" />],['ErrorCircle',<Icons.Status.ErrorCircle className="h-5 w-5 text-error-500" />],['Warning',<Icons.Status.Warning className="h-5 w-5 text-warning-500" />],['Info',<Icons.Status.Info className="h-5 w-5 text-info-500" />],['Bell',<Icons.Status.Bell className="h-5 w-5 text-vu-orange" />],['Shield',<Icons.Status.Shield className="h-5 w-5 text-vu-purple" />],['Bookmark',<Icons.Status.Bookmark className="h-5 w-5 text-vu-green" />],['Eye',<Icons.Status.Eye className="h-5 w-5 text-vu-blue" />]]} />
              <IconGroup title="Actions" items={[['Plus',<Icons.Actions.Plus className="h-5 w-5 text-vu-blue" />],['Edit',<Icons.Actions.Edit className="h-5 w-5 text-vu-purple" />],['Download',<Icons.Actions.Download className="h-5 w-5 text-vu-green" />],['Upload',<Icons.Actions.Upload className="h-5 w-5 text-vu-orange" />],['Refresh',<Icons.Actions.Refresh className="h-5 w-5 text-vu-blue-700" />],['Filter',<Icons.Actions.Filter className="h-5 w-5 text-vu-purple-700" />],['Share',<Icons.Actions.Share className="h-5 w-5 text-vu-orange-700" />],['Archive',<Icons.Actions.Archive className="h-5 w-5 text-vu-green-700" />]]} />
              <IconGroup title="Documents & Analytics" items={[['File',<Icons.Documents.File className="h-5 w-5 text-vu-blue" />],['Folder',<Icons.Documents.Folder className="h-5 w-5 text-vu-orange" />],['Book',<Icons.Documents.Book className="h-5 w-5 text-vu-purple" />],['Calendar',<Icons.Documents.Calendar className="h-5 w-5 text-vu-green" />],['BarChart',<Icons.Analytics.BarChart className="h-5 w-5 text-vu-blue-700" />],['LineChart',<Icons.Analytics.LineChart className="h-5 w-5 text-vu-purple-700" />],['TrendingUp',<Icons.Analytics.TrendingUp className="h-5 w-5 text-vu-green-700" />],['Workflow',<Icons.Analytics.Workflow className="h-5 w-5 text-vu-orange-700" />]]} />
            </div>
          </section>
        </TabsContent>

        <TabsContent value="components" className="space-y-12">
          <SectionHeader title="Core interface components" description="Primary interactive and feedback building blocks for general product interfaces: buttons, cards, alerts, forms, loading, and content states." />
          <section>
            <SectionHeader title="Buttons" />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-8 mb-8">
              {[
                ['Primary Variants (VU Blue)','primary','primary-subtle','primary-outline','primary-ghost'],
                ['Secondary Variants (VU Purple)','secondary','secondary-subtle','secondary-outline','secondary-ghost'],
                ['Accent Variants (VU Orange)','accent','accent-subtle','accent-outline','accent-ghost'],
                ['Tertiary Variants (VU Green)','tertiary','tertiary-subtle','tertiary-outline','tertiary-ghost'],
              ].map(([title, a,b,c,d]) => (
                <div key={title}><h3 className={cn('text-lg font-semibold mb-4', title.includes('Blue') ? 'text-vu-blue-700' : title.includes('Purple') ? 'text-vu-purple-700' : title.includes('Orange') ? 'text-vu-orange-700' : 'text-vu-green-700')}>{title}</h3><div className="flex flex-wrap gap-3">{[a,b,c,d].map((variant) => <button key={variant} className={buttonVariants({ variant: variant as never })}>{String(variant).split('-')[1] ? String(variant).split('-')[1][0].toUpperCase()+String(variant).split('-')[1].slice(1) : String(title).split(' ')[0]}</button>)}</div></div>
              ))}
            </div>
            <div className="mb-8"><h3 className="text-lg font-semibold mb-4 text-muted-foreground">Button Sizes</h3><div className="flex flex-wrap items-center gap-3">{['xs','sm','md','lg','xl'].map((size) => <button key={size} className={cn(buttonVariants({ variant: 'primary', size: size as never }), 'transition-colors duration-150')}>{size.toUpperCase()}</button>)}</div></div>
            <div><h3 className="text-lg font-semibold mb-4 text-muted-foreground">With Icons</h3><div className="flex flex-wrap gap-3"><button className={buttonVariants({ variant: 'primary' })}><Icons.Actions.Search className="h-4 w-4" />Search</button><button className={buttonVariants({ variant: 'secondary' })}><Icons.Actions.Download className="h-4 w-4" />Download</button><button className={buttonVariants({ variant: 'accent' })}><Icons.Status.Star className="h-4 w-4" />Favorite</button><button className={buttonVariants({ variant: 'tertiary' })}><Icons.Status.CheckCircle className="h-4 w-4" />Complete</button></div></div>
          </section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <section><SectionHeader title="Cards" /><div className="space-y-4"><div className={cardStyles({ variant: 'default', padding: 'md' })}><h3 className="font-semibold mb-2">Default Card</h3><p className="text-sm text-muted-foreground">A standard card with border and subtle shadow.</p></div><div className={cardStyles({ variant: 'elevated', padding: 'md' })}><h3 className="font-semibold mb-2">Elevated Card</h3><p className="text-sm text-muted-foreground">A card with more prominent shadow that elevates on hover.</p></div><div className={cardStyles({ variant: 'interactive', padding: 'md' })}><h3 className="font-semibold mb-2">Interactive Card</h3><p className="text-sm text-muted-foreground">A clickable card with hover effects.</p></div></div></section>
            <section><SectionHeader title="Alerts" /><div className="space-y-4"><AlertPreview title="Primary Alert" text="This is a primary alert using VU Blue." className="border-vu-blue/50 bg-vu-blue-50 text-vu-blue-800 [&>svg]:text-vu-blue-600" icon={<Icons.Status.Info className="h-4 w-4" />} /><AlertPreview title="Success Alert" text="This is a success alert using VU Green." className="border-[#008053]/30 bg-[#E6F5F0] text-[#004D32] [&>svg]:text-[#008053]" icon={<Icons.Status.CheckCircle className="h-4 w-4" />} /><AlertPreview title="Warning Alert" text="This is a warning alert using warm amber." className="border-[#F59E0B]/30 bg-[#FFFBEB] text-[#92400E] [&>svg]:text-[#D97706]" icon={<Icons.Status.Warning className="h-4 w-4" />} /><AlertPreview title="Error Alert" text="This is an error alert using red." className="border-[#DC2626]/30 bg-[#FEF2F2] text-[#7F1D1D] [&>svg]:text-[#B91C1C]" icon={<Icons.Status.ErrorCircle className="h-4 w-4" />} /></div></section>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <section><SectionHeader title="Inputs" /><div className="space-y-8"><FormField label="Textfield/Default"><input type="text" placeholder="Textfield text" className="w-full px-4 py-2.5 rounded-lg border border-vu-blue-200 bg-vu-blue-50/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-vu-blue/30 focus:border-vu-blue" /></FormField><FormField label="Textfield/Valid"><div className="relative"><input type="email" defaultValue="email@domain.com" className="w-full px-4 py-2.5 pr-10 rounded-lg border-2 border-vu-green/50 bg-vu-green-50/30 text-vu-green-900 focus:outline-none" /><Icons.Status.CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-vu-green" /></div></FormField><FormField label="Textfield/Error" error="Please enter a valid email address"><div className="relative"><input type="email" defaultValue="email@" className="w-full px-4 py-2.5 pr-10 rounded-lg border-2 border-error-500/50 bg-error-50/30 text-error-900 focus:outline-none" /><Icons.Status.ErrorCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-error-500" /></div></FormField><FormField label="Textfield/Multiline"><textarea rows={4} placeholder="Multiline text field" className="w-full px-4 py-3 rounded-lg border border-vu-purple-200 bg-vu-purple-50/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-vu-purple/30 focus:border-vu-purple resize-y" /></FormField><div className={cardStyles({ variant: 'default', padding: 'md' })}>
  <SectionHeader title="Enhanced field composition" size="compact" eyebrow="Utility heading" />
  <div className="mt-4 space-y-4">
    <FormField
      label={<span className="flex items-center gap-1.5">Similarity threshold <InfoHint text="Higher thresholds reduce noise but may hide near-duplicate cases." align="right" /></span>}
      orientation="inline"
    >
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <input
            type="range" min="0" max="100" value={threshold}
            onChange={e => setThreshold(Number(e.target.value))}
            className="flex-1 accent-vu-blue"
          />
          <span className={cn(
            'w-14 text-center text-sm font-semibold rounded-full px-2 py-0.5 transition-colors duration-300',
            threshold >= 75 ? 'bg-vu-orange-50 text-vu-orange' : threshold <= 40 ? 'bg-vu-green-50 text-vu-green' : 'bg-vu-blue-50 text-vu-blue'
          )}>{threshold}%</span>
        </div>
        <div className="flex justify-between text-xs text-muted-foreground px-0.5">
          <span>Loose</span>
          <span className={cn('transition-colors duration-300', threshold >= 75 ? 'text-vu-orange font-medium' : threshold <= 40 ? 'text-vu-green font-medium' : 'text-vu-blue font-medium')}>
            {threshold <= 40 ? 'More results' : threshold >= 75 ? 'Fewer, higher confidence' : 'Balanced'}
          </span>
          <span>Strict</span>
        </div>
      </div>
    </FormField>
    <div className="flex gap-2 pt-1">
      {([['Loose', 30], ['Balanced', 65], ['Strict', 85]] as const).map(([label, val]) => (
        <button key={label} onClick={() => setThreshold(val)}
          className={cn(buttonVariants({ variant: threshold === val ? 'primary' : 'outline', size: 'sm' }), 'flex-1 transition-colors duration-150')}>
          {label}
        </button>
      ))}
    </div>
  </div>
</div></div></section>
            <section><SectionHeader title="Feedback States" description="Use LoadingState for multi-step page loads with progress. Use Spinner for inline async actions. Skeleton screens replace content shapes during initial load. For agent-driven async, see AIState in the AI & Async tab." /><div className="space-y-6"><LoadingState title="Building your page" description="Tokens, layouts, and content are being assembled into a polished interface." progress={loadingProgress} /><div className={cardStyles({ variant: 'default', padding: 'md' })}><div className="flex items-center justify-between gap-4 mb-4"><div><h3 className="font-semibold">Inline async action</h3><p className="text-sm text-muted-foreground">Use Spinner for button-level or field-level async — not for full-page loads.</p></div><Spinner size="md" variant="primary" label="Syncing" /></div><Progress value={statusProgress} variant="primary" size="lg" /></div><div className="grid grid-cols-1 sm:grid-cols-3 gap-4"><div className={cardStyles({ variant: 'default', padding: 'md' })}><Skeleton variant="text" className="mb-3" /><Skeleton variant="text" className="w-4/5 mb-2" /><Skeleton variant="text" className="w-3/5" /></div><div className={cardStyles({ variant: 'default', padding: 'md' })}><Skeleton variant="avatar" className="mb-3" /><Skeleton variant="text" className="w-2/3" /></div><div className={cardStyles({ variant: 'default', padding: 'md' })}><Skeleton variant="button" className="mb-3" /><Skeleton variant="text" className="w-1/2" /></div></div></div></section>
          </div>
        </TabsContent>

        <TabsContent value="workflow" className="space-y-12">
          <SectionHeader title="Navigation, composition, and workflow" description="Page structure, overlay navigation, form composition, and guided progression patterns for multi-step journeys and task flows." actions={<div className="flex items-center gap-2"><button className={buttonVariants({ variant: 'secondary' })} onClick={onOpenSheet}>Open Sheet</button><DropdownMenu><DropdownMenuTrigger asChild><DropdownMenuIconTrigger /></DropdownMenuTrigger><DropdownMenuContent><DropdownMenuLabel>Actions</DropdownMenuLabel><DropdownMenuItem>Duplicate page</DropdownMenuItem><DropdownMenuItem>Share preview</DropdownMenuItem><DropdownMenuSeparator /><DropdownMenuItem>Archive draft</DropdownMenuItem></DropdownMenuContent></DropdownMenu></div>} />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
            <div className="space-y-6"><div className={cardStyles({ variant: 'default', padding: 'lg' })}><SectionHeader title="Tabs" description="Use tabs for short, closely related views inside a shared context." /><Tabs defaultValue="overview" className="mt-4"><TabsList><TabsTrigger value="overview">Overview</TabsTrigger><TabsTrigger value="activity">Activity</TabsTrigger><TabsTrigger value="governance">Governance</TabsTrigger></TabsList><TabsContent value="overview" className="rounded-lg border bg-card p-4 text-sm text-muted-foreground">Shared foundations keep the system visually coherent across pages, teams, and agent-generated interfaces.</TabsContent><TabsContent value="activity" className="rounded-lg border bg-card p-4 text-sm text-muted-foreground">Activity and workflow surfaces should be lightweight and easy to scan.</TabsContent><TabsContent value="governance" className="rounded-lg border bg-card p-4 text-sm text-muted-foreground">Package-first adoption helps teams enforce the design language with less drift.</TabsContent></Tabs></div><div className={cardStyles({ variant: 'default', padding: 'lg' })}><SectionHeader title="Form composition" description="FormField creates a reusable label, helper, and error pattern." /><div className="mt-4 grid gap-5"><FormField label="Project title" description="A concise descriptive name for the initiative." required><input type="text" placeholder="Award-winning VU experience" className="w-full rounded-lg border bg-muted/50 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" /></FormField><FormField label="Owner email" error="Please provide a valid institutional email address."><input type="email" defaultValue="kenneth@" className="w-full rounded-lg border-2 border-error-500/40 bg-error-50/40 px-4 py-2.5 text-sm focus:outline-none" /></FormField></div></div></div>
            <div className="space-y-6"><div className={cardStyles({ variant: 'default', padding: 'lg' })}><SectionHeader title="Stepper" description="For multi-step creation, onboarding, and guided decision flows." /><Stepper className="mt-4" items={[{ title: 'Intent', description: 'Clarify the problem and outcome.', status: 'complete' }, { title: 'Structure', description: 'Compose the interface from reusable system parts.', status: 'current' }, { title: 'Ship', description: 'Package, test, and distribute across projects.', status: 'upcoming' }]} /><div className="mt-4 flex items-center justify-between rounded-lg border bg-muted/30 px-4 py-3"><div><p className="text-sm font-medium">Compact flow indicator</p><p className="text-xs text-muted-foreground">Useful for onboarding, task flows, and guided forms.</p></div><ProgressDots total={5} current={3} /></div></div><div className={cardStyles({ variant: 'default', padding: 'lg' })}><SectionHeader title="Journey timeline" description="Use timelines when users need narrative progression instead of discrete step navigation." /><Timeline className="mt-4" items={[{ title: 'Discovery', description: 'Clarified the system language and the component responsibilities.', meta: 'Done', status: 'complete' }, { title: 'Composition', description: 'Assembled reusable primitives for loading, progress, and structured status flows.', meta: 'In progress', status: 'current' }, { title: 'Adoption', description: 'Package the system so teams and agents can consume it consistently across products.', meta: 'Next', status: 'upcoming' }]} /></div><EmptyState title="No filtered results" description="When users narrow a list down to nothing, give them a calm explanation and an obvious next action." actions={<button className={buttonVariants({ variant: 'primary' })}>Reset filters</button>} /></div>
          </div>
        </TabsContent>

        <TabsContent value="data" className="space-y-12">
          <SectionHeader title="Data display and decision support" description="Structured information, summaries, filters, metrics, and navigation for research, funding, matching, dashboards, and administrative surfaces." />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
            <div className="space-y-6"><div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><StatCard label="Completion rate" value="82%" trend="+6.4% vs last month" meta="Across active journeys" icon={<Icons.Analytics.TrendingUp className="h-4 w-4 text-vu-green" />} /><StatCard label="Open opportunities" value="124" trend="12 newly matched" meta="Funding discovery surface" icon={<Icons.Documents.Folder className="h-4 w-4 text-vu-orange" />} /></div><div className="grid grid-cols-1 sm:grid-cols-3 gap-4"><StatCard label="Clusters" value="12" size="compact" icon={<Icons.Analytics.Workflow className="h-4 w-4" />} /><StatCard label="Flagged passages" value="48" size="compact" hint="Highlights combine extracted evidence from the primary and compared document review panes." icon={<Icons.Status.Star className="h-4 w-4" />} /><StatCard label="Review confidence" value="High" size="compact" meta="Updated after comparison analysis" icon={<Icons.Status.CheckCircle className="h-4 w-4 text-vu-green" />} /></div><StatusPanel title="Application shortlist in progress" description="Candidate programmes are being compared against user preferences and completion evidence." progress={statusProgress} variant="info" icon={<Icons.Status.Info className="h-4 w-4 text-vu-blue" />} meta="Updated 40 seconds ago" /><div className={cardStyles({ variant: 'default', padding: 'lg' })}><SectionHeader title="Structured data" description="Tables and key-value lists should feel readable rather than heavy." /><div className="mt-4 space-y-6"><KeyValueList items={[{ key: 'Programme', value: 'Business Analytics' }, { key: 'Faculty', value: 'School of Business and Economics' }, { key: 'Language', value: 'English' }]} /><KeyValueList size="compact" keyWidthClassName="minmax(0,120px)" items={[{ key: 'Primary file', value: 'Advice memo v4.docx' }, { key: 'Cluster', value: '12' }, { key: 'Matched on', value: 'Title, content, metadata' }]} /><Table><TableHeader><TableRow><TableHead>Project</TableHead><TableHead>Status</TableHead><TableHead>Owner</TableHead></TableRow></TableHeader><TableBody><TableRow><TableCell>Funding Explorer</TableCell><TableCell><span className="inline-flex items-center rounded-full bg-vu-orange-50 px-2.5 py-0.5 text-xs font-medium text-vu-orange-800">In review</span></TableCell><TableCell>Kenneth</TableCell></TableRow><TableRow><TableCell>Matching Journey</TableCell><TableCell><span className="inline-flex items-center rounded-full bg-vu-green-50 px-2.5 py-0.5 text-xs font-medium text-vu-green-800">Live</span></TableCell><TableCell>VU Team</TableCell></TableRow></TableBody><TableCaption>Example data-display shell for shared admin or decision interfaces.</TableCaption></Table></div></div></div>
            <div className="space-y-6"><FilterBar leading={<SearchInput placeholder="Search projects or opportunities" containerClassName="w-full sm:max-w-sm" />} filters={<div className="flex flex-wrap gap-2"><span className={badgeVariants({ variant: 'primary-subtle' as never })}>Open</span><span className={badgeVariants({ variant: 'secondary-subtle' as never })}>Recommended</span><span className={badgeVariants({ variant: 'accent-subtle' as never })}>Deadline soon</span></div>} actions={<button className={buttonVariants({ variant: 'secondary-outline' })}>Export</button>} /><ResultSummary title="Recommended next step" summary="The current evidence suggests surfacing a small shortlist with strong programme-fit rationale and a clear next action." highlights="Shortlist business, data, and behavioural science pathways. Show one confident recommendation, then present two alternative paths with evidence." actions={<button className={buttonVariants({ variant: 'secondary-outline' })}>View shortlist</button>} /><ResultSummary eyebrow="Review summary" title="Duplicate-review decision" summary="The evidence indicates this pair is safe to collapse into a single retained document, with a manual check on naming before tagging." highlights={<div className="space-y-2"><p>Strong content overlap with minor filename drift.</p><p>Metadata and extraction timestamps support consolidation.</p></div>} meta="Confidence high · 2 documents · Last analysed 40 seconds ago" tone="info" actions={<><button className={buttonVariants({ variant: 'primary' })}>Accept recommendation</button><button className={buttonVariants({ variant: 'outline' })}>Inspect evidence</button></>} /><div className={cardStyles({ variant: 'default', padding: 'lg' })}><SectionHeader title="Pagination" description="For dense listings and structured navigation across larger datasets." /><Pagination className="mt-4"><PaginationContent><PaginationItem><PaginationPrevious href="#" /></PaginationItem><PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem><PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem><PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem><PaginationItem><PaginationEllipsis /></PaginationItem><PaginationItem><PaginationNext href="#" /></PaginationItem></PaginationContent></Pagination></div></div>
          </div>
        </TabsContent>

        <TabsContent value="ai" className="space-y-12">
          <SectionHeader title="AI, async systems, and advanced interfaces" description="Agentic states, evidence-rich outputs, auditability, command-driven interaction, and advanced analytical shells." />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
            <div className="space-y-6"><AIState title="Synthesising guidance" description="The assistant is clustering relevant evidence, ranking options, and composing a concise recommendation." status={`Reasoning · ${aiProgress}% complete`} progress={aiProgress} /><ActivityFeedItem icon={<Icons.Analytics.Activity className="h-4 w-4 text-vu-purple" />} title="Model summary refreshed" description="Re-ranked evidence after new programme metadata was added to the comparison set." meta="2 min ago" /><EvidenceCard title="Primary source evidence" source="Student survey synthesis · Confidence high" summary="Students who prefer structured, analytical work and interdisciplinary collaboration show the highest completion and satisfaction in this route." relevance="Most relevant to current recommendation" /><DataVisualShell title="Advanced data visual shell" subtitle="A lightweight chart container and framing component for richer dashboard modules." footer="Use this shell to standardise spacing, actions, annotations, and explanatory text around data visualisations."><div className="grid grid-cols-6 gap-2"><div className="h-20 rounded bg-vu-blue-200" /><div className="h-28 rounded bg-vu-purple-300" /><div className="h-16 rounded bg-vu-green-200" /><div className="h-32 rounded bg-vu-blue-400" /><div className="h-24 rounded bg-vu-orange-300" /><div className="h-36 rounded bg-vu-green-500" /></div></DataVisualShell></div>
            <div className="space-y-6"><div className={cardStyles({ variant: 'default', padding: 'lg' })}><SectionHeader title="Workflow audit trail" description="A specialised timeline for AI-assisted, reviewable system actions." /><WorkflowAuditTimeline className="mt-4" items={[{ title: 'Sources retrieved', description: 'Pulled fit signals from user profile, programme metadata, and prior responses.', meta: '12:01', status: 'complete' }, { title: 'Evidence ranked', description: 'Scored and clustered the most relevant decision factors.', meta: '12:02', status: 'complete' }, { title: 'Recommendation drafted', description: 'Composing a recommendation with explanation and next-step actions.', meta: '12:03', status: 'current' }]} /></div><div className={cardStyles({ variant: 'default', padding: 'lg' })}><SectionHeader title="Inline editing" description="Useful for profile surfaces, settings, or structured data refinement." /><InlineEditable className="mt-4" value="Student-fit recommendation title" /></div></div>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}

type ColorScaleItem = [string, string, string];

function ColorCard({ name, color, textColor, hex }: { name: string; color: string; textColor: string; hex: string }) {
  return <div className={cn('rounded-lg p-6', color, textColor)}><p className="font-bold text-lg">{name}</p><p className="text-sm opacity-90">{hex}</p></div>;
}

function ColorScale({ title, colors }: { title: string; colors: ColorScaleItem[] }) {
  return <div><h4 className="font-semibold mb-3">{title}</h4><div className="space-y-1">{colors.map(([shade, bg, text]) => <div key={shade} className={cn('h-10 flex items-center justify-between px-3 text-xs', bg, text)}><span>{shade}</span></div>)}</div></div>;
}

function IconItem({ icon, name }: { icon: ReactNode; name: string }) {
  return <div className="flex w-[88px] shrink-0 flex-col items-center gap-2 rounded-lg p-3 text-center hover:bg-muted transition-colors">{icon}<span className="text-xs text-muted-foreground">{name}</span></div>;
}

function IconGroup({ title, items }: { title: string; items: [string, ReactNode][] }) {
  return <div><h3 className="text-lg font-semibold mb-4 text-muted-foreground">{title}</h3><div className="flex flex-wrap gap-4">{items.map(([name, icon]) => <IconItem key={name} name={name} icon={icon} />)}</div></div>;
}

function ShadowCard({ name, className }: { name: string; className: string }) {
  return <div className={cn('h-24 rounded-lg bg-card border flex items-center justify-center', className)}><span className="text-sm font-medium">{name}</span></div>;
}

function AlertPreview({ title, text, className, icon }: { title: string; text: string; className: string; icon: ReactNode }) {
  return <div className={cn(alertVariants({ variant: 'default' }), className)}>{icon}<div><h5 className="font-medium">{title}</h5><p className="text-sm">{text}</p></div></div>;
}
