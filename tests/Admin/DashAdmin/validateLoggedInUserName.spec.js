import { test } from '../../../fixtures/adminFixtures.js';
import { AdminHomePageLoc } from '../../../pageObjects/admin/dashAdmin/homePage.po.js';
import LoggedInUserNamePage from '../../../pageObjects/admin/dashAdmin/loggedInUserName.po.js';

test('Validate logged in user name', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const loggedInUserNamePage = new LoggedInUserNamePage(page);

  // Verify logged in user name
  await loggedInUserNamePage.validateLoggedInUserName(AdminHomePageLoc.LoggedInUserName);
});
