import { test } from '../../../fixtures/enterpriseFixtures.js';
import EnterpriseJobCostingPage from '../../../pageObjects/enterprise/companySetting/enterpriseJobCosting.po.js';
import jobCostingValidationData from '../../../testData/enterprise/enterpriseCompanySettings/JobCostingValidationData.json' with { type: 'json' };
import { searchJobNumber } from '../../../utils/searchJobNumber.js';

test('Job Costing Validation', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const jobCostingPage = new EnterpriseJobCostingPage(page);

  // Step 1: Search for job by number
  await searchJobNumber(page, jobCostingValidationData.jobNumber);

  // Step 2: Navigate to accounting details
  await jobCostingPage.waitAndClickAcctDetailsImg();

  // Step 4: Click Job Costing button
  await jobCostingPage.clickJobCostingButton();

  // Step 5: Assert all cost category buttons are visible
  await jobCostingPage.assertAllCostCategoryButtonsVisible();

  // Step 6: Click All Category Cost button
  await jobCostingPage.clickAllCategoryCostButton();

  // Step 7: Assert job number in job costing page
  await jobCostingPage.assertJobCostingJobNumberContains(jobCostingValidationData.jobNumber);

  // Step 8: Click Add New Record button
  await jobCostingPage.clickAddNewRecordButton();

  // Step 9: Assert category all cost table label
  await jobCostingPage.assertCategoryAllCostTableLabel();

  // Step 10: Assert add new date input is visible
  await jobCostingPage.assertAddNewDateInputVisible();

  // Step 11: Check billable checkbox
  await jobCostingPage.checkBillableCheckbox();

  // Step 12: Fill expense account
  await jobCostingPage.fillExpenseAccount(jobCostingValidationData.expenseAccount);

  // Step 13: Fill memo
  await jobCostingPage.fillMemo(jobCostingValidationData.memo);

  // Step 14: Select Paid To first option from dropdown
  await jobCostingPage.selectPaidToFirstOption();

  // Step 15: Fill quantity
  await jobCostingPage.fillQuantity(jobCostingValidationData.quantity);

  // Step 16: Fill unit of measure
  await jobCostingPage.fillUnitOfMeasure(jobCostingValidationData.unitOfMeasure);

  // Step 17: Fill job cost type
  await jobCostingPage.fillJobCostType(jobCostingValidationData.jobCostType);

  // Step 18: Fill rate
  await jobCostingPage.fillRate(jobCostingValidationData.rate);

  // Step 19: Select transaction type
  await jobCostingPage.selectTransactionType(jobCostingValidationData.transactionType);

  // Step 20: Assert extended amount input is visible
  await jobCostingPage.assertExtendedAmountInputVisible();

  // Step 21: Click Save button
  await jobCostingPage.clickSaveButton();
});
