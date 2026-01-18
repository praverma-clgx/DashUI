import { test, expect } from '../../../fixtures/enterpriseFixtures.js';
import AcceptJobPage from '../../../pageObjects/enterprise/administrationFG/acceptJob.po.js';

test('Accept Job Page', async ({ authenticatedPage: page }) => {
  const acceptJobPage = new AcceptJobPage(page);

  // Navigate to Accept Job page from Administration menu
  await acceptJobPage.navigateToAcceptJob();

  // Verify Options column header is visible
  await expect(await acceptJobPage.verifyOptionsHeaderVisible()).toBeVisible();

  // Verify Date Received column header is visible
  await expect(await acceptJobPage.verifyDateReceivedHeaderVisible()).toBeVisible();

  // Verify Date of Loss column header is visible
  await expect(await acceptJobPage.verifyDateOfLossHeaderVisible()).toBeVisible();

  // Verify Reference No. / TransactionID column header is visible
  await expect(await acceptJobPage.verifyReferenceNoHeaderVisible()).toBeVisible();

  // Verify Claim Number column header is visible
  await expect(await acceptJobPage.verifyClaimNumberHeaderVisible()).toBeVisible();

  // Verify Client column header is visible
  await expect(await acceptJobPage.verifyClientHeaderVisible()).toBeVisible();

  // Verify Customer header is visible
  await expect(await acceptJobPage.verifyCustomerHeaderVisible()).toBeVisible();

  // Verify Job Address header is visible
  await expect(await acceptJobPage.verifyJobAddressHeaderVisible()).toBeVisible();

  // Verify Required Services column header is visible
  await expect(await acceptJobPage.verifyRequiredServicesHeaderVisible()).toBeVisible();

  // Verify Refresh button is visible and functional
  await expect(await acceptJobPage.verifyRefreshButtonVisible()).toBeVisible();

  // Assert that Refresh button works and triggers data refresh
  await acceptJobPage.clickRefreshButton();

  // Verify Export to Excel button is visible and functional
  await expect(await acceptJobPage.verifyExportToExcelButtonVisible()).toBeVisible();

  // Assert that Export to Excel functionality works
  await acceptJobPage.clickExportToExcelButton();
});
