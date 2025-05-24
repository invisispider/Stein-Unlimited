// smoke-test-webkit.ts
import { webkit } from 'playwright';

(async () => {
  const browser = await webkit.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'webkit-test.png' });
  await browser.close();
})();
