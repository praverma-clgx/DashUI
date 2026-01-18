import { test } from '../../../fixtures/enterpriseFixtures.js';
import ValidateCalendarBtnPage from '../../../pageObjects/enterprise/dashEnterprise/validateCalendarBtn.po.js';

test('Verify calendar Button', async ({ authenticatedPage }) => {
  //------------Code Starts Here------------

  const page = authenticatedPage;
  const validateCalendarBtnPage = new ValidateCalendarBtnPage(page);

  // Click calendar button
  await validateCalendarBtnPage.clickCalendarButton();

  // Verify user is on Calendar page
  await validateCalendarBtnPage.verifyCalendarPage();
});
