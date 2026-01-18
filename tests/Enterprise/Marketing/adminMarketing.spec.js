import { test, expect } from '../../../fixtures/enterpriseFixtures.js'; // Add expect import if not already present

test('Admin Marketing Page validation', async ({ authenticatedPage }) => {
  const page = authenticatedPage;

  // Marketing Tab locator
  const marketingTabLocator = page.getByRole('link', {
    name: 'Marketing Toggle',
  });
  await marketingTabLocator.hover();

  // Admin Marketing Sub-Tab locator
  const adminMarketingSubTabLocator = page.locator("a:has-text('Admin Marketing')");
  await adminMarketingSubTabLocator.waitFor({ timeout: 5000 });
  await adminMarketingSubTabLocator.click();
  await page.waitForLoadState('networkidle');

  // Marketing Dashboard Page Title locator
  const marketingDashboardPageTitleLocator = page.locator('#ctl00_ContentPlaceHolder1_lblTitle');

  // Verify Marketing Dashboard Page Title is visible
  await expect(marketingDashboardPageTitleLocator).toBeVisible();
  await expect(marketingDashboardPageTitleLocator).toHaveText('Marketing Dashboard');

  // Array of Labels to validate in Marketing Dashboard section
  const labelsToValidate = [
    'Jobs Received Today',
    'My Referrals Today',
    'No Source Jobs',
    'My Clients Lacking Interaction',
    'Referral Tracker',
    'Direct E-mail Marketing',
  ];

  // Loop through each label and verify its visibility
  for (const labelText of labelsToValidate) {
    const labelLocator = page.locator(
      `#ctl00_ContentPlaceHolder1_divG1 b:has-text('${labelText}')`
    );
    await labelLocator.waitFor({ state: 'visible', timeout: 5000 });
    await expect(labelLocator).toBeVisible();
  }

  // Admin Markeing Header Locator
  const adminMarketingHeaderLocator = page.locator(
    '#ctl00_ContentPlaceHolder1_AdminMarketing span.Heading_blue'
  );

  // Verify Admin Marketing Header is visible
  await expect(adminMarketingHeaderLocator).toBeVisible();
  await expect(adminMarketingHeaderLocator).toHaveText(/^\s*Admin Marketing\s*$/);

  // Array of Label to verify in Admin Marketing section
  const adminMarketingLabels = [
    'Marketing Campaign Builder',
    'Marketing Activities',
    'Development Quotas',
    'Ranks',
    'Referral Type',
    'Marketing Groups and Routes',
  ];

  // Loop through each label and verify its visibility
  for (const labelText of adminMarketingLabels) {
    const labelLocator = page.locator(
      `#ctl00_ContentPlaceHolder1_adminpanel b:has-text('${labelText}')`
    );
    await labelLocator.waitFor({ state: 'visible', timeout: 5000 });
    await expect(labelLocator).toBeVisible();
  }
});
