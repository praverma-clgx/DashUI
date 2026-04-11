import { test, expect } from '../../../fixtures/enterpriseFixtures.js';
import { CreateJobCloseJobPage } from '../../../pageObjects/enterprise/closeAndDeleteJobAndClaim/createJobCloseJob.po.js';
import JobSettingPage from '../../../pageObjects/enterprise/administrationFG/jobSetting.po.js';
import createJobData from '../../../testData/enterprise/enterpriseJobData.json' with { type: 'json' };
import { getRandomNumber } from '../../../utils/randomNumber.js';
const { newJobData } = createJobData;

test('Create Job Enterprise and Close it, Create New Reason for Closing', async ({
  authenticatedPage,
}) => {
  const page = authenticatedPage;
  const createJobPage = new CreateJobCloseJobPage(page);
  const jobSettingPage = new JobSettingPage(page);
  const uniqueReasonForClosing = `Automate${getRandomNumber(1, 9999)}`;

  // --- SETUP: Navigate to Job Settings and add a unique Reason for Closing ---
  await jobSettingPage.navigateToJobSettings();
  await expect(await jobSettingPage.verifyReasonForClosingHeaderVisible()).toBeVisible();
  await jobSettingPage.clickReasonForClosingSection();
  await jobSettingPage.verifyReasonForClosingLabelVisible();
  await jobSettingPage.clickAddNewReasonForClosingRecord();
  await jobSettingPage.addNewReasonForClosingEntry(uniqueReasonForClosing);

  // --- FILTER: Apply "Contains" filter and assert exactly 1 row exists ---
  await jobSettingPage.filterReasonForClosingByContains(uniqueReasonForClosing);
  const rowCount = await jobSettingPage.getFilteredReasonForClosingRowCount(uniqueReasonForClosing);
  expect(rowCount).toBe(1);

  await page.waitForLoadState('domcontentloaded', { timeout: 30000 });

  // --- CREATE JOB ---
  await createJobPage.clickCreateJobButton();
  await createJobPage.selectRandomLossCategoryExceptFirst();
  await createJobPage.selectCustomer(
    newJobData.customerName,
    newJobData.customerFirstName,
    newJobData.customerLastName,
  );
  await createJobPage.checkSameAsCustomerAddress(
    newJobData.customerFirstName,
    newJobData.customerLastName,
  );
  await createJobPage.checkWaterMitigation();
  await createJobPage.fillLossDescription(newJobData.lossDescription);
  await createJobPage.clickSaveBtnAndGoToSlideBoard();
  await createJobPage.rejectAllComplianceTasks();

  await page.waitForLoadState('domcontentloaded');

  // --- EDIT JOB INFORMATION ---
  await createJobPage.openEditJobInfoAndSelectEnvironmentalCode();

  // --- CLOSE JOB ---
  await createJobPage.closeJob(uniqueReasonForClosing);
  await createJobPage.verifyJobIsClosed();

  await page.reload();
  await page.waitForLoadState('networkidle');

  // --- CLEANUP: Navigate back, filter again, assert, delete, assert ---
  await jobSettingPage.navigateToJobSettings();
  await expect(await jobSettingPage.verifyReasonForClosingHeaderVisible()).toBeVisible();
  await jobSettingPage.clickReasonForClosingSection();
  await jobSettingPage.verifyReasonForClosingLabelVisible();
  await jobSettingPage.filterReasonForClosingByContains(uniqueReasonForClosing);

  const refreshedRowCount =
    await jobSettingPage.getFilteredReasonForClosingRowCount(uniqueReasonForClosing);
  expect(refreshedRowCount).toBe(1);

  await jobSettingPage.deleteReasonForClosing(uniqueReasonForClosing);

  const postDeleteCount =
    await jobSettingPage.getFilteredReasonForClosingRowCount(uniqueReasonForClosing);
  expect(postDeleteCount).toBe(0);
});
