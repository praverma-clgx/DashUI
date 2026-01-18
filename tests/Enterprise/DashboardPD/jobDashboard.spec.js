import { test } from '../../../fixtures/enterpriseFixtures.js';
import JobDashboardPage from '../../../pageObjects/enterprise/dashboardPD/jobDashboard.po.js';

test('Job Dashboard Page', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const jobDashboardPage = new JobDashboardPage(page);

  // Navigate to Job Dashboard page
  await jobDashboardPage.navigateToJobDashboard();

  // Assert page heading
  await jobDashboardPage.assertPageHeading();

  // Click on each tile and verify navigation
  await jobDashboardPage.clickOpenJobsTile();
  await jobDashboardPage.clickPendingSalesTile();
  await jobDashboardPage.clickPreProductionTile();
  await jobDashboardPage.clickWorkInProgressTile();
  await jobDashboardPage.clickCompletedWithoutPaperworkTile();
  await jobDashboardPage.clickInvoicePendingTile();
  await jobDashboardPage.clickAccountsReceivableTile();
  await jobDashboardPage.clickWaitingForFinalClosureTile();

  // Assert Gross Profit tile is visible (non-clickable)
  await jobDashboardPage.assertGrossProfitTileVisible();

  // Click Jobs Lacking Interaction tile
  await jobDashboardPage.clickJobsLackingInteractionTile();

  // Assert filter labels are visible
  await jobDashboardPage.assertFilterLabelsVisible();
});
