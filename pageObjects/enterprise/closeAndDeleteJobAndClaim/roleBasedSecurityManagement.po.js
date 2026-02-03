/**
 * @typedef {Object} RoleBasedSecurityManagementLocatorsType
 * @property {string} administrationMenu
 * @property {string} menuContainer
 * @property {string} employeeSecuritySettingsMenuOption
 * @property {string} groupSecurityTile
 * @property {string} userGroupAccessText
 * @property {string} updateButton
 * @property {string} selectGroupDropdown
 * @property {string} employeeGrid
 * @property {string} employeeNameSearchInput
 * @property {string} filterButton
 * @property {string} filterMenu
 * @property {string} dataRows
 */

/** @type {RoleBasedSecurityManagementLocatorsType} */
const RoleBasedSecurityManagementLocators = {
  administrationMenu: "span:has-text('Administration')",
  menuContainer: 'div.rmSlide[style*="display: block"]',
  employeeSecuritySettingsMenuOption:
    'ul.rmVertical.rmGroup.rmLevel1 li.rmItem a.rmLink span.rmText',
  groupSecurityTile: '#ctl00_ContentPlaceHolder1_EmployeeSettingsDIV .card_34',
  userGroupAccessText: '#ctl00_ContentPlaceHolder1_Label1',
  updateButton: '#ctl00_ContentPlaceHolder1_btnSave',
  selectGroupDropdown: '#ctl00_ContentPlaceHolder1_ddlUser',
  employeeGrid: '#ctl00_ContentPlaceHolder1_gvEmolpyee_ctl00',
  employeeNameSearchInput:
    '#ctl00_ContentPlaceHolder1_gvEmolpyee_ctl00_ctl02_ctl03_FilterTextBox_FirstName',
  filterButton: '#ctl00_ContentPlaceHolder1_gvEmolpyee_ctl00_ctl02_ctl03_Filter_FirstName',
  filterMenu: 'div.RadMenu[id*="gvEmolpyee_rfltMenu"]',
  dataRows: '#ctl00_ContentPlaceHolder1_gvEmolpyee_ctl00 tbody.rgData .rgRow',
};

class RoleBasedSecurityManagementPage {
  constructor(page) {
    this.page = page;
  }

  // Navigate to Group Security page through Administration > Employee / Security Settings
  async navigateToGroupSecurity() {
    await this.page.locator(RoleBasedSecurityManagementLocators.administrationMenu).first().hover();
    await this.page
      .locator(RoleBasedSecurityManagementLocators.menuContainer)
      .waitFor({ state: 'visible', timeout: 5000 });
    await this.page
      .locator(RoleBasedSecurityManagementLocators.employeeSecuritySettingsMenuOption, {
        hasText: /^Employee \/ Security Settings$/,
      })
      .first()
      .waitFor({ state: 'visible', timeout: 10000 });
    await this.page
      .locator(RoleBasedSecurityManagementLocators.employeeSecuritySettingsMenuOption, {
        hasText: /^Employee \/ Security Settings$/,
      })
      .first()
      .click();
    await this.page.waitForLoadState('networkidle');
    const groupSecurityTile = this.page.locator(
      RoleBasedSecurityManagementLocators.groupSecurityTile,
    );
    await groupSecurityTile.waitFor({ state: 'visible' });
    await groupSecurityTile.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify User Group Access text is visible
  async verifyUserGroupAccessText() {
    const text = this.page.locator(RoleBasedSecurityManagementLocators.userGroupAccessText);
    await text.waitFor({ state: 'visible' });
    return text;
  }

  // Verify Update button is visible
  async verifyUpdateButton() {
    const button = this.page.locator(RoleBasedSecurityManagementLocators.updateButton);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Select Group dropdown is visible
  async verifySelectGroupDropdown() {
    const dropdown = this.page.locator(RoleBasedSecurityManagementLocators.selectGroupDropdown);
    await dropdown.waitFor({ state: 'visible' });
    return dropdown;
  }

  // Select an option from the Select Group dropdown by value
  async selectGroupOption(value) {
    const dropdown = this.page.locator(RoleBasedSecurityManagementLocators.selectGroupDropdown);
    await dropdown.selectOption(value);
    await this.page.waitForLoadState('networkidle');
  }

  // Select an option from the Select Group dropdown by visible text
  async selectGroupOptionByText(visibleText) {
    const dropdown = this.page.locator(RoleBasedSecurityManagementLocators.selectGroupDropdown);
    await dropdown.waitFor({ state: 'visible' });
    await dropdown.selectOption({ label: visibleText });
    await this.page.waitForLoadState('networkidle');
  }

  // Employee name search input in Group Security page
  async groupSecurityEmployeeNameSearchInput(name) {
    // Wait for the employee grid to be visible first
    const grid = this.page.locator(RoleBasedSecurityManagementLocators.employeeGrid);
    await grid.waitFor({ state: 'visible', timeout: 15000 });

    // Use correct locator for the employee name filter textbox
    const input = this.page.locator(RoleBasedSecurityManagementLocators.employeeNameSearchInput);
    await input.waitFor({ state: 'visible', timeout: 15000 });
    await input.click();
    await input.fill(name);
    // Dispatch change event to trigger the RadGrid async request
    await input.dispatchEvent('change');
    // Wait for the grid to update
    await this.page.waitForLoadState('networkidle');
    await this.clickFilterButtonAndSelectContains();
    await this.assertUserRowCountIsZero();
  }

  async clickFilterButtonAndSelectContains() {
    // Use correct locator for the filter button
    const filterButton = this.page.locator(RoleBasedSecurityManagementLocators.filterButton);
    await filterButton.waitFor({ state: 'visible' });
    await filterButton.click();
    // Wait for the filter menu to appear
    const filterMenu = this.page.locator(RoleBasedSecurityManagementLocators.filterMenu);
    await filterMenu.waitFor({ state: 'visible', timeout: 10000 });
    const containsOption = filterMenu.locator('a.rmLink span.rmText', { hasText: 'Contains' });
    await containsOption.waitFor({ state: 'visible', timeout: 10000 });
    await containsOption.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assert that User row count is zero
  async assertUserRowCountIsZero() {
    // Only count data rows, not header/filter rows
    const rows = this.page.locator(RoleBasedSecurityManagementLocators.dataRows);
    await this.page.waitForLoadState('networkidle');
    const rowCount = await rows.count();
    if (rowCount !== 0) {
      throw new Error(`Expected 0 rows, but found ${rowCount}`);
    }
  }
}

export default RoleBasedSecurityManagementPage;
