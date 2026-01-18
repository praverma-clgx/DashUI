import { expect } from '@playwright/test';

class LoggedInUserNamePage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Validate logged in user name
   * @param {string} userNameLocator - Locator for user name element
   * @param {string} expectedName - Expected user name (default: "Admin")
   */
  async validateLoggedInUserName(userNameLocator, expectedName = 'Admin') {
    const loggedInUserName = this.page.locator(userNameLocator);
    await expect(loggedInUserName).toHaveText(expectedName);
  }
}

export default LoggedInUserNamePage;
