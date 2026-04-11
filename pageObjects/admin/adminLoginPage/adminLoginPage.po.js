const loginPageLocators = {
  usernameText: 'Username:',
  usernameInput: '#txtUserName',
  passwordText: 'Password:',
  passwordInput: '#txtPassword',
  loginButton: '#btnLogIn',
  resetpwdAndMfaBtn: '#hprlForgotpwd',
  needHelpBtn: 'Need Help?',
  optionsBtn: 'Options',
  themeText: 'Theme:',
  themeDefaultOption: 'select:has-text("Default")',
  languageText: 'Language:',
  errorMessage: '#ErrorMessageLabel',
  errorBlockMessage: '#ErrorMessageBlockLabel',
};

import { config } from '../../../config/environment.config.js';

class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = config.admin.baseUrl;

    if (!this.url) {
      throw new Error(
        `\n❌ Admin login URL is not configured!\n` +
          `   Current TEST_ENV: ${config.env}\n` +
          `   Expected variable: ${config.env.toUpperCase()}_ADMIN_LOGIN_URL\n\n` +
          `📝 Please check your .env file and ensure it's properly configured.\n` +
          `💡 See README.md for setup instructions.\n`,
      );
    }
  }

  async navigate() {
    await this.page.goto(this.url, {
      waitUntil: 'networkidle',
      timeout: 300000,
    });
  }

  async login(username, password) {
    await this.page.locator(loginPageLocators.usernameInput).fill(username);
    await this.page.locator(loginPageLocators.passwordInput).fill(password);

    // Click login and wait for successful redirect
    await this.page.locator(loginPageLocators.loginButton).click();
    // Wait for redirect away from login page
    await this.page.waitForURL((url) => url.toString() !== this.url, { timeout: 300000 });
  }

  async enterUsername(username) {
    await this.page.locator(loginPageLocators.usernameInput).fill(username);
  }

  async enterPassword(password) {
    await this.page.locator(loginPageLocators.passwordInput).fill(password);
  }

  async clickLoginButton() {
    await this.page.locator(loginPageLocators.loginButton).click();
  }

  async logout() {
    // Click logout button and wait for redirect to login page
    await this.page.locator('#ctl00_lnkLogOut').click();
    await this.page.waitForLoadState('networkidle');
  }
}

export default LoginPage;
export { loginPageLocators };
