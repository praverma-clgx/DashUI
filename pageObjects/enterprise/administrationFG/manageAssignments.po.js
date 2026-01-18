/**
 * @typedef {Object} ManageAssignmentsLocatorsType
 * @property {string} administrationMenu
 * @property {string} menuContainer
 * @property {string} manageAssignmentsMenuOption
 * @property {string} manageAssignmentsHeader
 * @property {string} refreshButton
 * @property {string} linkedJobGridHeader
 * @property {string} transactionIDGridHeader
 * @property {string} jobNumberGridHeader
 * @property {string} assignmentOriginGridHeader
 * @property {string} systemReceivedGridHeader
 * @property {string} jobDateGridHeader
 * @property {string} clientGridHeader
 * @property {string} customerNameGridHeader
 * @property {string} lossAddressGridHeader
 */

/** @type {ManageAssignmentsLocatorsType} */
const ManageAssignmentsLocators = {
  administrationMenu: "span:has-text('Administration')",
  menuContainer: 'div.rmSlide[style*="display: block"]',
  manageAssignmentsMenuOption: 'ul.rmVertical.rmGroup.rmLevel1 li.rmItem a.rmLink span.rmText',
  manageAssignmentsHeader: 'td.Heading_blue_new',
  refreshButton:
    '#ctl00_ContentPlaceHolder1_ManageXactwareAssignmentGridView_ctl00_ctl02_ctl00_RebindGridButton',
  linkedJobGridHeader:
    '#ctl00_ContentPlaceHolder1_ManageXactwareAssignmentGridView_ctl00_Header tr th a',
  transactionIDGridHeader:
    '#ctl00_ContentPlaceHolder1_ManageXactwareAssignmentGridView_ctl00_Header tr th a',
  jobNumberGridHeader:
    '#ctl00_ContentPlaceHolder1_ManageXactwareAssignmentGridView_ctl00_Header tr th a',
  assignmentOriginGridHeader:
    '#ctl00_ContentPlaceHolder1_ManageXactwareAssignmentGridView_ctl00_Header tr th a',
  systemReceivedGridHeader:
    '#ctl00_ContentPlaceHolder1_ManageXactwareAssignmentGridView_ctl00_Header tr th a',
  jobDateGridHeader:
    '#ctl00_ContentPlaceHolder1_ManageXactwareAssignmentGridView_ctl00_Header tr th a',
  clientGridHeader:
    '#ctl00_ContentPlaceHolder1_ManageXactwareAssignmentGridView_ctl00_Header tr th a',
  customerNameGridHeader:
    '#ctl00_ContentPlaceHolder1_ManageXactwareAssignmentGridView_ctl00_Header tr th a',
  lossAddressGridHeader:
    '#ctl00_ContentPlaceHolder1_ManageXactwareAssignmentGridView_ctl00_Header tr th a',
};

class ManageAssignmentsPage {
  constructor(page) {
    this.page = page;
  }

  // Navigate to Manage Assignments page through Administration menu
  async navigateToManageAssignments() {
    await this.page.locator(ManageAssignmentsLocators.administrationMenu).first().hover();
    await this.page
      .locator(ManageAssignmentsLocators.menuContainer)
      .waitFor({ state: 'visible', timeout: 5000 });
    await this.page
      .locator(ManageAssignmentsLocators.manageAssignmentsMenuOption, {
        hasText: /^Manage Assignments$/,
      })
      .first()
      .waitFor({ state: 'visible', timeout: 10000 });
    await this.page
      .locator(ManageAssignmentsLocators.manageAssignmentsMenuOption, {
        hasText: /^Manage Assignments$/,
      })
      .first()
      .click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Manage Assignments header is visible on the page
  async verifyManageAssignmentsHeader() {
    const header = this.page.locator(ManageAssignmentsLocators.manageAssignmentsHeader, {
      hasText: /Manage Assignments/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Refresh button is visible
  async verifyRefreshButton() {
    const button = this.page.locator(ManageAssignmentsLocators.refreshButton);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Linked Job grid header is visible
  async verifyLinkedJobGridHeader() {
    const header = this.page.locator(ManageAssignmentsLocators.linkedJobGridHeader, {
      hasText: /^# Linked Job$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Transaction ID grid header is visible
  async verifyTransactionIDGridHeader() {
    const header = this.page.locator(ManageAssignmentsLocators.transactionIDGridHeader, {
      hasText: /^Transaction ID$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Job Number grid header is visible
  async verifyJobNumberGridHeader() {
    const header = this.page.locator(ManageAssignmentsLocators.jobNumberGridHeader, {
      hasText: /^Job Number$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Assignment Origin grid header is visible
  async verifyAssignmentOriginGridHeader() {
    const header = this.page.locator(ManageAssignmentsLocators.assignmentOriginGridHeader, {
      hasText: /^Assignment Origin$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify System Received grid header is visible
  async verifySystemReceivedGridHeader() {
    const header = this.page.locator(ManageAssignmentsLocators.systemReceivedGridHeader, {
      hasText: /^System Received$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Job Date Received grid header is visible
  async verifyJobDateGridHeader() {
    const header = this.page.locator(ManageAssignmentsLocators.jobDateGridHeader, {
      hasText: /^Job Date Received$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Client grid header is visible
  async verifyClientGridHeader() {
    const header = this.page.locator(ManageAssignmentsLocators.clientGridHeader, {
      hasText: /^Client$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Customer Name grid header is visible
  async verifyCustomerNameGridHeader() {
    const header = this.page.locator(ManageAssignmentsLocators.customerNameGridHeader, {
      hasText: /^Customer Name$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Loss Address grid header is visible
  async verifyLossAddressGridHeader() {
    const header = this.page.locator(ManageAssignmentsLocators.lossAddressGridHeader, {
      hasText: /^Loss Address$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }
}

export { ManageAssignmentsPage, ManageAssignmentsLocators };
