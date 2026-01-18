import { test } from '../../../fixtures/enterpriseFixtures.js';
import VerifyNotesDownloadPage from '../../../pageObjects/enterprise/dashEnterprise/verifyNotesDownload.po.js';

test('Verify Download Notes Functionality', async ({ authenticatedPage }) => {
  //------------Code Starts Here------------
  const page = authenticatedPage;
  const verifyNotesDownloadPage = new VerifyNotesDownloadPage(page);

  // Complete download notes workflow
  await verifyNotesDownloadPage.downloadNotesWorkflow();
});
