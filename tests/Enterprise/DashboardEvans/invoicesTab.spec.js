import { test, expect } from '../../../fixtures/enterpriseFixtures.js';
import DashboardInvoicesTabPage from '../../../pageObjects/enterprise/dashboardEvans/invoicesTab.po.js';
import dashboardAccountingNotesData from '../../../testData/enterprise/enterpriseCompanySettings/DashboardAccountingNotes.json' with { type: 'json' };
import { getRandomNumber } from '../../../utils/randomNumber.js';
import { searchJobNumber } from '../../../utils/searchJobNumber.js';

let randomNumber = getRandomNumber(1, 10000);

test('Invoices Tab Validation And Add New Data Validation', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const dashboardInvoicesTabPage = new DashboardInvoicesTabPage(page);

  // Search for job by number
  await searchJobNumber(page, dashboardAccountingNotesData.jobNumber);

  // Navigate to Invoices tab
  await dashboardInvoicesTabPage.navigateToInvoicesTab();

  // Verify Add New button is visible
  await expect(await dashboardInvoicesTabPage.verifyAddNewButtonVisible()).toBeVisible();

  // Verify Refresh button is visible
  await expect(await dashboardInvoicesTabPage.verifyRefreshButtonVisible()).toBeVisible();

  // Verify Export to Excel button is visible
  await expect(await dashboardInvoicesTabPage.verifyExportToExcelButtonVisible()).toBeVisible();

  // Verify Export to PDF button is visible
  await expect(await dashboardInvoicesTabPage.verifyExportToPDFButtonVisible()).toBeVisible();

  // Verify Invoice PDF column header is visible
  await expect(await dashboardInvoicesTabPage.verifyInvoicePDFColumnHeaderVisible()).toBeVisible();

  // Verify Invoice No. column header is visible
  await expect(await dashboardInvoicesTabPage.verifyInvoiceNoColumnHeaderVisible()).toBeVisible();

  // Verify Note column header is visible
  await expect(await dashboardInvoicesTabPage.verifyNoteColumnHeaderVisible()).toBeVisible();

  // Verify Customer column header is visible
  await expect(await dashboardInvoicesTabPage.verifyCustomerColumnHeaderVisible()).toBeVisible();

  // Verify Invoice Date column header is visible
  await expect(await dashboardInvoicesTabPage.verifyInvoiceDateColumnHeaderVisible()).toBeVisible();

  // Verify Amount column header is visible
  await expect(await dashboardInvoicesTabPage.verifyAmountColumnHeaderVisible()).toBeVisible();

  // Verify Tax Included column header is visible
  await expect(await dashboardInvoicesTabPage.verifyTaxIncludedColumnHeaderVisible()).toBeVisible();

  // Click Add New button to navigate to Invoice detail page
  await dashboardInvoicesTabPage.clickAddNewButton();

  // Verify URL contains job number after navigating to Invoices tab
  const currentURL = page.url();
  expect(currentURL).toContain(dashboardAccountingNotesData.jobNumber);

  // Verify Invoice detail page is visible and has correct text
  const invoiceDetailPage = await dashboardInvoicesTabPage.verifyInvoiceDetailPageVisible();
  await expect(invoiceDetailPage).toBeVisible();
  await expect(invoiceDetailPage).toHaveText(dashboardInvoicesTabPage.getExpectedInvoiceDetail());

  // Verify Invoice detail page Add New button is visible
  await expect(
    await dashboardInvoicesTabPage.verifyInvoiceDetailAddNewButtonVisible()
  ).toBeVisible();

  // Verify Invoice detail page Refresh button is visible
  await expect(
    await dashboardInvoicesTabPage.verifyInvoiceDetailRefreshButtonVisible()
  ).toBeVisible();

  // Verify Job Number column header is visible
  await expect(await dashboardInvoicesTabPage.verifyJobNumberColumnHeaderVisible()).toBeVisible();

  // Verify Invoice Memo column header is visible
  await expect(await dashboardInvoicesTabPage.verifyInvoiceMemoColumnHeaderVisible()).toBeVisible();

  // Click Invoice Detail Add New button
  await dashboardInvoicesTabPage.clickInvoiceDetailAddNewButton();

  // Verify Invoice Memo label is visible
  await expect(await dashboardInvoicesTabPage.verifyInvoiceMemoLabelVisible()).toBeVisible();

  // Invoice Memeo input field locator
  const invoiceMemoInput = page.locator(
    '#ctl00_ContentPlaceHolder1_gvInvoices_ctl00_ctl02_ctl04_txtReceivableNotes'
  );
  await expect(invoiceMemoInput).toBeVisible();

  // Enter Random Number  in Invoice Memo input field
  await invoiceMemoInput.click();
  await invoiceMemoInput.fill(randomNumber.toString());

  // Verify Invoice Amount label is visible
  await expect(await dashboardInvoicesTabPage.verifyInvoiceAmountLabelVisible()).toBeVisible();

  // Enter Random Number in invoice Amount input field
  const invoiceAmountInput = page.locator(
    '#ctl00_ContentPlaceHolder1_gvInvoices_ctl00_ctl02_ctl04_txtAmount'
  );
  await invoiceAmountInput.click();
  await invoiceAmountInput.fill(randomNumber.toString());

  // Verify Save button is visible and has correct type
  const saveButton = await dashboardInvoicesTabPage.verifySaveButtonVisible();
  await expect(saveButton).toBeVisible();
  await expect(saveButton).toHaveAttribute('type', 'button');

  // Verify Cancel button is visible and has correct type
  const cancelButton = await dashboardInvoicesTabPage.verifyCancelButtonVisible();
  await expect(cancelButton).toBeVisible();
  await expect(cancelButton).toHaveAttribute('type', 'button');

  // Verify Back to Slide Board button is visible
  await expect(await dashboardInvoicesTabPage.verifyBackToSlideBoardButtonVisible()).toBeVisible();

  // click on save button
  await saveButton.click();
  await page.waitForLoadState('networkidle');

  // Click Back to Slide Board button
  await dashboardInvoicesTabPage.clickBackToSlideBoardButton();
  await page.waitForLoadState('networkidle');

  // Verify URL contains job number after navigating to slideboard
  const finalURL = page.url();
  expect(finalURL).toContain(dashboardAccountingNotesData.jobNumber);

  // Navigate to Invoices tab
  await dashboardInvoicesTabPage.navigateToInvoicesTab();

  // Click on refresh button to load newly added invoice
  await dashboardInvoicesTabPage.clickRefreshButton();

  // Note input field locator for the newly added invoice
  const noteInput = page.locator(
    '#ctl00_ContentPlaceHolder1_dockJobTabs_C_Invoices_userControl_gvInvoices_ctl00_ctl02_ctl03_FilterTextBox_ReceivableNote'
  );
  await noteInput.waitFor({ state: 'visible' });
  await noteInput.click();
  await noteInput.fill(randomNumber.toString());
  await page.keyboard.press('Enter');
  await page.waitForLoadState('networkidle');

  // Assert the count of invoice rows in the grid to be 1
  const invoiceRows = page.locator(
    '#ctl00_ContentPlaceHolder1_dockJobTabs_C_Invoices_userControl_gvInvoices_GridData table.rgMasterTable > tbody > tr.rgRow, ' +
      '#ctl00_ContentPlaceHolder1_dockJobTabs_C_Invoices_userControl_gvInvoices_GridData table.rgMasterTable > tbody > tr.rgAltRow'
  );
  await invoiceRows.first().waitFor({ state: 'visible', timeout: 5000 });
  await expect(invoiceRows).toHaveCount(1);
});
