/**
 * @typedef {Object} MySurveysLocatorsType
 * @property {string} administrationMenu
 * @property {string} menuContainer
 * @property {string} mySurveyMenuOption
 * @property {string} mySurveyHeader
 * @property {string} createSurveyButton
 * @property {string} backToHomePageButton
 * @property {string} viewMySurveysGridHeader
 * @property {string} surveyTitleColumnHeader
 * @property {string} dateCreatedColumnHeader
 * @property {string} activeColumnHeader
 * @property {string} analyzeColumnHeader
 * @property {string} deleteColumnHeader
 * @property {string} totalResponsesColumnHeader
 * @property {string} averageScoreSummaryColumnHeader
 * @property {string} refreshGridButton
 */

/** @type {MySurveysLocatorsType} */
const MySurveysLocators = {
  administrationMenu: "span:has-text('Administration')",
  menuContainer: 'div.rmSlide[style*="display: block"]',
  mySurveyMenuOption: 'ul.rmVertical.rmGroup.rmLevel1 li.rmItem a.rmLink span.rmText',
  mySurveyHeader: '#ctl00_ContentPlaceHolder1_Label1',
  createSurveyButton: '#ctl00_ContentPlaceHolder1_btnCreateSurvey',
  backToHomePageButton: '#ctl00_ContentPlaceHolder1_btnBackToHomepage   ',
  viewMySurveysGridHeader: '#ctl00_ContentPlaceHolder1_gvSurvey_ctl00_ctl02_ctl00_InitInsertButton',
  surveyTitleColumnHeader: '#ctl00_ContentPlaceHolder1_gvSurvey_GridHeader th.rgHeader a',
  dateCreatedColumnHeader: '#ctl00_ContentPlaceHolder1_gvSurvey_GridHeader th.rgHeader a',
  activeColumnHeader: '#ctl00_ContentPlaceHolder1_gvSurvey_GridHeader th.rgHeader a',
  analyzeColumnHeader: '#ctl00_ContentPlaceHolder1_gvSurvey_GridHeader th.rgHeader',
  deleteColumnHeader: '#ctl00_ContentPlaceHolder1_gvSurvey_GridHeader th.rgHeader',
  totalResponsesColumnHeader: '#ctl00_ContentPlaceHolder1_gvSurvey_GridHeader th.rgHeader',
  averageScoreSummaryColumnHeader: '#ctl00_ContentPlaceHolder1_gvSurvey_GridHeader th.rgHeader',
  refreshGridButton: '#ctl00_ContentPlaceHolder1_gvSurvey_ctl00_ctl02_ctl00_RebindGridButton',
};

class MySurveysPage {
  constructor(page) {
    this.page = page;
  }

  // Navigate to My Surveys page through Administration menu
  async navigateToMySurveys() {
    await this.page.locator(MySurveysLocators.administrationMenu).first().hover();
    await this.page
      .locator(MySurveysLocators.menuContainer)
      .waitFor({ state: 'visible', timeout: 5000 });
    await this.page
      .locator(MySurveysLocators.mySurveyMenuOption, {
        hasText: /^My Surveys$/,
      })
      .first()
      .waitFor({ state: 'visible', timeout: 10000 });
    await this.page
      .locator(MySurveysLocators.mySurveyMenuOption, {
        hasText: /^My Surveys$/,
      })
      .first()
      .click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify View My Surveys header is visible on the page
  async verifyMySurveyHeader() {
    const header = this.page.locator(MySurveysLocators.mySurveyHeader);
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Create Survey button is visible and is submit type
  async verifyCreateSurveyButton() {
    const button = this.page.locator(MySurveysLocators.createSurveyButton);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify Back to HomePage button is visible and is submit type
  async verifyBackToHomePageButton() {
    const button = this.page.locator(MySurveysLocators.backToHomePageButton);
    await button.waitFor({ state: 'visible' });
    return button;
  }

  // Verify View My Surveys grid header is visible
  async verifyViewMySurveysGridHeader() {
    const header = this.page.locator(MySurveysLocators.viewMySurveysGridHeader);
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Survey Title column header is visible
  async verifySurveyTitleColumnHeader() {
    const header = this.page.locator(MySurveysLocators.surveyTitleColumnHeader, {
      hasText: /^Survey Title$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Date Created column header is visible
  async verifyDateCreatedColumnHeader() {
    const header = this.page.locator(MySurveysLocators.dateCreatedColumnHeader, {
      hasText: /^Date Created$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Active column header is visible
  async verifyActiveColumnHeader() {
    const header = this.page.locator(MySurveysLocators.activeColumnHeader, {
      hasText: /^Active$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Analyze column header is visible
  async verifyAnalyzeColumnHeader() {
    const header = this.page.locator(MySurveysLocators.analyzeColumnHeader, {
      hasText: /^Analyze$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Delete column header is visible
  async verifyDeleteColumnHeader() {
    const header = this.page.locator(MySurveysLocators.deleteColumnHeader, {
      hasText: /^Delete$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Total Responses column header is visible
  async verifyTotalResponsesColumnHeader() {
    const header = this.page.locator(MySurveysLocators.totalResponsesColumnHeader, {
      hasText: /^Total Responses$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Average Score Summary column header is visible
  async verifyAverageScoreSummaryColumnHeader() {
    const header = this.page.locator(MySurveysLocators.averageScoreSummaryColumnHeader, {
      hasText: /^Average Score Summary$/,
    });
    await header.waitFor({ state: 'visible' });
    return header;
  }

  // Verify Refresh grid button is visible
  async verifyRefreshGridButton() {
    const button = this.page.locator(MySurveysLocators.refreshGridButton);
    await button.waitFor({ state: 'visible' });
    return button;
  }
}

export { MySurveysPage, MySurveysLocators };
