import { test as base } from '@playwright/test';
import { config } from '../config/environment.config.js';
import AdminLoginPage from '../pageObjects/admin/adminLoginPage/adminLoginPage.po.js';
import { setupWalkMeRemoval, setupNavigationWalkMeRemoval } from '../utils/walkmeRemover.js';

/**
 * Custom fixture for Admin tests using storage state
 * Session is already authenticated via global setup
 * Automatically re-authenticates if session is invalid
 * PARALLEL-SAFE: Each worker gets isolated notification handling
 */
export const test = base.extend({
  authenticatedPage: async ({ page }, use) => {
    // Navigate to base URL to activate the storage state session
    await page.goto(config.admin.baseUrl, { timeout: 300000 });
    await page.waitForLoadState('networkidle');

    // Check if we're on the actual login page (not home screen)
    const currentUrl = page.url();
    const isOnLoginPage =
      currentUrl.includes('FranchisorLogin.aspx') && !currentUrl.includes('HomeQueue.aspx');

    if (isOnLoginPage) {
      console.log('⚠ Admin session expired or invalid, re-authenticating...');

      const adminLoginPage = new AdminLoginPage(page);
      await adminLoginPage.login(
        config.admin.credentials.username,
        config.admin.credentials.password,
      );

      // Save new auth state
      await page.context().storageState({ path: '.auth/admin.json' });
      console.log('✓ Admin re-authentication successful');
    }

    // 🔧 Remove WalkMe overlays with continuous monitoring (handles dynamic overlays)
    await setupWalkMeRemoval(page);
    setupNavigationWalkMeRemoval(page);

    // Now page is authenticated and ready to use
    await use(page);
  },
});

export { expect } from '@playwright/test';
