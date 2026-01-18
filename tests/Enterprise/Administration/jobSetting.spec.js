import { test, expect } from '../../../fixtures/enterpriseFixtures.js';
import JobSettingPage from '../../../pageObjects/enterprise/administrationFG/jobSetting.po.js';

test('Job Settings Page', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const jobSettingPage = new JobSettingPage(page);

  // Navigate to Job Settings page from Administration menu
  await jobSettingPage.navigateToJobSettings();

  // Verify Catastrophe section header is visible
  await expect(await jobSettingPage.verifyCatastropheHeaderVisible()).toBeVisible();

  // Verify Custom Codes section header is visible
  await expect(await jobSettingPage.verifyCustomCodesHeaderVisible()).toBeVisible();

  // Verify Division section header is visible
  await expect(await jobSettingPage.verifyDivisionHeaderVisible()).toBeVisible();

  // Verify Lien Rights section header is visible
  await expect(await jobSettingPage.verifyLienRightsHeaderVisible()).toBeVisible();

  // Verify Loss Category section header is visible
  await expect(await jobSettingPage.verifyLossCategoryHeaderVisible()).toBeVisible();

  // Verify Reason for Closing section header is visible
  await expect(await jobSettingPage.verifyReasonForClosingHeaderVisible()).toBeVisible();

  // Verify Reported By section header is visible
  await expect(await jobSettingPage.verifyReportedByHeaderVisible()).toBeVisible();

  // Verify Tags section header is visible
  await expect(await jobSettingPage.verifyTagsHeaderVisible()).toBeVisible();

  // Verify Type of Loss section header is visible
  await expect(await jobSettingPage.verifyTypeOfLossHeaderVisible()).toBeVisible();

  // Verify Work Order Master section header is visible
  await expect(await jobSettingPage.verifyWorkOrderMasterHeaderVisible()).toBeVisible();
});

// Storage state persists session - no logout needed
/* test.afterEach(async ({ page, context }) => {
  // Logout and cleanup
}); */
