import { test as base } from '@playwright/test';
import path from 'path';
import { config } from '../config/environment.config.js';
import { setupWalkMeRemoval, setupNavigationWalkMeRemoval } from '../utils/walkmeRemover.js';

/**
 * Custom fixture for tests that need BOTH admin and enterprise authentication
 * Creates separate browser contexts for each role
 * PARALLEL-SAFE: Each page gets isolated notification handling
 */
export const test = base.extend({
  // Admin context with admin authentication
  adminContext: async ({ browser }, use) => {
    const adminContext = await browser.newContext({
      storageState: path.join(process.cwd(), '.auth', 'admin.json'),
    });
    await use(adminContext);
    await adminContext.close();
  },

  // Enterprise context with enterprise authentication
  enterpriseContext: async ({ browser }, use) => {
    const enterpriseContext = await browser.newContext({
      storageState: path.join(process.cwd(), '.auth', 'enterprise.json'),
    });
    await use(enterpriseContext);
    await enterpriseContext.close();
  },

  // Admin page
  adminPage: async ({ adminContext }, use) => {
    const page = await adminContext.newPage();
    await page.goto(config.admin.baseUrl, { timeout: 300000 }); // Increased timeout to 5 minutes
    await page.waitForLoadState('networkidle'); // Changed to 'networkidle' for dynamic content

    // 🔧 Remove WalkMe overlays with continuous monitoring
    await setupWalkMeRemoval(page);
    setupNavigationWalkMeRemoval(page);

    await use(page);
    await page.close();
  },

  // Enterprise page
  enterprisePage: async ({ enterpriseContext }, use) => {
    const page = await enterpriseContext.newPage();
    await page.goto(config.enterprise.baseUrl, { timeout: 300000 }); // Increased timeout to 5 minutes
    await page.waitForLoadState('networkidle'); // Changed to 'networkidle' for dynamic content

    // 🔧 Remove WalkMe overlays with continuous monitoring
    await setupWalkMeRemoval(page);
    setupNavigationWalkMeRemoval(page);

    await use(page);
    await page.close();
  },
});

export { expect } from '@playwright/test';
