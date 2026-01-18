import { test } from '../../../fixtures/enterpriseFixtures.js';
import AccountReceivableTrackingPage from '../../../pageObjects/enterprise/dashboardPD/accountReceivableTracking.po.js';

test('Account Receivable Tracking Page', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const accountReceivableTrackingPage = new AccountReceivableTrackingPage(page);

  // Navigate to Accounts Receivable Tracking page
  await accountReceivableTrackingPage.navigateToAccountsReceivableTracking();

  // Assert page header
  await accountReceivableTrackingPage.assertPageHeader();

  // Assert all radio button options are visible
  await accountReceivableTrackingPage.assertAllRadioButtonsVisible();
});
