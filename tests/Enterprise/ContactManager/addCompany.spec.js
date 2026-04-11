import { test } from '../../../fixtures/enterpriseFixtures.js';
import AddCompanyPage from '../../../pageObjects/enterprise/contactManager/addCompany.po.js';
import { getRandomNumber } from '../../../utils/randomNumber.js';
import addCompanyData from '../../../testData/enterprise/enterpriseContactManager/AddCompanyData.json' with { type: 'json' };

test('Verify "Add New Company" functionality for VIP and Non-VIP for company', async ({
  authenticatedPage,
}) => {
  const page = authenticatedPage;
  const addCompanyPage = new AddCompanyPage(page);

  // Generate unique company name
  const uniqueCompanyName = `ST_${getRandomNumber(1, 10000)}`;

  // Step 1: Click on Contact Manager
  await addCompanyPage.clickContactManager();

  // Step 2: Click on Add New Company button
  await addCompanyPage.clickAddNewCompany();

  // Step 3: Select Company Type "Lead Company"
  await addCompanyPage.selectCompanyType(addCompanyData.companyType);

  // Step 4: Fill Company Name
  await addCompanyPage.fillCompanyName(uniqueCompanyName);

  // Step 5: Assert Company Name is filled
  await addCompanyPage.assertCompanyNameFilled(uniqueCompanyName);

  // Step 6: Fill Company Main Phone
  await addCompanyPage.fillCompanyMainPhone(addCompanyData.companyPhone);

  // Step 7: Assert Company Main Phone is filled
  await addCompanyPage.assertCompanyMainPhoneFilled(addCompanyData.companyPhone);

  // Step 8: Click Save and Back to Contact Manager
  await addCompanyPage.clickSaveAndBack();

  // Click on VIP switch to filter vip companies only on grid
  await addCompanyPage.enableVIPfilter();

  // Filter by Company Name again after clicking VIP switch
  await addCompanyPage.filterByCompanyName(uniqueCompanyName);

  // Assert filtered company row count after clicking VIP switch
  await addCompanyPage.assertCompanyRowCount(0);

  // Disable VIP filter to see all companies
  await addCompanyPage.disableVIPfilter();

  // Step 9: Filter by Company Name
  await addCompanyPage.filterByCompanyName(uniqueCompanyName);

  // Step 10: Assert filtered company row count
  await addCompanyPage.assertCompanyRowCount(1);

  // Click the company row by name
  await addCompanyPage.clickCompanyByName(uniqueCompanyName);

  // Assert VIP button is switched off
  await addCompanyPage.assertVIPSwitchOff();

  // Select VIP button
  await addCompanyPage.selectVIPButton();

  // Step 8: Click Save and Back to Contact Manager
  await addCompanyPage.clickSaveAndBack();

  // Click on VIP switch to filter vip companies only on grid
  await addCompanyPage.enableVIPfilter();

  // Filter by Company Name again after clicking VIP switch
  await addCompanyPage.filterByCompanyName(uniqueCompanyName);

  // Assert filtered company row count after clicking VIP switch
  await addCompanyPage.assertCompanyRowCount(1);

  // Disable VIP filter to see all companies
  await addCompanyPage.disableVIPfilter();

  // Step 9: Filter by Company Name
  await addCompanyPage.filterByCompanyName(uniqueCompanyName);

  // Step 10: Assert filtered company row count
  await addCompanyPage.assertCompanyRowCount(1);
});
