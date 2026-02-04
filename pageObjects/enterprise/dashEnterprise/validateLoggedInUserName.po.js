import { expect } from '@playwright/test';

class ValidateLoggedInUserNamePage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Get expected user name based on environment
   * @returns {string} Expected user name for the current environment
   */
  getExpectedUserNameByEnvironment() {
    const environment = process.env.ENVIRONMENT || process.env.NODE_ENV || 'dev';

    const userNameMap = {
      prod: 'firsttest - Estimator',
      production: 'firsttest - Estimator',
      staging: 'admin - Estimator',
      test: 'admin - Estimator',
      dev: 'admin - Estimator',
      development: 'admin - Estimator',
    };

    return userNameMap[environment.toLowerCase()] || 'admin - Estimator';
  }

  /**
   * Validate logged in user name
   * @param {string} userNameLocator - Locator for user name element
   * @param {string|null} expectedUserName - Expected user name. If null, uses environment-based value
   */
  async validateLoggedInUserName(userNameLocator, expectedUserName = null) {
    // Get the Logged In User Name
    const loggedInUserName = await this.page
      .locator(userNameLocator)
      .textContent()
      .then((text) => text?.trim());

    // Use environment-based user name if not provided
    const expected = expectedUserName || this.getExpectedUserNameByEnvironment();

    // Assert User Name
    expect(loggedInUserName).toContain(expected);
  }
}

export default ValidateLoggedInUserNamePage;
