import { test } from '../../../fixtures/enterpriseFixtures.js';
import { CreateClaimPage } from '../../../pageObjects/enterprise/dashEnterprise/createNewClaim.po.js';
import claimDetails from '../../../testData/enterprise/enterpriseClaimData.json' with { type: 'json' };
import { saveClaimNumber } from '../../../utils/enterpriseClaimGenerator.js';

// Test data for creating a new claim
const { claimDetails: createNewClaimDetails } = claimDetails;

// Setup test - Create a claim for dashboard tests
test('Setup - Create Claim for Dashboard Tests', async ({ authenticatedPage }) => {
  const page = authenticatedPage;

  // Create a new claim
  const createClaimPage = new CreateClaimPage(page);
  const jobNumber = await createClaimPage.createNewClaim(createNewClaimDetails);

  // Save the job number (claim number) to JSON file for other tests to use
  saveClaimNumber(jobNumber, 'testData/enterprise/createClaimData.json');
});
