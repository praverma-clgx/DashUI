import { test } from '../../../fixtures/enterpriseFixtures.js';
import { EquipmentPage } from '../../../pageObjects/enterprise/moreFg/equipment.po.js';

test('Equipment Page in More FG', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const equipmentPage = new EquipmentPage(page);

  // Navigate to Equipment
  await equipmentPage.navigateToEquipment();

  // Validate Page Title
  await equipmentPage.validatePageTitle();

  // Validate Back Button
  await equipmentPage.validateBackButton();

  // Validate Move Date Label
  await equipmentPage.validateMoveDateLabel();

  // Validate Add New Equipment Button
  await equipmentPage.validateAddNewEquipmentButton();

  // Define grid headers
  const expectedHeaders = [
    'Equipment Name',
    'Equipment Type',
    'Barcode Text',
    'Secondary Equipment Type',
    'Current Location',
    'Job Number',
    'Vendors',
    'Serial Number',
    'Model',
    'Manufacturer',
    'Description',
    'Storage Location',
    'Purchase Amount',
    'Status',
    'Last Moved Date',
  ];

  // Validate Grid Headers
  await equipmentPage.validateGridHeaders(expectedHeaders);

  // Validate Export Buttons
  await equipmentPage.validateExportButtons();
});
