import { test, expect } from '../../../fixtures/enterpriseFixtures.js';
import DashboardDocumentsTabPage from '../../../pageObjects/enterprise/dashboardEvans/documentsTab.po.js';
import dashboardAccountingNotesData from '../../../testData/enterprise/enterpriseCompanySettings/DashboardAccountingNotes.json' with { type: 'json' };
import { searchJobNumber } from '../../../utils/searchJobNumber.js';

test('Documents Tab Validation', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const dashboardDocumentsTabPage = new DashboardDocumentsTabPage(page);

  // Search for job by number
  await searchJobNumber(page, dashboardAccountingNotesData.jobNumber);

  // Navigate to Documents tab
  await dashboardDocumentsTabPage.navigateToDocumentsTab();

  // Verify Create Category button is visible
  await expect(await dashboardDocumentsTabPage.verifyCreateCategoryButtonVisible()).toBeVisible();

  // Verify Upload Document button is visible
  await expect(await dashboardDocumentsTabPage.verifyUploadDocumentButtonVisible()).toBeVisible();

  // Verify Manage Job Documents button is visible
  await expect(
    await dashboardDocumentsTabPage.verifyManageJobDocumentsButtonVisible(),
  ).toBeVisible();

  // Click Create Category button
  await dashboardDocumentsTabPage.clickCreateCategoryButton();

  // Verify Category Name label in popup is visible
  await expect(await dashboardDocumentsTabPage.verifyCategoryNameLabelVisible()).toBeVisible();

  // Verify Description label in popup is visible
  await expect(await dashboardDocumentsTabPage.verifyDescriptionLabelVisible()).toBeVisible();

  // Verify Is Public label in popup is visible
  await expect(await dashboardDocumentsTabPage.verifyIsPublicLabelVisible()).toBeVisible();

  // Verify Create button in popup is visible
  await expect(await dashboardDocumentsTabPage.verifyCreateButtonVisible()).toBeVisible();

  // Verify Cancel button in popup is visible
  await expect(await dashboardDocumentsTabPage.verifyCancelButtonVisible()).toBeVisible();

  // Click Cancel button to close the popup
  await dashboardDocumentsTabPage.clickCancelButton();

  // Verify Documents Categories Table header is visible
  await expect(
    await dashboardDocumentsTabPage.verifyDocumentsCategoriesTableHeaderVisible(),
  ).toBeVisible();

  // Verify Accounting album in Document Categories is visible
  await expect(await dashboardDocumentsTabPage.verifyAccountingAlbumVisible()).toBeVisible();

  // Verify Moisture Mapping album in Document Categories is visible
  await expect(await dashboardDocumentsTabPage.verifyMoistureMappingAlbumVisible()).toBeVisible();

  // Verify Signed Change Orders album in Document Categories is visible
  await expect(
    await dashboardDocumentsTabPage.verifySignedChangeOrdersAlbumVisible(),
  ).toBeVisible();

  // Click Upload Document button
  await dashboardDocumentsTabPage.clickUploadDocumentButton();

  // Verify Upload popup close button is visible and click it
  await expect(await dashboardDocumentsTabPage.verifyUploadPopupCloseButtonVisible()).toBeVisible();

  // Click on close(X) button on upload popup
  await dashboardDocumentsTabPage.clickUploadPopupCloseButton();
});
