import { expect } from '@playwright/test';

/**
 * @typedef {Object} ReportsLocatorsType
 * @property {string} reportsTab
 * @property {string} reportsSubTab
 * @property {string} createReportHeader
 * @property {string} newReportHeading
 * @property {string} legacyReportCreatorHeading
 */

/** @type {ReportsLocatorsType} */
const ReportsLocators = {
  reportsTab: "link[name='Reports']",
  reportsSubTab: "a:has-text('Reports')",
  createReportHeader: '#ctl00_ContentPlaceHolder1_lbTitle',
  newReportHeading: '#ctl00_ContentPlaceHolder1_label_NewReport',
  legacyReportCreatorHeading: '#ctl00_ContentPlaceHolder1_label_LagacyReport',
};

class ReportsPage {
  constructor(page) {
    this.page = page;
  }

  // Navigate to Reports page
  async navigateToReports() {
    const reportsTabLocator = this.page.getByRole('link', {
      name: 'Reports',
    });
    await reportsTabLocator.hover();

    const reportsLocator = this.page.getByRole('link', { name: 'Reports Toggle' });
    await reportsLocator.waitFor({ timeout: 5000 });
    await reportsLocator.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Create Report header
  async verifyCreateReportHeader() {
    const createReportHeaderLocator = this.page.locator(ReportsLocators.createReportHeader);
    await expect(createReportHeaderLocator).toBeVisible();
    await expect(createReportHeaderLocator).toHaveText('Create Report');
  }

  // Verify New Report heading
  async verifyNewReportHeading() {
    const newReportHeadingLocator = this.page.locator(ReportsLocators.newReportHeading);
    await expect(newReportHeadingLocator).toBeVisible();
    await expect(newReportHeadingLocator).toHaveText('New Report Creator');
  }

  // Verify Legacy Report Creator heading
  async verifyLegacyReportCreatorHeading() {
    const legacyReportCreatorHeadingLocator = this.page.locator(
      ReportsLocators.legacyReportCreatorHeading
    );
    await expect(legacyReportCreatorHeadingLocator).toBeVisible();
    await expect(legacyReportCreatorHeadingLocator).toHaveText('Legacy Report Creator');
  }
}

export { ReportsPage, ReportsLocators };
