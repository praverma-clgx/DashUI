import { expect, test } from '../../../fixtures/adminFixtures.js';
import LogoAdministrationPage from '../../../pageObjects/admin/adminstration/activeSessionForAdministration.po.js';

test('Logo Option in Adminstration Validation', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const logoPage = new LogoAdministrationPage(page);

  // Navigate to Logo page
  await logoPage.navigateToLogoPage();

  // Verify Change Logo Heading
  const changeLogoHeading = await logoPage.verifyChangeLogoHeading();
  await expect(changeLogoHeading).toBeVisible();
  await expect(changeLogoHeading).toHaveText('Change logo');

  // Verify Back to homepage button
  const backToHomeBtn = await logoPage.verifyBackToHomeButton();
  await expect(backToHomeBtn).toBeVisible();
  await expect(backToHomeBtn).toHaveAttribute('type', 'submit');

  // Verify Add New button
  const addNewBtn = await logoPage.verifyAddNewButton();
  await expect(addNewBtn).toBeVisible();
  await expect(addNewBtn).toHaveAttribute('type', 'submit');

  // Verify Save button
  const saveBtn = await logoPage.verifySaveButton();
  await expect(saveBtn).toBeVisible();
  await expect(saveBtn).toHaveAttribute('type', 'submit');

  // Validate Logo page grid headers
  const logoPageHeaders = ['default', 'logo', 'Delete'];
  await logoPage.validateGridHeaders(logoPageHeaders);

  for (const headerText of logoPageHeaders) {
    const headerLocator = logoPage.getGridHeader(headerText);
    await expect(headerLocator).toBeVisible();
  }
});
