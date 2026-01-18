import { test } from '../../../fixtures/enterpriseFixtures.js';
import EnterpriseAccountSettingsPage from '../../../pageObjects/enterprise/companySetting/enterpriseAccountSettings.po.js';

test('Verify account setting functionality', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const accountSettingsPage = new EnterpriseAccountSettingsPage(page);

  // Navigate to Company Settings page
  await accountSettingsPage.navigateToCompanySettings();

  // Verify Accounting Logo Card is visible
  await accountSettingsPage.assertAccountingLogoCardVisible();

  // Click on Accounting Logo Card to navigate to Account Settings
  await accountSettingsPage.clickAccountingLogoCard();

  // Verify Allow Past Date Checkbox is visible
  await accountSettingsPage.assertAllowPastDateCheckboxVisible();

  // Click on Allow Past Date Checkbox
  await accountSettingsPage.clickAllowPastDateCheckbox();

  // Click on Save Button
  await accountSettingsPage.clickSaveButton();

  // Verify success message is displayed
  await accountSettingsPage.assertSuccessMessageVisible();
});
