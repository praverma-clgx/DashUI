import { test } from '../../../fixtures/enterpriseFixtures.js';
import { ReportsPage } from '../../../pageObjects/enterprise/reports/reports.po.js';

test('Reports validation', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const reportsPage = new ReportsPage(page);

  // Navigate to Reports page
  await reportsPage.navigateToReports();

  // Verify Create Report header
  await reportsPage.verifyCreateReportHeader();

  // Verify New Report heading
  await reportsPage.verifyNewReportHeading();

  // Verify Legacy Report Creator heading
  await reportsPage.verifyLegacyReportCreatorHeading();
});
