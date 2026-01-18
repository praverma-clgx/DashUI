import { expect } from '@playwright/test';

const DataQualityDashboardLocators = {
  // Menu
  dashboardsMenu: "span:has-text('Dashboards')",

  // Page Elements
  pageHeading: '#ctl00_ContentPlaceHolder1_DataQualityDashboardHeaderLabel',
  datePanel: '#ctl00_ContentPlaceHolder1_DatePanel',

  // Category Labels
  categoryText: 'td.body_dash_cat_text span',
};

class DataQualityDashboardPage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to Data Quality Dashboard from Dashboards menu
   */
  async navigateToDataQualityDashboard() {
    await this.page.locator(DataQualityDashboardLocators.dashboardsMenu).first().hover();

    const dataQualityDashboardOption = this.page.getByText('Data Quality Dashboard', {
      exact: true,
    });

    await dataQualityDashboardOption.waitFor({
      state: 'visible',
      timeout: 5000,
    });
    await dataQualityDashboardOption.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Assert page heading is visible and has correct text
   */
  async assertPageHeading() {
    const heading = this.page.locator(DataQualityDashboardLocators.pageHeading);
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Data Quality Dashboard');
  }

  /**
   * Assert date filter panel is visible
   */
  async assertDatePanelVisible() {
    const datePanel = this.page.locator(DataQualityDashboardLocators.datePanel);
    await expect(datePanel).toBeVisible();
  }

  /**
   * Assert all category labels are visible
   */
  async assertAllCategoryLabelsVisible() {
    const categoryLabels = ['Missing Participants', 'Missing Dates', 'Missing Money'];

    for (const labelText of categoryLabels) {
      const label = this.page.locator(DataQualityDashboardLocators.categoryText, {
        hasText: labelText,
      });
      await expect(label).toBeVisible();
    }
  }
}

export default DataQualityDashboardPage;
