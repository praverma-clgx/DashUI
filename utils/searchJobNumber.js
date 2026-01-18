/**
 * Utility function to search for a job by job number
 * @param {Page} page - Playwright page object
 * @param {string} jobNumber - The job number to search for
 * @param {string} jobNumberWithName - The job number with name to select from dropdown
 */
export async function searchJobNumber(page, jobNumber) {
  const clientLackingButton = '#ctl00_ctl45_ClientLackingButton';
  const jobNumberInput = '#ctl00_ctl45_ddlJobNumber_Input';
  const jobNumberDropdownList = '#ctl00_ctl45_ddlJobNumber_DropDown ul.rcbList li';
  const loadingIndicator = '#ctl00_ctl45_ddlJobNumber_DropDown .loading-class';
  const searchBoxBtn = '#ctl00_ctl45_btnMJobSearch';

  const searchBox = page.locator(clientLackingButton);
  await searchBox.waitFor({ state: 'visible', timeout: 30000 });
  await searchBox.click();
  await page.waitForLoadState('networkidle');

  const searchBoxInput = page.locator(jobNumberInput);
  await searchBoxInput.click();
  await searchBoxInput.fill(jobNumber);

  const loadingIndicatorElement = page.locator(loadingIndicator);
  if (await loadingIndicatorElement.isVisible({ timeout: 10000 }).catch(() => false)) {
    await loadingIndicatorElement.waitFor({ state: 'hidden', timeout: 10000 });
  }

  const dropdownList = page.locator(jobNumberDropdownList);

  // Wait for the specific item containing the full text to appear
  const specificItem = dropdownList.filter({
    hasText: jobNumber,
  });
  await specificItem.waitFor({ state: 'visible', timeout: 10000 });

  // Click the specific suggestion in the dropdown
  await specificItem.click();

  // Click the search button
  const searchBoxBtnElement = page.locator(searchBoxBtn);
  await searchBoxBtnElement.click();
  await page.waitForLoadState('networkidle');
}
