import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

console.log('\n🔍 Import Verification Scan\n');

const importErrors = [];
const warnings = [];
const fileProcessed = new Set();

// Pattern to extract imports
const importPatterns = [/import\s+.*?\s+from\s+['"](.+?)['"]/g, /import\s+['"](.+?)['"]/g];

async function verifyImports() {
  // Get all JS files
  const jsFiles = await glob('**/*.js', {
    cwd: projectRoot,
    ignore: ['node_modules/**', '.auth/**', 'test-results/**', 'playwright-report/**'],
  });

  console.log(`📁 Scanning ${jsFiles.length} JavaScript files...\n`);

  for (const file of jsFiles) {
    const filePath = path.join(projectRoot, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const dirname = path.dirname(filePath);

    // Extract all imports
    const imports = new Set();

    for (const pattern of importPatterns) {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        imports.add(match[1]);
      }
    }

    // Check each import
    for (const importPath of imports) {
      // Skip node modules and external packages
      if (!importPath.startsWith('.') && !importPath.startsWith('/')) {
        continue;
      }

      // Resolve the import path
      let resolvedPath = path.resolve(dirname, importPath);

      // Try with .js extension if no extension
      if (!path.extname(resolvedPath)) {
        resolvedPath += '.js';
      }

      // Check if file exists
      if (!fs.existsSync(resolvedPath)) {
        importErrors.push({
          file: path.relative(projectRoot, filePath),
          import: importPath,
          resolvedPath: path.relative(projectRoot, resolvedPath),
        });
      } else {
        fileProcessed.add(resolvedPath);
      }
    }
  }

  // Report results
  if (importErrors.length > 0) {
    console.log(`\n❌ Found ${importErrors.length} import errors:\n`);
    importErrors.forEach(({ file, import: imp, resolvedPath }) => {
      console.log(`File: ${file}`);
      console.log(`  Import: ${imp}`);
      console.log(`  Resolved: ${resolvedPath} (NOT FOUND)\n`);
    });
  } else {
    console.log('✅ All imports are valid!\n');
  }

  return importErrors.length === 0;
}

verifyImports()
  .then((success) => {
    console.log(success ? '\n✅ Import verification passed!' : '\n❌ Import verification failed!');
    process.exit(success ? 0 : 1);
  })
  .catch((error) => {
    console.error('\n❌ Error during verification:', error);
    process.exit(1);
  });
