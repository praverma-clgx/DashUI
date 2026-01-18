import { expect } from '@playwright/test';

// Expected values for home page menu items
const homePageExpectedValues = {
  menuItems: {
    home: 'Home',
    administration: 'Administration',
  },
};

class HomeAndAdministrationMenuPage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Validate Home and Administration buttons in top menu
   */
  async validateHomeAndAdministrationButtons(locators) {
    const homeText = this.page.locator(locators.HomeBtn);
    const adminText = this.page.locator(locators.AdministrationBtn);

    await expect(homeText).toHaveText(homePageExpectedValues.menuItems.home);
    await expect(adminText).toHaveText(homePageExpectedValues.menuItems.administration);
  }
}

export default HomeAndAdministrationMenuPage;
