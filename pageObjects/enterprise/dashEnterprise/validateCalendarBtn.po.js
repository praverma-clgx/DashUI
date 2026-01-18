import { expect } from '@playwright/test';

class ValidateCalendarBtnPage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Click on calendar menu button
   */
  async clickCalendarButton() {
    const calendarMenuBtn = this.page.locator('a.rmRootLink[href*="/Calendar"]');
    await calendarMenuBtn.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Verify user is on Calendar page
   */
  async verifyCalendarPage() {
    const currentUrl = this.page.url();
    expect(currentUrl).toContain('/Calendar');
  }
}

export default ValidateCalendarBtnPage;
