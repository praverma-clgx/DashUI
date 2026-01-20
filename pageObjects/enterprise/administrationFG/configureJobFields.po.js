/**
 * @typedef {Object} ConfigureJobFieldsLocatorsType
 * @property {string} administrationMenu
 * @property {string} configureJobFieldsSubTab
 * @property {string} heading
 * @property {string} customParticipantsHeading
 * @property {string} customParticipantsSubHeading
 * @property {string} customDatesSubHeading
 * @property {string} addCustomParticipantButton
 * @property {string} addCustomParticipantText
 * @property {string} inactiveHeader
 * @property {string} activeHeader
 * @property {string} gridHeader
 * @property {string} displayNameInput
 * @property {string} displayNameFilterButton
 * @property {string} filterDropdown
 * @property {string} containsOption
 * @property {string} gridDataCells
 * @property {string} menuContainer
 */

/** @type {ConfigureJobFieldsLocatorsType} */
const ConfigureJobFieldsLocators = {
  administrationMenu: "a:has-text('Administration')",
  configureJobFieldsSubTab: "a:has-text('Configure Job Fields')",
  heading: '.blue-strip-bttm .Heading_blue_new span',
  customParticipantsHeading: '.blue-strip-bttm .Heading_blue_new',
  customParticipantsSubHeading: '#ctl00_ContentPlaceHolder1_CustomParticipantLinkButton',
  customDatesSubHeading: '#ctl00_ContentPlaceHolder1_CustomDatestLinkButton',
  addCustomParticipantButton:
    '#ctl00_ContentPlaceHolder1_ctl01_UnPublishedCustomParticipantsRadGrid_ctl00_ctl02_ctl00_AddCustomParticipantFieldButton',
  addCustomParticipantText: 'a.rgadd',
  inactiveHeader: '#ctl00_ContentPlaceHolder1_ctl01_RadTabStrip_Programs .rtsTxt',
  activeHeader: '#ctl00_ContentPlaceHolder1_ctl01_RadTabStrip_Programs .rtsTxt',
  gridHeader: '#ctl00_ContentPlaceHolder1_ctl01_PublishedCustomParticipantsRadGrid_ctl00_Header a',
  displayNameInput:
    '#ctl00_ContentPlaceHolder1_ctl01_PublishedCustomParticipantsRadGrid_ctl00_ctl02_ctl03_FilterTextBox_DisplayName',
  displayNameFilterButton:
    '#ctl00_ContentPlaceHolder1_ctl01_PublishedCustomParticipantsRadGrid_ctl00_ctl02_ctl03_Filter_DisplayName',
  filterDropdown:
    '#ctl00_ContentPlaceHolder1_ctl01_PublishedCustomParticipantsRadGrid_rfltMenu_detached',
  containsOption: '.rmText',
  gridDataCells: '#ctl00_ContentPlaceHolder1_ctl01_PublishedCustomParticipantsRadGrid_GridData td',
  menuContainer: 'div.rmSlide[style*="display: block"]',
};

class ConfigureJobFieldsPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToConfigureJobFields() {
    await this.page.locator(ConfigureJobFieldsLocators.administrationMenu).first().hover();
    const menuContainer = this.page.locator(ConfigureJobFieldsLocators.menuContainer);
    await menuContainer.waitFor({ state: 'visible', timeout: 5000 });
    await this.page
      .locator(ConfigureJobFieldsLocators.configureJobFieldsSubTab, {
        hasText: /^Configure Job Fields$/,
      })
      .first()
      .waitFor({ state: 'visible', timeout: 10000 });
    await this.page
      .locator(ConfigureJobFieldsLocators.configureJobFieldsSubTab, {
        hasText: /^Configure Job Fields$/,
      })
      .first()
      .click();
    await this.page.waitForLoadState('networkidle');
  }

  async verifyHeadingVisible() {
    const heading = this.page.locator(ConfigureJobFieldsLocators.heading);
    await heading.waitFor({ state: 'visible' });
    return heading;
  }

  async verifyCustomParticipantsHeadingVisible() {
    const heading = this.page.locator(ConfigureJobFieldsLocators.customParticipantsHeading, {
      hasText: 'Custom Participants',
    });
    await heading.waitFor({ state: 'visible' });
    return heading;
  }

  async verifyCustomParticipantsSubHeadingVisible() {
    const subHeading = this.page.locator(ConfigureJobFieldsLocators.customParticipantsSubHeading);
    await subHeading.waitFor({ state: 'visible' });
    return subHeading;
  }

  async verifyCustomDatesSubHeadingVisible() {
    const subHeading = this.page.locator(ConfigureJobFieldsLocators.customDatesSubHeading);
    await subHeading.waitFor({ state: 'visible' });
    return subHeading;
  }

  async verifyAddCustomParticipantButtonVisible() {
    const button = this.page.locator(ConfigureJobFieldsLocators.addCustomParticipantButton);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  async verifyAddCustomParticipantTextVisible() {
    const text = this.page.locator(ConfigureJobFieldsLocators.addCustomParticipantText, {
      hasText: 'Add Custom Participant Field',
    });
    await text.waitFor({ state: 'visible' });
    return text;
  }

  async verifyInactiveHeaderVisible() {
    const header = this.page
      .locator(ConfigureJobFieldsLocators.activeHeader)
      .filter({ hasText: 'Inactive' })
      .first();
    await header.waitFor({ state: 'visible' });
    return header;
  }

  async verifyActiveHeaderVisibleAndClick() {
    const header = this.page
      .locator(ConfigureJobFieldsLocators.activeHeader)
      .filter({ hasText: 'Active' })
      .first();
    await header.waitFor({ state: 'visible' });
    await header.click();
    await this.page.waitForLoadState('networkidle');
    return header;
  }

  async verifyGridHeadersVisible(gridHeaders) {
    for (const headerText of gridHeaders) {
      const headerLocator = this.page.locator(ConfigureJobFieldsLocators.gridHeader, {
        hasText: headerText,
      });
      await headerLocator.waitFor({ state: 'visible' });
    }
  }

  async fillDisplayNameInput(value) {
    const input = this.page.locator(ConfigureJobFieldsLocators.displayNameInput);
    await input.waitFor({ state: 'visible' });
    await input.fill(value);
    return input;
  }

  async clickDisplayNameFilterButton() {
    const button = this.page.locator(ConfigureJobFieldsLocators.displayNameFilterButton);
    await button.waitFor({ state: 'visible' });
    await button.click();
    return button;
  }

  async selectContainsFromFilterDropdown() {
    const dropdown = this.page.locator(ConfigureJobFieldsLocators.filterDropdown);
    await dropdown.waitFor({ state: 'visible' });
    const containsOption = dropdown.locator(ConfigureJobFieldsLocators.containsOption, {
      hasText: 'Contains',
    });
    await containsOption.waitFor({ state: 'visible' });
    await containsOption.click();
    await this.page.waitForLoadState('networkidle');
    return containsOption;
  }

  async assertGridHasRows() {
    const gridDataCells = this.page.locator(ConfigureJobFieldsLocators.gridDataCells);
    const cellCount = await gridDataCells.count();
    if (cellCount <= 0) {
      throw new Error('No rows found in grid data');
    }
    return cellCount;
  }
}

export default ConfigureJobFieldsPage;
