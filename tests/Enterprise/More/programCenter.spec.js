import { test } from '../../../fixtures/enterpriseFixtures.js';
import { ProgramCenterPage } from '../../../pageObjects/enterprise/moreFg/programCenter.po.js';

test('Program Center in More FG', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const programCenterPage = new ProgramCenterPage(page);

  // Navigate to Program Center
  await programCenterPage.navigateToProgramCenter();

  // Define labels to verify
  const labelsToVerify = [
    'Location',
    'Claims Admin',
    'Claims Eligible:',
    'Provider VPASS Score :',
    'Location VPASS Score',
  ];

  const variableNumberLabels = [
    'Claims Eligible',
    'Eligible with Suspension',
    'Claims Non Eligible',
    'Programs to Accept',
    'Opted Out',
  ];

  // Validate labels
  await programCenterPage.validateLabels(labelsToVerify, variableNumberLabels);

  // Define section headers
  const sectionHeadersToVerify = ['Program Status Summary:', 'Communication:', 'Program Details :'];

  // Validate section headers
  await programCenterPage.validateSectionHeaders(sectionHeadersToVerify);

  // Validate Global Requirement Header
  await programCenterPage.validateGlobalRequirementHeader();

  // Validate Global Document Header
  await programCenterPage.validateGlobalDocumentHeader();
});
