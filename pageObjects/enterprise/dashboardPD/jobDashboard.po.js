import { expect } from '@playwright/test';

const JobDashboardLocators = {
  // Menu
  dashboardsMenu: "span:has-text('Dashboards')",

  // Page Elements
  pageHeading: '#ctl00_ContentPlaceHolder1_Label1',

  // Dashboard Tiles
  dashboardTile: 'td.dashboard_Tile td',

  // Individual Page Headings
  openJobsHeading: '#ctl00_ContentPlaceHolder1_Label4',
  pendingSalesHeading: '#ctl00_ContentPlaceHolder1_Label_Pending_Sales',
  preProductionHeading: '#ctl00_ContentPlaceHolder1_Label_Pending_Sales',
  workInProgressHeading: '#ctl00_ContentPlaceHolder1_label_Work_In_Progress',
  completedWithoutPaperworkHeading: '.Heading_blue_new',
  invoicePendingHeading: '#ctl00_ContentPlaceHolder1_lbOpenJobs',
  accountsReceivableHeading: '#ctl00_ContentPlaceHolder1_lbOpenJobs',
  waitingForFinalClosureHeading: '#ctl00_ContentPlaceHolder1_lbOpenJobs',
  jobsLackingInteractionHeading: '#ctl00_ContentPlaceHolder1_lbOpenJobs',

  // Filters
  filterLabels: '#ctl00_ContentPlaceHolder1_empdropdown strong',
};

class JobDashboardPage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to Job Dashboard from Dashboards menu
   */
  async navigateToJobDashboard() {
    await this.page.locator(JobDashboardLocators.dashboardsMenu).first().hover();

    const jobDashboardOption = this.page.getByText('Job Dashboard', {
      exact: true,
    });

    await jobDashboardOption.waitFor({ state: 'visible', timeout: 5000 });
    await jobDashboardOption.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Assert page heading is visible and has correct text
   */
  async assertPageHeading() {
    const heading = this.page.locator(JobDashboardLocators.pageHeading);
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Job Dashboard');
  }

  /**
   * Click on a dashboard tile and verify navigation
   * @param {string} tileName - Name of the tile to click
   * @param {string} expectedHeading - Expected heading text on the new page
   * @param {string} headingLocator - Locator for the heading element
   */
  async clickTileAndVerify(tileName, expectedHeading, headingLocator) {
    const tile = this.page.locator(JobDashboardLocators.dashboardTile, {
      hasText: new RegExp(`^${tileName}:$`),
    });
    await expect(tile).toBeVisible();
    await tile.click();
    await this.page.waitForLoadState('networkidle');

    const heading = this.page.locator(headingLocator);
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText(expectedHeading);
  }

  /**
   * Click Open Jobs tile and verify
   */
  async clickOpenJobsTile() {
    await this.clickTileAndVerify('Open Jobs', 'Open Jobs:', JobDashboardLocators.openJobsHeading);
    await this.page.goBack();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Click Pending Sales tile and verify
   */
  async clickPendingSalesTile() {
    await this.clickTileAndVerify(
      'Pending Sales',
      'Pending Sales',
      JobDashboardLocators.pendingSalesHeading,
    );
    await this.page.goBack();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Click Pre Production tile and verify
   */
  async clickPreProductionTile() {
    await this.clickTileAndVerify(
      'Pre Production',
      'Pre Production',
      JobDashboardLocators.preProductionHeading,
    );
    await this.page.goBack();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Click Work in Progress tile and verify
   */
  async clickWorkInProgressTile() {
    await this.clickTileAndVerify(
      'Work in Progress',
      'Work in Progress',
      JobDashboardLocators.workInProgressHeading,
    );
    await this.page.goBack();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Click Completed Without Paperwork tile and verify
   */
  async clickCompletedWithoutPaperworkTile() {
    const tile = this.page.locator(JobDashboardLocators.dashboardTile, {
      hasText: /^Completed Without Paperwork:$/,
    });
    await expect(tile).toBeVisible();
    await tile.click();

    const heading = this.page.locator(JobDashboardLocators.completedWithoutPaperworkHeading);
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText(/Completed Without Paperwork Jobs/);

    await this.page.goBack();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Click Invoice Pending tile and verify
   */
  async clickInvoicePendingTile() {
    await this.clickTileAndVerify(
      'Invoice Pending',
      'Invoice Pending',
      JobDashboardLocators.invoicePendingHeading,
    );
    await this.page.goBack();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Click Accounts Receivable tile and verify
   */
  async clickAccountsReceivableTile() {
    await this.clickTileAndVerify(
      'Accounts Receivable',
      'Accounts Receivable',
      JobDashboardLocators.accountsReceivableHeading,
    );
    await this.page.goBack();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Click Waiting for Final Closure tile and verify
   */
  async clickWaitingForFinalClosureTile() {
    await this.clickTileAndVerify(
      'Waiting for Final Closure',
      'Waiting for Final Closure',
      JobDashboardLocators.waitingForFinalClosureHeading,
    );
    await this.page.goBack();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Assert Gross Profit tile is visible (non-clickable)
   */
  async assertGrossProfitTileVisible() {
    const grossProfitTile = this.page.locator(JobDashboardLocators.dashboardTile, {
      hasText: /^Gross Profit:$/,
    });
    await expect(grossProfitTile).toBeVisible();
  }

  /**
   * Click Jobs Lacking Interaction tile and verify
   */
  async clickJobsLackingInteractionTile() {
    await this.clickTileAndVerify(
      'Jobs Lacking Interaction',
      'Open Jobs Lacking Interaction',
      JobDashboardLocators.jobsLackingInteractionHeading,
    );
    await this.page.goBack();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Assert all filter labels are visible
   */
  async assertFilterLabelsVisible() {
    const filterLabels = ['Select Employee', 'Select Division', 'Select Office'];

    for (const label of filterLabels) {
      const filterLocator = this.page.locator(JobDashboardLocators.filterLabels, {
        hasText: label,
      });
      await expect(filterLocator).toBeVisible();
    }
  }
}

export default JobDashboardPage;
