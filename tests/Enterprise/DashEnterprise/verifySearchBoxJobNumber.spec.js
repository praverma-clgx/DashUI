import { test } from '../../../fixtures/enterpriseFixtures.js';
import jobData from '../../../testData/enterprise/enterpriseCompanySettings/DashboardAccountingNotes.json' with { type: 'json' };
import { searchJobNumber } from '../../../utils/searchJobNumber.js';

test('Verify Advance Job Search by Job Number', async ({ authenticatedPage }) => {
  //------------Code Starts Here------------

  const page = authenticatedPage;

  // Search for job by number
  await searchJobNumber(page, jobData.jobNumber);
});
