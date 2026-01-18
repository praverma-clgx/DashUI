import { test, expect } from '../../../fixtures/enterpriseFixtures.js';
import AltitudePage from '../../../pageObjects/enterprise/dashboardPD/altitude.po.js';

test('Altitude Page', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const altitudePage = new AltitudePage(page);

  // Navigate to Dashboard Menu Option
  await page.locator("span:has-text('Dashboards')").first().hover();

  // Click on the Altitude dropdown option after hover
  const altitudeOption = page.getByText('Altitude', {
    exact: true,
  });

  await altitudeOption.waitFor({ state: 'visible', timeout: 5000 });
  await altitudeOption.click();
  await page.waitForLoadState('networkidle');

  // Altitude Heading Text locator
  const altitudeHeading = page.locator(
    '#ctl00_ContentPlaceHolder1_AltitudeHeaderControl_Label_Heading'
  );

  // Assert that Altitude Heading is visible and has correct text
  await expect(altitudeHeading).toBeVisible();
  await expect(altitudeHeading).toHaveText(altitudePage.getExpectedAltitudeText());

  // Employee: Text label locator
  const employeeLabel = page.locator('td b', { hasText: 'Employee' });

  // Verify Employee label is visible
  await expect(employeeLabel).toBeVisible();

  // Employee: All Items Selected locator
  const employeeAllItemsSelected = page.locator(
    '#ctl00_ContentPlaceHolder1_AltitudeHeaderControl_SelectedEmployeesDiv span.blueColor'
  );

  // Verify Employee All Items Selected is visible
  await expect(employeeAllItemsSelected).toBeVisible();

  // Division: Text label locator
  const divisionLabel = page.locator('td b', { hasText: 'Division' });

  // Verify Division label is visible
  await expect(divisionLabel).toBeVisible();

  // Office: Text label locator
  const officeLabel = page.locator('td b', { hasText: 'Office:' });

  // Verify Office label is visible
  await expect(officeLabel).toBeVisible();

  // Open Jobs Label locator
  const openJobsLabel = page.locator(
    '#ctl00_ContentPlaceHolder1_JobStatusTabsDiv span.black_text_l8',
    { hasText: 'Open Jobs' }
  );

  // Verify Open Jobs label is visible
  await expect(openJobsLabel).toBeVisible();

  // Pending Sales Label locator
  const pendingSalesLabel = page.locator(
    '#ctl00_ContentPlaceHolder1_JobStatusTabsDiv span.black_text_l8',
    { hasText: 'Pending Sales' }
  );

  // Verify Pending Sales label is visible
  await expect(pendingSalesLabel).toBeVisible();

  // Pre Production Label locator
  const preProductionLabel = page.locator(
    '#ctl00_ContentPlaceHolder1_JobStatusTabsDiv span.black_text_l8',
    { hasText: 'Pre Production' }
  );

  // Verify Pre Production label is visible
  await expect(preProductionLabel).toBeVisible();

  // Work In Progress Label locator
  const workInProgressLabel = page.locator(
    '#ctl00_ContentPlaceHolder1_JobStatusTabsDiv span.black_text_l8',
    { hasText: 'Work In Progress' }
  );

  // Verify Work In Progress label is visible
  await expect(workInProgressLabel).toBeVisible();

  // Completed - No Paper work Label locator
  const completedNoPaperwork = page
    .locator('#ctl00_ContentPlaceHolder1_JobStatusTabsDiv span.black_text_l8')
    .filter({ hasText: 'Completed - No Paper work' });

  // Verify Completed - No Paper work label is visible
  await expect(completedNoPaperwork).toBeVisible();

  // Invoice Pending Label locator
  const invoicePendingLabel = page.locator(
    '#ctl00_ContentPlaceHolder1_JobStatusTabsDiv span.black_text_l8',
    { hasText: 'Invoice Pending' }
  );

  // Verify Invoice Pending label is visible
  await expect(invoicePendingLabel).toBeVisible();

  // Accounts Receivable Label locator
  const accountsReceivableLabel = page.locator(
    '#ctl00_ContentPlaceHolder1_JobStatusTabsDiv span.black_text_l8',
    { hasText: 'Accounts Receivable' }
  );

  // Verify Accounts Receivable label is visible
  await expect(accountsReceivableLabel).toBeVisible();

  // Waiting to Close Label locator
  const waitingToCloseLabel = page.locator(
    '#ctl00_ContentPlaceHolder1_JobStatusTabsDiv span.black_text_l8',
    { hasText: 'Waiting to Close' }
  );

  // Verify Waiting to Close label is visible
  await expect(waitingToCloseLabel).toBeVisible();

  // Gross Profit Label locator
  const grossProfitLabel = page.locator(
    '#ctl00_ContentPlaceHolder1_JobStatusTabsDiv span.black_text_l8',
    { hasText: 'Gross Profit' }
  );

  // Verify Gross Profit label is visible
  await expect(grossProfitLabel).toBeVisible();

  // Jobs Lacking Interaction Label locator
  const jobsLackingInteractionLabel = page.locator(
    '#ctl00_ContentPlaceHolder1_JobStatusTabsDiv span.black_text_l8',
    { hasText: 'Jobs Lacking Interaction' }
  );

  // Verify Jobs Lacking Interaction label is visible
  await expect(jobsLackingInteractionLabel).toBeVisible();

  // Employee: set button locator
  const employeeSetButton = page.locator(
    '#ctl00_ContentPlaceHolder1_AltitudeHeaderControl_SelectEmployeesButton'
  );

  // Verify Employee set button is visible
  await expect(employeeSetButton).toBeVisible();

  // Click on Employee set button and wait for page to reload
  await Promise.all([page.waitForLoadState('networkidle'), employeeSetButton.click()]);

  // Wait for the Select Employees modal to appear
  const selectEmployeesTitle = page.locator(
    '#RadWindowWrapper_ctl00_ContentPlaceHolder1_AltitudeHeaderControl_SelectEmployeeRadWindow em',
    { hasText: 'Select Employees' }
  );
  await expect(selectEmployeesTitle).toBeVisible();

  // Wait for the Close button to be visible
  const closeButton = page.locator(
    '#RadWindowWrapper_ctl00_ContentPlaceHolder1_AltitudeHeaderControl_SelectEmployeeRadWindow a.rwCloseButton'
  );
  await expect(closeButton).toBeVisible();

  // Click the Close button
  await closeButton.click();

  // Wait for modal to close
  await page.waitForLoadState('networkidle');

  const modalWrapper = page.locator(
    '#RadWindowWrapper_ctl00_ContentPlaceHolder1_AltitudeHeaderControl_SelectEmployeeRadWindow'
  );
  await expect(modalWrapper).toBeHidden();

  // Time Frame drop down label locator
  const timeFrameLabel = page.locator('td.no-blue-strip-bttm b', {
    hasText: 'Time Frame:',
  });

  // Verify Time Frame label is visible
  await expect(timeFrameLabel).toBeVisible();

  // Time frame drop down locator
  const timeFrameDropdown = page.locator(
    '#ctl00_ContentPlaceHolder1_AltitudeChartControl_TimeFrameRadComboBox_Input'
  );

  // Verify Time frame drop down is visible
  await expect(timeFrameDropdown).toBeVisible();

  // Click on Time frame drop down
  await timeFrameDropdown.click();

  // Locator for all dropdown options
  const dropdownOptions = page.locator(
    '#ctl00_ContentPlaceHolder1_AltitudeChartControl_TimeFrameRadComboBox_DropDown .rcbList li'
  );

  // Assert all expected options are present and visible
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
});
