import { expect } from '@playwright/test';

export const AddCompanyLocators = {
  contactManagerBtn: 'text="Contact Manager"',
  addNewCompanyBtn: '#ctl00_ContentPlaceHolder1_companyControl_buttonAddRecordCompany',
  companyTypeDropdown: '#ctl00_ContentPlaceHolder1_ddlCompanyType_Input',
  companyTypeList: '#ctl00_ContentPlaceHolder1_ddlCompanyType_DropDown .rcbList li',
  companyNameInput: '#ctl00_ContentPlaceHolder1_RadTxtCompanyName',
  companyMainPhone: '#ctl00_ContentPlaceHolder1_txtMainPhone',
  saveAndBackBtn: '#ctl00_ContentPlaceHolder1_btnSaveAndBack',
  companyNameFilter: 'input[data-role="autocomplete"][aria-label="Company Name"]',
  companyCells: 'tbody[role="rowgroup"] td[data-field="Company"]',
};

export default class AddCompanyPage {
  constructor(page) {
    this.page = page;
  }

  // Step 1: Click on Contact Manager
  async clickContactManager() {
    await this.page.getByText('Contact Manager', { exact: true }).click();
    await this.page.waitForLoadState('networkidle');
  }

  // Step 2: Click on Add New Company button
  async clickAddNewCompany() {
    await this.page.locator(AddCompanyLocators.addNewCompanyBtn).click();
    await this.page.waitForLoadState('networkidle');
  }

  // Step 3: Select Company Type "Lead Company"
  async selectCompanyType(companyType) {
    await this.page.locator(AddCompanyLocators.companyTypeDropdown).click();
    await this.page
      .locator(AddCompanyLocators.companyTypeList)
      .filter({ hasText: companyType })
      .click();
  }

  // Step 4: Fill Company Name
  async fillCompanyName(companyName) {
    await this.page.locator(AddCompanyLocators.companyNameInput).fill(companyName);
  }

  // Step 6: Assert Company Name is filled
  async assertCompanyNameFilled(companyName) {
    await expect(this.page.locator(AddCompanyLocators.companyNameInput)).toHaveValue(companyName);
  }

  // Step 6: Fill Company Main Phone
  async fillCompanyMainPhone(phone) {
    await this.page.locator(AddCompanyLocators.companyMainPhone).fill(phone);
  }

  // Step 7: Assert Company Main Phone is filled
  async assertCompanyMainPhoneFilled(phone) {
    await expect(this.page.locator(AddCompanyLocators.companyMainPhone)).toHaveValue(phone);
  }

  // Step 8: Click Save and Back to Contact Manager
  async clickSaveAndBack() {
    await this.page.locator(AddCompanyLocators.saveAndBackBtn).click();
    await this.page.waitForLoadState('networkidle');
  }

  // Step 9: Filter by Company Name
  async filterByCompanyName(companyName) {
    const filter = this.page.locator(AddCompanyLocators.companyNameFilter).first();
    await filter.fill(companyName);
    await filter.press('Enter');
    await this.page.waitForLoadState('networkidle');
  }

  // Step 10: Assert filtered company row count
  async assertCompanyRowCount(expectedCount) {
    const companyCells = this.page.locator(AddCompanyLocators.companyCells);
    await companyCells.first().waitFor({ state: 'visible', timeout: 5000 });
    await expect(companyCells).toHaveCount(expectedCount);
  }

  // Helper: Get company row count for logging
  async getCompanyRowCount() {
    const companyCells = this.page.locator(AddCompanyLocators.companyCells);
    return await companyCells.count();
  }
}
