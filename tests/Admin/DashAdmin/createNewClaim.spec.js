import { test } from '../../../fixtures/adminFixtures.js';
import DashAdminHomePage from '../../../pageObjects/admin/dashAdmin/homePage.po.js';
import CreateNewClaimPage from '../../../pageObjects/admin/dashAdmin/createNewClaim.po.js';
import claimData from '../../../testData/admin/adminClaimData.json' with { type: 'json' };

test('Create New Claim in Admin', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const adminHomePage = new DashAdminHomePage(page);
  const createNewClaimPage = new CreateNewClaimPage(page);

  // Click on create new claim
  await adminHomePage.clickCreateClaimBtn();

  // Complete create new claim workflow
  await createNewClaimPage.createClaimAssertURL(claimData.claimDetails);
});
