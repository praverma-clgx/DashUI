import { test, expect } from '../../../fixtures/enterpriseFixtures.js';
import { CreateClaimPage } from '../../../pageObjects/enterprise/dashEnterprise/createNewClaim.po.js';
import AddNewDivisionToClaimPage from '../../../pageObjects/enterprise/addNewJob/addNewDivisionToClaim.po.js';
import claimDetails from '../../../testData/enterprise/enterpriseClaimData.json' with { type: 'json' };
import { isProduction } from '../../../utils/testTags.js';

test.skip(isProduction(), 'Skipping create claim test in production environment');


const { claimDetails: createNewClaimDetails } = claimDetails;

test('Create Claim, Add New Job', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const createClaimPage = new CreateClaimPage(page);
  const addNewDivisionPage = new AddNewDivisionToClaimPage(page);

  // Create a new claim
  await createClaimPage.createNewClaimOnly(createNewClaimDetails);
  await page.waitForLoadState('networkidle');

  await addNewDivisionPage.clickAddNewJobButton();

  // Assert that Navigated to add new job page via header locator
  await expect(await addNewDivisionPage.verifyAddEditJobHeaderVisible()).toBeVisible();

  // Click on Admin Division dropdown
  await addNewDivisionPage.clickAdminDivisionDropdown();

  // Wait dynamically until at least the first dropdown item is loaded and visible
  await expect(await addNewDivisionPage.waitForDivisionDropdownItems()).toBeVisible();

  // Select a random item from the dropdown
  await addNewDivisionPage.selectRandomDivisionItem();

  // Wait for the checkbox panel to appear after selection
  await expect(await addNewDivisionPage.verifyDivisionCheckboxPanelVisible()).toBeVisible({
    timeout: 5000,
  });

  // Wait for the first checkbox inside the panel to be visible and click it
  await addNewDivisionPage.clickFirstDivisionCheckbox();

  // Click on Save button
  await addNewDivisionPage.clickSaveButton();

  // Wait for the modal foreground element to be visible
  await expect(await addNewDivisionPage.verifyModalVisible()).toBeVisible({
    timeout: 15000,
  });

  // Get the modal header locator and assert its text
  await expect(await addNewDivisionPage.verifyModalHeader()).toBeVisible();
  await expect(await addNewDivisionPage.verifyModalHeader()).toHaveText('Select Program');

  // Click the dropdown button inside the modal to show all options
  await addNewDivisionPage.clickProgramDropdownArrow();

  // Wait for the first dropdown option to be visible
  await expect(await addNewDivisionPage.waitForProgramDropdownItems()).toBeVisible({
    timeout: 5000,
  });

  // Select the first option from the dropdown
  await addNewDivisionPage.selectFirstProgramOption();

  // Click the Save button in the modal after selecting from dropdown
  await expect(await addNewDivisionPage.verifyModalSaveButtonVisible()).toBeVisible({
    timeout: 15000,
  });
  await addNewDivisionPage.clickModalSaveButton();

  // Wait for the tabs to be loaded and visible before counting
  await expect(await addNewDivisionPage.waitForTabsVisible()).toBeVisible({
    timeout: 15000,
  });

  // Assert that the last tab has the class 'rtsLast' (newly added division)
  const lastTab = await addNewDivisionPage.verifyLastTabAdded();
  await expect(lastTab).toHaveClass(/rtsLast/);
  await expect(lastTab).toBeVisible({ timeout: 15000 });
});
