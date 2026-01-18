import { test } from '../../../fixtures/enterpriseFixtures.js';
import VerifySearchBoxJobNamePage from '../../../pageObjects/enterprise/dashEnterprise/verifySearchBoxJobName.po.js';
import jobData from '../../../testData/enterprise/enterpriseCompanySettings/DashboardAccountingNotes.json' with { type: 'json' };

test('Verify Advance Job Search by Job Name', async ({ authenticatedPage }) => {
  //------------Code Starts Here------------
  const page = authenticatedPage;
  const verifySearchJobNamePage = new VerifySearchBoxJobNamePage(page);

  // Search and verify job name
  await verifySearchJobNamePage.searchAndVerifyJobName(jobData.jobName);
});
