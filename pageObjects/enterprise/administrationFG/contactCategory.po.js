/**
 * @typedef {Object} ContactCategoryLocatorsType
 * @property {string} administrationMenu
 * @property {string} menuContainer
 * @property {string} contactCategoryMenuOption
 * @property {string} contactCategoryHeader
 * @property {string} gridRefreshButton
 * @property {string} addNewRecordButton
 * @property {string} descriptionInput
 * @property {string} saveButton
 * @property {string} cancelButton
 */

/** @type {ContactCategoryLocatorsType} */
const ContactCategoryLocators = {
  administrationMenu: "span:has-text('Administration')",
  menuContainer: 'div.rmSlide[style*="display: block"]',
  contactCategoryMenuOption: 'ul.rmVertical.rmGroup.rmLevel1 li.rmItem a.rmLink span.rmText',
  contactCategoryHeader: '#ctl00_ContentPlaceHolder1_lbContactCategoriesHead',
  gridRefreshButton:
    '#ctl00_ContentPlaceHolder1_gvContactCategories_ctl00_ctl02_ctl00_RebindGridButton',
  addNewRecordButton:
    '#ctl00_ContentPlaceHolder1_gvContactCategories_ctl00_ctl02_ctl00_InitInsertButton',
  descriptionInput: '#ctl00_ContentPlaceHolder1_gvContactCategories_ctl00_ctl02_ctl04_txtRoom',
  saveButton: '#ctl00_ContentPlaceHolder1_gvContactCategories_ctl00_ctl02_ctl04_btnUpdate',
  cancelButton: '#ctl00_ContentPlaceHolder1_gvContactCategories_ctl00_ctl02_ctl04_btnCancel',
};

class ContactCategoryPage {
  constructor(page) {
    this.page = page;
  }

  // Navigate to Contact Category page through Administration menu
  async navigateToContactCategory() {
    await this.page.locator(ContactCategoryLocators.administrationMenu).first().hover();
    await this.page
      .locator(ContactCategoryLocators.menuContainer)
      .waitFor({ state: 'visible', timeout: 5000 });
    await this.page
      .locator(ContactCategoryLocators.contactCategoryMenuOption, {
        hasText: /^Contact Category$/,
      })
      .first()
      .waitFor({ state: 'visible', timeout: 10000 });
    await this.page
      .locator(ContactCategoryLocators.contactCategoryMenuOption, {
        hasText: /^Contact Category$/,
      })
      .first()
      .click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Contact Categories header is visible and has correct text
  async verifyContactCategoryHeader() {
    const header = this.page.locator(ContactCategoryLocators.contactCategoryHeader);
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Grid Refresh Button is visible
  async verifyGridRefreshButton() {
    const button = this.page.locator(ContactCategoryLocators.gridRefreshButton);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Add New Record Button is visible
  async verifyAddNewRecordButton() {
    const button = this.page.locator(ContactCategoryLocators.addNewRecordButton);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Click on Add New Record Button
  async clickAddNewRecordButton() {
    await this.page.locator(ContactCategoryLocators.addNewRecordButton).click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Description Input is visible
  async verifyDescriptionInput() {
    const input = this.page.locator(ContactCategoryLocators.descriptionInput);
    await input.waitFor({ state: 'visible' });
    return input;
  }

  // Verify Save Button is visible and enabled
  async verifySaveButton() {
    const button = this.page.locator(ContactCategoryLocators.saveButton);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Cancel Button is visible and enabled
  async verifyCancelButton() {
    const button = this.page.locator(ContactCategoryLocators.cancelButton);
    await button.waitFor({ state: 'visible' });
    return button;
  }
}

export default ContactCategoryPage;
