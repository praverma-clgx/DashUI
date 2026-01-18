import { test } from '../../../fixtures/enterpriseFixtures.js';
import { EnterpriseHomePageLocators } from '../../../pageObjects/enterprise/homePage/enterpriseHomePage.po.js';
import ValidateLoggedInUserNamePage from '../../../pageObjects/enterprise/dashEnterprise/validateLoggedInUserName.po.js';

test('Validate User Name', async ({ authenticatedPage }) => {
  //------------Code Starts Here------------
  const page = authenticatedPage;
  const validateUserNamePage = new ValidateLoggedInUserNamePage(page);

  // Validate logged in user name
  await validateUserNamePage.validateLoggedInUserName(EnterpriseHomePageLocators.loggedInUserName);
});
