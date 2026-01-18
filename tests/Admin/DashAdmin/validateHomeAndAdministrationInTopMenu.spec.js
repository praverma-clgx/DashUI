import { test } from '../../../fixtures/adminFixtures.js';
import { AdminHomePageLoc } from '../../../pageObjects/admin/dashAdmin/homePage.po.js';
import HomeAndAdministrationMenuPage from '../../../pageObjects/admin/dashAdmin/homeAndAdministrationMenu.po.js';

test('Validate Home and Administration in Top Menu', async ({ authenticatedPage }) => {
  //------------Code Starts Here------------

  const page = authenticatedPage;
  const homeAndAdministrationMenuPage = new HomeAndAdministrationMenuPage(page);

  // Validate Home and Administration buttons
  await homeAndAdministrationMenuPage.validateHomeAndAdministrationButtons(AdminHomePageLoc);
});
