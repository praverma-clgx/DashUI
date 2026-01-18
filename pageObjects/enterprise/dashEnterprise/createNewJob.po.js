import { expect } from '@playwright/test';

class CreateNewJobPage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Extract job number from URL
   * @returns {string|null} - Extracted job number or null
   */
  extractJobNumberFromURL() {
    const url = this.page.url();
    const jobNumberMatch = url.match(/JobNumber=([^&]+)/i);
    return jobNumberMatch ? jobNumberMatch[1] : null;
  }

  /**
   * Verify URL contains job identifier
   */
  async verifyJobURL() {
    await expect(this.page).toHaveURL(/Job(Id|Number)/i, { timeout: 30000 });
  }
}

export default CreateNewJobPage;
