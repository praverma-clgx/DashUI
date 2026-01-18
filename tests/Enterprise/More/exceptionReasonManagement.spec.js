import { test } from '../../../fixtures/enterpriseFixtures.js';
import { ExceptionReasonManagementPage } from '../../../pageObjects/enterprise/moreFg/exceptionReasonManagement.po.js';

test('Exception Reason Management in More FG', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const exceptionReasonManagementPage = new ExceptionReasonManagementPage(page);

  // Navigate to Exception Reason Management
  await exceptionReasonManagementPage.navigateToExceptionReasonManagement();

  // Validate Assign Button
  await exceptionReasonManagementPage.validateAssignButton();

  // Validate Refresh Button
  await exceptionReasonManagementPage.validateRefreshButton();

  // Validate Export to Excel Button
  await exceptionReasonManagementPage.validateExportToExcelButton();

  // Define grid headers
  const gridHeaders = [
    'Owner',
    'Action Title',
    'Required Action',
    'Due Date',
    'Completed Date',
    'Job Number',
    'Customer Name',
    'Client',
    'Priority',
    'Provider-Location',
    'Assignee',
  ];

  // Validate Grid Headers
  await exceptionReasonManagementPage.validateGridHeaders(gridHeaders);
});
