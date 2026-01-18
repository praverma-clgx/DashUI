/**
 * @typedef {Object} HomePageLocatorsType
 * @property {string} homeMenuOption
 * @property {string} lastViewsOption
 * @property {string} menuOption
 * @property {string} biReportingOption
 * @property {string} workQueueHeading
 */

/** @type {HomePageLocatorsType} */
const HomePageLocators = {
  homeMenuOption:
    '#ctl00_RadMenu1 .rmRootGroup > li.rmItem > a.rmLink.rmRootLink > span.rmText.rmExpandDown',
  lastViewsOption: '#ctl00_divLastView b',
  menuOption: '#ctl00_RadMenu1 .rmExpandDown',
  biReportingOption: 'li.rmItem.rmLast a.rmLink.rmRootLink span.rmText',
  workQueueHeading: 'span.Heading_blue_new',
};

class HomePageValidation {
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to Home page
   */
  async navigateToHomePage() {
    await this.page.reload();
    await this.page.waitForLoadState('networkidle');

    const homeMenuOption = this.page.locator(HomePageLocators.homeMenuOption, {
      hasText: 'Home',
    });
    await homeMenuOption.waitFor({ state: 'visible' });
    await homeMenuOption.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Get Home menu option locator
   * @returns {import('@playwright/test').Locator}
   */
  getHomeMenuOption() {
    return this.page.locator(HomePageLocators.homeMenuOption, {
      hasText: 'Home',
    });
  }

  /**
   * Get Last Views option locator
   * @returns {import('@playwright/test').Locator}
   */
  getLastViewsOption() {
    return this.page.locator(HomePageLocators.lastViewsOption);
  }

  /**
   * Verify Last Views option is visible
   */
  async verifyLastViewsOption() {
    const lastViewsOption = this.getLastViewsOption();
    await lastViewsOption.waitFor({
      state: 'visible',
      timeout: 5000,
    });
    return lastViewsOption;
  }

  /**
   * Get menu option by text
   * @param {string} optionText - The menu option text
   * @returns {import('@playwright/test').Locator}
   */
  getMenuOption(optionText) {
    return this.page.locator(HomePageLocators.menuOption, {
      hasText: optionText,
    });
  }

  /**
   * Validate all admin menu options are visible
   * @param {string[]} menuOptions - Array of menu option texts
   */
  async validateAdminMenuOptions(menuOptions) {
    for (const optionText of menuOptions) {
      const menuOption = this.getMenuOption(optionText);
      await menuOption.waitFor({ state: 'visible' });
    }
  }

  /**
   * Get BI Reporting option locator
   * @returns {import('@playwright/test').Locator}
   */
  getBIReportingOption() {
    return this.page.locator(HomePageLocators.biReportingOption, {
      hasText: 'BI Reporting',
    });
  }

  /**
   * Verify BI Reporting option is visible
   */
  async verifyBIReportingOption() {
    const biReportingOption = this.getBIReportingOption();
    await biReportingOption.waitFor({ state: 'visible' });
    return biReportingOption;
  }

  /**
   * Get Work Queue heading locator
   * @returns {import('@playwright/test').Locator}
   */
  getWorkQueueHeading() {
    return this.page.locator(HomePageLocators.workQueueHeading, {
      hasText: 'Work Queue',
    });
  }

  /**
   * Verify Work Queue heading is visible
   */
  async verifyWorkQueueHeading() {
    const workQueueHeading = this.getWorkQueueHeading();
    await workQueueHeading.waitFor({ state: 'visible' });
    return workQueueHeading;
  }

  /**
   * Get search option by text
   * @param {string} optionText - The search option text
   * @returns {import('@playwright/test').Locator}
   */
  getSearchOption(optionText) {
    return this.page.getByText(optionText, { exact: true });
  }

  /**
   * Validate all home search options are visible
   * @param {string[]} searchOptions - Array of search option texts
   */
  async validateHomeSearchOptions(searchOptions) {
    for (const optionText of searchOptions) {
      const optionLocator = this.getSearchOption(optionText);
      await optionLocator.waitFor({ state: 'visible' });
    }
  }
}

export default HomePageValidation;
