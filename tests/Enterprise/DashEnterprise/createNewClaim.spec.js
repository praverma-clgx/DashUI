import { test } from '../../../fixtures/enterpriseFixtures.js';
import { CreateClaimPage } from '../../../pageObjects/enterprise/dashEnterprise/createNewClaim.po.js';
import claimDetails from '../../../testData/enterprise/enterpriseClaimData.json' with { type: 'json' };

// Test data for creating a new claim
const { claimDetails: createNewClaimDetails } = claimDetails;

// Create a new claim and persist its job number
test('Create New Claim', async ({ authenticatedPage }) => {
  const page = authenticatedPage;

  // Create a new claim
  const createClaimPage = new CreateClaimPage(page);
  const jobNumber = await createClaimPage.createNewClaim(createNewClaimDetails);
});
