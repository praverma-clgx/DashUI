import { expect } from '@playwright/test';

class ValidateFranchisorCompanyIdPage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Validate company ID
   * @param {string} companyIdSelector - Selector for company ID element
   * @param {string} expectedCompanyId - Expected company ID (default: "10101015")
   */
  async validateCompanyId(companyIdSelector, expectedCompanyId = '10101015') {
    // Wait for company ID element to be visible
    await this.page.locator(companyIdSelector).waitFor({
      state: 'visible',
      timeout: 30000,
    });

    // Get the Logged Company ID
    const loggedInCompanyId = await this.page
      .locator(companyIdSelector)
      .textContent()
      .then((text) => text?.trim());

    // Extract before '.' for comparison
    const uiCompanyId = loggedInCompanyId?.split('.')[0];

    // Verify Company ID
    expect(uiCompanyId).toBe(expectedCompanyId);
  }
}

export default ValidateFranchisorCompanyIdPage;
