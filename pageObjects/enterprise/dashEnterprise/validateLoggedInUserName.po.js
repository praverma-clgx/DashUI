import { expect } from '@playwright/test';

class ValidateLoggedInUserNamePage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Validate logged in user name
   * @param {string} userNameLocator - Locator for user name element
   * @param {string} expectedUserName - Expected user name (default: "admin - Estimator")
   */
  async validateLoggedInUserName(userNameLocator, expectedUserName = 'admin - Estimator') {
    // Get the Logged In User Name
    const loggedInUserName = await this.page
      .locator(userNameLocator)
      .textContent()
      .then((text) => text?.trim());

    // Assert User Name
    expect(loggedInUserName).toContain(expectedUserName);
  }
}

export default ValidateLoggedInUserNamePage;
