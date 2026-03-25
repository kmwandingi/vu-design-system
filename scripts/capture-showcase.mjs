import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import { join } from 'path';

const BASE_URL = 'http://localhost:5173';
const OUTPUT_DIR = './screenshots';

const tabs = [
  { name: 'foundations', text: 'Foundations' },
  { name: 'components', text: 'Interface Components' },
  { name: 'workflow', text: 'Navigation & Workflow' },
  { name: 'data', text: 'Data & Decision' },
  { name: 'ai', text: 'AI & Async' },
];

async function captureScreenshots() {
  // Ensure output directory exists
  await mkdir(OUTPUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  // Navigate to the showcase
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  
  // Wait for the page to fully render
  await page.waitForTimeout(2000);

  // Take screenshot of default tab (foundations)
  await page.screenshot({
    path: join(OUTPUT_DIR, '01-foundations.png'),
    fullPage: true,
  });
  console.log('✓ Captured: Foundations');

  // Click through remaining tabs and capture using text selector
  for (let i = 1; i < tabs.length; i++) {
    const tab = tabs[i];
    
    // Click the tab trigger by its visible text
    await page.getByRole('button', { name: tab.text }).click();
    
    // Wait for tab content to render
    await page.waitForTimeout(1500);
    
    // Take full-page screenshot
    await page.screenshot({
      path: join(OUTPUT_DIR, `${String(i + 1).padStart(2, '0')}-${tab.name}.png`),
      fullPage: true,
    });
    console.log(`✓ Captured: ${tab.name}`);
  }

  // Also capture the initial page view (above fold) for quick reference
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  
  // Viewport-only screenshot for hero/header reference
  await page.screenshot({
    path: join(OUTPUT_DIR, '00-header-viewport.png'),
    fullPage: false,
  });
  console.log('✓ Captured: Header viewport');

  await browser.close();
  console.log(`\n✅ All screenshots saved to ${OUTPUT_DIR}/`);
}

captureScreenshots().catch(err => {
  console.error('Screenshot capture failed:', err);
  process.exit(1);
});
