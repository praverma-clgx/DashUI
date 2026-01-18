import { test } from '../../../fixtures/enterpriseFixtures.js';
import { EmailTemplatePage } from '../../../pageObjects/enterprise/moreFg/emailTemplate.po.js';

test('E-mail Template Builder in More FG', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const emailTemplatePage = new EmailTemplatePage(page);

  // Navigate to Email Template Builder
  await emailTemplatePage.navigateToEmailTemplateBuilder();

  // Validate Heading
  await emailTemplatePage.validateHeading();

  // Validate Back Button
  await emailTemplatePage.validateBackButton();

  // Define grid headers
  const gridHeaders = ['File Name', 'Added By', 'Added Date', 'Updated By', 'Updated Date'];

  // Validate Grid Headers
  await emailTemplatePage.validateGridHeaders(gridHeaders);

  // Test Collapse/Expand functionality
  await emailTemplatePage.testCollapseExpand();

  // Define expand option headers
  const expandOptionHeaders = ['Select Fields', 'Current Date', 'Contractor Email'];

  // Validate Expand Option Headers
  await emailTemplatePage.validateExpandOptionHeaders(expandOptionHeaders);

  // Define all buttons
  const allButtons = [
    'Add New E-mail Template',
    'Save Template',
    'Reset Editor',
    'Preview',
    'Rename File',
    'Delete File',
    'Clear Selection',
    'Upload to Franchisee',
  ];

  // Validate All Buttons
  await emailTemplatePage.validateAllButtons(allButtons);
});
