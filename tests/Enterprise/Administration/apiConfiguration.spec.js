import { test, expect } from '../../../fixtures/enterpriseFixtures.js';
import ApiConfigurationPage from '../../../pageObjects/enterprise/administrationFG/apiConfiguration.po.js';

test('Verify API Configuration Page', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const apiConfigPage = new ApiConfigurationPage(page);

  // Navigate to API Configuration page from Administration menu
  await apiConfigPage.navigateToApiConfiguration();

  // Verify Claims Workspace Configuration Settings text is visible
  await expect(await apiConfigPage.verifyClaimsWorkspaceConfigText()).toBeVisible();

  // Verify Region column header is visible
  await expect(await apiConfigPage.verifyRegionHeader()).toBeVisible();

  // Verify Notification API Key column header is visible
  await expect(await apiConfigPage.verifyNotificationApiKeyHeader()).toBeVisible();

  // Verify API Account Number column header is visible
  await expect(await apiConfigPage.verifyApiAccountNumberHeader()).toBeVisible();

  // Verify API Account Password column header is visible
  await expect(await apiConfigPage.verifyApiAccountPasswordHeader()).toBeVisible();

  // Verify Add Region button is visible and is a button type
  await expect(await apiConfigPage.verifyAddRegionButton()).toBeVisible();
  await expect(await apiConfigPage.verifyAddRegionButton()).toHaveAttribute('type', 'button');

  // Verify Back to Homepage button is visible and is a button type
  await expect(await apiConfigPage.verifyBackToHomePageButton()).toBeVisible();
  await expect(await apiConfigPage.verifyBackToHomePageButton()).toHaveAttribute('type', 'button');
});
