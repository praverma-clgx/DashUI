import { expect } from '@playwright/test';

export class CreateNewJobVIPPage {
  constructor(page) {
    this.page = page;

    // Create Job - VIP Referred By
    this.vipReferredByContainer = page.locator(
      '#ctl00_ContentPlaceHolder1_JobParentInformation_GenaralInfo_VIPReferredBy',
    );
    this.vipReferredBySpan = this.vipReferredByContainer.locator(
      'span.vip-label[title="To encourage exceptional customer service, designate this contact as a VIP"]',
    );
    this.vipReferredBySwitch = page.locator(
      '#ctl00_ContentPlaceHolder1_JobParentInformation_GenaralInfo_RadSwitch_VIPReferredBy',
    );

    // Create Job - Customer Type Radio Buttons
    this.companyCustomerRadioButton = page.locator(
      '#ctl00_ContentPlaceHolder1_JobParentInformation_RadioButton_CompanyCustomer',
    );
    this.individualCustomerRadioButton = page.locator(
      '#ctl00_ContentPlaceHolder1_JobParentInformation_RadioButton_IndividualCustomer',
    );
    this.companyCustomerLabel = page.getByText('Customer Company', { exact: true });

    // Create Job - Company Customer VIP Switches
    this.vipCompanyCustomerSwitch = page.locator(
      '#ctl00_ContentPlaceHolder1_JobParentInformation_RadSwitch_VIPCompanyCustomer',
    );
    this.vipCompanyContactPersonToggle = page.locator(
      '#ctl00_ContentPlaceHolder1_JobParentInformation_RadSwitch_VIPCompanyContact',
    );

    // Create Job - Individual Customer VIP Switch
    this.vipIndividualSwitch = page.locator(
      '#ctl00_ContentPlaceHolder1_JobParentInformation_RadSwitch_VIPIndividualCustomer',
    );

    // Create Job - External Participants (Broker/Agent)
    this.brokerAgentInput = page.locator(
      '#ctl00_ContentPlaceHolder1_JobParentInformation_ExternalParticipants_SystemCompanyParticipantCombobox_2_Input',
    );
    this.brokerAgentDropdown = page.locator(
      '#ctl00_ContentPlaceHolder1_JobParentInformation_ExternalParticipants_SystemCompanyParticipantCombobox_2_DropDown .rcbList .rcbItem:nth-child(2)',
    );
    this.vipBrokerAgentWrapper = page.locator(
      '#ctl00_ContentPlaceHolder1_JobParentInformation_ExternalParticipants_SystemCompanyParticipantVIPWrapper_2',
    );
    this.brokerAgentSwitchButton = page.locator(
      '#ctl00_ContentPlaceHolder1_JobParentInformation_ExternalParticipants_SystemCompanyParticipantSwitch_2',
    );
    this.addExternalParticipantButton = page.locator(
      '#ctl00_ContentPlaceHolder1_JobParentInformation_ExternalParticipants_SystemCompanyParticipantAnchor_2',
    );

    // Add New Company Modal
    this.addNewCompanyModal = page.locator(
      '#RadWindowWrapper_ctl00_ContentPlaceHolder1_JobParentInformation_RadWindow_Common',
    );
    this.addNewCompanyFrameLocator = page.frameLocator('iframe[name="RadWindow_Common"]');
    this.vipExternalCompanySwitch = this.addNewCompanyFrameLocator.locator(
      '#RadSwitch_VIPExternalCompany',
    );
    this.addNewCompanyCloseButton = this.addNewCompanyModal.locator('.rwCloseButton');

    // Slideboard VIP Icons
    this.linkJobToAssignmentButton = page.locator('#link_job_to_assignment');
    this.exportAsAssignmentButton = page.locator('#ctl00_ContentPlaceHolder1_export_as_assignment');
    this.vipIconOnJobTabLinkPanel = page.locator('#JobTabLinkPanel .vipTitle');
    this.vipIconOnCustomerInformation = page.locator(
      '#ctl00_ContentPlaceHolder1_dockCustomerInformation_C .vipCustomerBatch',
    );
    this.vipIconOnBrokerAgent = page.locator(
      '#DivisionExternalParticipantsPanel .vipCustomerBatch',
    );
    this.vipIconOnCustomerInformationCard = page.locator(
      '#ctl00_ContentPlaceHolder1_dockClaimInformation_C .vipCustomerBatch',
    );

    // Edit Job Information
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

    // Edit Claim Information
    this.claimInfoEditIcon = page.locator(
      '#ctl00_ContentPlaceHolder1_dockClaimInformation_T_link_EditClaim',
    );
    this.editClaimModal = page.locator(
      '#RadWindowWrapper_ctl00_ContentPlaceHolder1_RadWindow_Common',
    );
    this.editClaimIFrame = page.frameLocator('iframe[name="RadWindow_Common"]');
    this.vipReferredBySwitchInClaimModal = this.editClaimIFrame.locator('#RadSwitch_VIPReferredBy');
    this.saveButtonInEditClaim = this.editClaimIFrame.locator('#Button_Save_input');

    // Edit Customer Information
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
      .locator(
        '#ctl00_ContentPlaceHolder1_dockCustomerInformation_C .vipCustomerBatch.vipCustomerPanel',
      )
      .nth(1);
    this.editCompanyModalTitle = page.locator('.rwTitlebar em', {
      hasText: 'Edit Company Information',
    });
  }

  // ─── Create Job: VIP Referred By ───────────────────────────────────────────

  async assertVipReferredByVisible() {
    await expect(this.vipReferredByContainer).toBeVisible();
    await expect(this.vipReferredBySpan).toBeVisible();
  }

  async enableVipReferredBySwitch() {
    const cls = await this.vipReferredBySwitch.getAttribute('class');
    if (cls && cls.includes('k-switch-off')) {
      await this.vipReferredBySwitch.click();
    }
  }

  // ─── Create Job: Customer Type ─────────────────────────────────────────────

  async selectCompanyCustomerType() {
    await this.companyCustomerRadioButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.companyCustomerRadioButton.click();
    await this.companyCustomerLabel.waitFor({ state: 'visible', timeout: 10000 });
    await expect(this.companyCustomerLabel).toBeVisible();
  }

  async assertCompanyCustomerVipSwitchesOff() {
    await expect(this.vipCompanyCustomerSwitch).toBeVisible();
    await expect(this.vipCompanyCustomerSwitch).toHaveClass(/k-switch-off/);
    await expect(this.vipCompanyContactPersonToggle).toBeVisible();
    await expect(this.vipCompanyContactPersonToggle).toHaveClass(/k-switch-off/);
  }

  async selectIndividualCustomerType() {
    await this.individualCustomerRadioButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.individualCustomerRadioButton.click();
  }

  async assertIndividualCustomerVipSwitchOff() {
    await this.vipIndividualSwitch.waitFor({ state: 'visible', timeout: 10000 });
    await expect(this.vipIndividualSwitch).toBeVisible();
    await expect(this.vipIndividualSwitch).toHaveClass(/k-switch-off/);
  }

  async enableIndividualCustomerVipSwitch() {
    const cls = await this.vipIndividualSwitch.getAttribute('class');
    if (cls && cls.includes('k-switch-off')) {
      await this.vipIndividualSwitch.click();
    }
  }

  // ─── Create Job: External Participants (Broker/Agent) ──────────────────────

  async selectBrokerAgent() {
    await this.brokerAgentInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.brokerAgentInput.click();
    await this.brokerAgentDropdown.waitFor({ state: 'visible', timeout: 10000 });
    await this.brokerAgentDropdown.click();
  }

  async assertBrokerAgentVipVisible() {
    await expect(this.vipBrokerAgentWrapper).toBeVisible();
  }

  async enableBrokerAgentVipSwitch() {
    const cls = await this.brokerAgentSwitchButton.getAttribute('class');
    if (cls && cls.includes('k-switch-off')) {
      await this.brokerAgentSwitchButton.click();
    }
  }

  // ─── Create Job: Add New Company Modal ─────────────────────────────────────

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

  // ─── Slideboard: VIP Icon Assertions ───────────────────────────────────────

  async assertSlideboardVipIcons() {
    await expect(this.linkJobToAssignmentButton).toBeVisible();
    await expect(this.exportAsAssignmentButton).toBeVisible();
    await expect(this.vipIconOnJobTabLinkPanel).toBeVisible();
    await expect(this.vipIconOnCustomerInformation).toBeVisible();
    await expect(this.vipIconOnBrokerAgent).toBeVisible();
    await expect(this.vipIconOnCustomerInformationCard).toBeVisible();
  }

  // ─── Edit Job Information ───────────────────────────────────────────────────

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
    await this.editJobModalWrapper.waitFor({ state: 'hidden', timeout: 60000 });
    await this.page.waitForLoadState('networkidle', { timeout: 90000 });
  }

  // ─── Edit Claim Information ─────────────────────────────────────────────────

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
    await this.editClaimModal.waitFor({ state: 'hidden', timeout: 15000 });
    await this.page.waitForLoadState('networkidle', { timeout: 90000 });
  }

  // ─── Edit Customer Information (Individual → Disable VIP) ──────────────────

  async openEditCustomerInformation() {
    await this.customerInformationEditButton.click();
    await this.page.waitForLoadState('networkidle');
    await expect(this.radWindow).toBeVisible({ timeout: 30000 });
    await expect(this.page.locator('em', { hasText: 'Edit Customer Information' })).toBeVisible();
    await expect(this.editCustomerIframeLocator.getByText(/Customer Information/i)).toBeVisible({
      timeout: 30000,
    });
  }

  async assertIndividualVipInIframeAndDisable() {
    await this.vipIndividualSwitchInIframe.waitFor({ state: 'visible', timeout: 30000 });
    await expect(this.vipIndividualSwitchInIframe).toBeVisible();
    const cls = await this.vipIndividualSwitchInIframe.getAttribute('class');
    if (cls && cls.includes('k-switch-on')) {
      await this.vipIndividualSwitchInIframe.click();
    }
    await expect(this.vipIndividualSwitchInIframe).toHaveClass(/k-switch-off/);
  }

  async saveEditCustomerModal() {
    await expect(this.saveButtonInEditCustomer).toBeVisible();
    await this.saveButtonInEditCustomer.click();
    await expect(this.radWindow).toBeHidden();
    await this.page.waitForLoadState('networkidle');
  }

  // ─── Edit Customer Information (Switch to Company) ─────────────────────────

  async openEditCustomerAgain() {
    await this.customerInformationEditButton.waitFor({ state: 'visible', timeout: 30000 });
    await this.customerInformationEditButton.click();
    await this.page.waitForLoadState('networkidle');
    await expect(this.radWindow).toBeVisible({ timeout: 30000 });
    await expect(this.page.locator('em', { hasText: 'Edit Customer Information' })).toBeVisible();
    await this.page.waitForLoadState('networkidle', { timeout: 90000 });
    await expect(this.vipIndividualSwitchInIframe).toBeVisible();
  }

  async switchToCompanyCustomer() {
    await this.switchCompanyButton.waitFor({ state: 'visible', timeout: 90000 });
    // Use frame.evaluate to trigger a native JS click, bypassing viewport constraints
    // that occur when the button is inside a RadWindow iframe clipped by the page viewport
    const frame = this.page.frame({ name: 'RadWindow_Common' });

    // Set up a dialog listener that verifies a confirm dialog appears and accepts it
    let dialogAccepted = false;
    const dialogHandler = async (dialog) => {
      if (dialog.type() === 'confirm') {
        dialogAccepted = true;
        await dialog.accept();
      }
    };
    this.page.once('dialog', dialogHandler);

    if (frame) {
      await frame.evaluate(() => document.getElementById('buttonSwitchToCompany').click());
    } else {
      await this.switchCompanyButton.click({ force: true });
    }

    // Wait briefly for the dialog to have fired, then validate it was shown
    await this.page.waitForTimeout(2000);
    if (!dialogAccepted) {
      this.page.off('dialog', dialogHandler);
      throw new Error(
        'Expected a confirm dialog from "Switch to Company" button, but none appeared',
      );
    }
    await expect(
      this.editCustomerIframeLocator.getByText(/Customer As Company Information/i),
    ).toBeVisible({ timeout: 90000 });
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
    await this.customerCompanyCombobox.pressSequentially(companyName, { delay: 100 });
    const companyDropdownItem = this.editCustomerIframeLocator.locator('.rcbList td', {
      hasText: companyName,
    });
    await companyDropdownItem.waitFor({ state: 'visible', timeout: 30000 });
    await companyDropdownItem.click();
    await this.page.waitForLoadState('domcontentloaded', { timeout: 30000 });
  }

  async enableCompanyVipSwitches() {
    await this.page.waitForTimeout(3000); // Wait for any UI updates after selecting company customer

    const companyCls = await this.vipCompanyCustomerEditSwitch.getAttribute('class');
    await expect(this.vipCompanyCustomerEditSwitch).toBeVisible();

    if (companyCls.includes('k-switch-off')) {
      await this.vipCompanyCustomerEditSwitch.click();
    }
    await expect(this.vipCompanyCustomerEditSwitch).toHaveClass(/k-switch-on/);
    await expect(this.vipCompanyContactPersonEditSwitch).toBeVisible();

    const contactCls = await this.vipCompanyContactPersonEditSwitch.getAttribute('class');
    if (contactCls.includes('k-switch-off')) {
      await this.vipCompanyContactPersonEditSwitch.click();
    }
    await expect(this.vipCompanyContactPersonEditSwitch).toHaveClass(/k-switch-on/);
  }

  async disableCompanyVipSwitches() {
    await this.page.waitForTimeout(3000); // Wait for any UI updates after selecting company customer
    const companyCls = await this.vipCompanyCustomerEditSwitch.getAttribute('class');
    await expect(this.vipCompanyCustomerEditSwitch).toBeVisible();
    if (companyCls.includes('k-switch-on')) {
      await this.vipCompanyCustomerEditSwitch.click();
    }
    await expect(this.vipCompanyCustomerEditSwitch).toHaveClass(/k-switch-off/);

    const contactCls = await this.vipCompanyContactPersonEditSwitch.getAttribute('class');
    await expect(this.vipCompanyContactPersonEditSwitch).toBeVisible();

    if (contactCls.includes('k-switch-on')) {
      await this.vipCompanyContactPersonEditSwitch.click();
    }
    await expect(this.vipCompanyContactPersonEditSwitch).toHaveClass(/k-switch-off/);
  }

  async saveCustomerModal() {
    await expect(this.saveButtonInEditCustomer).toBeVisible();
    await this.saveButtonInEditCustomer.click();
    await expect(this.radWindow).toBeHidden();
    await this.page.waitForLoadState('networkidle');
  }

  // ─── Post-company-switch VIP Icon Assertions ────────────────────────────────

  async assertVipIconsAfterCompanySwitch() {
    await expect(this.vipIconOnJobTabLinkPanel).toBeVisible();
    await expect(this.vipCustomerBatchFirst).toBeVisible();
    await expect(this.vipCustomerBatchSecond).toBeVisible();
  }

  async openEditCompanyInformation() {
    await this.customerInformationEditButton.click();
    await this.page.waitForLoadState('networkidle');
    await expect(this.radWindow).toBeVisible({ timeout: 30000 });
    await expect(this.editCompanyModalTitle).toBeVisible({ timeout: 60000 });
    await expect(
      this.editCustomerIframeLocator.getByText(/Customer As Company Information/i),
    ).toBeVisible({ timeout: 90000 });
  }

  async assertVipIconsHiddenAfterCompanyVipOff() {
    await expect(this.vipCustomerBatchFirst).toBeHidden();
    await expect(this.vipCustomerBatchSecond).toBeHidden();
  }
}
