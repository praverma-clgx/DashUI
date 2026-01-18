import { expect } from '@playwright/test';
import EnterpriseAccountSettingsPage from './enterpriseAccountSettings.po.js';

export const EnterpriseCompanySettingLocators = {
  administrationMenu: 'span:has-text("Administration")',
  companySettingsLink: 'a:has-text("Company Settings")',
  accountingLogoCard: '.card_20309',
  accountingLogoHeader: '.card_20309 .sectionHeaderText',
  changeLogoCard: '.card_4',
  changeLogoHeader: '.card_4 .sectionHeaderText',
  companyDisplayNameCard: '.card_20237',
  companyDisplayNameHeader: '.card_20237 .sectionHeaderText',
  compensationPlansCard: '.card_20260',
  compensationPlansHeader: '.card_20260 .sectionHeaderText',
  createSurveyCard: '.card_8',
  createSurveyHeader: '.card_8 .sectionHeaderText',
  dataImportToolCard: '.card_20238',
  dataImportToolHeader: '.card_20238 .sectionHeaderText',
  emailDistributionCard: '.card_10230',
  emailDistributionHeader: '.card_10230 .sectionHeaderText',
  equipmentTypeCard: '.card_14',
  equipmentTypeHeader: '.card_14 .sectionHeaderText',
  jobTitleCard: '.card_128',
  jobTitleHeader: '.card_128 .sectionHeaderText',
  locationAndTruckCard: '.card_17',
  locationAndTruckHeader: '.card_17 .sectionHeaderText',
  newVisibilityConfigurationCard: '.card_10231',
  newVisibilityConfigurationHeader: '.card_10231 .sectionHeaderText',
  notificationsCard: '.card_20312',
  notificationsHeader: '.card_20312 .sectionHeaderText',
  officeCard: '.card_21',
  officeHeader: '.card_21 .sectionHeaderText',
  presetProgressNotificationCard: '.card_20334',
  presetProgressNotificationHeader: '.card_20334 .sectionHeaderText',
  standardNoteCard: '.card_29',
  standardNoteHeader: '.card_29 .sectionHeaderText',
  accountSettingsAllowPastDateForInvoicesCheckbox:
    '#ctl00_ContentPlaceHolder1_CheckBox_AllowPastDatesForInvoices',
  accountSettingsAllowPastDateForInvoicesDropdown:
    '#ctl00_ContentPlaceHolder1_RadComboBox_InvoiceExceptionDays_Input',
  accountSettingsAllowPastDateForPaymentsCheckbox:
    '#ctl00_ContentPlaceHolder1_CheckBox_AllowPastDatesForPayments',
  accountSettingsAllowPastDateForPaymentsDropdown:
    '#ctl00_ContentPlaceHolder1_RadComboBox_PaymentExceptionDays_Input',
  accountSettingsSaveBtn: '#ctl00_ContentPlaceHolder1_Button_SaveAccountingSettings_input',
  accountSettingsBackBtn: '#ctl00_ContentPlaceHolder1_Button_Cancel_input',
};

class EnterpriseCompanySettingPage extends EnterpriseAccountSettingsPage {
  constructor(page) {
    super(page);
  }

  // ==================== Navigation Methods ====================

  /**
   * Navigate to Company Settings page via Administration menu
   */
  async navigateToCompanySettings() {
    await this.page.locator(EnterpriseCompanySettingLocators.administrationMenu).first().hover();
    await this.page.locator(EnterpriseCompanySettingLocators.companySettingsLink).first().click();
  }

  // ==================== Assertion Methods ====================

  /**
   * Assert card is visible and header text matches
   * @param {string} cardLocator - The card locator
   * @param {string} headerLocator - The header locator
   * @param {string} expectedText - The expected header text
   */
  async assertCardVisibleAndHeaderText(cardLocator, headerLocator, expectedText) {
    await expect(this.page.locator(cardLocator)).toBeVisible();
    const headerText = this.page.locator(headerLocator);
    await await expect(headerText).toHaveText(expectedText);
  }

  /**
   * Assert all company setting cards are visible with correct headers
   */
  async assertAllCompanySettingCards() {
    const cards = [
      {
        card: EnterpriseCompanySettingLocators.accountingLogoCard,
        header: EnterpriseCompanySettingLocators.accountingLogoHeader,
        text: 'Accounting',
      },
      {
        card: EnterpriseCompanySettingLocators.changeLogoCard,
        header: EnterpriseCompanySettingLocators.changeLogoHeader,
        text: 'Change Logo',
      },
      {
        card: EnterpriseCompanySettingLocators.companyDisplayNameCard,
        header: EnterpriseCompanySettingLocators.companyDisplayNameHeader,
        text: 'Company Display Name',
      },
      {
        card: EnterpriseCompanySettingLocators.compensationPlansCard,
        header: EnterpriseCompanySettingLocators.compensationPlansHeader,
        text: 'Compensation Plans',
      },
      {
        card: EnterpriseCompanySettingLocators.createSurveyCard,
        header: EnterpriseCompanySettingLocators.createSurveyHeader,
        text: 'Create Survey',
      },
      {
        card: EnterpriseCompanySettingLocators.dataImportToolCard,
        header: EnterpriseCompanySettingLocators.dataImportToolHeader,
        text: 'Data Import Tool',
      },
      {
        card: EnterpriseCompanySettingLocators.emailDistributionCard,
        header: EnterpriseCompanySettingLocators.emailDistributionHeader,
        text: 'E-mail Distribution List',
      },
      {
        card: EnterpriseCompanySettingLocators.equipmentTypeCard,
        header: EnterpriseCompanySettingLocators.equipmentTypeHeader,
        text: 'Equipment Type',
      },
      {
        card: EnterpriseCompanySettingLocators.jobTitleCard,
        header: EnterpriseCompanySettingLocators.jobTitleHeader,
        text: 'Job Title',
      },
      {
        card: EnterpriseCompanySettingLocators.locationAndTruckCard,
        header: EnterpriseCompanySettingLocators.locationAndTruckHeader,
        text: 'Location and Truck',
      },
      {
        card: EnterpriseCompanySettingLocators.newVisibilityConfigurationCard,
        header: EnterpriseCompanySettingLocators.newVisibilityConfigurationHeader,
        text: 'Note Visibility Configuration',
      },
      {
        card: EnterpriseCompanySettingLocators.notificationsCard,
        header: EnterpriseCompanySettingLocators.notificationsHeader,
        text: 'Notifications',
      },
      {
        card: EnterpriseCompanySettingLocators.officeCard,
        header: EnterpriseCompanySettingLocators.officeHeader,
        text: 'Office',
      },
      {
        card: EnterpriseCompanySettingLocators.presetProgressNotificationCard,
        header: EnterpriseCompanySettingLocators.presetProgressNotificationHeader,
        text: 'Preset Progress Notification',
      },
      {
        card: EnterpriseCompanySettingLocators.standardNoteCard,
        header: EnterpriseCompanySettingLocators.standardNoteHeader,
        text: 'Standard Note',
      },
    ];

    for (const { card, header, text } of cards) {
      await this.assertCardVisibleAndHeaderText(card, header, text);
    }
  }
}

export default EnterpriseCompanySettingPage;
