import { test } from '../../../fixtures/adminFixtures.js';
import DashAdminHomePage from '../../../pageObjects/admin/dashAdmin/homePage.po.js';
import CreateClaimMandatoryFieldsPage from '../../../pageObjects/admin/dashAdmin/createClaimMandatoryFields.po.js';

test('Validate Create Claim Mandatory fields', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const adminHomePage = new DashAdminHomePage(page);
  const createClaimMandatoryFieldsPage = new CreateClaimMandatoryFieldsPage(page);

  // Click on Create Claim button
  await adminHomePage.clickCreateClaimBtn();

  await page.waitForLoadState('networkidle');

  // Extract URL to compare later
  const createClaimURL = page.url();

  // Set up dialog handler before clicking
  let message = '';
  page.once('dialog', async (dialog) => {
    message = dialog.message();
    await dialog.accept();
  });

  // 3. ATTEMPT TO SUBMIT (Empty) & 4. VALIDATE ERRORS
  await createClaimMandatoryFieldsPage.clickSaveButton();

  await page.waitForLoadState('networkidle');

  //  Assert that the dialog message contains all the required errors
  createClaimMandatoryFieldsPage.validateAllMandatoryFieldErrors(message);

  // Check that the URL has NOT changed (submission failed)
  await createClaimMandatoryFieldsPage.verifyURLUnchanged(createClaimURL);
});
