import { test, expect } from '../../../fixtures/mixedFixtures.js';
import { config } from '../../../config/environment.config.js';
import CreateClaimPage from '../../../pageObjects/admin/dashAdmin/createNewClaim.po.js';
import AcceptJobPage from '../../../pageObjects/enterprise/administrationFG/acceptJob.po.js';
import AcceptClaimCloseClaimPage from '../../../pageObjects/enterpriseAndAdmin/CreateDispatchAcceptCloseClaim/acceptClaimCloseClaim.po.js';
import claimData from '../../../testData/admin/adminClaimData.json' with { type: 'json' };

test.describe.serial('Create, Dispatch, Accept and Close Claim Workflow', () => {
  let customerLastName;

  test('Create New Claim in Admin and Dispatch', async ({ adminPage }) => {
    const createClaimPage = new CreateClaimPage(adminPage);

    // Navigate to create claim (already authenticated via storage state)
    await adminPage.goto(config.admin.baseUrl);
    await adminPage.waitForLoadState('networkidle');

    // Click on create new claim
    await createClaimPage.clickCreateClaimBtn();

    // Wait for page load
    await adminPage.waitForLoadState('networkidle');

    // Complete claim creation workflow and capture the unique last name
    customerLastName = await createClaimPage.createClaimWorkflow(claimData.claimDetails);
  });

  test('Accept Claim and Close it', async ({ enterprisePage }) => {
    const acceptJobPage = new AcceptJobPage(enterprisePage);
    const acceptClaimCloseClaimPage = new AcceptClaimCloseClaimPage(enterprisePage);

    // Navigate to enterprise home (already authenticated via storage state)
    await enterprisePage.goto(config.enterprise.baseUrl);
    await enterprisePage.waitForLoadState('networkidle');

    // Navigate to Accept Job page from Administration menu
    await acceptJobPage.navigateToAcceptJob();

    // Verify Options column header is visible
    await expect(await acceptJobPage.verifyOptionsHeaderVisible()).toBeVisible();

    // Complete accept and close claim workflow
    await acceptClaimCloseClaimPage.acceptAndCloseClaimWorkflow(customerLastName);
  });
});

// No afterEach needed - contexts close automatically
