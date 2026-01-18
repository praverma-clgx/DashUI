import { test } from '../../../fixtures/enterpriseFixtures.js';
import DataQualityDashboardPage from '../../../pageObjects/enterprise/dashboardPD/dataQualityDashboard.po.js';

test('Data Quality Dashboard Page', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const dataQualityDashboardPage = new DataQualityDashboardPage(page);

  // Navigate to Data Quality Dashboard page
  await dataQualityDashboardPage.navigateToDataQualityDashboard();

  // Assert page heading
  await dataQualityDashboardPage.assertPageHeading();

  // Assert date filter panel is visible
  await dataQualityDashboardPage.assertDatePanelVisible();

  // Assert all category labels are visible
  await dataQualityDashboardPage.assertAllCategoryLabelsVisible();
});
