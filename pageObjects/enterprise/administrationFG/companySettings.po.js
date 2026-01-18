/**
 * @typedef {Object} CompanySettingsLocatorsType
 * @property {string} administrationMenu
 * @property {string} menuContainer
 * @property {string} companySettingsMenuOption
 * @property {string} companyDisplayNameLabel
 * @property {string} companyDisplayNameText
 * @property {string} companyDisplayNameInput
 * @property {string} companyDisplayNameSaveBtn
 * @property {string} companyDisplayNameCancelBtn
 * @property {string} compensationPlansLabel
 * @property {string} compensationPlansText
 * @property {string} compensationPlansDeleteBtn
 * @property {string} compensationPlansChangeStatusBtn
 * @property {string} addNewCompensationPlanBtn
 * @property {string} planNameGridHeader
 * @property {string} minCompanyGrossMarginGridHeader
 * @property {string} saleCommissionGridHeader
 * @property {string} shareOfProfitGridHeader
 * @property {string} profitBelowMinMarginGridHeader
 * @property {string} maxSaleCommissionedGridHeader
 * @property {string} createSurveyLabel
 * @property {string} qualityQuestionnaireText
 * @property {string} dataImportToolLabel
 * @property {string} dataImportToolText
 * @property {string} companyContactsDownloadTemplateBtn
 * @property {string} companyContactsViewHistoryBtn
 * @property {string} companyContactsStartImportBtn
 * @property {string} emailDistributionListLabel
 * @property {string} distributionListText
 * @property {string} backToEmailSectionBtn
 * @property {string} addNewRecordEMailBtn
 * @property {string} distributionListGridHeader
 * @property {string} emailDistributionGridRefreshBtn
 * @property {string} equipmentTypeLabel
 * @property {string} equipmentTypeText
 * @property {string} equipmentTypeAddNewBtn
 * @property {string} equipmentTypeRefreshBtn
 * @property {string} equipmentTypeGridHeader
 * @property {string} jobTitleLabel
 * @property {string} jobTitleText
 * @property {string} addNewJobTitleBtn
 * @property {string} jobTitleGridHeader
 * @property {string} locationAndTruckLabel
 * @property {string} locationAndTruckText
 * @property {string} locationAndTruckAddNewBtn
 * @property {string} locationAndTruckRefreshBtn
 * @property {string} noteVisibilityConfigurationLabel
 * @property {string} visibilityText
 * @property {string} notificationsLabel
 * @property {string} generalNotificationSettingsText
 * @property {string} officeLabel
 * @property {string} viewEditOfficeLocationsText
 * @property {string} presentProgressNotificationLabel
 * @property {string} presetProgressNotificationText
 * @property {string} standardNoteLabel
 * @property {string} standardNotesText
 * @property {string} standardNoteDeleteBtn
 * @property {string} standardNoteChangeStatusBtn
 */

/** @type {CompanySettingsLocatorsType} */
const CompanySettingsLocators = {
  administrationMenu: "span:has-text('Administration')",
  menuContainer: 'div.rmSlide[style*="display: block"]',
  companySettingsMenuOption: 'ul.rmVertical.rmGroup.rmLevel1 li.rmItem a.rmLink span.rmText',
  companyDisplayNameLabel: '.sectionHeaderText',
  companyDisplayNameText: 'table.companyDisplayCss span',
  companyDisplayNameInput: '#ctl00_ContentPlaceHolder1_TextBoxCompanyDisplayName',
  companyDisplayNameSaveBtn: '#ctl00_ContentPlaceHolder1_ButtonSubmit',
  companyDisplayNameCancelBtn: '#ctl00_ContentPlaceHolder1_ButtonCancel',
  compensationPlansLabel: '.sectionHeaderText',
  compensationPlansText: '#ctl00_ContentPlaceHolder1_lbLossCategoryHeader',
  compensationPlansDeleteBtn: '#ctl00_ContentPlaceHolder1_DeleteButton',
  compensationPlansChangeStatusBtn: '#ctl00_ContentPlaceHolder1_StatusButton',
  addNewCompensationPlanBtn: '#ctl00_ContentPlaceHolder1_CompensationGrid_ctl00_TopPager a b',
  planNameGridHeader: '#ctl00_ContentPlaceHolder1_CompensationGrid_GridHeader tr th a',
  minCompanyGrossMarginGridHeader: '#ctl00_ContentPlaceHolder1_CompensationGrid_GridHeader tr th a',
  saleCommissionGridHeader: '#ctl00_ContentPlaceHolder1_CompensationGrid_GridHeader tr th a',
  shareOfProfitGridHeader: '#ctl00_ContentPlaceHolder1_CompensationGrid_GridHeader tr th a',
  profitBelowMinMarginGridHeader: '#ctl00_ContentPlaceHolder1_CompensationGrid_GridHeader tr th a',
  maxSaleCommissionedGridHeader: '#ctl00_ContentPlaceHolder1_CompensationGrid_GridHeader tr th a',
  createSurveyLabel: '.sectionHeaderText',
  qualityQuestionnaireText: '#ctl00_ContentPlaceHolder1_lbQualityQuestionaireHead',
  dataImportToolLabel: '#ctl00_ContentPlaceHolder1_CompanySettingsDIV .sectionHeaderText',
  dataImportToolText: '#ctl00_ContentPlaceHolder1_lbDefault',
  companyContactsDownloadTemplateBtn:
    '#ctl00_ContentPlaceHolder1_RadGridDataImport_ctl00_ctl04_DownloadTemplateButton',
  companyContactsViewHistoryBtn:
    '#ctl00_ContentPlaceHolder1_RadGridDataImport_ctl00_ctl04_ViewHistoryButton',
  companyContactsStartImportBtn:
    '#ctl00_ContentPlaceHolder1_RadGridDataImport_ctl00_ctl04_StartImportButton',
  emailDistributionListLabel: '#ctl00_ContentPlaceHolder1_CompanySettingsDIV .sectionHeaderText',
  distributionListText: '#ctl00_ContentPlaceHolder1_lblDistributionList',
  backToEmailSectionBtn: '#ctl00_ContentPlaceHolder1_Button1',
  addNewRecordEMailBtn:
    '#ctl00_ContentPlaceHolder1_gvDistributionList_ctl00_ctl02_ctl00_InitInsertButton',
  distributionListGridHeader: '#ctl00_ContentPlaceHolder1_gvDistributionList_GridHeader tr th a',
  emailDistributionGridRefreshBtn:
    '#ctl00_ContentPlaceHolder1_gvDistributionList_ctl00_ctl02_ctl00_RebindGridButton',
  equipmentTypeLabel: '#ctl00_ContentPlaceHolder1_CompanySettingsDIV .sectionHeaderText',
  equipmentTypeText: '#ctl00_ContentPlaceHolder1_lbEquipmentTypeHead',
  equipmentTypeAddNewBtn:
    '#ctl00_ContentPlaceHolder1_gvEquipmentType_ctl00_ctl02_ctl00_InitInsertButton',
  equipmentTypeRefreshBtn:
    '#ctl00_ContentPlaceHolder1_gvEquipmentType_ctl00_ctl02_ctl00_RebindGridButton',
  equipmentTypeGridHeader: '#ctl00_ContentPlaceHolder1_gvEquipmentType_ctl00_Header th a',
  jobTitleLabel: '#ctl00_ContentPlaceHolder1_CompanySettingsDIV .sectionHeaderText',
  jobTitleText: '#ctl00_ContentPlaceHolder1_lbJobTitle',
  addNewJobTitleBtn: '#ctl00_ContentPlaceHolder1_gvJobTitle_ctl00_ctl02_ctl00_InitInsertButton',
  jobTitleGridHeader: '#ctl00_ContentPlaceHolder1_gvJobTitle_ctl00_Header th a',
  locationAndTruckLabel: '#ctl00_ContentPlaceHolder1_CompanySettingsDIV .sectionHeaderText',
  locationAndTruckText: '#ctl00_ContentPlaceHolder1_lbLocationAndTruckTextHead',
  locationAndTruckAddNewBtn:
    '#ctl00_ContentPlaceHolder1_gvLocationAndTruckText_ctl00_ctl02_ctl00_InitInsertButton',
  locationAndTruckRefreshBtn:
    '#ctl00_ContentPlaceHolder1_gvLocationAndTruckText_ctl00_ctl02_ctl00_RebindGridButton',
  noteVisibilityConfigurationLabel:
    '#ctl00_ContentPlaceHolder1_CompanySettingsDIV .sectionHeaderText',
  visibilityText: '.Heading_blue_new',
  notificationsLabel: '#ctl00_ContentPlaceHolder1_CompanySettingsDIV .sectionHeaderText',
  generalNotificationSettingsText: '#ctl00_ContentPlaceHolder1_lbchangelogo',
  officeLabel: '#ctl00_ContentPlaceHolder1_CompanySettingsDIV .sectionHeaderText',
  viewEditOfficeLocationsText: '#ctl00_ContentPlaceHolder1_lbDivision',
  presentProgressNotificationLabel:
    '#ctl00_ContentPlaceHolder1_CompanySettingsDIV .sectionHeaderText',
  presetProgressNotificationText: '.Heading_blue_rftc',
  standardNoteLabel: '#ctl00_ContentPlaceHolder1_CompanySettingsDIV .sectionHeaderText',
  standardNotesText: '#ctl00_ContentPlaceHolder1_lbLossCategoryHeader',
  standardNoteDeleteBtn: '#ctl00_ContentPlaceHolder1_btnDelete',
  standardNoteChangeStatusBtn: '#ctl00_ContentPlaceHolder1_btnStatus',
};

// Expected values for Company Settings page
const companySettingsExpectedValues = {
  expectedLabels: {
    companyDisplayName: 'Company Display Name',
    compensationPlans: 'Compensation Plans',
    createSurvey: 'Create Survey',
    dataImport: 'Data Import',
    emailDistributionList: 'Email Distribution List',
    equipmentType: 'Equipment Type',
    jobTitle: 'Job Title',
    visibility: 'Visibility',
    standardNotes: 'Standard Notes',
    notifications: 'General notification settings',
  },
};

class CompanySettingsPage {
  constructor(page) {
    this.page = page;
  }

  // Navigate to Company Settings page through Administration menu
  async navigateToCompanySettings() {
    await this.page.locator(CompanySettingsLocators.administrationMenu).first().hover();

    const menuContainer = this.page.locator(CompanySettingsLocators.menuContainer);
    await menuContainer.waitFor({ state: 'visible', timeout: 5000 });

    await this.page
      .locator(CompanySettingsLocators.companySettingsMenuOption, {
        hasText: /^Company Settings$/,
      })
      .first()
      .waitFor({ state: 'visible', timeout: 10000 });
    await this.page
      .locator(CompanySettingsLocators.companySettingsMenuOption, {
        hasText: /^Company Settings$/,
      })
      .first()
      .click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Company Display Name section label is visible
  async verifyCompanyDisplayNameLabel() {
    const label = this.page.locator(CompanySettingsLocators.companyDisplayNameLabel, {
      hasText: /^Company Display Name$/,
    });
    await label.waitFor({ state: 'visible' });
    return label;
  }

  // Click on Company Display Name section to expand it
  async clickCompanyDisplayNameSection() {
    const label = await this.verifyCompanyDisplayNameLabel();
    await label.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Company Display Name text on expanded section
  async verifyCompanyDisplayNameText() {
    const text = this.page.locator(CompanySettingsLocators.companyDisplayNameText, {
      hasText: /^Company Display Name$/,
    });
    await text.waitFor({ state: 'visible' });
    return text;
  }

  // Verify Company Display Name input field is visible
  async verifyCompanyDisplayNameInput() {
    const input = this.page.locator(CompanySettingsLocators.companyDisplayNameInput);
    await input.waitFor({ state: 'visible' });
    return input;
  }

  // Verify Company Display Name Save button is visible
  async verifyCompanyDisplayNameSaveBtn() {
    const button = this.page.locator(CompanySettingsLocators.companyDisplayNameSaveBtn);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Company Display Name Cancel button is visible
  async verifyCompanyDisplayNameCancelBtn() {
    const button = this.page.locator(CompanySettingsLocators.companyDisplayNameCancelBtn);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Compensation Plans section label is visible
  async verifyCompensationPlansLabel() {
    const label = this.page.locator(CompanySettingsLocators.compensationPlansLabel, {
      hasText: /^Compensation Plans$/,
    });
    await label.waitFor({ state: 'visible' });
    return label;
  }

  // Click on Compensation Plans section to expand it
  async clickCompensationPlansSection() {
    const label = await this.verifyCompensationPlansLabel();
    await label.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Compensation Plans text on expanded page
  async verifyCompensationPlansText() {
    const text = this.page.locator(CompanySettingsLocators.compensationPlansText);
    await text.waitFor({ state: 'visible' });
    return text;
  }

  // Verify Compensation Plans Delete button is visible
  async verifyCompensationPlansDeleteBtn() {
    const button = this.page.locator(CompanySettingsLocators.compensationPlansDeleteBtn);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Compensation Plans Change Status button is visible
  async verifyCompensationPlansChangeStatusBtn() {
    const button = this.page.locator(CompanySettingsLocators.compensationPlansChangeStatusBtn);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Add New Compensation Plan button is visible
  async verifyAddNewCompensationPlanBtn() {
    const button = this.page.locator(CompanySettingsLocators.addNewCompensationPlanBtn, {
      hasText: /^\s*Add New Compensation Plan$/,
    });
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Plan Name grid header is visible
  async verifyPlanNameGridHeader() {
    const header = this.page.locator(CompanySettingsLocators.planNameGridHeader, {
      hasText: /^Plan Name$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Min. Company Gross Margin % grid header is visible
  async verifyMinCompanyGrossMarginGridHeader() {
    const header = this.page.locator(CompanySettingsLocators.minCompanyGrossMarginGridHeader, {
      hasText: /^Min. Company Gross Margin %$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Sale Commission % grid header is visible
  async verifySaleCommissionGridHeader() {
    const header = this.page.locator(CompanySettingsLocators.saleCommissionGridHeader, {
      hasText: /^Sale Commission %$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify % Share of Profit Above Min. Margin (incentive) grid header is visible
  async verifyShareOfProfitGridHeader() {
    const header = this.page.locator(CompanySettingsLocators.shareOfProfitGridHeader, {
      hasText: /^% Share of Profit Above Min. Margin \(incentive\)$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify % Share of Profit Below Min. Margin (deduction) grid header is visible
  async verifyProfitBelowMinMarginGridHeader() {
    const header = this.page.locator(CompanySettingsLocators.profitBelowMinMarginGridHeader, {
      hasText: /^% Share of Profit Below Min. Margin \(deduction\)$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Max Sale % Commissioned grid header is visible
  async verifyMaxSaleCommissionedGridHeader() {
    const header = this.page.locator(CompanySettingsLocators.maxSaleCommissionedGridHeader, {
      hasText: /^Max Sale % Commissioned$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Create Survey section label is visible
  async verifyCreateSurveyLabel() {
    const label = this.page.locator(CompanySettingsLocators.createSurveyLabel, {
      hasText: /^Create Survey$/,
    });
    await label.waitFor({ state: 'visible' });
    return label;
  }

  // Click on Create Survey section to expand it
  async clickCreateSurveySection() {
    const label = await this.verifyCreateSurveyLabel();
    await label.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Quality Questionnaire text is visible on expanded page
  async verifyQualityQuestionnaireText() {
    const text = this.page.locator(CompanySettingsLocators.qualityQuestionnaireText);
    await text.waitFor({ state: 'visible' });
    return text;
  }

  // Verify Data Import Tool section label is visible
  async verifyDataImportToolLabel() {
    const label = this.page.locator(CompanySettingsLocators.dataImportToolLabel, {
      hasText: /^Data Import Tool$/,
    });
    await label.waitFor({ state: 'visible' });
    return label;
  }

  // Click on Data Import Tool section to expand it
  async clickDataImportToolSection() {
    const label = await this.verifyDataImportToolLabel();
    await label.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Data Import text is visible on expanded page
  async verifyDataImportToolText() {
    const text = this.page.locator(CompanySettingsLocators.dataImportToolText);
    await text.waitFor({ state: 'visible' });
    return text;
  }

  // Verify Company Contacts Download Template button is visible
  async verifyCompanyContactsDownloadTemplateBtn() {
    const button = this.page.locator(CompanySettingsLocators.companyContactsDownloadTemplateBtn);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Company Contacts View History button is visible
  async verifyCompanyContactsViewHistoryBtn() {
    const button = this.page.locator(CompanySettingsLocators.companyContactsViewHistoryBtn);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Company Contacts Start Import button is visible
  async verifyCompanyContactsStartImportBtn() {
    const button = this.page.locator(CompanySettingsLocators.companyContactsStartImportBtn);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify E-mail Distribution List section label is visible
  async verifyEmailDistributionListLabel() {
    const label = this.page.locator(CompanySettingsLocators.emailDistributionListLabel, {
      hasText: /^\s*E-mail Distribution List$/,
    });
    await label.waitFor({ state: 'visible' });
    return label;
  }

  // Click on E-mail Distribution List section to expand it
  async clickEmailDistributionListSection() {
    const label = await this.verifyEmailDistributionListLabel();
    await label.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Distribution List text is visible on expanded page
  async verifyDistributionListText() {
    const text = this.page.locator(CompanySettingsLocators.distributionListText);
    await text.waitFor({ state: 'visible' });
    return text;
  }

  // Verify Back to E-mail section button is visible
  async verifyBackToEmailSectionBtn() {
    const button = this.page.locator(CompanySettingsLocators.backToEmailSectionBtn);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Add new Record button on E-mail is visible
  async verifyAddNewRecordEMailBtn() {
    const button = this.page.locator(CompanySettingsLocators.addNewRecordEMailBtn);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Distribution List grid header is visible
  async verifyDistributionListGridHeader() {
    const header = this.page.locator(CompanySettingsLocators.distributionListGridHeader, {
      hasText: /^Distribution List$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Email distribution grid Refresh button is visible
  async verifyEmailDistributionGridRefreshBtn() {
    const button = this.page.locator(CompanySettingsLocators.emailDistributionGridRefreshBtn);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Equipment Type section label is visible
  async verifyEquipmentTypeLabel() {
    const label = this.page.locator(CompanySettingsLocators.equipmentTypeLabel, {
      hasText: /^\s*Equipment Type$/,
    });
    await label.waitFor({ state: 'visible' });
    return label;
  }

  // Click on Equipment Type section to expand it
  async clickEquipmentTypeSection() {
    const label = await this.verifyEquipmentTypeLabel();
    await label.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Equipment Type text is visible on expanded page
  async verifyEquipmentTypeText() {
    const text = this.page.locator(CompanySettingsLocators.equipmentTypeText);
    await text.waitFor({ state: 'visible' });
    return text;
  }

  // Verify Equipment Type Add New button is visible
  async verifyEquipmentTypeAddNewBtn() {
    const button = this.page.locator(CompanySettingsLocators.equipmentTypeAddNewBtn);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Equipment Type Refresh button is visible
  async verifyEquipmentTypeRefreshBtn() {
    const button = this.page.locator(CompanySettingsLocators.equipmentTypeRefreshBtn);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Equipment Type Grid Column Header is visible
  async verifyEquipmentTypeGridHeader() {
    const header = this.page.locator(CompanySettingsLocators.equipmentTypeGridHeader, {
      hasText: /^\s*Equipment Type$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Job Title section label is visible
  async verifyJobTitleLabel() {
    const label = this.page.locator(CompanySettingsLocators.jobTitleLabel, {
      hasText: /^\s*Job Title$/,
    });
    await label.waitFor({ state: 'visible' });
    return label;
  }

  // Click on Job Title section to expand it
  async clickJobTitleSection() {
    const label = await this.verifyJobTitleLabel();
    await label.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Job Title text is visible on expanded page
  async verifyJobTitleText() {
    const text = this.page.locator(CompanySettingsLocators.jobTitleText);
    await text.waitFor({ state: 'visible' });
    return text;
  }

  // Verify Add new Job Title button is visible
  async verifyAddNewJobTitleBtn() {
    const button = this.page.locator(CompanySettingsLocators.addNewJobTitleBtn);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Job Title Grid column header is visible
  async verifyJobTitleGridHeader() {
    const header = this.page.locator(CompanySettingsLocators.jobTitleGridHeader, {
      hasText: /^\s*Job Title$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Location And Truck section label is visible
  async verifyLocationAndTruckLabel() {
    const label = this.page.locator(CompanySettingsLocators.locationAndTruckLabel, {
      hasText: /^\s*Location And Truck$/,
    });
    await label.waitFor({ state: 'visible' });
    return label;
  }

  // Click on Location And Truck section to expand it
  async clickLocationAndTruckSection() {
    const label = await this.verifyLocationAndTruckLabel();
    await label.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Location And Truck text is visible on expanded page
  async verifyLocationAndTruckText() {
    const text = this.page.locator(CompanySettingsLocators.locationAndTruckText);
    await text.waitFor({ state: 'visible' });
    return text;
  }

  // Verify Location And Truck Add new button is visible
  async verifyLocationAndTruckAddNewBtn() {
    const button = this.page.locator(CompanySettingsLocators.locationAndTruckAddNewBtn);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Location And Truck Refresh button is visible
  async verifyLocationAndTruckRefreshBtn() {
    const button = this.page.locator(CompanySettingsLocators.locationAndTruckRefreshBtn);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Note Visibility Configuration section label is visible
  async verifyNoteVisibilityConfigurationLabel() {
    const label = this.page.locator(CompanySettingsLocators.noteVisibilityConfigurationLabel, {
      hasText: /^\s*Note Visibility Configuration$/,
    });
    await label.waitFor({ state: 'visible' });
    return label;
  }

  // Click on Note Visibility Configuration section to expand it
  async clickNoteVisibilityConfigurationSection() {
    const label = await this.verifyNoteVisibilityConfigurationLabel();
    await label.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Visibility text is visible on expanded page
  async verifyVisibilityText() {
    const text = this.page.locator(CompanySettingsLocators.visibilityText, {
      hasText: /^Visibility$/,
    });
    await text.waitFor({ state: 'visible' });
    return text;
  }

  // Verify Notifications section label is visible
  async verifyNotificationsLabel() {
    const label = this.page.locator(CompanySettingsLocators.notificationsLabel, {
      hasText: /^\s*Notifications$/,
    });
    await label.waitFor({ state: 'visible' });
    return label;
  }

  // Click on Notifications section to expand it
  async clickNotificationsSection() {
    const label = await this.verifyNotificationsLabel();
    await label.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify General notification settings text is visible on expanded page
  async verifyGeneralNotificationSettingsText() {
    const text = this.page.locator(CompanySettingsLocators.generalNotificationSettingsText);
    await text.waitFor({ state: 'visible' });
    return text;
  }

  // Verify Office section label is visible
  async verifyOfficeLabel() {
    const label = this.page.locator(CompanySettingsLocators.officeLabel, {
      hasText: /^\s*Office$/,
    });
    await label.waitFor({ state: 'visible' });
    return label;
  }

  // Click on Office section to expand it
  async clickOfficeSection() {
    const label = await this.verifyOfficeLabel();
    await label.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify View/Edit Office text is visible on expanded page
  async verifyViewEditOfficeLocationsText() {
    const text = this.page.locator(CompanySettingsLocators.viewEditOfficeLocationsText);
    await text.waitFor({ state: 'visible' });
    return text;
  }

  // Verify Present Progress Notification section label is visible
  async verifyPresentProgressNotificationLabel() {
    const label = this.page.locator(CompanySettingsLocators.presentProgressNotificationLabel, {
      hasText: /^\s*Present Progress Notification$/,
    });
    await label.waitFor({ state: 'visible' });
    return label;
  }

  // Click on Present Progress Notification section to expand it
  async clickPresentProgressNotificationSection() {
    const label = await this.verifyPresentProgressNotificationLabel();
    await label.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Preset Progress Notification text is visible on expanded page
  async verifyPresetProgressNotificationText() {
    const text = this.page.locator(CompanySettingsLocators.presetProgressNotificationText, {
      hasText: /^Preset Progress Notification$/,
    });
    await text.waitFor({ state: 'visible' });
    return text;
  }

  // Verify Standard Note section label is visible
  async verifyStandardNoteLabel() {
    const label = this.page.locator(CompanySettingsLocators.standardNoteLabel, {
      hasText: /^\s*Standard Note$/,
    });
    await label.waitFor({ state: 'visible' });
    return label;
  }

  // Click on Standard Note section to expand it
  async clickStandardNoteSection() {
    const label = await this.verifyStandardNoteLabel();
    await label.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Standard Notes text is visible on expanded page
  async verifyStandardNotesText() {
    const text = this.page.locator(CompanySettingsLocators.standardNotesText);
    await text.waitFor({ state: 'visible' });
    return text;
  }

  // Verify Standard Note Delete button is visible
  async verifyStandardNoteDeleteBtn() {
    const button = this.page.locator(CompanySettingsLocators.standardNoteDeleteBtn);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Standard Note Change Status button is visible
  async verifyStandardNoteChangeStatusBtn() {
    const button = this.page.locator(CompanySettingsLocators.standardNoteChangeStatusBtn);
    await button.waitFor({ state: 'visible' });
    return button;
  }
}

export { CompanySettingsPage, CompanySettingsLocators, companySettingsExpectedValues };
