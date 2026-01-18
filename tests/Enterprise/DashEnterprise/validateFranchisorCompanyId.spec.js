import { test, expect } from '../../../fixtures/enterpriseFixtures.js';
import dotenv from 'dotenv';
dotenv.config();
import { EnterpriseHomePageLocators } from '../../../pageObjects/enterprise/homePage/enterpriseHomePage.po.js';

// Get the correct company ID for the current environment
const env = process.env.TEST_ENV?.toUpperCase();
const companyIdKey = `${env}_ENTERPRISE_COMPANY_ID`;
const expectedCompanyId = process.env[companyIdKey];

test('Validate Company ID contains correct prefix', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const companyIdSelector = EnterpriseHomePageLocators.DashId;
  const actualCompanyId = await page.locator(companyIdSelector).innerText();

  // Assert that the company ID starts with the expected value and has a dot after it
  expect(actualCompanyId).toMatch(new RegExp(`^${expectedCompanyId}\\.`, 'i'));
});
