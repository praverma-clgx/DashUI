import { test, expect } from '../../../fixtures/enterpriseFixtures.js';
import { CreateClaimPage } from '../../../pageObjects/enterprise/dashEnterprise/createNewClaim.po.js';
import { CreateNewClaimVIPPage } from '../../../pageObjects/enterprise/vipCustomer/createNewClaimVIP.po.js';
import claimData from '../../../testData/enterprise/enterpriseClaimData.json' with { type: 'json' };
import { isProduction } from '../../../utils/testTags.js';

const claimDetail = claimData.claimDetails;

test.skip(isProduction(), 'Skipping create claim test in production environment');

test('VIP button/icon Assertions on Create claim, slideboard, edit customer information for individual and company customers', async ({
  authenticatedPage,
}) => {
  const page = authenticatedPage;
  const createClaimPage = new CreateClaimPage(page);
  const vipPage = new CreateNewClaimVIPPage(page);

  await createClaimPage.openCreateClaim();
  await createClaimPage.selectReportedBy();
  await createClaimPage.selectReferredBy();

  // Assert VIP Referred By switch visible, enable if off
  await vipPage.assertVipReferredBySwitchVisible();
  await vipPage.enableVipReferredBySwitch();

  // Assert VIP div is visible
  await vipPage.assertVipReferredByDivVisible();

  await createClaimPage.selectProvider();
  await createClaimPage.selectClient();

  // Switch to Company Customer and assert VIP switch off
  await vipPage.selectCompanyCustomerType();
  await vipPage.assertCompanyCustomerVipSwitchOff();
  await page.waitForLoadState('networkidle', { timeout: 10000 });

  // Switch to Individual Customer and select customer
  await vipPage.selectIndividualCustomerType();
  await createClaimPage.selectCustomer(
    claimDetail.fullName,
    claimDetail.firstName,
    claimDetail.lastName,
  );

  // Assert and enable Individual Customer VIP switch
  await vipPage.assertIndividualCustomerVipSwitchVisible();
  await vipPage.enableIndividualCustomerVipSwitch();

  // Assert VIP label tooltip
  await vipPage.assertVipLabelTooltip();

  await createClaimPage.checkSameAsIndividualAddress();
  await createClaimPage.selectEstimator();
  await createClaimPage.selectCoordinator();
  await createClaimPage.selectAccounting();

  // Assert Broker/Agent VIP wrapper is hidden before selecting broker
  await vipPage.assertBrokerAgentVipHidden();

  // Select Broker/Agent and enable VIP switch
  await vipPage.selectBrokerAgent();
  await vipPage.enableBrokerAgentVipSwitch();

  // Open Add New Company modal, assert VIP switch off, then close
  await vipPage.openAddNewCompanyModal();
  await vipPage.assertExternalCompanyVipSwitchOff();
  await vipPage.closeAddNewCompanyModal();

  await createClaimPage.selectRandomLossCategoryExceptFirst();
  await createClaimPage.selectRandomRequiredService();
  await createClaimPage.setDateOfLoss(claimDetail.dateOfLoss);
  await createClaimPage.enterLossDescription(claimDetail.lossDescription);
  await createClaimPage.enterYearBuilt(claimDetail.yearBuilt);
  await createClaimPage.saveClaim();
  await createClaimPage.selectProgram();
  await createClaimPage.createClaim();

  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(/JobSlideBoard|ClaimSlideBoard/, { timeout: 30000 });
  await page.waitForLoadState('networkidle');

  // Assert all VIP icons visible on slideboard
  await vipPage.assertSlideboardVipIcons();

  // Edit Job Information - disable Broker/Agent VIP
  await vipPage.openEditJobInformation();
  await vipPage.navigateToExternalParticipantsTab();
  await vipPage.assertBrokerAgentVipInEditModal();
  await vipPage.disableBrokerAgentVipSwitch();
  await vipPage.saveEditJobModal();
  await expect(vipPage.vipIconOnBrokerAgent).toBeHidden({ timeout: 10000 });

  // Edit Claim Information - disable Referred By VIP
  await vipPage.openEditClaimInformation();
  await vipPage.assertReferredByVipOnAndDisable();
  await vipPage.saveEditClaimModal();
  await expect(vipPage.vipIconOnReferredBy).toBeHidden({ timeout: 10000 });

  // Edit Customer Information - assert Individual VIP on, disable, save
  await vipPage.openEditCustomerInformation();
  await vipPage.assertIndividualVipOnAndDisable();
  await vipPage.saveEditCustomerModal();
  await expect(vipPage.vipIconOnJobInfoPanel).toBeHidden();
  await expect(vipPage.vipCustomerBatchFirst).toBeHidden();

  // Re-open Edit Customer, assert Individual VIP off, switch to Company, enable VIP, save
  await vipPage.openEditCustomerAgain();
  await vipPage.switchToCompanyCustomer();
  await vipPage.assertCustomerAsCompanyVipSwitchesOff();
  await vipPage.fillReasonForChange(claimDetail.reasonForChange);
  await vipPage.fillCompanyCustomerCombobox(claimDetail.companyName);
  await vipPage.enableCompanyVipSwitches();
  await vipPage.saveCustomerModal();
  await vipPage.assertVipIconsAfterCompanySwitch();

  // Open Edit Company Information, disable company VIP switches, save
  await vipPage.openEditCompanyInformation();
  await vipPage.disableCompanyVipSwitches();
  await vipPage.saveCustomerModal();
  await vipPage.assertVipIconsHiddenAfterCompanyVipOff();
});
