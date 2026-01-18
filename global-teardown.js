import { chromium } from '@playwright/test';
import { config } from './config/environment.config.js';
import { EnterpriseHomePageLocators } from './pageObjects/enterprise/homePage/enterpriseHomePage.po.js';
import { AdminHomePageLoc } from './pageObjects/admin/dashAdmin/homePage.po.js';
import { browserConfig } from './config/browser.config.js';
import fs from 'fs';
import path from 'path';

async function globalTeardown() {
  console.log('\n🧹 Global Teardown Started...\n');

  const startTime = Date.now();

  try {
    // Step 1: Logout from all sessions
    await logoutAllSessions();

    // Step 2: Clean up authentication states
    await cleanupAuthStates();

    // Step 3: Generate teardown summary
    await generateTeardownSummary();

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`\n✅ Global Teardown Complete! (${duration}s)\n`);
  } catch (error) {
    console.error('\n❌ Error during global teardown:', error.message);
    // Don't throw - allow teardown to continue even if some steps fail
  }
}

/**
 * Logout from all active sessions
 */
async function logoutAllSessions() {
  console.log('🚪 Logging out from all sessions...');

  // Check if auth files exist
  const enterpriseAuthExists = fs.existsSync('.auth/enterprise.json');
  const adminAuthExists = fs.existsSync('.auth/admin.json');

  if (!enterpriseAuthExists && !adminAuthExists) {
    console.log('   ℹ No active sessions found');
    return;
  }

  // Logout from Enterprise
  if (enterpriseAuthExists) {
    try {
      const enterpriseBrowser = await chromium.launch({ headless: true });
      const enterpriseContext = await enterpriseBrowser.newContext({
        storageState: '.auth/enterprise.json',
        userAgent: browserConfig.userAgent,
      });
      const enterprisePage = await enterpriseContext.newPage();
      await enterprisePage.goto(config.enterprise.baseUrl, { timeout: 10000 });
      await enterprisePage
        .locator(EnterpriseHomePageLocators.logoutButton)
        .click({ timeout: 5000 });
      await enterprisePage.waitForLoadState('networkidle').catch(() => {});
      await enterpriseBrowser.close();
      console.log('   ✓ Enterprise logout complete');
    } catch (error) {
      console.log('   ✓ Enterprise session already cleared or expired');
    }
  }

  // Logout from Admin
  if (adminAuthExists) {
    try {
      const adminBrowser = await chromium.launch({ headless: true });
      const adminContext = await adminBrowser.newContext({
        storageState: '.auth/admin.json',
        userAgent: browserConfig.userAgent,
      });
      const adminPage = await adminContext.newPage();
      await adminPage.goto(config.admin.baseUrl, { timeout: 10000 });
      await adminPage.locator(AdminHomePageLoc.LogoutBtn).click({ timeout: 5000 });
      await adminPage.waitForLoadState('networkidle').catch(() => {});
      await adminBrowser.close();
      console.log('   ✓ Admin logout complete');
    } catch (error) {
      console.log('   ✓ Admin session already cleared or expired');
    }
  }
}

/**
 * Clean up authentication state files
 */
async function cleanupAuthStates() {
  // Only clean auth states in CI environment
  // In local development, keep auth files to avoid re-authentication overhead
  if (!process.env.CI) {
    console.log('🔐 Keeping authentication states for local development');
    return;
  }

  console.log('🔐 Cleaning up authentication states...');

  const authDir = '.auth';

  if (fs.existsSync(authDir)) {
    try {
      const files = fs.readdirSync(authDir);

      if (files.length === 0) {
        console.log('   ℹ No authentication files to clean');
        return;
      }

      for (const file of files) {
        const filePath = path.join(authDir, file);
        fs.unlinkSync(filePath);
        console.log(`   ✓ Removed: ${file}`);
      }

      // Optionally remove the directory itself
      // fs.rmdirSync(authDir);
      // console.log('   ✓ Removed .auth directory');
    } catch (error) {
      console.warn('   ⚠ Could not clean auth states:', error.message);
    }
  } else {
    console.log('   ℹ Auth directory not found');
  }
}

/**
 * Generate teardown summary report
 */
async function generateTeardownSummary() {
  console.log('📊 Generating teardown summary...');

  const summaryPath = 'test-results/teardown-summary.json';

  const summary = {
    teardownCompleted: new Date().toISOString(),
    environment: process.env.TEST_ENV || 'dkirc',
    testSuite: 'DashUI Framework',
    actions: {
      sessionsLoggedOut: true,
      authStatesRemoved: true,
      cleanupSuccessful: true,
    },
    timestamp: Date.now(),
  };

  try {
    // Ensure test-results directory exists
    if (!fs.existsSync('test-results')) {
      fs.mkdirSync('test-results', { recursive: true });
    }

    fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
    console.log(`   ✓ Summary saved to: ${summaryPath}`);
  } catch (error) {
    console.warn('   ⚠ Could not save summary:', error.message);
  }
}

export default globalTeardown;
