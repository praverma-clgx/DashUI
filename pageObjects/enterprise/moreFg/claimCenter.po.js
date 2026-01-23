import { expect } from '@playwright/test';

export class ClaimCenterPage {
  constructor(page) {
    this.page = page;
    this.moreMenuHover = page.locator("span:has-text('More...')").first();
    this.claimCenterMenuItem = page.getByText('Claim Center', { exact: true });
    this.backToHomePageButton = page.locator('#ctl00_ContentPlaceHolder1_btnBackToHomepage');
    this.exportToExcelButton = page.locator(
      '#ctl00_ContentPlaceHolder1_JobParentInformation_btnExportToExcel',
    );
    this.exportToPdfButton = page.locator(
      '#ctl00_ContentPlaceHolder1_JobParentInformation_btnExportToPdf',
    );
    this.clearAllFiltersLabel = page.locator(
      '#ctl00_ContentPlaceHolder1_JobParentInformation_lblClearAllFilter',
    );
    this.claimCenterGridHeaderLocator = page.locator('#grid .k-link');
  }

  async navigateToClaimCenter() {
    await this.moreMenuHover.hover();
    await this.claimCenterMenuItem.waitFor({ state: 'visible', timeout: 5000 });
    await this.claimCenterMenuItem.click();
    await this.page.waitForLoadState('networkidle');
  }

  async validateBackToHomePageButton() {
    await expect(this.backToHomePageButton).toBeVisible();
    await expect(this.backToHomePageButton).toHaveAttribute('type', 'submit');
  }

  async validateExportButtons() {
    await expect(this.exportToExcelButton).toBeVisible();
    await expect(this.exportToPdfButton).toBeVisible();
  }

  async validateClearAllFiltersLabel() {
    await expect(this.clearAllFiltersLabel).toBeVisible();
  }

  async validateGridHeaders(claimCenterGridHeaders) {
    for (const headerText of claimCenterGridHeaders) {
      const headerLocator = this.claimCenterGridHeaderLocator.filter({
        hasText: headerText,
      });
      await expect(headerLocator).toBeVisible();
    }
  }

  async clickBackToHomePage() {
    await this.backToHomePageButton.click();
    await this.page.waitForLoadState('networkidle');
    await expect(this.page).toHaveURL(/Module\/User\/uPostLogin\.aspx/);
  }
}
