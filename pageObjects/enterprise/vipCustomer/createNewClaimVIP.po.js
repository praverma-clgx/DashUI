import { expect } from '@playwright/test';

export class CreateNewClaimVIPPage {
  constructor(page) {
    this.page = page;

    // Create Claim - VIP Referred By
    this.vipReferredBySwitch = page.locator(
      '#ctl00_ContentPlaceHolder1_ProviderCreateClaim_RadSwitch_VIPReferredBy',
    );
    this.vipReferredByDiv = page.locator(
      '#ctl00_ContentPlaceHolder1_ProviderCreateClaim_VIPReferredBy',
    );
    this.vipLabelIndividualCustomer = page.locator(
      '#ctl00_ContentPlaceHolder1_ProviderCreateClaim_VIPReferredBy .vip-label',
    );

    // Create Claim - Customer Type Radio Buttons
    this.companyCustomerRadioButton = page.locator(
      '#ctl00_ContentPlaceHolder1_ProviderCreateClaim_RadioButton_CompanyCustomer',
    );
    this.companyCustomerLabel = page.locator(
      '#ctl00_ContentPlaceHolder1_ProviderCreateClaim_customerConpamyLabel',
    );
    this.individualCustomerRadioButton = page.locator(
      '#ctl00_ContentPlaceHolder1_ProviderCreateClaim_RadioButton_IndividualCustomer',
    );
    this.individualCustomerLabel = page.locator(
      '#ctl00_ContentPlaceHolder1_ProviderCreateClaim_CustomerLabel',
    );

    // Create Claim - VIP Switches
    this.vipCompanyCustomerSwitch = page.locator(
      '#ctl00_ContentPlaceHolder1_ProviderCreateClaim_RadSwitch_VIPCompanyCustomer',
    );
    this.vipIndividualCustomerSwitch = page.locator(
      '#ctl00_ContentPlaceHolder1_ProviderCreateClaim_RadSwitch_VIPIndividualCustomer',
    );

    // Create Claim - External Participants (Broker/Agent)
    this.vipBrokerAgentHiddenWrapper = page.locator(
      '#ctl00_ContentPlaceHolder1_JobParentInformation_ExternalParticipants_SystemCompanyParticipantVIPWrapper_2',
    );
    this.brokerAgentInput = page.locator(
      '#ctl00_ContentPlaceHolder1_ProviderCreateClaim_ExternalParticipants_SystemCompanyParticipantCombobox_2_Input',
    );
    this.brokerAgentDropdown = page.locator(
      '#ctl00_ContentPlaceHolder1_ProviderCreateClaim_ExternalParticipants_SystemCompanyParticipantCombobox_2_DropDown .rcbList .rcbItem:nth-child(2)',
    );
    this.brokerAgentSwitch = page.locator(
      '#ctl00_ContentPlaceHolder1_ProviderCreateClaim_ExternalParticipants_SystemCompanyParticipantSwitch_2',
    );
    this.addExternalParticipantButton = page.locator(
      '#ctl00_ContentPlaceHolder1_ProviderCreateClaim_ExternalParticipants_SystemCompanyParticipantAnchor_2',
    );

    // Add New Company Modal
    this.addNewCompanyModal = page.locator(
      '#RadWindowWrapper_ctl00_ContentPlaceHolder1_ProviderCreateClaim_window_Common',
    );
    this.addNewCompanyFrameLocator = page.frameLocator('iframe[name="window_Common"]');
    this.vipExternalCompanySwitch = this.addNewCompanyFrameLocator.locator(
      '#RadSwitch_VIPExternalCompany',
    );
    this.addNewCompanyCloseButton = this.addNewCompanyModal.locator('.rwCloseButton');

    // Slideboard VIP Icons
    this.vipIconOnJobInfoPanel = page.locator('#JobTabLinkPanel .vipCustomerBatch');
    this.vipIconOnClaimInfoPanel = page.locator(
      '#ctl00_ContentPlaceHolder1_dockAdminClaimInformation_C .vipCustomerBatch',
    );
    this.vipIconOnCustomerInfoPanel = page.locator(
      '#ctl00_ContentPlaceHolder1_dockCustomerInformation_C .vipCustomerBatch',
    );
    this.vipIconOnBrokerAgent = page.locator(
      '#DivisionExternalParticipantsPanel .vipCustomerBatch',
    );
    this.vipIconOnReferredBy = page.locator(
      '#ctl00_ContentPlaceHolder1_dockClaimInformation_C .vipCustomerBatch',
    );

    // Edit Job Information Modal
    this.jobInformationEditButton = page.locator('#img_EditDivision');
    this.editJobModalTitle = page.locator('.rwTitlebar em', { hasText: 'Edit Job Information' });
    this.editJobModalWrapper = page.locator(
      '#RadWindowWrapper_ctl00_ContentPlaceHolder1_RadWindow_Common',
    );
    this.editJobFrameLocator = page.frameLocator('iframe[name="RadWindow_Common"]');
    this.externalParticipantTab = this.editJobFrameLocator.locator(
      '#RadTabJobInformation li.rtsLI.rtsLast .rtsTxt',
      { hasText: 'External Participants' },
    );
    this.brokerAgentExternalParticipant = this.editJobFrameLocator.locator(
      '#ExternalParticipants_firstHalfParticipants',
      { hasText: 'Broker/Agent' },
    );
    this.vipBrokerAgentSwitchInModal = this.editJobFrameLocator.locator(
      '#ExternalParticipants_SystemCompanyParticipantVIPWrapper_2',
    );
    this.brokerAgentVipSwitch = this.editJobFrameLocator.locator(
      '#ExternalParticipants_SystemCompanyParticipantSwitch_2',
    );
    this.saveButtonInEditJob = this.editJobFrameLocator.locator('#button_Save_input');

    // Edit Claim Information Modal
    this.claimInfoEditIcon = page.locator(
      '#ctl00_ContentPlaceHolder1_dockClaimInformation_T_link_EditClaim',
    );
    this.editClaimModal = page.locator(
      '#RadWindowWrapper_ctl00_ContentPlaceHolder1_RadWindow_Common',
    );
    this.editClaimIFrame = page.frameLocator('iframe[name="RadWindow_Common"]');
    this.vipReferredBySwitchInClaimModal = this.editClaimIFrame.locator('#RadSwitch_VIPReferredBy');
    this.saveButtonInEditClaim = this.editClaimIFrame.locator('#Button_Save_input');

    // Edit Customer Information Modal
    this.customerInformationEditButton = page.locator('#img_CustomerEdit');
    this.radWindow = page.locator('#RadWindowWrapper_ctl00_ContentPlaceHolder1_RadWindow_Common');
    this.editCustomerIframeLocator = page.frameLocator('iframe[name="RadWindow_Common"]');
    this.vipIndividualSwitchInIframe = this.editCustomerIframeLocator.locator(
      '#RadSwitch_VIPIndividualCustomer',
    );
    this.switchCompanyButton = this.editCustomerIframeLocator.locator('#buttonSwitchToCompany');
    this.saveButtonInEditCustomer = this.editCustomerIframeLocator.locator('#button_Save');

    // Edit Company Customer (after switching to company)
    this.vipCompanyCustomerEditSwitch = this.editCustomerIframeLocator.locator(
      '#RadSwitch_VIPCompanyCustomer',
    );
    this.vipCompanyContactPersonEditSwitch = this.editCustomerIframeLocator.locator(
      '#RadSwitch_VIPCompanyContact',
    );
    this.reasonForChangeInput = this.editCustomerIframeLocator.locator('#textBox_ReasonForChange');
    this.customerCompanyCombobox =
      this.editCustomerIframeLocator.locator('#comboBox_Company_Input');

    // Post-company-switch VIP icons on slideboard
    this.vipCustomerBatchFirst = page
      .locator('#ctl00_ContentPlaceHolder1_dockCustomerInformation .vipCustomerBatch')
      .nth(0);
    this.vipCustomerBatchSecond = page
      .locator('#ctl00_ContentPlaceHolder1_dockCustomerInformation .vipCustomerBatch')
      .nth(1);
    this.editCompanyModalTitle = page.locator('.rwTitlebar em', {
      hasText: 'Edit Company Information',
    });
  }

  // ─── Create Claim: VIP Referred By ─────────────────────────────────────────

  async assertVipReferredBySwitchVisible() {
    await expect(this.vipReferredBySwitch).toBeVisible();
  }

  async enableVipReferredBySwitch() {
    const cls = await this.vipReferredBySwitch.getAttribute('class');
    if (cls && cls.includes('k-switch-off')) {
      await this.vipReferredBySwitch.click();
      await expect(this.vipReferredBySwitch).toHaveClass(/k-switch-on/);
    }
  }

  async assertVipReferredByDivVisible() {
    await this.vipReferredByDiv.waitFor({ state: 'visible', timeout: 10000 });
    await expect(this.vipReferredByDiv).toBeVisible();
  }

  // ─── Create Claim: Customer Type ────────────────────────────────────────────

  async selectCompanyCustomerType() {
    await this.companyCustomerRadioButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.companyCustomerRadioButton.evaluate((el) => el.click());
    await this.companyCustomerLabel.waitFor({ state: 'visible', timeout: 10000 });
    await expect(this.companyCustomerLabel).toHaveText('Customer As Company Information', {
      exact: true,
    });
  }

  async assertCompanyCustomerVipSwitchOff() {
    await expect(this.vipCompanyCustomerSwitch).toBeVisible();
    await expect(this.vipCompanyCustomerSwitch).toHaveClass(/k-switch-off/);
  }

  async selectIndividualCustomerType() {
    await this.individualCustomerRadioButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.individualCustomerRadioButton.evaluate((el) => el.click());
    await this.individualCustomerLabel.waitFor({ state: 'visible', timeout: 10000 });
  }

  async assertIndividualCustomerVipSwitchVisible() {
    await expect(this.vipIndividualCustomerSwitch).toBeVisible();
  }

  async enableIndividualCustomerVipSwitch() {
    const cls = await this.vipIndividualCustomerSwitch.getAttribute('class');
    if (cls && cls.includes('k-switch-off')) {
      await this.vipIndividualCustomerSwitch.click();
      await expect(this.vipIndividualCustomerSwitch).toHaveClass(/k-switch-on/);
    }
  }

  async assertVipLabelTooltip() {
    await this.vipLabelIndividualCustomer.waitFor({ state: 'visible', timeout: 5000 });
    await expect(this.vipLabelIndividualCustomer).toHaveAttribute(
      'title',
      'To encourage exceptional customer service, designate this contact as a VIP',
    );
  }

  // ─── Create Claim: External Participants (Broker/Agent) ─────────────────────

  async assertBrokerAgentVipHidden() {
    await expect(this.vipBrokerAgentHiddenWrapper).toBeHidden();
  }

  async selectBrokerAgent() {
    await this.brokerAgentInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.brokerAgentInput.click();
    await this.brokerAgentDropdown.waitFor({ state: 'visible', timeout: 10000 });
    await this.brokerAgentDropdown.click();
    await expect(this.brokerAgentSwitch).toBeVisible();
  }

  async enableBrokerAgentVipSwitch() {
    const cls = await this.brokerAgentSwitch.getAttribute('class');
    if (cls && cls.includes('k-switch-off')) {
      await this.brokerAgentSwitch.click();
      await expect(this.brokerAgentSwitch).toHaveClass(/k-switch-on/);
    }
  }

  // ─── Create Claim: Add New Company Modal ─────────────────────────────────────

  async openAddNewCompanyModal() {
    await this.addExternalParticipantButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.addExternalParticipantButton.click();
    await this.page.waitForLoadState('networkidle', { timeout: 60000 });
    await expect(this.addNewCompanyModal).toBeVisible({ timeout: 30000 });
    await expect(
      this.addNewCompanyModal.locator('em', { hasText: 'Add New Company' }),
    ).toBeVisible();
  }

  async assertExternalCompanyVipSwitchOff() {
    await this.vipExternalCompanySwitch.waitFor({ state: 'visible', timeout: 30000 });
    await expect(this.vipExternalCompanySwitch).toHaveClass(/k-switch-off/);
  }

  async closeAddNewCompanyModal() {
    await expect(this.addNewCompanyCloseButton).toBeVisible();
    await this.addNewCompanyCloseButton.click();
    await expect(this.addNewCompanyModal).toBeHidden({ timeout: 30000 });
  }

  // ─── Slideboard: VIP Icon Assertions ────────────────────────────────────────

  async assertSlideboardVipIcons() {
    await expect(this.vipIconOnJobInfoPanel).toBeVisible({ timeout: 30000 });
    await expect(this.vipIconOnClaimInfoPanel).toBeVisible({ timeout: 30000 });
    await expect(this.vipIconOnCustomerInfoPanel).toBeVisible({ timeout: 30000 });
    await expect(this.vipIconOnBrokerAgent).toBeVisible({ timeout: 10000 });
    await expect(this.vipIconOnReferredBy).toBeVisible({ timeout: 10000 });
  }

  // ─── Edit Job Information ────────────────────────────────────────────────────

  async openEditJobInformation() {
    await this.jobInformationEditButton.waitFor({ state: 'visible' });
    await this.jobInformationEditButton.click();
    await this.page.waitForLoadState('networkidle');
    await expect(this.editJobModalTitle).toBeVisible({ timeout: 30000 });
    await expect(this.editJobModalWrapper).toBeVisible({ timeout: 30000 });
    await expect(this.page.locator('iframe[name="RadWindow_Common"]')).toBeVisible({
      timeout: 30000,
    });
  }

  async navigateToExternalParticipantsTab() {
    await this.externalParticipantTab.waitFor({ state: 'visible', timeout: 10000 });
    await this.externalParticipantTab.click();
    await expect(this.brokerAgentExternalParticipant).toBeVisible({ timeout: 30000 });
  }

  async assertBrokerAgentVipInEditModal() {
    await expect(this.vipBrokerAgentSwitchInModal).toBeVisible({ timeout: 10000 });
    await expect(this.brokerAgentVipSwitch).toBeVisible({ timeout: 10000 });
    await expect(this.brokerAgentVipSwitch).toHaveClass(/k-switch-on/);
  }

  async disableBrokerAgentVipSwitch() {
    const cls = await this.brokerAgentVipSwitch.getAttribute('class');
    if (cls && cls.includes('k-switch-on')) {
      await this.brokerAgentVipSwitch.click();
    }
    await expect(this.brokerAgentVipSwitch).toHaveClass(/k-switch-off/);
  }

  async saveEditJobModal() {
    await expect(this.saveButtonInEditJob).toBeVisible({ timeout: 10000 });
    await this.saveButtonInEditJob.click();
    await this.editJobModalWrapper.waitFor({ state: 'hidden', timeout: 30000 });
    await this.page.waitForLoadState('networkidle');
  }

  // ─── Edit Claim Information ───────────────────────────────────────────────────

  async openEditClaimInformation() {
    await this.claimInfoEditIcon.waitFor({ state: 'visible', timeout: 30000 });
    await this.claimInfoEditIcon.click();
    await this.editClaimModal.waitFor({ state: 'visible', timeout: 30000 });
    await expect(
      this.editClaimModal.locator('em', { hasText: 'Edit Claim Information' }),
    ).toBeVisible({ timeout: 30000 });
    await expect(this.page.locator('iframe[name="RadWindow_Common"]')).toBeVisible({
      timeout: 30000,
    });
  }

  async assertReferredByVipOnAndDisable() {
    await expect(this.vipReferredBySwitchInClaimModal).toBeVisible({ timeout: 10000 });
    await expect(this.vipReferredBySwitchInClaimModal).toHaveClass(/k-switch-on/);
    const cls = await this.vipReferredBySwitchInClaimModal.getAttribute('class');
    if (cls && cls.includes('k-switch-on')) {
      await this.vipReferredBySwitchInClaimModal.click();
    }
    await expect(this.vipReferredBySwitchInClaimModal).toHaveClass(/k-switch-off/);
  }

  async saveEditClaimModal() {
    await this.saveButtonInEditClaim.waitFor({ state: 'visible', timeout: 10000 });
    await this.saveButtonInEditClaim.click();
    await this.editClaimModal.waitFor({ state: 'hidden', timeout: 60000 });
    await this.page.waitForLoadState('networkidle');
  }

  // ─── Edit Customer Information (Individual → Disable VIP) ────────────────────

  async openEditCustomerInformation() {
    await this.customerInformationEditButton.waitFor({ state: 'visible', timeout: 30000 });
    await this.customerInformationEditButton.click();
    await this.page.waitForLoadState('networkidle');
    await expect(this.radWindow).toBeVisible({ timeout: 30000 });
    await expect(this.page.locator('em', { hasText: 'Edit Customer Information' })).toBeVisible();
    await this.page.waitForLoadState('networkidle', { timeout: 90000 });
  }

  async assertIndividualVipOnAndDisable() {
    await expect(this.vipIndividualSwitchInIframe).toBeVisible();
    await expect(this.vipIndividualSwitchInIframe).toHaveClass(/k-switch-on/);
    await this.vipIndividualSwitchInIframe.click();
    await expect(this.vipIndividualSwitchInIframe).toHaveClass(/k-switch-off/);
    await this.switchCompanyButton.waitFor({ state: 'visible', timeout: 90000 });
  }

  async saveEditCustomerModal() {
    await expect(this.saveButtonInEditCustomer).toBeVisible();
    await this.saveButtonInEditCustomer.click();
    await expect(this.radWindow).toBeHidden();
    await this.page.waitForLoadState('networkidle', { timeout: 90000 });
  }

  // ─── Edit Customer Information (Re-open → Switch to Company) ─────────────────

  async openEditCustomerAgain() {
    await this.customerInformationEditButton.waitFor({ state: 'visible', timeout: 30000 });
    await this.customerInformationEditButton.click();
    await this.page.waitForLoadState('networkidle');
    await expect(this.radWindow).toBeVisible({ timeout: 30000 });
    await expect(this.page.locator('em', { hasText: 'Edit Customer Information' })).toBeVisible();
    await this.page.waitForLoadState('networkidle', { timeout: 90000 });
    await expect(this.vipIndividualSwitchInIframe).toBeVisible();
    await expect(this.vipIndividualSwitchInIframe).toHaveClass(/k-switch-off/);
  }

  async switchToCompanyCustomer() {
    await this.switchCompanyButton.waitFor({ state: 'visible', timeout: 90000 });
    await this.switchCompanyButton.evaluate((element) => {
      element.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
    });
    await this.page.waitForTimeout(5000);
    await Promise.all([
      this.page.waitForEvent('dialog').then((dialog) => dialog.accept()),
      this.switchCompanyButton.click({ force: true }),
    ]);
    await this.page.waitForTimeout(10000);
    await expect(
      this.editCustomerIframeLocator.getByText(/Customer As Company Information/i),
    ).toBeVisible({ timeout: 30000 });
  }

  async assertCustomerAsCompanyVipSwitchesOff() {
    await expect(this.vipCompanyCustomerEditSwitch).toBeVisible();
    await expect(this.vipCompanyCustomerEditSwitch).toHaveClass(/k-switch-off/);
    await expect(this.vipCompanyContactPersonEditSwitch).toBeVisible();
    await expect(this.vipCompanyContactPersonEditSwitch).toHaveClass(/k-switch-off/);
  }

  async fillReasonForChange(reason) {
    await expect(this.reasonForChangeInput).toBeVisible();
    await this.reasonForChangeInput.click();
    await this.reasonForChangeInput.fill(reason);
  }

  async fillCompanyCustomerCombobox(companyName) {
    await expect(this.customerCompanyCombobox).toBeVisible();
    await this.customerCompanyCombobox.click();
    await this.customerCompanyCombobox.clear();
    for (const char of companyName) {
      await this.customerCompanyCombobox.type(char);
      await this.page.waitForTimeout(300);
    }
    const companyDropdownItem = this.editCustomerIframeLocator.locator('.rcbList td', {
      hasText: companyName,
    });
    await companyDropdownItem.waitFor({ state: 'visible', timeout: 30000 });
    await companyDropdownItem.click();
    await this.page.waitForTimeout(10000);
  }

  async enableCompanyVipSwitches() {
    const companyCls = await this.vipCompanyCustomerEditSwitch.getAttribute('class');
    if (companyCls && companyCls.includes('k-switch-off')) {
      await this.vipCompanyCustomerEditSwitch.click();
    }
    await expect(this.vipCompanyCustomerEditSwitch).toHaveClass(/k-switch-on/);

    const contactCls = await this.vipCompanyContactPersonEditSwitch.getAttribute('class');
    if (contactCls && contactCls.includes('k-switch-off')) {
      await this.vipCompanyContactPersonEditSwitch.click();
    }
    await expect(this.vipCompanyContactPersonEditSwitch).toHaveClass(/k-switch-on/);
  }

  async saveCustomerModal() {
    await expect(this.saveButtonInEditCustomer).toBeVisible();
    await this.saveButtonInEditCustomer.click();
    await expect(this.radWindow).toBeHidden();
    await this.page.waitForLoadState('networkidle');
  }

  // ─── Post-company-switch VIP Icon Assertions ─────────────────────────────────

  async assertVipIconsAfterCompanySwitch() {
    await expect(this.vipIconOnJobInfoPanel).toBeVisible();
    await expect(this.vipCustomerBatchFirst).toBeVisible();
    await expect(this.vipCustomerBatchSecond).toBeVisible();
  }

  // ─── Edit Company Information (Disable VIP) ───────────────────────────────────

  async openEditCompanyInformation() {
    await this.customerInformationEditButton.waitFor({ state: 'visible', timeout: 90000 });
    await this.customerInformationEditButton.click();
    await expect(this.radWindow).toBeVisible({ timeout: 90000 });
    await expect(this.editCompanyModalTitle).toBeVisible({ timeout: 90000 });
    await this.page.waitForLoadState('networkidle', { timeout: 90000 });
    await expect(
      this.editCustomerIframeLocator.getByText(/Customer As Company Information/i),
    ).toBeVisible({ timeout: 30000 });
  }

  async disableCompanyVipSwitches() {
    await expect(this.vipCompanyCustomerEditSwitch).toBeVisible();
    await expect(this.vipCompanyCustomerEditSwitch).toHaveClass(/k-switch-on/);
    await this.vipCompanyCustomerEditSwitch.click();
    await expect(this.vipCompanyCustomerEditSwitch).toHaveClass(/k-switch-off/);

    await expect(this.vipCompanyContactPersonEditSwitch).toBeVisible();
    await expect(this.vipCompanyContactPersonEditSwitch).toHaveClass(/k-switch-on/);
    await this.vipCompanyContactPersonEditSwitch.click();
    await expect(this.vipCompanyContactPersonEditSwitch).toHaveClass(/k-switch-off/);
  }

  // ─── Post-company-disable VIP Icon Assertions ─────────────────────────────────

  async assertVipIconsHiddenAfterCompanyVipOff() {
    await expect(this.vipIconOnJobInfoPanel).toBeHidden();
    await expect(this.vipCustomerBatchFirst).toBeHidden();
    await expect(this.vipCustomerBatchSecond).toBeHidden();
  }
}
