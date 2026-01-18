/**
 * @typedef {Object} ShowAdminJobLocatorsType
 * @property {string} administrationMenu
 * @property {string} menuContainer
 * @property {string} massAssignmentForJobsMenuOption
 * @property {string} massAssignmentHeader
 * @property {string} showAdminJobsGridText
 * @property {string} closeSelectedJobButton
 * @property {string} toggleButton
 * @property {string} toggleText
 * @property {string} jobNumberFirstRow
 * @property {string} adminClaimInfoSection
 */

import { expect } from '@playwright/test';

/** @type {ShowAdminJobLocatorsType} */
const ShowAdminJobLocators = {
  administrationMenu: "span:has-text('Administration')",
  menuContainer: 'div.rmSlide[style*="display: block"]',
  massAssignmentForJobsMenuOption: 'ul.rmVertical.rmGroup.rmLevel1 li.rmItem a.rmLink span.rmText',
  massAssignmentHeader: '#ctl00_ContentPlaceHolder1_lbLossCategoryHeader',
  showAdminJobsGridText: '#ctl00_ContentPlaceHolder1_grdHome_ctl00_ctl02_ctl00_Label_ShowAdminJobs',
  closeSelectedJobButton: '#ctl00_ContentPlaceHolder1_CloseJob',
  toggleButton: '#ctl00_ContentPlaceHolder1_grdHome_ctl00_ctl02_ctl00_ButtonToggleOnOff',
  toggleText: '.rbText.rbPrimary',
  jobNumberFirstRow: '#ctl00_ContentPlaceHolder1_grdHome_ctl00__0 td a',
  adminClaimInfoSection: '#ctl00_ContentPlaceHolder1_dockAdminClaimInformation_T',
};

class ShowAdminJobPage {
  constructor(page) {
    this.page = page;
  }

  // Navigate to Mass Assignment for Jobs page through Administration menu
  async navigateToMassAssignmentForJobs() {
    await this.page.locator(ShowAdminJobLocators.administrationMenu).first().hover();
    await this.page
      .locator(ShowAdminJobLocators.menuContainer)
      .waitFor({ state: 'visible', timeout: 5000 });
    await this.page
      .locator(ShowAdminJobLocators.massAssignmentForJobsMenuOption, {
        hasText: /^Mass Assignment for Jobs$/,
      })
      .first()
      .waitFor({ state: 'visible', timeout: 10000 });
    await this.page
      .locator(ShowAdminJobLocators.massAssignmentForJobsMenuOption, {
        hasText: /^Mass Assignment for Jobs$/,
      })
      .first()
      .click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Mass Assignment for Jobs header is visible on the page
  async verifyMassAssignmentHeader() {
    const header = this.page.locator(ShowAdminJobLocators.massAssignmentHeader);
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Show Admin Jobs Grid text is visible
  async verifyShowAdminJobsGridText() {
    const text = this.page.locator(ShowAdminJobLocators.showAdminJobsGridText);
    await text.waitFor({ state: 'visible' });
    return text;
  }

  // Verify Close Selected Job button is visible
  async verifyCloseSelectedJobButton() {
    const button = this.page.locator(ShowAdminJobLocators.closeSelectedJobButton);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Get toggle button element
  async getToggleButton() {
    return this.page.locator(ShowAdminJobLocators.toggleButton);
  }

  // Get toggle text element inside the button
  async getToggleText() {
    const toggleButton = await this.getToggleButton();
    return toggleButton.locator(ShowAdminJobLocators.toggleText);
  }

  // Click toggle button to switch state
  async clickToggleButton() {
    const toggleButton = await this.getToggleButton();
    await toggleButton.click();
  }

  // Get job number first row element
  async getJobNumberFirstRow() {
    return this.page.locator(ShowAdminJobLocators.jobNumberFirstRow);
  }

  // Click on first row of job number column
  async clickJobNumberFirstRow() {
    const jobNumberRow = await this.getJobNumberFirstRow();
    await jobNumberRow.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Get text content from job number first row
  async getJobNumberText() {
    const jobNumberRow = await this.getJobNumberFirstRow();
    return await jobNumberRow.textContent();
  }

  // Return Locator for Admin Claim Info Section
  async verifyAdminClaimInfoSection() {
    // Use a more robust locator, e.g., by text or role, instead of brittle ID
    return this.page.locator('text=Claim Information').first(); // Or adjust based on actual DOM inspection
    // If collapsible, add: await this.page.locator('text=Claim Information').click(); before returning
  }
}

export { ShowAdminJobPage, ShowAdminJobLocators };
