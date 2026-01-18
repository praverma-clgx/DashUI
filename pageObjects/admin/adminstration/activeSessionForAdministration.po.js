/**
 * @typedef {Object} LogoAdministrationLocatorsType
 * @property {string} administrationMenu
 * @property {string} logoMenuOption
 * @property {string} changeLogoHeading
 * @property {string} backToHomeBtn
 * @property {string} addNewBtn
 * @property {string} saveBtn
 * @property {string} gridHeader
 */

/** @type {LogoAdministrationLocatorsType} */
const LogoAdministrationLocators = {
  administrationMenu:
    '#ctl00_RadMenu1 .rmRootGroup > li.rmItem > a.rmLink.rmRootLink > span.rmText.rmExpandDown',
  logoMenuOption: '#ctl00_RadMenu1 .rmSlide ul.rmGroup li.rmItem a.rmLink span.rmText',
  changeLogoHeading: '#ctl00_ContentPlaceHolder1_lbchangelogo',
  backToHomeBtn: '#ctl00_ContentPlaceHolder1_btnBackToHomepage',
  addNewBtn: '#ctl00_ContentPlaceHolder1_btnAddNew',
  saveBtn: '#ctl00_ContentPlaceHolder1_ButtonSave',
  gridHeader: '.rgHeader',
};

class LogoAdministrationPage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to Logo page through Administration menu
   */
  async navigateToLogoPage() {
    await this.page.reload();
    await this.page.waitForLoadState('networkidle');

    // Hover over the "Administration" top menu
    const administrationMenu = this.page.locator(LogoAdministrationLocators.administrationMenu, {
      hasText: 'Administration',
    });
    await administrationMenu.hover();

    // Click Logo option
    const logoOption = this.page.locator(LogoAdministrationLocators.logoMenuOption, {
      hasText: 'Logo',
    });
    await logoOption.waitFor({
      state: 'visible',
      timeout: 5000,
    });
    await logoOption.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Get Change Logo heading locator
   * @returns {import('@playwright/test').Locator}
   */
  getChangeLogoHeading() {
    return this.page.locator(LogoAdministrationLocators.changeLogoHeading);
  }

  /**
   * Get Back to homepage button locator
   * @returns {import('@playwright/test').Locator}
   */
  getBackToHomeButton() {
    return this.page.locator(LogoAdministrationLocators.backToHomeBtn);
  }

  /**
   * Get Add New button locator
   * @returns {import('@playwright/test').Locator}
   */
  getAddNewButton() {
    return this.page.locator(LogoAdministrationLocators.addNewBtn);
  }

  /**
   * Get Save button locator
   * @returns {import('@playwright/test').Locator}
   */
  getSaveButton() {
    return this.page.locator(LogoAdministrationLocators.saveBtn);
  }

  /**
   * Verify Change Logo heading is visible and has correct text
   */
  async verifyChangeLogoHeading() {
    const heading = this.getChangeLogoHeading();
    await heading.waitFor({ state: 'visible' });
    return heading;
  }

  /**
   * Verify Back to homepage button is visible and has correct attributes
   */
  async verifyBackToHomeButton() {
    const button = this.getBackToHomeButton();
    await button.waitFor({ state: 'visible' });
    return button;
  }

  /**
   * Verify Add New button is visible and has correct attributes
   */
  async verifyAddNewButton() {
    const button = this.getAddNewButton();
    await button.waitFor({ state: 'visible' });
    return button;
  }

  /**
   * Verify Save button is visible and has correct attributes
   */
  async verifySaveButton() {
    const button = this.getSaveButton();
    await button.waitFor({ state: 'visible' });
    return button;
  }

  /**
   * Get grid header locator by text
   * @param {string} headerText - The header text to find
   * @returns {import('@playwright/test').Locator}
   */
  getGridHeader(headerText) {
    return this.page.locator(LogoAdministrationLocators.gridHeader).filter({
      hasText: new RegExp(`^${headerText}$`, 'i'),
    });
  }

  /**
   * Validate Logo page grid headers
   * @param {string[]} expectedHeaders - Array of expected header texts
   */
  async validateGridHeaders(expectedHeaders) {
    await this.page.waitForLoadState('domcontentloaded');

    for (const headerText of expectedHeaders) {
      const headerLocator = this.getGridHeader(headerText);
      await headerLocator.waitFor({ state: 'visible' });
    }
  }
}

export default LogoAdministrationPage;
