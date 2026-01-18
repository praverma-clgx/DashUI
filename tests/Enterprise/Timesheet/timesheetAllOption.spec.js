import { test } from '../../../fixtures/enterpriseFixtures.js';
import { TimesheetsAllOptionsPage } from '../../../pageObjects/enterprise/timesheets/timesheetsAllOptions.po.js';

test('Timesheets All Options Page validation', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const timesheetsPage = new TimesheetsAllOptionsPage(page);

  // Navigate to Timesheets and validate
  await timesheetsPage.navigateToTimesheets();
  await timesheetsPage.validateTimesheetsHeader();

  // Validate Radio Buttons
  const radioButtonLabels = ['None', 'Date Range', 'By Date'];
  await timesheetsPage.validateRadioButtons(radioButtonLabels);

  // Validate Buttons
  await timesheetsPage.validateApproveAllButton();
  await timesheetsPage.validateRefreshButton();

  // Validate Grid Column Headers
  const gridColumnHeaders = [
    'Date',
    'Employee',
    'Job / Customer',
    'Work / Purchase Order',
    'Activity Code',
    'Pay Rate',
    'Flat Rate Amount',
    'Start Time',
    'End Time',
    'Total Time',
    'Note',
    'Email Recipients',
    'Additional Emails',
    'Primary Approval',
    'Final Approval',
  ];
  await timesheetsPage.validateGridColumnHeaders(gridColumnHeaders);

  // Validate Dropdown Value
  await timesheetsPage.validateDropdownValue();

  // Navigate to Settings and validate
  await timesheetsPage.navigateToSettings();
  await timesheetsPage.validateGeneralSettingsHeader();
  await timesheetsPage.validateSaveChangesButton();

  // Navigate to Activity Codes and validate
  await timesheetsPage.navigateToActivityCodes();
  await timesheetsPage.validateActivityCodesHeader();
  await timesheetsPage.validateLocationLabel();
  await timesheetsPage.validateAddButton();

  // Validate Activity Codes Grid Headers
  const activityCodesGridColumnHeaders = [
    'Activity Code',
    'Description',
    'Behavior',
    'PayRate Option',
    'Flat Rate Amount',
    'Is Approver Code',
    'Status',
  ];
  await timesheetsPage.validateActivityCodesGridHeaders(activityCodesGridColumnHeaders);

  // Navigate to Approver Settings and validate
  await timesheetsPage.navigateToApproverSettings();
  await timesheetsPage.validateApproverSettingsHeader();

  // Validate Approver Settings Grid Headers
  const approverSettingsGridColumnHeaders = ['Division', 'Approver'];
  await timesheetsPage.validateApproverSettingsGridHeaders(approverSettingsGridColumnHeaders);

  // Navigate to Usage Report and validate
  await timesheetsPage.navigateToUsageReport();
  await timesheetsPage.validateGetUsageReportButton();
  await timesheetsPage.validateExportToExcelButton();

  // Validate Usage Report Grid Headers
  const usageReportGridColumnHeaders = ['Name', 'TotalCount'];
  await timesheetsPage.validateUsageReportGridHeaders(usageReportGridColumnHeaders);
});
