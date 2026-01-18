import { test } from '../../../fixtures/enterpriseFixtures.js';
import EnterpriseAddInvoicePage from '../../../pageObjects/enterprise/companySetting/enterpriseAddInvoice.po.js';
import addNewInvoiceData from '../../../testData/enterprise/enterpriseCompanySettings/AddNewInvoiceData.json' with { type: 'json' };
import { searchJobNumber } from '../../../utils/searchJobNumber.js';

test('Add New Record in Invoices Detail', async ({ authenticatedPage }) => {
  //------------Code Starts Here------------

  const page = authenticatedPage;
  const addInvoicePage = new EnterpriseAddInvoicePage(page);

  // Search for job by number
  await searchJobNumber(page, addNewInvoiceData.jobNumber);

  // Wait for Acct. Details image to be visible and click it
  await addInvoicePage.waitAndClickAcctDetailsImg();

  // Verify job number is displayed correctly
  await addInvoicePage.assertJobNumberContains(addNewInvoiceData.jobNumber);

  // Click Invoice Details button
  await addInvoicePage.clickInvoiceDetailsButton();

  // Verify invoice details job number
  await addInvoicePage.assertInvoiceDetailsJobNumber(addNewInvoiceData.jobNumber);

  // Click Add New Invoice button
  await addInvoicePage.clickAddNewInvoiceButton();

  // Verify Invoice Memo label is visible
  await addInvoicePage.assertInvoiceMemoLabelVisible();

  // Fill invoice memo
  await addInvoicePage.fillInvoiceMemo(addNewInvoiceData.invoiceMemo);

  // Verify Additional Info label is visible
  await addInvoicePage.assertAdditionalInfoLabelVisible();

  // Fill additional info
  await addInvoicePage.fillAdditionalInfo(addNewInvoiceData.additionalInfo);

  // Verify Date Invoiced label is visible
  await addInvoicePage.assertDateInvoicedLabelVisible();

  // Select today's date
  await addInvoicePage.selectTodayDate();

  // Verify Bill To label is visible
  await addInvoicePage.assertBillToLabelVisible();

  // Fill Bill To
  await addInvoicePage.fillBillTo(addNewInvoiceData.billTo);

  // Verify Class label is visible
  await addInvoicePage.assertClassLabelVisible();

  // Fill Class
  await addInvoicePage.fillClass(addNewInvoiceData.class);

  // Verify Invoiced Amount label is visible
  await addInvoicePage.assertInvoicedAmountLabelVisible();

  // Fill invoiced amount
  await addInvoicePage.fillInvoicedAmount(addNewInvoiceData.invoicedAmount);

  // Verify Sales Tax label is visible
  await addInvoicePage.assertSalesTaxLabelVisible();

  // Fill sales tax
  await addInvoicePage.fillSalesTax(addNewInvoiceData.salesTax);

  // Click Save Invoice button
  await addInvoicePage.clickSaveInvoiceButton();

  // Verify invoice saved successfully
  await addInvoicePage.assertInvoiceSavedSuccessfully();

  // Download invoice Excel file and verify filename
  const download = await addInvoicePage.downloadInvoiceExcel();
  await addInvoicePage.assertInvoiceFileName(download, addNewInvoiceData.jobNumber);
});
