import { expect } from '@playwright/test';

const FeedbackTabLocators = {
  feedbackTab: '#ctl00_ContentPlaceHolder1_dockJobTabs_C_tabStripJobTabs .rtsTxt',
  gridHeader:
    '#ctl00_ContentPlaceHolder1_dockJobTabs_C_JobFeedback_userControl_JobFeedbackGrid_ctl00_Header .rgHeader',
};

class FeedbackTabPage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to Feedback tab
   */
  async navigateToFeedbackTab() {
    const feedBackTabLocator = this.page.locator(FeedbackTabLocators.feedbackTab, {
      hasText: 'Feedback',
    });
    await expect(feedBackTabLocator).toBeVisible();

    // Use JavaScript click to bypass pointer event interception
    await feedBackTabLocator.evaluate((element) => element.click());
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Assert all grid headers are visible
   * @param {Array<string>} headers - Array of expected header texts
   */
  async assertGridHeaders(headers) {
    for (const headerText of headers) {
      const headerLocator = this.page.locator(FeedbackTabLocators.gridHeader, {
        hasText: new RegExp(`^${headerText}$`), // Exact match only
      });
      await expect(headerLocator).toBeVisible({ timeout: 10000 });
    }
  }
}

export default FeedbackTabPage;
