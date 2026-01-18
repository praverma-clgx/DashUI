/**
 * @typedef {Object} EnterpriseHomePageLocatorsType
 * @property {string} createJobImg
 * @property {string} logoutButton
 * @property {string} searchInput
 * @property {string} loggedInUserName
 * @property {string} DashId
 */

/** @type {EnterpriseHomePageLocatorsType} */
const EnterpriseHomePageLocators = {
  createJobImg: "img[title='Create Job']",
  logoutButton: '#ctl00_lnkLogOut',
  searchInput: '#searchBox',
  loggedInUserName: '#ctl00_lblLogin',
  DashId: "//span[@id='ctl00_lblDashid']",
};

class EnterpriseHomePage {
  constructor(page) {
    this.page = page;
  }

  async clickCreateJob() {
    await this.page.locator(EnterpriseHomePageLocators.createJobImg).click();
  }

  async clickLogout() {
    await this.page.locator(EnterpriseHomePageLocators.logoutButton).click();
  }

  async search(text) {
    await this.page.locator(EnterpriseHomePageLocators.searchInput).fill(text);
  }
}

export default EnterpriseHomePage;
export { EnterpriseHomePageLocators };
