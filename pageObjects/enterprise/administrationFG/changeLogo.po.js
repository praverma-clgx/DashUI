/**
 * @typedef {Object} ChangeLogoLocatorsType
 * @property {string} administrationMenu
 * @property {string} menuContainer
 * @property {string} companySettingsMenuOption
 * @property {string} changeLogoSection
 * @property {string} changeLogoText
 * @property {string} addNewButton
 * @property {string} saveButton
 * @property {string} defaultGridHeader
 * @property {string} logoGridHeader
 * @property {string} deleteGridHeader
 * @property {string} defaultColumnFirstRadioButton
 * @property {string} logoColumnFirstImage
 * @property {string} deleteColumnFirst
 */

/** @type {ChangeLogoLocatorsType} */
const ChangeLogoLocators = {
  administrationMenu: "span:has-text('Administration')",
  menuContainer: 'div.rmSlide[style*="display: block"]',
  companySettingsMenuOption: 'ul.rmVertical.rmGroup.rmLevel1 li.rmItem a.rmLink span.rmText',
  changeLogoSection: '.sectionHeaderText',
  changeLogoText: '#ctl00_ContentPlaceHolder1_lbchangelogo',
  addNewButton: '#ctl00_ContentPlaceHolder1_btnAddNew',
  saveButton: '#ctl00_ContentPlaceHolder1_ButtonSave',
  defaultGridHeader: 'table#ctl00_ContentPlaceHolder1_gvLogo_ctl00_Header tr th',
  logoGridHeader: 'table#ctl00_ContentPlaceHolder1_gvLogo_ctl00_Header tr th',
  deleteGridHeader: 'table#ctl00_ContentPlaceHolder1_gvLogo_ctl00_Header tr th',
  defaultColumnFirstRadioButton: '#ctl00_ContentPlaceHolder1_gvLogo_ctl00_ctl14_chkDefault',
  logoColumnFirstImage: '#ctl00_ContentPlaceHolder1_gvLogo_ctl00_ctl14_grdImgLogo',
  deleteColumnFirst: '#ctl00_ContentPlaceHolder1_gvLogo_ctl00_ctl14_gbccolumn',
};

class ChangeLogoPage {
  constructor(page) {
    this.page = page;
  }

  // Navigate to Change Logo page through Administration > Company Settings
  async navigateToChangeLogo() {
    await this.page.locator(ChangeLogoLocators.administrationMenu).first().hover();
    await this.page
      .locator(ChangeLogoLocators.menuContainer)
      .waitFor({ state: 'visible', timeout: 5000 });
    await this.page
      .locator(ChangeLogoLocators.companySettingsMenuOption, {
        hasText: /^Company Settings$/,
      })
      .first()
      .waitFor({ state: 'visible', timeout: 10000 });
    await this.page
      .locator(ChangeLogoLocators.companySettingsMenuOption, {
        hasText: /^Company Settings$/,
      })
      .first()
      .click();
    await this.page.waitForLoadState('networkidle');
    const changeLogoSection = this.page.locator(ChangeLogoLocators.changeLogoSection, {
      hasText: /^Change Logo$/,
    });
    await changeLogoSection.waitFor({ state: 'visible' });
    await changeLogoSection.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Change Logo text is visible
  async verifyChangeLogoText() {
    const text = this.page.locator(ChangeLogoLocators.changeLogoText);
    await text.waitFor({ state: 'visible' });
    return text;
  }

  // Verify Add New button is visible
  async verifyAddNewButton() {
    const button = this.page.locator(ChangeLogoLocators.addNewButton);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Save button is visible
  async verifySaveButton() {
    const button = this.page.locator(ChangeLogoLocators.saveButton);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Default grid header is visible
  async verifyDefaultGridHeader() {
    const header = this.page.locator(ChangeLogoLocators.defaultGridHeader, {
      hasText: /^Default$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Logo grid header is visible
  async verifyLogoGridHeader() {
    const header = this.page.locator(ChangeLogoLocators.logoGridHeader, {
      hasText: /^Logo$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Delete grid header is visible
  async verifyDeleteGridHeader() {
    const header = this.page.locator(ChangeLogoLocators.deleteGridHeader, {
      hasText: /^Delete$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Default column first radio button is visible
  async verifyDefaultColumnFirstRadioButton() {
    const radio = this.page.locator(ChangeLogoLocators.defaultColumnFirstRadioButton);
    await radio.waitFor({ state: 'visible' });
    return radio;
  }

  // Verify Logo column first image is visible
  async verifyLogoColumnFirstImage() {
    const image = this.page.locator(ChangeLogoLocators.logoColumnFirstImage);
    await image.waitFor({ state: 'visible' });
    return image;
  }

  // Verify Delete column first element is visible
  async verifyDeleteColumnFirst() {
    const element = this.page.locator(ChangeLogoLocators.deleteColumnFirst);
    await element.waitFor({ state: 'visible' });
    return element;
  }
}

export default ChangeLogoPage;
