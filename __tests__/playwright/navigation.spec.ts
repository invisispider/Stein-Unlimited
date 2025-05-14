import { test, expect } from '@playwright/test';

/**
 * Escapes a JS object for safe injection into Playwright's `addInitScript`.
 */
export function escapeForInitScript(obj: unknown): string {
  return `(${JSON.stringify(obj)})`; 
  // JSON.stringify(obj)
  //   .replace(/\\/g, '\\\\')  // escape backslashes
  //   .replace(/'/g, "\\'");   // escape single quotes
}

// const fakeUid = process.env.VITE_UID

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect root to have page website page title.
  await expect(page).toHaveTitle(/Stein unLimited/);
});

test('style selector and navigation', async ({ page }) => {
  const fakeUser = {
    uid: 'any-old-uid',
    displayName: 'Adam',
    email: 'adam.loewen@gmail.com',
    photoURL: '',
    bio: '',
    website: '',
    level: 'Green',
    state: '',
    type: '',
    quadrant: '',
    admin: false,
    authIsReady: true,
    isIn: true,
    isBanned: false,
    lastLogin: '',
    points: 0,
    roles: [],
    styleMode: 'elders',
    userCreated: '',
    userUpdated: '',
  };
  
  await page.addInitScript({
    content: `
    localStorage.setItem('main', '${fakeUser}',
    `,
  });

  await page.goto('/');

  const mainWindow = page.locator('#appWrapper');
  await expect(mainWindow).toBeVisible();
  
  // Check the default theme is light.
  const el = page.locator('#appWrapper');

  await expect(el).toHaveClass(/.*\belders\b.*/);
  const computedStyle = await el?.evaluate(el => {
    const style = window.getComputedStyle(el);
    return style.backgroundColor;
  });
  console.log(computedStyle)
  await expect(computedStyle).toBe('rgb(250, 240, 240)')

  // change the theme to dark purple
  await page.getByTestId('dark').click();
  const computedStyle2 = await el?.evaluate(el => {
    const style = window.getComputedStyle(el);
    return style.backgroundColor;
  });
  expect(computedStyle2).toBe('rgb(22, 22, 22)');

  // Pull open the dropdown menu for site features.
  await page.locator('span.collapse-icon > i').click();
  await expect(page.locator('div.sidebar.topnav')).toHaveText(/Home/);
  await expect(page.locator('div.sidebar.topnav')).toHaveText(/Music/);

  await page.goto('/Time');
  await expect(page.locator('div.title-logo > h1')).toHaveText(/unLimitedTime/);

  await page.goto('/Admin');
  await expect(page).toHaveURL('/');

  await page.goto('/pants');
  await expect(page).toHaveTitle('Uh Oh Oh No');
  await expect(page.locator('div.fourohfour')).toHaveText(/pants is in another castle/);
});
