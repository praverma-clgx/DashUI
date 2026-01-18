import { expect } from '@playwright/test';

// Expected values for altitude page
const altitudeExpectedValues = {
  altitude: 'Altitude',
};

const AltitudeLocators = {
  // Menu
  dashboardsMenu: "span:has-text('Dashboards')",

  // Page Header
  altitudeHeading: '#ctl00_ContentPlaceHolder1_AltitudeHeaderControl_Label_Heading',

  // Filter Labels
  employeeAllItemsSelected:
    '#ctl00_ContentPlaceHolder1_AltitudeHeaderControl_SelectedEmployeesDiv span.blueColor',
  employeeSetButton: '#ctl00_ContentPlaceHolder1_AltitudeHeaderControl_SelectEmployeesButton',

  // Modal
  selectEmployeesTitle:
    '#RadWindowWrapper_ctl00_ContentPlaceHolder1_AltitudeHeaderControl_SelectEmployeeRadWindow em',
  modalCloseButton:
    '#RadWindowWrapper_ctl00_ContentPlaceHolder1_AltitudeHeaderControl_SelectEmployeeRadWindow a.rwCloseButton',
  modalWrapper:
    '#RadWindowWrapper_ctl00_ContentPlaceHolder1_AltitudeHeaderControl_SelectEmployeeRadWindow',

  // Time Frame
  timeFrameDropdown: '#ctl00_ContentPlaceHolder1_AltitudeChartControl_TimeFrameRadComboBox_Input',
  dropdownOptions:
    '#ctl00_ContentPlaceHolder1_AltitudeChartControl_TimeFrameRadComboBox_DropDown .rcbList li',

  // Job Status Tabs
  jobStatusTabsDiv: '#ctl00_ContentPlaceHolder1_JobStatusTabsDiv span.black_text_l8',
};

class AltitudePage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to Altitude from Dashboards menu
   */
  async navigateToAltitude() {
    await this.page.locator(AltitudeLocators.dashboardsMenu).first().hover();

    const altitudeOption = this.page.getByText('Altitude', {
      exact: true,
    });

    await altitudeOption.waitFor({ state: 'visible', timeout: 5000 });
    await altitudeOption.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Assert Altitude heading is visible and has correct text
   */
  async assertAltitudeHeading() {
    const altitudeHeading = this.page.locator(AltitudeLocators.altitudeHeading);
    await expect(altitudeHeading).toBeVisible();
    await expect(altitudeHeading).toHaveText('Altitude');
  }

  /**
   * Assert filter labels are visible
   */
  async assertFilterLabelsVisible() {
    const employeeLabel = this.page.locator('td b', { hasText: 'Employee' });
    await expect(employeeLabel).toBeVisible();

    const employeeAllItemsSelected = this.page.locator(AltitudeLocators.employeeAllItemsSelected);
    await expect(employeeAllItemsSelected).toBeVisible();

    const divisionLabel = this.page.locator('td b', { hasText: 'Division' });
    await expect(divisionLabel).toBeVisible();

    const officeLabel = this.page.locator('td b', { hasText: 'Office:' });
    await expect(officeLabel).toBeVisible();
  }

  /**
   * Assert all job status labels are visible
   */
  async assertAllJobStatusLabelsVisible() {
    const statusLabels = [
      'Open Jobs',
      'Pending Sales',
      'Pre Production',
      'Work In Progress',
      'Completed - No Paper work',
      'Invoice Pending',
      'Accounts Receivable',
      'Waiting to Close',
      'Gross Profit',
      'Jobs Lacking Interaction',
    ];

    for (const labelText of statusLabels) {
      const label = this.page
        .locator(AltitudeLocators.jobStatusTabsDiv)
        .filter({ hasText: labelText });
      await expect(label).toBeVisible();
    }
  }

  /**
   * Open and close employee selection modal
   */
  async openAndCloseEmployeeModal() {
    const employeeSetButton = this.page.locator(AltitudeLocators.employeeSetButton);
    await expect(employeeSetButton).toBeVisible();

    await Promise.all([this.page.waitForLoadState('networkidle'), employeeSetButton.click()]);

    const selectEmployeesTitle = this.page.locator(AltitudeLocators.selectEmployeesTitle, {
      hasText: 'Select Employees',
    });
    await expect(selectEmployeesTitle).toBeVisible();

    const closeButton = this.page.locator(AltitudeLocators.modalCloseButton);
    await expect(closeButton).toBeVisible();
    await closeButton.click();

    await this.page.waitForTimeout(3000);

    const modalWrapper = this.page.locator(AltitudeLocators.modalWrapper);
    await expect(modalWrapper).toBeHidden();
  }

  /**
   * Assert time frame dropdown and verify all options
   */
  async assertTimeFrameDropdownAndOptions() {
    const timeFrameLabel = this.page.locator('td.no-blue-strip-bttm b', {
      hasText: 'Time Frame:',
    });
    await expect(timeFrameLabel).toBeVisible();

    const timeFrameDropdown = this.page.locator(AltitudeLocators.timeFrameDropdown);
    await expect(timeFrameDropdown).toBeVisible();
    await timeFrameDropdown.click();

    const dropdownOptions = this.page.locator(AltitudeLocators.dropdownOptions);

    const expectedOptions = [
      'Today',
      'Yesterday',
      'This Week',
      'Prior Week',
      'This Month',
      'Prior Month',
      'This Year',
      'Specify Date Range',
      'First Quarter',
      'Second Quarter',
      'Third Quarter',
      'Fourth Quarter',
      'Prior Year',
      'Prior 12 Month',
    ];

    for (const optionText of expectedOptions) {
      const option = dropdownOptions.filter({ hasText: optionText });
      await expect(option).toBeVisible();
    }
  }

  // Get expected altitude heading text
  getExpectedAltitudeText() {
    return altitudeExpectedValues.altitude;
  }
}

export default AltitudePage;
export { altitudeExpectedValues };
