import { test, expect } from '../../../fixtures/enterpriseFixtures.js';
import RoleBasedSecurityManagementPage from '../../../pageObjects/enterprise/closeAndDeleteJobAndClaim/roleBasedSecurityManagement.po.js';

test('Group Security Page', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const roleBasedSecurityPage = new RoleBasedSecurityManagementPage(page);

  // Navigate to Group Security page through Administration > Employee / Security Settings
  await roleBasedSecurityPage.navigateToGroupSecurity();

  // Verify User Group Access text is visible and has correct text
  const userGroupAccessText = await roleBasedSecurityPage.verifyUserGroupAccessText();
  await expect(userGroupAccessText).toBeVisible();
  await expect(userGroupAccessText).toHaveText('User Group Access');

  // Verify Update button is disabled initially
  const updateButton = await roleBasedSecurityPage.verifyUpdateButton();
  await expect(updateButton).toBeDisabled();

  // Verify Select Group dropdown is visible and enabled
  const selectGroupDropdown = await roleBasedSecurityPage.verifySelectGroupDropdown();
  await expect(selectGroupDropdown).toBeVisible();
  await expect(selectGroupDropdown).toBeEnabled();

  // Select Estimator option from the dropdown by text
  await roleBasedSecurityPage.selectGroupOptionByText('Estimator');

  // Verify Update button is enabled after selecting an option
  await expect(updateButton).toBeEnabled();
});
