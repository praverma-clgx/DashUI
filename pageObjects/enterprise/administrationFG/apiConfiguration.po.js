/**
 * @typedef {Object} ApiConfigurationLocatorsType
 * @property {string} administrationMenu
 * @property {string} menuContainer
 * @property {string} apiConfigurationLink
 * @property {string} claimsWorkspaceConfigText
 * @property {string} regionHeader
 * @property {string} regionCellUSA
 * @property {string} notificationApiKeyHeader
 * @property {string} apiAccountNumberHeader
 * @property {string} apiAccountPasswordHeader
 * @property {string} addRegionButton
 * @property {string} backToHomePageButton
 */

/** @type {ApiConfigurationLocatorsType} */
const ApiConfigurationLocators = {
  administrationMenu: "span:has-text('Administration')",
  menuContainer: 'div.rmSlide[style*="display: block"]',
  apiConfigurationLink: "link[name='API Configuration']",
  claimsWorkspaceConfigText: 'Claims Workspace Configuration Settings',
  regionHeader: 'table.grid thead tr th',
  regionCellUSA: 'USA',
  notificationApiKeyHeader: 'table.grid thead tr th',
  apiAccountNumberHeader: 'table.grid thead tr th',
  apiAccountPasswordHeader: 'table.grid thead tr th',
  addRegionButton: '#ctl00_ContentPlaceHolder1_lstAPIAccounts_btnInitInsert',
  backToHomePageButton: '#ctl00_ContentPlaceHolder1_lstAPIAccounts_btnBack',
};

class ApiConfigurationPage {
  constructor(page) {
    this.page = page;
  }

  // Navigate to API Configuration page from Administration menu
  async navigateToApiConfiguration() {
    await this.page.locator(ApiConfigurationLocators.administrationMenu).first().hover();
    await this.page
      .getByRole('link', { name: 'API Configuration' })
      .waitFor({ state: 'visible', timeout: 10000 });
    await this.page.getByRole('link', { name: 'API Configuration' }).click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Claims Workspace Configuration Settings text is visible
  async verifyClaimsWorkspaceConfigText() {
    const text = this.page.getByText(ApiConfigurationLocators.claimsWorkspaceConfigText, {
      exact: true,
    });
    await text.waitFor({ state: 'visible' });
    return text;
  }

  // Verify Region header is visible in the grid
  async verifyRegionHeader() {
    const header = this.page
      .locator(ApiConfigurationLocators.regionHeader)
      .filter({ hasText: 'Region' });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify USA region cell is visible
  async verifyUSARegionCell() {
    const cell = this.page.getByText(ApiConfigurationLocators.regionCellUSA, {
      exact: true,
    });
    await cell.waitFor({ state: 'visible' });
    return cell;
  }

  // Verify Notification API Key header is visible
  async verifyNotificationApiKeyHeader() {
    const header = this.page
      .locator(ApiConfigurationLocators.notificationApiKeyHeader)
      .filter({ hasText: 'Notification API Key' });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify API Account Number header is visible
  async verifyApiAccountNumberHeader() {
    const header = this.page
      .locator(ApiConfigurationLocators.apiAccountNumberHeader)
      .filter({ hasText: 'API Account Number' });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify API Account Password header is visible
  async verifyApiAccountPasswordHeader() {
    const header = this.page
      .locator(ApiConfigurationLocators.apiAccountPasswordHeader)
      .filter({ hasText: 'API Account Password' });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Add Region button is visible and is a button type
  async verifyAddRegionButton() {
    const button = this.page.locator(ApiConfigurationLocators.addRegionButton);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Back to Homepage button is visible and is a button type
  async verifyBackToHomePageButton() {
    const button = this.page.locator(ApiConfigurationLocators.backToHomePageButton);
    await button.waitFor({ state: 'visible' });
    return button;
  }
}

export default ApiConfigurationPage;
