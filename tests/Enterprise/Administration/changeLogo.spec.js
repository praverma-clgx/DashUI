import { test, expect } from '../../../fixtures/enterpriseFixtures.js';
import ChangeLogoPage from '../../../pageObjects/enterprise/administrationFG/changeLogo.po.js';

test('Change Logo Page', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const changeLogoPage = new ChangeLogoPage(page);

  // Navigate to Change Logo page through Administration > Company Settings
  await changeLogoPage.navigateToChangeLogo();

  // Verify Change Logo text is visible with correct text
  await expect(await changeLogoPage.verifyChangeLogoText()).toBeVisible();
  await expect(await changeLogoPage.verifyChangeLogoText()).toHaveText('Change Logo');

  // Verify Add New button is visible and is submit type
  await expect(await changeLogoPage.verifyAddNewButton()).toBeVisible();
  await expect(await changeLogoPage.verifyAddNewButton()).toHaveAttribute('type', 'submit');

  // Verify Save button is visible and is submit type
  await expect(await changeLogoPage.verifySaveButton()).toBeVisible();
  await expect(await changeLogoPage.verifySaveButton()).toHaveAttribute('type', 'submit');

  // Verify Default column header is visible
  await expect(await changeLogoPage.verifyDefaultGridHeader()).toBeVisible();

  // Verify Logo column header is visible
  await expect(await changeLogoPage.verifyLogoGridHeader()).toBeVisible();

  // Verify Delete column header is visible
  await expect(await changeLogoPage.verifyDeleteGridHeader()).toBeVisible();

  // Verify Default column first radio button is visible
  await expect(await changeLogoPage.verifyDefaultColumnFirstRadioButton()).toBeVisible();

  // Verify Logo column first image is visible
  await expect(await changeLogoPage.verifyLogoColumnFirstImage()).toBeVisible();

  // Verify Delete column first element is visible
  await expect(await changeLogoPage.verifyDeleteColumnFirst()).toBeVisible();
});
