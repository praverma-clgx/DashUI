import { expect } from '@playwright/test';
import fs from 'fs';

export const DataImportLocators = {
  // Data Import page header
  dataImportHeader: '#ctl00_ContentPlaceHolder1_lbDefault',

  // Download template buttons
  companyContactTemplateButton:
    '#ctl00_ContentPlaceHolder1_RadGridDataImport_ctl00_ctl04_DownloadTemplateButton',
  individualsTemplateButton:
    '#ctl00_ContentPlaceHolder1_RadGridDataImport_ctl00_ctl06_DownloadTemplateButton',

  // Start Import buttons
  individualsStartImportButton:
    '#ctl00_ContentPlaceHolder1_RadGridDataImport_ctl00_ctl06_StartImportButton',
  companyStartImportButton:
    '#ctl00_ContentPlaceHolder1_RadGridDataImport_ctl00_ctl04_StartImportButton',

  // File upload input
  fileUploadInput: '#ctl00_ContentPlaceHolder1_DataImportFileUploaderfile0',

  // Upload / Save button
  uploadButton: '#ctl00_ContentPlaceHolder1_Button_Save',

  // Confirmation modal and its elements
  confirmationModal: '#RadWindowWrapper_ctl00_ContentPlaceHolder1_ConfirmationWindow',
  confirmationMessage: '#ctl00_ContentPlaceHolder1_ConfirmationWindow_C_ConfirmationDiv td',
  confirmButton: '#ctl00_ContentPlaceHolder1_ConfirmationWindow_C_ConfirmButton',

  // Back to Data Import button (on processing page)
  backToDataImportButton: '#ctl00_ContentPlaceHolder1_ButtonBackToHome',
};

export class DataImportPage {
  constructor(page) {
    this.page = page;

    // Header
    this.dataImportHeader = page.locator(DataImportLocators.dataImportHeader);

    // Download template buttons
    this.companyContactTemplateButton = page.locator(
      DataImportLocators.companyContactTemplateButton,
    );
    this.individualsTemplateButton = page.locator(DataImportLocators.individualsTemplateButton);

    // Start Import buttons
    this.individualsStartImportButton = page.locator(
      DataImportLocators.individualsStartImportButton,
    );
    this.companyStartImportButton = page.locator(DataImportLocators.companyStartImportButton);

    // File upload
    this.fileUploadInput = page.locator(DataImportLocators.fileUploadInput);
    this.uploadButton = page.locator(DataImportLocators.uploadButton);

    // Confirmation modal
    this.confirmationModal = page.locator(DataImportLocators.confirmationModal);
    this.confirmationMessage = page.locator(DataImportLocators.confirmationMessage).first();
    this.confirmButton = page.locator(DataImportLocators.confirmButton);

    // Navigation
    this.backToDataImportButton = page.locator(DataImportLocators.backToDataImportButton);
  }

  // ─── Page Assertions ────────────────────────────────────────────────────────

  async assertDataImportPageHeader() {
    await this.dataImportHeader.waitFor({ state: 'visible' });
    await expect(this.dataImportHeader).toHaveText('Data Import');
  }

  // ─── Template Downloads ──────────────────────────────────────────────────────

  async downloadCompanyContactTemplate() {
    await this.companyContactTemplateButton.waitFor({ state: 'visible', timeout: 5000 });
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.companyContactTemplateButton.click(),
    ]);
    return download;
  }

  async downloadIndividualsTemplate() {
    await this.individualsTemplateButton.waitFor({ state: 'visible', timeout: 5000 });
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.individualsTemplateButton.click(),
    ]);
    return download;
  }

  // ─── CSV Helpers ─────────────────────────────────────────────────────────────

  buildUpdatedIndividualsCsv(csvFilePath) {
    const newLastName = `Doe${Date.now() % 100000}`;
    const originalCsv = fs.readFileSync(csvFilePath, 'utf-8');
    const updatedCsv = originalCsv.replace(/^(,[^,]*,[^,]*,)[^,]*(,)/m, `$1${newLastName}$2`);
    return updatedCsv;
  }

  buildUpdatedCompanyCsv(csvFilePath) {
    const newCompanyName = `IMP${Date.now() % 100000}`;
    const originalCsv = fs.readFileSync(csvFilePath, 'utf-8');
    const lines = originalCsv.split(/\r?\n/);
    const dataRow = lines[1].split(',');
    dataRow[1] = newCompanyName;
    lines[1] = dataRow.join(',');
    return lines.join('\n');
  }

  // ─── Import: Individuals ─────────────────────────────────────────────────────

  async startIndividualsImport() {
    await this.individualsStartImportButton.click();
  }

  async uploadIndividualsCsv(updatedCsvContent) {
    await this.fileUploadInput.waitFor({ state: 'visible', timeout: 60000 });
    await this.fileUploadInput.setInputFiles({
      name: 'IndividualsImportFile.csv',
      mimeType: 'text/csv',
      buffer: Buffer.from(updatedCsvContent),
    });
    await this.uploadButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async assertIndividualsConfirmationModal() {
    await this.confirmationModal.waitFor({ state: 'visible', timeout: 60000 });
    await expect(this.confirmationModal).toBeVisible();
    await expect(this.confirmationMessage).toContainText(
      'The file you have uploaded contains 1 rows.',
    );
    await expect(this.confirmationMessage).toContainText(
      'Would you like to proceed with the import?',
    );
  }

  async confirmImport() {
    await this.confirmButton.waitFor({ state: 'visible' });
    await this.confirmButton.click();
  }

  async assertIndividualsProcessingMessage() {
    const processingMessage = this.page
      .locator('td', {
        hasText: 'Your Individual Contacts Data Import is currently being processed.',
      })
      .nth(-1);
    await expect(processingMessage).toContainText(
      'Your Individual Contacts Data Import is currently being processed. This can take anywhere from a few minutes to a few hours depending on the number of records being uploaded.',
    );
    await expect(processingMessage).toContainText(
      'You will receive an email once the import process has been completed. You can also check the Data Import to see the status of your import.',
    );
  }

  async goBackToDataImport() {
    await this.backToDataImportButton.waitFor({ state: 'visible' });
    await this.backToDataImportButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // ─── Import: Company Contacts ─────────────────────────────────────────────────

  async startCompanyImport() {
    await this.companyStartImportButton.click();
  }

  async uploadCompanyCsv(updatedCsvContent) {
    await this.fileUploadInput.waitFor({ state: 'visible', timeout: 60000 });
    await this.fileUploadInput.setInputFiles({
      name: 'CompanyImportFile.csv',
      mimeType: 'text/csv',
      buffer: Buffer.from(updatedCsvContent),
    });
    await this.uploadButton.waitFor({ state: 'visible' });
    await this.uploadButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async assertCompanyConfirmationModal() {
    await this.confirmationModal.waitFor({ state: 'visible', timeout: 60000 });
    await expect(this.confirmationModal).toBeVisible();
    await expect(this.confirmationMessage).toContainText(
      'The file you have uploaded contains 1 rows.',
    );
    await expect(this.confirmationMessage).toContainText(
      'Would you like to proceed with the import?',
    );
  }

  async assertCompanyProcessingMessage() {
    const processingMessage = this.page
      .locator('td', {
        hasText: 'Your Company Contacts Data Import is currently being processed.',
      })
      .nth(-1);
    await expect(processingMessage).toContainText(
      'Your Company Contacts Data Import is currently being processed. This can take anywhere from a few minutes to a few hours depending on the number of records being uploaded.',
    );
    await expect(processingMessage).toContainText(
      'You will receive an email once the import process has been completed. You can also check the Data Import to see the status of your import.',
    );
  }
}
