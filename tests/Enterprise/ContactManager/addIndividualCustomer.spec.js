import { test } from '../../../fixtures/enterpriseFixtures.js';
import AddIndividualCustomerPage from '../../../pageObjects/enterprise/contactManager/addIndividualCustomer.po.js';
import addIndividualCustomerData from '../../../testData/enterprise/enterpriseContactManager/addIndividualCustomer.json' with { type: 'json' };
import { getRandomNumber } from '../../../utils/randomNumber.js';

test('Add new Individual Customer in Contact Manager', async ({ authenticatedPage }) => {
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

  // Save and verify URL
  await addIndividualCustomerPage.clickSaveIndividual();
  await addIndividualCustomerPage.assertSavedUrl();
});
