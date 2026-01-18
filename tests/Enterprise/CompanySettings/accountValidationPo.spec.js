import { test } from '../../../fixtures/enterpriseFixtures.js';
import EnterpriseAccountValidationPage from '../../../pageObjects/enterprise/companySetting/enterpriseAccountValidation.po.js';
import accountValidationData from '../../../testData/enterprise/enterpriseCompanySettings/AccountValidationData.json' with { type: 'json' };
import { searchJobNumber } from '../../../utils/searchJobNumber.js';

test('Accounting Report With POs Validation', async ({ authenticatedPage }) => {
  //------------Code Starts Here------------

  const page = authenticatedPage;
  const accountValidationPage = new EnterpriseAccountValidationPage(page);

  // Search for job by number
  await searchJobNumber(page, accountValidationData.jobNumber);

  // Wait for Acct. Details image to be visible and click it
  await accountValidationPage.waitAndClickAcctDetailsImg();

  // Verify job number is displayed correctly
  await accountValidationPage.assertJobNumberContains(accountValidationData.jobNumber);

  // Wait for and click accounting report with POs button
  await accountValidationPage.waitAndClickAccountingReportPOButton();

  // Download accounting report with POs and verify file name
  const download = await accountValidationPage.downloadAccountingReportWithPOs();
  await accountValidationPage.assertAccountingReportWithPOsFileName(download);
});
