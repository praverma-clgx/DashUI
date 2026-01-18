import fs from 'fs';
import path from 'path';

/**
 * Saves the claim number (job number) to a JSON file for use in other tests.
 * @param {string} claimNumber - The claim/job number to save
 * @param {string} filePath - Relative path to the JSON file (e.g., 'testData/enterprise/createClaimData.json')
 */
export function saveClaimNumber(claimNumber, filePath) {
  if (!claimNumber || typeof claimNumber !== 'string') {
    throw new Error(`Invalid claimNumber: ${claimNumber}`);
  }
  const fullPath = path.resolve(filePath);
  const data = {
    jobNumber: claimNumber,
    jobNumberLowerCase: claimNumber.toLowerCase(),
    updatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`Claim number saved to ${filePath}: ${claimNumber}`);
}
