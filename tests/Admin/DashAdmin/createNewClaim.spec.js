import { test } from '../../../fixtures/adminFixtures.js';
import DashAdminHomePage from '../../../pageObjects/admin/dashAdmin/homePage.po.js';
import CreateClaimPage from '../../../pageObjects/admin/dashAdmin/createNewClaim.po.js';
import claimData from '../../../testData/admin/adminClaimData.json' with { type: 'json' };

test('@Smoke, Create New Claim in Admin and dispatch', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const adminHomePage = new DashAdminHomePage(page);
  const createClaimPage = new CreateClaimPage(page);

  let customerLastName;
  // Click on create new claim
  await adminHomePage.clickCreateClaimBtn();

  // Complete claim creation workflow and capture the unique last name
  customerLastName = await createClaimPage.createClaimWorkflow(claimData.claimDetails);
  console.log('Unique Customer Last Name for this claim:', customerLastName);
});
