import { test, expect } from '../../../fixtures/enterpriseFixtures.js';
import { CreateClaimPage } from '../../../pageObjects/enterprise/dashEnterprise/createNewClaim.po.js';
import claimDetails from '../../../testData/enterprise/enterpriseClaimData.json' with { type: 'json' };
import { isProduction } from '../../../utils/testTags.js';

const { claimDetails: createNewClaimDetails } = claimDetails;

// Skip this test in production environment
test.skip(isProduction(), 'Skipping create claim test in production environment');

test('Create New Claim', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const createClaimPage = new CreateClaimPage(page);

  const referredBy = await createClaimPage.createNewClaimWithReferredBy(createNewClaimDetails);
  // console.log(`Referred By: ${referredBy}`);

  // // Assert the value in the UI matches the selected value
  // await createClaimPage.getReferredByValue(referredBy);

  // const yearBuiltLocator = page.locator(
  //   '#CustomerInformationPanel .innerDiv50pct:has(.innerDiv20pct:text("Year Built")) .innerDiv30pct',
  // );
  // await expect(yearBuiltLocator).toHaveText(createNewClaimDetails.yearBuilt);

  // // View More Locator
  // const viewMoreLocator = page.locator('#ctl00_ContentPlaceHolder1_PhoneNo');
  // await expect(viewMoreLocator).toBeVisible();
  // await viewMoreLocator.click();
  // await page.waitForLoadState('networkidle');

  // const modalHeader = page.locator('.rwTitlebar em:has-text("Phone Numbers")');
  // await expect(modalHeader).toBeVisible({ timeout: 5000 });

  // const iframePhoneNumbers = page.frameLocator('iframe[name="RadWindow_Common"]');
  // const iframeElement = page.locator('iframe[name="RadWindow_Common"]');
  // await expect(iframeElement).toBeVisible({ timeout: 5000 });
  // await expect(iframeElement).toBeAttached();

  // // Assert "Others 1:" label is visible
  // const othersLabel = iframePhoneNumbers.locator(
  //   'span.black-seoge-12-bold_new:has-text("Others  1:")',
  // );
  // await expect(othersLabel).toBeVisible({ timeout: 5000 });

  // // Assert phone number data is visible
  // const phoneData = iframePhoneNumbers.locator(
  //   `span.Blue_text_l2:has-text("${createNewClaimDetails.othersPhone}")`,
  // );
  // await expect(phoneData).toBeVisible({ timeout: 5000 });

  // CLick on close button
});
