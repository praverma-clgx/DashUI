import { test, expect } from '../../../fixtures/enterpriseFixtures.js';
import DashboardJobsTabPage from '../../../pageObjects/enterprise/dashboardEvans/jobsTab.po.js';
import dashboardAccountingNotesData from '../../../testData/enterprise/enterpriseCompanySettings/DashboardAccountingNotes.json' with { type: 'json' };
import { searchJobNumber } from '../../../utils/searchJobNumber.js';

test('Jobs Tab Validation', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const jobsTabPage = new DashboardJobsTabPage(page);

  // Search for job by number
  await searchJobNumber(page, dashboardAccountingNotesData.jobNumber);

  // Navigate to Job Tasks tab
  await jobsTabPage.navigateToJobTasksTab();

  // Verify Add New button is visible
  await expect(await jobsTabPage.verifyAddNewButtonVisible()).toBeVisible();

  // Click Add New button
  await jobsTabPage.clickAddNewButton();

  // Verify modal is visible
  await expect(await jobsTabPage.verifyModalVisible()).toBeVisible();

  // Verify Job Task button is visible
  await expect(await jobsTabPage.verifyJobTaskButtonVisible()).toBeVisible();

  // Verify Marketing Task button is visible
  await expect(await jobsTabPage.verifyMarketingTaskButtonVisible()).toBeVisible();

  // Verify Calendar Event button is visible
  await expect(await jobsTabPage.verifyCalendarTaskButtonVisible()).toBeVisible();

  // Verify "Job #" label is visible
  await expect(await jobsTabPage.verifyJobLabelVisible()).toBeVisible();

  // Verify "Task:" label is visible
  await expect(await jobsTabPage.verifyTaskLabelVisible()).toBeVisible();

  // Verify "Start Date:" label is visible
  await expect(await jobsTabPage.verifyStartDateLabelVisible()).toBeVisible();

  // Verify "End Date:" label is visible
  await expect(await jobsTabPage.verifyEndDateLabelVisible()).toBeVisible();

  // Verify "Assign Resources:" label is visible
  await expect(await jobsTabPage.verifyAssignResourcesLabelVisible()).toBeVisible();

  // Verify "Assign Resources" button is visible
  await expect(await jobsTabPage.verifyAssignResourceButtonVisible()).toBeVisible();

  // Click on Assign Resources button
  await jobsTabPage.clickAssignResourceButton();

  // Verify "Save & Close" button is visible
  await expect(await jobsTabPage.verifySaveAndCloseButtonVisible()).toBeVisible();

  // Verify "Cancel" button is visible
  await expect(await jobsTabPage.verifyCancelButtonVisible()).toBeVisible();

  // Click on Cancel button
  await jobsTabPage.clickCancelButton();
});
