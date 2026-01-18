import { test } from '../../../fixtures/adminFixtures.js';
import DashAdminHomePage, {
  AdminHomePageLoc,
} from '../../../pageObjects/admin/dashAdmin/homePage.po.js';

test('Home Page', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const dashAdminHomePage = new DashAdminHomePage(page);

  // Validate all home page elements
  await dashAdminHomePage.validateAllHomePageElements(AdminHomePageLoc);
});
