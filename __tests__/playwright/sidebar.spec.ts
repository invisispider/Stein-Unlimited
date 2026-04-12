/* eslint-env browser */
// tests/sidebar.spec.ts
import dotenv from 'dotenv';
import type { Page } from '@playwright/test';
import { test, expect } from '@playwright/test';
dotenv.config(); // Loads from .env by default

const fakeUid = process.env.VITE_UID

/**
 * Escapes a JS object for safe injection into Playwright's `addInitScript`.
 */
export function escapeForInitScript(obj: unknown): string {
  return `(${JSON.stringify(obj)})`; 
}


// Helper function to set user state in localStorage
async function setUserState(page: Page, uid: string, isAdmin: boolean) {
  await page.addInitScript(`
    localStorage.setItem('main', JSON.stringify({
      uid: '${escapeForInitScript(uid)}',
      displayName: 'Adam',
      email: 'adam.loewen@gmail.com',
      photoURL: '',
      bio: '',
      website: '',
      level: 'Green',
      state: '',
      type: '',
      quadrant: '',
      admin: ${isAdmin},
      authIsReady: true,
      isIn: true,
      isBanned: false,
      lastLogin: '',
      points: 0,
      roles: [],
      styleMode: 'elders',
      userCreated: '',
      userUpdated: ''
    }));
  `);
}

test.describe('Sidebar', () => {
  test('should show admin link if user is admin', async ({ page }) => {
    await setUserState(page, fakeUid as string, true);
    await page.goto('/'); 

    const mainWindow = page.locator('#appWrapper');
    expect(mainWindow).toBeVisible();
    
    await page.waitForSelector('.collapse-icon-closed', { state: 'visible'});

    const collapseIcon = page.locator('.collapse-icon-closed');
    await collapseIcon.waitFor({ state: 'visible' });
    await expect(collapseIcon).toBeVisible();

    await expect(collapseIcon).toBeEnabled();
      
    await collapseIcon.click();

    await page.waitForSelector('a[href="/Contact"]', { state: 'visible' });
    expect(page.locator('a[href="/"]')).toBeVisible();

    const adminLink = page.locator('a[href="/Admin"]');
    await expect(adminLink).toBeVisible();
    
    const logoutLink = page.locator('.sidebar-link[href="/Logout"]');
    expect(logoutLink).toBeTruthy();

    // logs user out
    await logoutLink.click()

    // const openCollapse = page.locator('.collapse-icon');
    // await openCollapse.click();
    await collapseIcon.click();

    const musicLink = page.getByRole('link', { name: 'Music Music instruction'})
    await expect(musicLink).toBeAttached();

  });

  test('should not show admin link if user is not admin', async ({ page }) => {
    await setUserState(page, "any-old-uid", false);
    await page.goto('/');
    
    const mainWindow = page.locator('#appWrapper');
    expect(mainWindow).toBeVisible();
    
    await page.waitForSelector('.collapse-icon-closed', { state: 'visible'});

    const collapseIcon = page.locator('.collapse-icon-closed');

    // await collapseIcon.waitFor({ state: 'visible' });
    await expect(collapseIcon).toBeVisible();

    await expect(collapseIcon).toBeEnabled();
      
    await collapseIcon.click();

    await page.waitForSelector('.sidebar-link[href="/Contact"]', { state: 'attached' });
    await expect(page.getByText('Home')).toBeVisible();

    const adminLink = page.locator('a[href="/Admin"]');
    await expect(adminLink).toHaveCount(0);
    
    const logoutLink = page.locator('.sidebar-link[href="/Logout"]');
    expect (logoutLink).toBeVisible();

    const logoutButton = page.getByRole('link', { name: 'Logout' })

    expect (logoutButton).toBeVisible();

    // click closed
    const openCollapse = page.locator('.collapse-icon');
    await openCollapse.click();
    
    const talkLink = page.getByText('Contact')
    await expect (talkLink).toHaveCount(2);
    
    await collapseIcon.hover();
    await collapseIcon.click();

    await expect (talkLink).toHaveCount(3);

  });
});
