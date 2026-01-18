import { expect, test } from '../../../fixtures/adminFixtures.js';
import HomePageValidation from '../../../pageObjects/admin/adminstration/homePageValidation.po.js';

test('Home Page all options Validation', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const homePage = new HomePageValidation(page);

  // Navigate to Home page
  await homePage.navigateToHomePage();

  // Verify Home menu option is visible
  const homeMenuOption = homePage.getHomeMenuOption();
  await expect(homeMenuOption).toBeVisible();

  // Verify Last Views option is visible
  const lastViewsOption = await homePage.verifyLastViewsOption();
  await expect(lastViewsOption).toBeVisible();

  // All Menu Options Array
  const adminMenuOptions = [
    'Home',
    'Administration',
    'Provider Management',
    'Client Management',
    'Reports',
    'Queue Management',
    'Suspension Management',
    'Billing',
  ];

  // Validate all admin menu options
  await homePage.validateAdminMenuOptions(adminMenuOptions);
  for (const optionText of adminMenuOptions) {
    const menuOption = homePage.getMenuOption(optionText);
    await expect(menuOption).toBeVisible();
  }

  // Verify Work Queue heading is visible
  const workQueueHeading = await homePage.verifyWorkQueueHeading();
  await expect(workQueueHeading).toBeVisible();

  // Home All Search Options Array
  const homeSearchOptions = [
    'Advanced Search',
    'Service Level Search',
    'Advanced Claims Search',
    'Claims Search',
  ];

  // Validate all home search options
  await homePage.validateHomeSearchOptions(homeSearchOptions);
  for (const optionText of homeSearchOptions) {
    const optionLocator = homePage.getSearchOption(optionText);
    await expect(optionLocator).toBeVisible();
    await expect(optionLocator).toHaveText(new RegExp(optionText.replace(/ /g, '\\s*')));
  }
});
