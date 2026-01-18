import fs from 'fs';
import path from 'path';

/**
 * Saves the claim number to a JSON file for use in other tests.
 * @param {string} claimNumber - The claim number to save
 * @param {string} filePath - Relative path to the JSON file (e.g., 'testData/admin/claimData.json')
 */
export function saveClaimNumber(claimNumber, filePath) {
  const fullPath = path.resolve(filePath);
  const data = {
    claimNumber: claimNumber,
    claimNumberLowerCase: claimNumber.toLowerCase(),
    updatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`Claim number saved to ${filePath}: ${claimNumber}`);
}
