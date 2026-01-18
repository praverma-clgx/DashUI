# DashUI Framework Setup Guide

## 🚀 Quick Start for New PC Setup

Follow these steps to set up the testing framework on a new machine:

### 1. Prerequisites

- **Node.js**: Version 20.x or later ([Download](https://nodejs.org/))
- **Git**: For cloning the repository
- **VS Code**: Recommended editor

### 2. Installation Steps

```bash
# 1. Clone the repository (if not already done)
git clone <repository-url>
cd DashUI_Framework

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npm run test:install
# OR
npx playwright install --with-deps chromium
```

### 3. Environment Configuration

⚠️ **CRITICAL STEP** - Configure your environment variables:

1. Open the `.env` file in the root directory
2. Set the `TEST_ENV` variable to your desired environment:

   ```dotenv
   TEST_ENV=stage  # Options: dkirc, stage, dev, qa, prod
   ```

3. Verify the corresponding environment variables are set:
   - For `TEST_ENV=stage`, ensure these variables have valid values:
     ```dotenv
     STAGE_ENTERPRISE_LOGIN_URL=https://...
     STAGE_ADMIN_LOGIN_URL=https://...
     STAGE_ENTERPRISE_COMPANY_ID=...
     STAGE_ENTERPRISE_USERNAME=...
     STAGE_ENTERPRISE_PASSWORD=...
     STAGE_ADMIN_USERNAME=...
     STAGE_ADMIN_PASSWORD=...
     ```

4. **Save the file** after making changes

### 4. Verify Setup

```bash
# Run a simple test to verify everything works
npm test -- --grep "Home Page"
```

## 🔧 Common Setup Issues

### Issue 1: "url: expected string, got undefined"

**Symptom**: Error when running tests on new setup

```
Error: page.goto: url: expected string, got undefined
```

**Solution**:

1. Check your `.env` file exists in the root directory
2. Verify `TEST_ENV` is set (e.g., `TEST_ENV=stage`)
3. Ensure the environment-specific variables are configured:
   - If `TEST_ENV=stage`, check `STAGE_ENTERPRISE_LOGIN_URL` is set
   - If `TEST_ENV=dkirc`, check `DKIRC_ENTERPRISE_LOGIN_URL` is set
4. Make sure there are no typos in variable names
5. Restart your terminal/IDE after modifying `.env`

### Issue 2: Missing Dependencies

**Solution**:

```bash
npm install
npx playwright install --with-deps chromium
```

### Issue 3: Authentication Fails

**Solution**:

1. Verify credentials in `.env` are correct
2. Delete `.auth` folder and run tests again:
   ```bash
   rm -rf .auth
   npm test
   ```

## 📁 Project Structure

```
DashUI_Framework/
├── .env                    # Environment configuration (IMPORTANT!)
├── .env.example           # Template for environment variables
├── global-setup.js        # Authentication setup
├── playwright.config.js   # Playwright configuration
├── package.json          # Dependencies
├── config/               # Configuration files
│   ├── environment.config.js
│   └── browser.config.js
├── tests/                # Test files
│   ├── Admin/
│   └── Enterprise/
├── pageObjects/          # Page Object Models
├── fixtures/             # Test fixtures
└── testData/             # Test data files
```

## 🧪 Running Tests

```bash
# Run all tests
npm test

# Run only enterprise tests
npm run test:enterprise

# Run only admin tests
npm run test:admin

# Run with UI mode (interactive)
npm run test:ui

# Run in headed mode (see browser)
npm run test:headed

# Run specific test file
npx playwright test tests/Admin/Administration/homePageValidation.spec.js
```

## 🌍 Environment Management

### Available Environments

The framework supports multiple environments configured via `TEST_ENV`:

- `dkirc` - DKIRC environment
- `stage` - Staging environment
- `dev` - Development environment
- `qa` - QA environment
- `prod` - Production environment

### Switching Environments

Edit `.env` file:

```dotenv
TEST_ENV=stage  # Change this to switch environments
```

## 📊 Viewing Test Results

After running tests:

```bash
# Open HTML report
npx playwright show-report
```

Reports are generated in:

- `playwright-report/` - HTML reports
- `test-results/` - Test artifacts and screenshots

## 🐛 Debugging

### Debug a specific test

```bash
npx playwright test --debug tests/Admin/Administration/homePageValidation.spec.js
```

### Generate trace

```bash
npx playwright test --trace on
npx playwright show-trace trace.zip
```

## 📝 Writing Tests

### Using Page Object Model

```javascript
import { expect, test } from '../../../fixtures/adminFixtures.js';
import HomePageValidation from '../../../pageObjects/admin/adminstration/homePageValidation.po.js';

test('My test', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const homePage = new HomePageValidation(page);

  await homePage.navigateToHomePage();
  // ... rest of test
});
```

## 🤝 Getting Help

If you encounter issues:

1. Check this README
2. Review `CI-CD-SETUP.md` for CI/CD specific setup
3. Verify all environment variables in `.env`
4. Check the error logs in `test-execution.log`
5. Contact the team

## ⚙️ Advanced Configuration

### Browser Settings

Edit `config/browser.config.js` for browser-specific settings

### Timeouts

Edit `config/environment.config.js` to adjust timeout values

### Retry Logic

Configure in `playwright.config.js`:

```javascript
retries: process.env.CI ? 2 : 0;
```
