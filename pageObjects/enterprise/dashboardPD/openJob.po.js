import { expect } from '@playwright/test';

const OpenJobLocators = {
  // Menu
  dashboardsMenu: "span:has-text('Dashboards')",

  // Page Elements
  globalJobSearch: '#ctl00_ContentPlaceHolder1_JobParentInformation_lblGlobalJobSearch',

  // Grid Column Headers
  jobNumberHeader: 'th[data-field="JobNumber"] a',
  jobNameHeader: 'th[data-field="JobName"] a',
};

class OpenJobPage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to Open Job from Dashboards menu
   */
  async navigateToOpenJob() {
    await this.page.locator(OpenJobLocators.dashboardsMenu).first().hover();

    const openJobOption = this.page.getByText('Open Job', {
      exact: true,
    });

    await openJobOption.waitFor({ state: 'visible', timeout: 5000 });
    await openJobOption.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Assert Global Job Search is visible and has correct text
   */
  async assertGlobalJobSearch() {
    const globalJobSearch = this.page.locator(OpenJobLocators.globalJobSearch);
    await expect(globalJobSearch).toBeVisible();
    await expect(globalJobSearch).toHaveText('Global Job Search');
  }

  /**
   * Assert Job Number column header is visible
   */
  async assertJobNumberHeaderVisible() {
    const jobNumberHeader = this.page.locator(OpenJobLocators.jobNumberHeader, {
      hasText: 'Job Number',
    });
    await expect(jobNumberHeader).toBeVisible();
  }

  /**
   * Assert Job Name column header is visible
   */
  async assertJobNameHeaderVisible() {
    const jobNameHeader = this.page.locator(OpenJobLocators.jobNameHeader, {
      hasText: 'Job Name',
    });
    await expect(jobNameHeader).toBeVisible();
  }

  /**
   * Assert all grid column headers are visible
   */
  async assertAllGridHeadersVisible() {
    await this.assertJobNumberHeaderVisible();
    await this.assertJobNameHeaderVisible();
  }
}

export default OpenJobPage;
