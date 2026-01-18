/**
 * @typedef {Object} JobSettingLocatorsType
 * @property {string} administrationMenu
 * @property {string} menuContainer
 * @property {string} jobSettingsMenuOption
 * @property {string} catastropheHeader
 * @property {string} customCodesHeader
 * @property {string} divisionHeader
 * @property {string} lienRightsHeader
 * @property {string} lossCategoryHeader
 * @property {string} reasonForClosingHeader
 * @property {string} reportedByHeader
 * @property {string} tagsHeader
 * @property {string} typeOfLossHeader
 * @property {string} workOrderMasterHeader
 */

/** @type {JobSettingLocatorsType} */
const JobSettingLocators = {
  administrationMenu: "span:has-text('Administration')",
  menuContainer: 'div.rmSlide[style*="display: block"]',
  jobSettingsMenuOption: 'ul.rmVertical.rmGroup.rmLevel1 li.rmItem a.rmLink span.rmText',
  catastropheHeader: '.sectionHeaderText',
  customCodesHeader: '.sectionHeaderText',
  divisionHeader: '.sectionHeaderText',
  lienRightsHeader: '.sectionHeaderText',
  lossCategoryHeader: '.sectionHeaderText',
  reasonForClosingHeader: '.sectionHeaderText',
  reportedByHeader: '.sectionHeaderText',
  tagsHeader: '.sectionHeaderText',
  typeOfLossHeader: '.sectionHeaderText',
  workOrderMasterHeader: '.sectionHeaderText',
};

class JobSettingPage {
  constructor(page) {
    this.page = page;
  }

  // Navigate to Job Settings page through Administration menu
  async navigateToJobSettings() {
    await this.page.locator(JobSettingLocators.administrationMenu).first().hover();
    await this.page
      .locator(JobSettingLocators.menuContainer)
      .waitFor({ state: 'visible', timeout: 5000 });
    await this.page
      .locator(JobSettingLocators.jobSettingsMenuOption, {
        hasText: /^Job Settings$/,
      })
      .first()
      .waitFor({ state: 'visible', timeout: 10000 });
    await this.page
      .locator(JobSettingLocators.jobSettingsMenuOption, {
        hasText: /^Job Settings$/,
      })
      .first()
      .click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Catastrophe section header is visible
  async verifyCatastropheHeaderVisible() {
    const catastropheHeader = this.page.locator(JobSettingLocators.catastropheHeader, {
      hasText: 'Catastrophe',
    });
    await catastropheHeader.waitFor({ state: 'visible' });
    return catastropheHeader;
  }

  // Verify Custom Codes section header is visible
  async verifyCustomCodesHeaderVisible() {
    const customCodesHeader = this.page.locator(JobSettingLocators.customCodesHeader, {
      hasText: 'Custom Codes',
    });
    await customCodesHeader.waitFor({ state: 'visible' });
    return customCodesHeader;
  }

  // Verify Division section header is visible
  async verifyDivisionHeaderVisible() {
    const divisionHeader = this.page.locator(JobSettingLocators.divisionHeader, {
      hasText: 'Division',
    });
    await divisionHeader.waitFor({ state: 'visible' });
    return divisionHeader;
  }

  // Verify Lien Rights section header is visible
  async verifyLienRightsHeaderVisible() {
    const lienRightsHeader = this.page.locator(JobSettingLocators.lienRightsHeader, {
      hasText: 'Lien Rights',
    });
    await lienRightsHeader.waitFor({ state: 'visible' });
    return lienRightsHeader;
  }

  // Verify Loss Category section header is visible
  async verifyLossCategoryHeaderVisible() {
    const lossCategoryHeader = this.page.locator(JobSettingLocators.lossCategoryHeader, {
      hasText: 'Loss Category',
    });
    await lossCategoryHeader.waitFor({ state: 'visible' });
    return lossCategoryHeader;
  }

  // Verify Reason for Closing section header is visible
  async verifyReasonForClosingHeaderVisible() {
    const reasonForClosingHeader = this.page.locator(JobSettingLocators.reasonForClosingHeader, {
      hasText: 'Reason for Closing',
    });
    await reasonForClosingHeader.waitFor({ state: 'visible' });
    return reasonForClosingHeader;
  }

  // Verify Reported By section header is visible
  async verifyReportedByHeaderVisible() {
    const reportedByHeader = this.page.locator(JobSettingLocators.reportedByHeader, {
      hasText: 'Reported By',
    });
    await reportedByHeader.waitFor({ state: 'visible' });
    return reportedByHeader;
  }

  // Verify Tags section header is visible
  async verifyTagsHeaderVisible() {
    const tagsHeader = this.page.locator(JobSettingLocators.tagsHeader, {
      hasText: 'Tags',
    });
    await tagsHeader.waitFor({ state: 'visible' });
    return tagsHeader;
  }

  // Verify Type of Loss section header is visible
  async verifyTypeOfLossHeaderVisible() {
    const typeOfLossHeader = this.page.locator(JobSettingLocators.typeOfLossHeader, {
      hasText: 'Type of Loss',
    });
    await typeOfLossHeader.waitFor({ state: 'visible' });
    return typeOfLossHeader;
  }

  // Verify Work Order Master section header is visible
  async verifyWorkOrderMasterHeaderVisible() {
    const workOrderMasterHeader = this.page.locator(JobSettingLocators.workOrderMasterHeader, {
      hasText: 'Work Order Master',
    });
    await workOrderMasterHeader.waitFor({ state: 'visible' });
    return workOrderMasterHeader;
  }
}

export default JobSettingPage;
