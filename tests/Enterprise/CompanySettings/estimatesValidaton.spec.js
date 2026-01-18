import { test } from '../../../fixtures/enterpriseFixtures.js';
import EnterpriseEstimatePage from '../../../pageObjects/enterprise/companySetting/enterpriseEstimate.po.js';
import estimatesValidationData from '../../../testData/enterprise/enterpriseCompanySettings/EstimatesValidationData.json' with { type: 'json' };
import { searchJobNumber } from '../../../utils/searchJobNumber.js';

test('Estimate Validation', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const estimatePage = new EnterpriseEstimatePage(page);

  // Step 1: Search for job by number
  await searchJobNumber(page, estimatesValidationData.jobNumber);

  // Step 2: Navigate to accounting details
  await estimatePage.waitAndClickAcctDetailsImg();

  // Step 4: Click Estimate button
  await estimatePage.clickEstimateButton();

  // Step 5: Assert Add New Estimate button is visible
  await estimatePage.assertAddNewEstimateButtonVisible();

  // Step 6: Click Add New Estimate button
  await estimatePage.clickAddNewEstimateButton();

  // Step 7: Assert Estimate Number label is visible
  await estimatePage.assertEstimateNumberLabelVisible();

  // Step 8: Assert Invoiced label is visible
  await estimatePage.assertInvoicedLabelVisible();

  // Step 9: Assert Invoiced checkbox is visible
  await estimatePage.assertInvoicedCheckBoxVisible();

  // Step 10: Assert Description label is visible
  await estimatePage.assertDescriptionLabelVisible();

  // Step 11: Fill description
  await estimatePage.fillDescription(estimatesValidationData.description);

  // Step 12: Assert Bill To label is visible
  await estimatePage.assertBillToLabelVisible();

  // Step 13: Assert Bill To dropdown is visible
  await estimatePage.assertBillToDropdownVisible();

  // Step 14: Fill Bill To dropdown
  await estimatePage.fillBillTo(estimatesValidationData.billTo);

  // Step 15: Assert Estimate Date label is visible
  await estimatePage.assertEstimateDateLabelVisible();

  // Step 16: Assert Estimate Date input is visible
  await estimatePage.assertEstimateDateInputVisible();

  // Step 17: Assert Estimate Type label is visible
  await estimatePage.assertEstimateTypeLabelVisible();

  // Step 18: Assert Estimate Type dropdown is visible
  await estimatePage.assertEstimateTypeDropdownVisible();

  // Step 19: Fill Estimate Type dropdown
  await estimatePage.fillEstimateType(estimatesValidationData.estimateType);

  // Step 20: Assert Care Of label is visible
  await estimatePage.assertCareOfLabelVisible();

  // Step 21: Assert Care Of input is visible
  await estimatePage.assertCareOfInputVisible();

  // Step 22: Fill Care Of input
  await estimatePage.fillCareOf(estimatesValidationData.careOf);

  // Step 23: Assert Notes label is visible
  await estimatePage.assertNotesLabelVisible();

  // Step 24: Assert Notes input is visible
  await estimatePage.assertNotesInputVisible();

  // Step 25: Fill Notes
  await estimatePage.fillNotes(estimatesValidationData.notes);

  // Step 26: Assert Class label is visible
  await estimatePage.assertClassLabelVisible();

  // Step 27: Assert Class dropdown is visible
  await estimatePage.assertClassDropdownVisible();

  // Step 28: Fill Class dropdown
  await estimatePage.fillClass(estimatesValidationData.class);

  // Step 29: Assert Estimate Amount label is visible
  await estimatePage.assertEstimateAmountLabelVisible();

  // Step 30: Assert Estimate Amount input is visible
  await estimatePage.assertEstimateAmountInputVisible();

  // Step 31: Fill Estimate Amount
  await estimatePage.fillEstimateAmount(estimatesValidationData.estimateAmount);

  // Step 32: Assert Cancel button is visible
  await estimatePage.assertCancelButtonVisible();

  // Step 33: Assert Save button is visible
  await estimatePage.assertSaveButtonVisible();

  // Step 34: Click Save button
  await estimatePage.clickSaveButton();

  // Step 35: Assert Estimate PDF download button is visible
  await estimatePage.assertEstimatePDFDownloadVisible();

  // Step 36: Download estimate Excel file
  const download = await estimatePage.downloadEstimateExcel();

  // Step 37: Assert estimate file name matches expected pattern
  await estimatePage.assertEstimateFileName(download, estimatesValidationData.jobNumber);
});
