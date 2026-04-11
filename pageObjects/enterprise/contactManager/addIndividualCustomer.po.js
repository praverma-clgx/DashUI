// Assertion helpers
import { expect } from '@playwright/test';

export const AddIndividualCustomerLocators = {
  addNewBtn: '#ctl00_ContentPlaceHolder1_individualControl_buttonAddRecordIndividual',
  firstNameInput: '#ctl00_ContentPlaceHolder1_txtFirstName',
  lastNameInput: '#ctl00_ContentPlaceHolder1_txtLastName',
  phoneInput: '#ctl00_ContentPlaceHolder1_txtMainPhone',
  contactTypeDropdown: '#ctl00_ContentPlaceHolder1_ddlContactType_Input',
  contactTypeList: 'ul.rcbList li.rcbItem',
  saveBtn: '#ctl00_ContentPlaceHolder1_btnSaveAndBack',
  address: '#ctl00_ContentPlaceHolder1_txtAddress',
  zipCodeInput: '#ctl00_ContentPlaceHolder1_ctl07_ZipCodeTextBox',
  city: '#ctl00_ContentPlaceHolder1_ctl07_CityTextBox',
  individualCells: 'tbody[role="rowgroup"] td[data-field="PersonName"]',
  companyAddBtn: '#ctl00_ContentPlaceHolder1_imgAddNew',
  addNewCompanyPopup: '#ctl00_ContentPlaceHolder1_MPECompNewPH_foregroundElement',
  vipCompanySwitch: '.modalPopup #ctl00_ContentPlaceHolder1_RadSwitch_VIPCompanyCustomer',
  cancelCompanyBtn: '.modalPopup #ctl00_ContentPlaceHolder1_btnCompClosePH',
  individualGrid: '#individualGrid td[data-field="PersonName"]',
};

class AddIndividualCustomerPage {
  constructor(page) {
    this.page = page;
  }

  // Actions
  async hoverContactManager() {
    const contactManagerBtn = this.page.getByText('Contact Manager', {
      exact: true,
    });
    await contactManagerBtn.hover();
  }

  async clickIndividualsMenu() {
    const individualsLink = this.page.getByRole('link', {
      name: 'Individuals',
    });
    await individualsLink.waitFor({ state: 'visible', timeout: 10000 });
    await individualsLink.click();
  }

  async clickAddNewIndividual() {
    await this.page.locator(AddIndividualCustomerLocators.addNewBtn).click();
  }

  async enterFirstName(firstName) {
    await this.page.locator(AddIndividualCustomerLocators.firstNameInput).fill(firstName);
  }

  async enterLastName(lastName) {
    await this.page.locator(AddIndividualCustomerLocators.lastNameInput).fill(lastName);
  }

  async enterAddress(address) {
    await this.page.locator(AddIndividualCustomerLocators.address).fill(address);
  }

  async enterZipCode(zip) {
    await this.page.locator(AddIndividualCustomerLocators.zipCodeInput).fill(zip);
  }

  async enterPhone(phone) {
    await this.page.locator(AddIndividualCustomerLocators.phoneInput).fill(phone);
  }

  async selectContactTypeCustomer(contactType) {
    const dropdown = this.page.locator(AddIndividualCustomerLocators.contactTypeDropdown);
    await dropdown.click();
    await this.page
      .locator(AddIndividualCustomerLocators.contactTypeList)
      .filter({ hasText: new RegExp(`^${contactType}$`) })
      .first()
      .click();
  }

  async clickSaveIndividual() {
    await this.page.locator(AddIndividualCustomerLocators.saveBtn).click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickCompanyAddButton() {
    const btn = this.page.locator(AddIndividualCustomerLocators.companyAddBtn);
    await btn.waitFor({ state: 'visible', timeout: 10000 });
    await btn.click();
  }

  async assertAddNewCompanyPopupVisible() {
    await this.page
      .locator(AddIndividualCustomerLocators.addNewCompanyPopup)
      .waitFor({ state: 'visible', timeout: 10000 });
  }

  async assertVIPCompanyButtonOff() {
    const vipBtn = this.page.locator(AddIndividualCustomerLocators.vipCompanySwitch);
    await vipBtn.waitFor({ state: 'visible', timeout: 10000 });
    await expect(vipBtn).toHaveClass(/k-switch-off/);
  }

  async clickCancelAddNewCompany() {
    const cancelBtn = this.page.locator(AddIndividualCustomerLocators.cancelCompanyBtn);
    await cancelBtn.waitFor({ state: 'visible', timeout: 10000 });
    await cancelBtn.click();
    await this.page
      .locator(AddIndividualCustomerLocators.addNewCompanyPopup)
      .waitFor({ state: 'hidden', timeout: 10000 });
  }

  async clickIndividualByName(name) {
    const cell = this.page
      .locator(AddIndividualCustomerLocators.individualGrid, { hasText: name })
      .first();
    await cell.locator('a').click();
    await this.page.waitForLoadState('networkidle');
  }

  // ==================== Assertion Methods ====================
  async assertFirstName(expected) {
    await expect(this.page.locator(AddIndividualCustomerLocators.firstNameInput)).toHaveValue(
      expected,
    );
  }

  async assertLastName(expected) {
    await expect(this.page.locator(AddIndividualCustomerLocators.lastNameInput)).toHaveValue(
      expected,
    );
  }

  async assertPhone(expected) {
    await expect(this.page.locator(AddIndividualCustomerLocators.phoneInput)).toHaveValue(expected);
  }

  async assertContactType(expected) {
    await expect(this.page.locator(AddIndividualCustomerLocators.contactTypeDropdown)).toHaveValue(
      expected,
    );
  }

  async assertCity(expected) {
    await expect(this.page.locator(AddIndividualCustomerLocators.city)).toHaveValue(expected);
  }

  async assertSavedUrl() {
    await expect(this.page).toHaveURL(/ContactManager\.aspx\?Active=Individual\d+/);
  }

  async clickVipButton() {
    const vipIndividualSwitch = this.page.locator(
      'button[name="ctl00$ContentPlaceHolder1$RadSwitch_VIPIndividualCustomer"]',
    );
    await vipIndividualSwitch.click();
  }

  async enableVIPfilter() {
    await this.page.waitForLoadState('networkidle');
    const vipFilterSwitch = this.page.locator(
      'button[name="ctl00$ContentPlaceHolder1$RadSwitch_VIP"]',
    );
    await vipFilterSwitch.waitFor({ state: 'visible', timeout: 30000 });
    await vipFilterSwitch.click();
    await this.page.waitForLoadState('networkidle');
  }

  async filterByFirstName(firstName) {
    const firstNameFilterInput = this.page.locator(
      'input[data-role="autocomplete"][aria-label="Name"]',
    );
    await firstNameFilterInput.waitFor({ state: 'visible', timeout: 30000 });
    await firstNameFilterInput.fill(firstName);
    await firstNameFilterInput.press('Enter');
    await this.page.waitForLoadState('networkidle');
  }

  async assertIndividualRowCount(expectedCount) {
    const individualCells = this.page.locator(AddIndividualCustomerLocators.individualCells);
    if (expectedCount === 0) {
      await this.page.waitForLoadState('networkidle');
      await expect(individualCells).toHaveCount(0);
    } else {
      await individualCells.first().waitFor({ state: 'visible', timeout: 15000 });
      await expect(individualCells).toHaveCount(expectedCount);
    }
  }

  async disableVIPfilter() {
    await this.page.waitForLoadState('networkidle');
    const vipFilterSwitch = this.page.locator(
      'button[name="ctl00$ContentPlaceHolder1$RadSwitch_VIP"]',
    );
    await vipFilterSwitch.waitFor({ state: 'visible', timeout: 30000 });
    await vipFilterSwitch.click();
    await this.page.waitForLoadState('networkidle');
  }
}

export default AddIndividualCustomerPage;
