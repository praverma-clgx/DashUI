/**
 * @typedef {Object} AdministrationLocatorsType
 * @property {string} administrationMenu
 * @property {string} individualContactDocSection
 * @property {string} contactTypeDropdown
 * @property {string} documentTypeDropdown
 * @property {string} folderSelectDropdown
 * @property {string} defaultCountryDropdown
 * @property {string} workOrderInput
 * @property {string} documentTypeDropDown
 * @property {string} invoiceNumberInput
 * @property {string} noOfDaysInput
 * @property {string} clientLackingInteractionInput
 * @property {string} fabricJobDueDateIntervalInput
 * @property {string} jobWarrantyInput
 */

/** @type {AdministrationLocatorsType} */
const AdministrationLocators = {
  administrationMenu: "span:has-text('Administration')",
  individualContactDocSection: '#ctl00_ContentPlaceHolder1_Label33',
  contactTypeDropdown: '#ctl00_ContentPlaceHolder1_ddlContactType_Input',
  documentTypeDropdown: '#ctl00_ContentPlaceHolder1_ddlDocumentType_Input',
  folderSelectDropdown: '#ctl00_ContentPlaceHolder1_ddlFolders_Input',
  defaultCountryDropdown: '#ctl00_ContentPlaceHolder1_ddlCountry_Input',
  workOrderInput: '#ctl00_ContentPlaceHolder1_txtWorkOrderNumber',
  documentTypeDropDown: '#ctl00_ContentPlaceHolder1_ddlDivisionDocumentType_Input',
  invoiceNumberInput: '#ctl00_ContentPlaceHolder1_txtInvoiceNumber',
  noOfDaysInput: '#ctl00_ContentPlaceHolder1_txtdays',
  clientLackingInteractionInput: '#ctl00_ContentPlaceHolder1_txtClientLackingInteraction',
  fabricJobDueDateIntervalInput: '#ctl00_ContentPlaceHolder1_FabricJobDueDateTextBox',
  jobWarrantyInput: '#ctl00_ContentPlaceHolder1_txtDefaultWarrantyDays',
};

class AdministrationPage {
  constructor(page) {
    this.page = page;
  }

  // Navigate to Administration page
  async navigateToAdministration() {
    await this.page.locator(AdministrationLocators.administrationMenu).first().click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Individual Contact Document Section is visible
  async verifyIndividualContactDocSection() {
    const section = this.page.locator(AdministrationLocators.individualContactDocSection);
    await section.waitFor({ state: 'visible' });
    return section;
  }

  // Verify Contact Type Dropdown is visible
  async verifyContactTypeDropdown() {
    const dropdown = this.page.locator(AdministrationLocators.contactTypeDropdown);
    await dropdown.waitFor({ state: 'visible' });
    return dropdown;
  }

  // Verify Document Type Dropdown is visible
  async verifyDocumentTypeDropdown() {
    const dropdown = this.page.locator(AdministrationLocators.documentTypeDropdown);
    await dropdown.waitFor({ state: 'visible' });
    return dropdown;
  }

  // Verify Folder Select Dropdown is visible
  async verifyFolderSelectDropdown() {
    const dropdown = this.page.locator(AdministrationLocators.folderSelectDropdown);
    await dropdown.waitFor({ state: 'visible' });
    return dropdown;
  }

  // Verify Default Country Dropdown is visible
  async verifyDefaultCountryDropdown() {
    const dropdown = this.page.locator(AdministrationLocators.defaultCountryDropdown);
    await dropdown.waitFor({ state: 'visible' });
    return dropdown;
  }

  // Verify Work Order Input is visible and not empty
  async verifyWorkOrderInput() {
    const input = this.page.locator(AdministrationLocators.workOrderInput);
    await input.waitFor({ state: 'visible' });
    return input;
  }

  // Verify Document Type Drop Down is visible
  async verifyDocumentTypeDropDown() {
    const dropdown = this.page.locator(AdministrationLocators.documentTypeDropDown);
    await dropdown.waitFor({ state: 'visible' });
    return dropdown;
  }

  // Verify Invoice Number Input is visible and not empty
  async verifyInvoiceNumberInput() {
    const input = this.page.locator(AdministrationLocators.invoiceNumberInput);
    await input.waitFor({ state: 'visible' });
    return input;
  }

  // Verify No. of days for a job to be lacking interactions input is visible
  async verifyNoOfDaysInput() {
    const input = this.page.locator(AdministrationLocators.noOfDaysInput);
    await input.waitFor({ state: 'visible' });
    return input;
  }

  // Verify Client Lacking Interaction input is visible
  async verifyClientLackingInteractionInput() {
    const input = this.page.locator(AdministrationLocators.clientLackingInteractionInput);
    await input.waitFor({ state: 'visible' });
    return input;
  }

  // Verify Fabric Job Due Date Interval input is visible
  async verifyFabricJobDueDateIntervalInput() {
    const input = this.page.locator(AdministrationLocators.fabricJobDueDateIntervalInput);
    await input.waitFor({ state: 'visible' });
    return input;
  }

  // Verify Job Warranty input is visible
  async verifyJobWarrantyInput() {
    const input = this.page.locator(AdministrationLocators.jobWarrantyInput);
    await input.waitFor({ state: 'visible' });
    return input;
  }
}

export default AdministrationPage;
