import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function log(message, color = '') {
  console.log(`${color}${message}${colors.reset}`);
}

console.log(`\n${colors.bold}${colors.blue}🧹 Manual Cleanup Script${colors.reset}\n`);

const itemsToClean = [
  {
    path: '.auth',
    description: 'Authentication states',
    keepDir: true,
  },
  {
    path: 'test-results',
    description: 'Test results',
    keepDir: false,
  },
  {
    path: 'playwright-report',
    description: 'HTML reports',
    keepDir: false,
  },
  {
    path: 'downloads',
    description: 'Downloaded files',
    keepDir: false,
  },
];

let cleanedCount = 0;
let errorCount = 0;

for (const item of itemsToClean) {
  const fullPath = path.join(projectRoot, item.path);

  if (fs.existsSync(fullPath)) {
    try {
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        if (item.keepDir) {
          // Only clean contents, keep directory
          const files = fs.readdirSync(fullPath);
          files.forEach((file) => {
            const filePath = path.join(fullPath, file);
            fs.rmSync(filePath, { recursive: true, force: true });
          });
          log(`   ✓ Cleaned contents: ${item.description} (${item.path})`, colors.green);
        } else {
          // Remove entire directory
          fs.rmSync(fullPath, { recursive: true, force: true });
          log(`   ✓ Removed: ${item.description} (${item.path})`, colors.green);
        }
        cleanedCount++;
      } else {
        fs.unlinkSync(fullPath);
        log(`   ✓ Deleted file: ${item.description} (${item.path})`, colors.green);
        cleanedCount++;
      }
    } catch (error) {
      log(`   ✗ Failed to clean ${item.path}: ${error.message}`, colors.red);
      errorCount++;
    }
  } else {
    log(`   ℹ Not found: ${item.description} (${item.path})`, colors.yellow);
  }
}

console.log('');
log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', colors.bold);

if (errorCount > 0) {
  log(`⚠️  Cleanup completed with errors!`, colors.yellow);
  log(`   ${cleanedCount} items cleaned, ${errorCount} errors\n`, colors.yellow);
} else {
  log(`✅ Cleanup complete! ${cleanedCount} items cleaned.\n`, colors.green);
}

// Show next steps
log(`${colors.bold}Next steps:${colors.reset}`);
log(`   • Run tests: ${colors.blue}npm test${colors.reset}`);
log(`   • Setup auth: ${colors.blue}Tests will auto-create auth states${colors.reset}\n`);
