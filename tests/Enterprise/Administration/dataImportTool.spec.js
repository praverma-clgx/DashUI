import { test, expect } from '../../../fixtures/enterpriseFixtures.js';
import path from 'path';
import EnterpriseCompanySettingPage, {
  EnterpriseCompanySettingLocators,
} from '../../../pageObjects/enterprise/companySetting/enterpriseCompanySetting.po.js';
import { DataImportPage } from '../../../pageObjects/enterprise/administrationFG/dataImportTool.po.js';

test('Verify Data Import Tool Functionality in Company Settings', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const companySettingPage = new EnterpriseCompanySettingPage(page);
  const dataImportPage = new DataImportPage(page);

  // Step 1: Navigate to Company Settings page
  await companySettingPage.navigateToCompanySettings();

  // Step 2: Assert Data Import Tool card is visible with correct header
  await companySettingPage.assertCardVisibleAndHeaderText(
    EnterpriseCompanySettingLocators.dataImportToolCard,
    EnterpriseCompanySettingLocators.dataImportToolHeader,
    'Data Import Tool',
  );

  // Click on Data Import Tool card
  await page.locator(EnterpriseCompanySettingLocators.dataImportToolCard).first().click();

  // Assert Data Import page header
  await dataImportPage.assertDataImportPageHeader();

  // Download Company Contact template and assert filename
  const companyDownload = await dataImportPage.downloadCompanyContactTemplate();
  expect(companyDownload.suggestedFilename()).toContain('CompanyImportFile');
  expect(companyDownload.suggestedFilename()).toMatch(/\.csv$/);

  // Download Individuals template and assert filename
  const individualsDownload = await dataImportPage.downloadIndividualsTemplate();
  expect(individualsDownload.suggestedFilename()).toContain('IndividualsImportFile');
  expect(individualsDownload.suggestedFilename()).toMatch(/\.csv$/);

  // Prepare updated CSV files with unique names
  const companyCsvFilePath = path.join(
    process.cwd(),
    'testData/enterprise/dataImport/CompanyImportFile.csv',
  );
  const individualsCsvFilePath = path.join(
    process.cwd(),
    'testData/enterprise/dataImport/IndividualsImportFile.csv',
  );
  const updatedCompanyCsv = dataImportPage.buildUpdatedCompanyCsv(companyCsvFilePath);
  const updatedIndividualsCsv = dataImportPage.buildUpdatedIndividualsCsv(individualsCsvFilePath);

  // ─── Individuals Import ───────────────────────────────────────────────────────

  // Start import, upload file, confirm, assert processing message, go back
  await dataImportPage.startIndividualsImport();
  await dataImportPage.uploadIndividualsCsv(updatedIndividualsCsv);
  await dataImportPage.assertIndividualsConfirmationModal();
  await dataImportPage.confirmImport();
  await dataImportPage.assertIndividualsProcessingMessage();
  await dataImportPage.goBackToDataImport();

  // Assert Individuals import row is hidden after returning
  await expect(dataImportPage.individualsStartImportButton).toBeHidden();

  // ─── Company Contacts Import ──────────────────────────────────────────────────

  // Start import, upload file, confirm, assert processing message, go back
  await dataImportPage.startCompanyImport();
  await dataImportPage.uploadCompanyCsv(updatedCompanyCsv);
  await dataImportPage.assertCompanyConfirmationModal();
  await dataImportPage.confirmImport();
  await dataImportPage.assertCompanyProcessingMessage();
  await dataImportPage.goBackToDataImport();

  // Assert Company import row is hidden after returning
  await expect(dataImportPage.companyStartImportButton).toBeHidden();
});
