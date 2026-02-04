import { test, expect } from '../../../fixtures/enterpriseFixtures.js';
import { EquipmentPage } from '../../../pageObjects/enterprise/moreFg/equipment.po.js';
import { getRandomNumber } from '../../../utils/randomNumber.js';

test('Equipment Page in More FG', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const equipmentPage = new EquipmentPage(page);

  // Navigate to Equipment
  await equipmentPage.navigateToEquipment();

  // Validate Page Title
  await equipmentPage.validatePageTitle();

  // Validate Back Button
  await equipmentPage.validateBackButton();

  // Validate Move Date Label
  await equipmentPage.validateMoveDateLabel();

  // Define grid headers
  const expectedHeaders = [
    'Equipment Name',
    'Equipment Type',
    'Barcode Text',
    'Secondary Equipment Type',
    'Current Location',
    'Job Number',
    'Vendors',
    'Serial Number',
    'Model',
    'Manufacturer',
    'Description',
    'Storage Location',
    'Purchase Amount',
    'Status',
    'Last Moved Date',
  ];

  // Validate Grid Headers
  await equipmentPage.validateGridHeaders(expectedHeaders);

  // Validate Add New Equipment Button
  await equipmentPage.validateAddNewEquipmentButton();

  // Click on Add New Equipment Button and validate navigation
  await equipmentPage.addNewEquipmentButton.click();
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(/.*eEditEquipment\.aspx.*/);

  // Details in Equipment Edit Page
  await expect(page.locator('span.rtsTxt', { hasText: 'Details' })).toBeVisible();

  // Equipment Name input field
  const equipmentNameInput = page.locator('#ctl00_ContentPlaceHolder1_txtEquipmentName');
  await expect(equipmentNameInput).toBeVisible();
  let equipmentName = `Test${getRandomNumber(1, 99999)}`;
  await equipmentNameInput.fill(equipmentName);

  // Equipment Id input field
  const equipmentIdInput = page.locator('#ctl00_ContentPlaceHolder1_txtEquipmentCodeId');
  await expect(equipmentIdInput).toBeVisible();
  let equipmentId = `EQID${getRandomNumber(1, 99999)}`;
  await equipmentIdInput.fill(equipmentId);

  // Current Location Dropdown Arrow
  const currentLocationDropdown = page.locator(
    '#ctl00_ContentPlaceHolder1_ddlCurrentLocation_Arrow',
  );
  await expect(currentLocationDropdown).toBeVisible();
  await currentLocationDropdown.click();

  // Select Second option from Current Location dropdown
  const secondLocationOption = page
    .locator('#ctl00_ContentPlaceHolder1_ddlCurrentLocation_DropDown ul li')
    .nth(1);
  await expect(secondLocationOption).toBeVisible();
  await secondLocationOption.click();

  // Click on Status drop down arrow
  const statusDropdown = page.locator('#ctl00_ContentPlaceHolder1_ddlStatus_Arrow');
  await expect(statusDropdown).toBeVisible();
  await statusDropdown.click();
  // Select Third option from Status dropdown
  const thirdStatusOption = page
    .locator('#ctl00_ContentPlaceHolder1_ddlStatus_DropDown ul li')
    .nth(2);
  await expect(thirdStatusOption).toBeVisible();
  await thirdStatusOption.click();

  // Click on Equipment Type drop down arrow
  const equipmentTypeDropdown = page.locator('#ctl00_ContentPlaceHolder1_ddlEquipmentType_Arrow');
  await expect(equipmentTypeDropdown).toBeVisible();
  await equipmentTypeDropdown.click();

  // Select Second option from Equipment Type dropdown
  const secondEquipmentTypeOption = page
    .locator('#ctl00_ContentPlaceHolder1_ddlEquipmentType_DropDown ul li')
    .nth(1);
  await expect(secondEquipmentTypeOption).toBeVisible();
  await secondEquipmentTypeOption.click();

  // Select the secondary Type drop down arrow
  const secondaryTypeDropdown = page.locator('#ctl00_ContentPlaceHolder1_ddlSecondryType_Arrow');
  await expect(secondaryTypeDropdown).toBeVisible();
  await secondaryTypeDropdown.click();

  // Select Second option from Secondary Equipment Type dropdown
  const secondSecondaryTypeOption = page
    .locator('#ctl00_ContentPlaceHolder1_ddlSecondryType_DropDown ul li')
    .nth(1);
  await expect(secondSecondaryTypeOption).toBeVisible();
  await secondSecondaryTypeOption.click();

  // Barcode input field
  const barcodeInput = page.locator('#ctl00_ContentPlaceHolder1_txtBarCodeText');
  await expect(barcodeInput).toBeVisible();
  let barcodeText = `BARCODE${getRandomNumber(1, 99999)}`;
  await barcodeInput.fill(barcodeText);

  // Handle alert dialog
  page.on('dialog', async (dialog) => {
    await dialog.accept();
  });

  // Click on Save button
  const saveButton = page.locator('#ctl00_ContentPlaceHolder1_Button1');
  await expect(saveButton).toBeVisible();
  await saveButton.click();

  await page.waitForLoadState('networkidle');

  // Validate Export Buttons
  await equipmentPage.validateExportButtons();

  // Click on Export to Excel Button and assert file name
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    await equipmentPage.exportToExcelButton.click(),
  ]);
  const fileName = download.suggestedFilename();
  expect(fileName).toBe('EquipmentDetails.xls');

  await page.waitForLoadState('networkidle');

  // Click on Export to PDF Button and assert file name
  const [pdfDownload] = await Promise.all([
    page.waitForEvent('download'),
    await equipmentPage.exportToPDFButton.click(),
  ]);
  const pdfFileName = pdfDownload.suggestedFilename();
  expect(pdfFileName).toBe('EquipmentDetails.pdf');
});
