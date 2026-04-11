import { test } from '../../../fixtures/enterpriseFixtures.js';
import AddIndividualCustomerPage from '../../../pageObjects/enterprise/contactManager/addIndividualCustomer.po.js';
import addIndividualCustomerData from '../../../testData/enterprise/enterpriseContactManager/addIndividualCustomer.json' with { type: 'json' };
import { getRandomNumber } from '../../../utils/randomNumber.js';

test('Verify "Add New Individual Customer" functionality for VIP and Non-VIP individuals', async ({
  authenticatedPage,
}) => {
  const addIndividualCustomerPage = new AddIndividualCustomerPage(authenticatedPage);

  // Hover on Contact Manager and click Individuals
  await addIndividualCustomerPage.hoverContactManager();
  await addIndividualCustomerPage.clickIndividualsMenu();

  // Click on Add New Individual button
  await addIndividualCustomerPage.clickAddNewIndividual();

  // Enter first name and verify
  const uniqueFirstName = addIndividualCustomerData.firstName + getRandomNumber(1, 10000);
  await addIndividualCustomerPage.enterFirstName(uniqueFirstName);
  await addIndividualCustomerPage.assertFirstName(uniqueFirstName);

  // Enter last name and verify
  await addIndividualCustomerPage.enterLastName(addIndividualCustomerData.lastName);
  await addIndividualCustomerPage.assertLastName(addIndividualCustomerData.lastName);

  // Select contact type and verify
  await addIndividualCustomerPage.selectContactTypeCustomer(addIndividualCustomerData.contactType);
  await addIndividualCustomerPage.assertContactType(addIndividualCustomerData.contactType);

  // Enter phone number and verify
  await addIndividualCustomerPage.enterPhone(addIndividualCustomerData.mainPhone);
  await addIndividualCustomerPage.assertPhone(addIndividualCustomerData.mainPhone);

  // Company Add button
  await addIndividualCustomerPage.clickCompanyAddButton();

  // Assert Add New Company popup is visible
  await addIndividualCustomerPage.assertAddNewCompanyPopupVisible();

  // Assert VIP toggle is present and switched off
  await addIndividualCustomerPage.assertVIPCompanyButtonOff();

  // Click Cancel and wait for popup to close
  await addIndividualCustomerPage.clickCancelAddNewCompany();

  // Save and verify URL
  await addIndividualCustomerPage.clickSaveIndividual();
  await addIndividualCustomerPage.assertSavedUrl();

  // Click on VIP switch to filter vip customers only on grid
  await addIndividualCustomerPage.enableVIPfilter();

  // Enter First Name in filter and verify the customer is displayed in grid
  await addIndividualCustomerPage.filterByFirstName(uniqueFirstName);

  // Assert Row count to be 0
  await addIndividualCustomerPage.assertIndividualRowCount(0);

  // Disable VIP filter to see all customers
  await addIndividualCustomerPage.disableVIPfilter();

  // Enter First Name in filter and verify the customer is displayed in grid
  await addIndividualCustomerPage.filterByFirstName(uniqueFirstName);

  // Assert Row count to be 1
  await addIndividualCustomerPage.assertIndividualRowCount(1);

  // Click on the individual row by name
  await addIndividualCustomerPage.clickIndividualByName(uniqueFirstName);

  // Select VIP button
  await addIndividualCustomerPage.clickVipButton();

  // Save
  await addIndividualCustomerPage.clickSaveIndividual();

  // Click on VIP switch to filter vip customers only on grid
  await addIndividualCustomerPage.enableVIPfilter();

  // Enter First Name in filter and verify the customer is displayed in grid
  await addIndividualCustomerPage.filterByFirstName(uniqueFirstName);

  // Assert Row count to be 0
  await addIndividualCustomerPage.assertIndividualRowCount(1);
});
