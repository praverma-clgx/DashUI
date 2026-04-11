import { test, expect } from '../../../fixtures/enterpriseFixtures.js';
import { ReportsPage } from '../../../pageObjects/enterprise/reports/reports.po.js';

test('Job Status Reports', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const reportsPage = new ReportsPage(page);

  // 1. Navigate
  await reportsPage.navigateToReports();

  // Click on Job Status report Option and switch to new tab
  const jobStatusReportTab = await reportsPage.clickJobStatusReportOptionAndAssertUrl();
  const reportsPageJobStatusTab = new ReportsPage(jobStatusReportTab);

  // Select Job from dropdown and Generate Report in new tab
  await reportsPageJobStatusTab.selectJobStatusReportJobAndGenerateReport();

  // // Switch back to the original tab
  // await page.bringToFront();

  // const { reportPopup, notification } = await reportsPage.verifyJobStatusReport();
  // await expect(notification).toContainText(/Queued|completed/i, { timeout: 50000 });
  // await reportPopup.close();
});
