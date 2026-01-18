import { test } from '../../../fixtures/enterpriseFixtures.js';
import EnterpriseAccountingDetailsPage from '../../../pageObjects/enterprise/companySetting/enterpriseAccountingDetails.po.js';
import accountingDetailsData from '../../../testData/enterprise/enterpriseCompanySettings/AccountingDetailsData.json' with { type: 'json' };
import { searchJobNumber } from '../../../utils/searchJobNumber.js';

test('Accounting Report Page Validation', async ({ authenticatedPage }) => {
  //------------Code Starts Here------------

  const page = authenticatedPage;
  const accountingDetailsPage = new EnterpriseAccountingDetailsPage(page);

  // Search for job by number
  await searchJobNumber(page, accountingDetailsData.jobNumber);

  // Verify URL contains the job number (case-insensitive)
  await accountingDetailsPage.assertUrlContainsJobNumber(accountingDetailsData.jobNumberLowerCase);

  // Verify that all Options of Accounting headers are visible
  await accountingDetailsPage.assertAllAccountingHeaderOptionsVisible();

  // Wait for Acct. Details image to be visible and click it
  await accountingDetailsPage.waitAndClickAcctDetailsImg();

  // Verify URL contains the job number (case-insensitive)
  await accountingDetailsPage.assertUrlContainsJobNumber(accountingDetailsData.jobNumberLowerCase);

  // Wait for accounting report button to be visible and click it
  await accountingDetailsPage.waitAndClickAccountingReportButton();

  // Verify Invoiced element is visible
  await accountingDetailsPage.assertInvoicedVisible();

  // Verify Taxes element is visible
  await accountingDetailsPage.assertTaxesVisible();

  // Verify Revenue element is visible
  await accountingDetailsPage.assertRevenueVisible();

  // Verify Costs element is visible
  await accountingDetailsPage.assertCostsVisible();

  // Verify Gross Profit element is visible
  await accountingDetailsPage.assertGrossProfitVisible();

  // Verify Hourly Labor element is visible
  await accountingDetailsPage.assertHourlyLaborVisible();

  // Verify Labor Burden element is visible
  await accountingDetailsPage.assertLaborBurdenVisible();

  // Verify Sub/Materials element is visible
  await accountingDetailsPage.assertSubMaterialsVisible();

  // Navigate back to accounting details
  await accountingDetailsPage.clickBackToAccountingDetails();
});
