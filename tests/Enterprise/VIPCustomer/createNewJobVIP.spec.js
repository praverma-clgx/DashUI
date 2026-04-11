import { test, expect } from '../../../fixtures/enterpriseFixtures.js';
import { CreateJobCloseJobPage } from '../../../pageObjects/enterprise/closeAndDeleteJobAndClaim/createJobCloseJob.po.js';
import CreateNewJobPage from '../../../pageObjects/enterprise/dashEnterprise/createNewJob.po.js';
import { CreateNewJobVIPPage } from '../../../pageObjects/enterprise/vipCustomer/createNewJobVIP.po.js';
import createJobData from '../../../testData/enterprise/enterpriseJobData.json' with { type: 'json' };
const { newJobData } = createJobData;

test('VIP button/icon Assertions on Create job, slideboard and edit for individual and company customers', async ({
  authenticatedPage,
}) => {
  const page = authenticatedPage;
  const createJobPage = new CreateJobCloseJobPage(page);
  const createNewJobPage = new CreateNewJobPage(page);
  const vipPage = new CreateNewJobVIPPage(page);

  // Navigate to Create Job
  await createJobPage.clickCreateJobButton();

  // Select Referred By
  await createJobPage.selectReferredBy();

  // Assert VIP Referred By container and label are visible
  await vipPage.assertVipReferredByVisible();

  // Enable VIP Referred By switch if off
  await vipPage.enableVipReferredBySwitch();

  // Fill Job Form
  await createJobPage.selectRandomLossCategoryExceptFirst();

  // Select Company Customer and assert VIP switches are off
  await vipPage.selectCompanyCustomerType();
  await vipPage.assertCompanyCustomerVipSwitchesOff();

  // Select Individual Customer and assert VIP switch is off
  await vipPage.selectIndividualCustomerType();
  await vipPage.assertIndividualCustomerVipSwitchOff();

  // Select a Individual Customer
  await createJobPage.selectCustomer(
    newJobData.customerName,
    newJobData.customerFirstName,
    newJobData.customerLastName,
  );

  // Enable VIP Individual Customer switch if off
  await vipPage.enableIndividualCustomerVipSwitch();

  // Click on checkbox to use same address for job
  await createJobPage.checkSameAsCustomerAddress(
    newJobData.customerFirstName,
    newJobData.customerLastName,
  );

  // External Participants - Select Broker/Agent from dropdown
  await vipPage.selectBrokerAgent();

  // Assert VIP wrapper is visible for Broker/Agent
  await vipPage.assertBrokerAgentVipVisible();

  // Enable Broker/Agent VIP switch if off
  await vipPage.enableBrokerAgentVipSwitch();

  // Open Add New Company modal via + button and assert VIP switch is off
  await vipPage.openAddNewCompanyModal();
  await vipPage.assertExternalCompanyVipSwitchOff();

  // Close Add New Company modal
  await vipPage.closeAddNewCompanyModal();

  await createJobPage.checkWaterMitigation();
  await createJobPage.fillPolicyInformation();
  await createJobPage.fillLossDescription(newJobData.lossDescription);

  // Click on Save and Go to Job Slideboard
  await createJobPage.clickSaveBtnAndGoToSlideBoard();

  // Extract the JobNumber from the URL
  const jobNumber = createNewJobPage.extractJobNumberFromURL();

  // Verify URL contains job identifier
  await createNewJobPage.verifyJobURL();

  await page.waitForLoadState('networkidle');

  // Assert all VIP icons are visible on the slideboard
  await vipPage.assertSlideboardVipIcons();

  // Open Edit Job Information modal and navigate to External Participants tab
  await vipPage.openEditJobInformation();
  await vipPage.navigateToExternalParticipantsTab();

  // Assert Broker/Agent VIP switch is on, then disable it
  await vipPage.assertBrokerAgentVipInEditModal();
  await vipPage.disableBrokerAgentVipSwitch();

  // Save Edit Job modal and assert Broker/Agent VIP icon is hidden
  await vipPage.saveEditJobModal();
  await expect(vipPage.vipIconOnBrokerAgent).toBeHidden();

  // Open Edit Claim Information modal, assert Referred By VIP is on and disable it
  await vipPage.openEditClaimInformation();
  await vipPage.assertReferredByVipOnAndDisable();

  // Save Edit Claim modal and assert claim VIP icon is hidden
  await vipPage.saveEditClaimModal();
  await expect(vipPage.vipIconOnCustomerInformationCard).toBeHidden();

  // Open Edit Customer Information, assert Individual VIP switch is on and disable it
  await vipPage.openEditCustomerInformation();
  await vipPage.assertIndividualVipInIframeAndDisable();

  // Save and assert Job Tab VIP icon is hidden
  await vipPage.saveEditCustomerModal();
  await expect(vipPage.vipIconOnJobTabLinkPanel).toBeHidden();

  // Re-open Edit Customer Information and switch to Company Customer
  await vipPage.openEditCustomerAgain();
  await vipPage.switchToCompanyCustomer();

  // Assert both company VIP switches are off
  await vipPage.assertCustomerAsCompanyVipSwitchesOff();

  // Fill Reason for Change and select Company Customer
  await vipPage.fillReasonForChange(newJobData.reasonForChange);
  await vipPage.fillCompanyCustomerCombobox(newJobData.companyName);

  // Enable both Company VIP switches and assert on
  await vipPage.enableCompanyVipSwitches();

  // Save and assert VIP icons are visible on slideboard
  await vipPage.saveCustomerModal();
  await vipPage.assertVipIconsAfterCompanySwitch();

  // Open Edit Company Information modal, disable both VIP switches and save
  await vipPage.openEditCompanyInformation();
  await vipPage.disableCompanyVipSwitches();
  await vipPage.saveCustomerModal();

  // Assert company VIP icons are hidden after disabling
  await vipPage.assertVipIconsHiddenAfterCompanyVipOff();
});
