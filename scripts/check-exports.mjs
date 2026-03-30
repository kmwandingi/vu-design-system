#!/usr/bin/env node
/**
 * Check that public exports haven't been removed (breaking change detection)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

// Known public exports that must exist
const requiredExports = [
  // Foundation
  'cn',
  'Icons',
  'buttonVariants',
  'badgeVariants',
  'cardStyles',

  // Interface Components
  'Button',
  'Badge',
  'Card',
  'Alert',
  'Input',
  'Textarea',
  'Checkbox',
  'CheckboxIndicator',
  'CheckboxLabel',
  'RadioGroup',
  'Radio',
  'RadioIndicator',
  'RadioLabel',
  'Switch',

  // Navigation & Workflow
  'Tabs',
  'TabsList',
  'TabsTrigger',
  'TabsContent',
  'Dialog',
  'DialogTrigger',
  'DialogContent',
  'DialogHeader',
  'DialogTitle',
  'DialogDescription',
  'DialogFooter',
  'Modal',
  'Sheet',
  'Drawer',
  'DropdownMenu',
  'DropdownMenuTrigger',
  'DropdownMenuContent',
  'DropdownMenuItem',
  'DropdownMenuCheckboxItem',
  'DropdownMenuRadioGroup',
  'DropdownMenuRadioItem',
  'DropdownMenuLabel',
  'DropdownMenuSeparator',
  'DropdownMenuShortcut',
  'DropdownMenuSubTrigger',
  'DropdownMenuIconTrigger',
  'Select',
  'SelectTrigger',
  'SelectValue',
  'SelectContent',
  'SelectItem',
  'SelectGroup',
  'SelectLabel',
  'SelectSeparator',
  'Stepper',
  'Timeline',
  'EmptyState',

  // Data Display
  'Table',
  'TableHeader',
  'TableBody',
  'TableRow',
  'TableHead',
  'TableCell',
  'useTableSort',
  'StatCard',
  'KeyValueList',
  'FilterBar',
  'SearchInput',
  'Pagination',
  'ResultSummary',

  // Feedback & Loading
  'Progress',
  'ProgressDots',
  'Skeleton',
  'Spinner',
  'Separator',
  'LoadingState',

  // AI / Async
  'AIState',
  'EvidenceCard',
  'WorkflowAuditTimeline',
  'CommandPalette',
  'ActivityFeedItem',

  // Layout & Headers
  'PageHeader',
  'SectionHeader',
  'FormField',
  'InlineEditable',
  'DataVisualShell',
  'StatusPanel',
];

async function checkExports() {
  const distPath = path.join(rootDir, 'dist', 'index.d.ts');

  if (!fs.existsSync(distPath)) {
    console.error('ERROR: dist/index.d.ts not found. Run npm run build:lib first.');
    process.exit(1);
  }

  const content = fs.readFileSync(distPath, 'utf8');
  const missing = [];

  for (const exp of requiredExports) {
    // Check for export in the d.ts file
    const exportPattern = new RegExp(`export.*\\b${exp}\\b`);
    if (!exportPattern.test(content)) {
      missing.push(exp);
    }
  }

  if (missing.length > 0) {
    console.error('ERROR: Breaking change detected! The following exports are missing:');
    missing.forEach(exp => console.error(`  - ${exp}`));
    console.error('\nIf you intentionally removed these exports, update scripts/check-exports.mjs');
    process.exit(1);
  }

  console.log('All required exports verified.');
  process.exit(0);
}

checkExports();
