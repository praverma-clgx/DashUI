import { test, expect } from '../../../fixtures/enterpriseFixtures.js';
import { CreateClaimPage } from '../../../pageObjects/enterprise/dashEnterprise/createNewClaim.po.js';
import claimDetails from '../../../testData/enterprise/enterpriseClaimData.json' with { type: 'json' };
import { isProduction } from '../../../utils/testTags.js';

const { claimDetails: createNewClaimDetails } = claimDetails;

test.skip(isProduction(), 'Skipping create claim test in production environment');

test('Create New Claim', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const createClaimPage = new CreateClaimPage(page);

  const referredBy = await createClaimPage.createNewClaimWithReferredBy(createNewClaimDetails);

  await page.waitForLoadState('networkidle');

  // Check if we're on the Job Slideboard page (after claim creation)
  const currentUrl = page.url();
  console.log(`Current URL: ${currentUrl}`);

  // Look for Referred By on the Job Slideboard page
  const referredByLocator = page.locator(
    '#ctl00_ContentPlaceHolder1_dockClaimInformation_C .parantDiv:has-text("Referred By") .innerDiv30pct.fontBold',
  );
  await expect(referredByLocator).toBeVisible({ timeout: 15000 });
  const displayedReferredBy = await referredByLocator.innerText();

  // Clean up the displayed text by removing extra whitespace and newlines
  const cleanDisplayedReferredBy = displayedReferredBy?.replace(/\s+/g, ' ').trim();

  // Assert the displayed value matches the selected value
  expect(cleanDisplayedReferredBy).toBe(referredBy.trim());
  console.log(`Displayed Referred By: "${cleanDisplayedReferredBy}"`);
  console.log(`Expected Referred By: "${referredBy.trim()}"`);

  const yearBuiltLocator = page.locator(
    '#ctl00_ContentPlaceHolder1_dockCustomerInformation_C .innerDiv50pct:has(.innerDiv20pct:text("Year Built")) .innerDiv30pct',
  );
  await expect(yearBuiltLocator).toBeVisible({ timeout: 10000 });
  await expect(yearBuiltLocator).toContainText(createNewClaimDetails.yearBuilt);

  // Check if phone number section exists on Job page
  const phoneLocator = page.locator('#ctl00_ContentPlaceHolder1_PhoneNo');
  const phoneExists = (await phoneLocator.count()) > 0;
  expect(phoneExists).toBeTruthy();
});
