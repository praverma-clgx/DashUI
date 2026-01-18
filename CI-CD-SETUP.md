# CI/CD Setup Guide

## Overview

This framework is ready for CI/CD integration with GitHub Actions, GitLab CI, or Azure DevOps.

## Prerequisites

- Node.js 20.x or later
- npm or yarn package manager
- CI/CD platform access (GitHub, GitLab, or Azure DevOps)

## Environment Variables Setup

### Required Secrets/Variables

Add these secrets/variables to your CI/CD platform:

```bash
TEST_ENV=dkirc                          # Environment to test (dkirc, stage, prod)

# Enterprise credentials
DKIRC_ENTERPRISE_LOGIN_URL=https://...
DKIRC_ENTERPRISE_COMPANY_ID=...
DKIRC_ENTERPRISE_USERNAME=...
DKIRC_ENTERPRISE_PASSWORD=...

# Admin credentials
DKIRC_ADMIN_LOGIN_URL=https://...
DKIRC_ADMIN_USERNAME=...
DKIRC_ADMIN_PASSWORD=...
```

## GitHub Actions Setup


## Environment Variables Setup

### Required Secrets/Variables

Add these secrets/variables to your CI/CD platform (GitHub, GitLab, Azure DevOps):

```bash
TEST_ENV=dkirc                          # Environment to test (dkirc, stage, prod)

# Enterprise credentials
DKIRC_ENTERPRISE_LOGIN_URL=https://...
DKIRC_ENTERPRISE_COMPANY_ID=...
DKIRC_ENTERPRISE_USERNAME=...
DKIRC_ENTERPRISE_PASSWORD=...

# Admin credentials
DKIRC_ADMIN_LOGIN_URL=https://...
DKIRC_ADMIN_USERNAME=...
DKIRC_ADMIN_PASSWORD=...

# For other environments (STAGE, PROD), add similar variables
```

**How .env is loaded:**
- The framework loads .env automatically in `global-setup.js` using `import 'dotenv/config'`.
- You do NOT need to modify `playwright.config.js` for .env loading.
1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add all required secrets from the list above

### View Results

- Go to **Actions** tab
- Click on the workflow run
- Download artifacts: `playwright-report` and `test-results` (HTML report, screenshots, logs)
### View Results


### View Results

- Go to **CI/CD** → **Pipelines**
- Click on the pipeline run
- Download artifacts: `playwright-report`, `test-results`

## GitLab CI Setup

### View Results

- Go to **Pipelines** → **Runs**
- Click on the run
- Download artifacts: `playwright-report`, `test-results`
3. Push code to `main` or `develop` branch
4. Pipeline will run automatically

### View Results


### Install Playwright browsers

```bash
npx playwright install
```
- Go to **CI/CD** → **Pipelines**
- Click on the pipeline run
- Download artifacts from the job

## Azure DevOps Setup

1. Go to **Pipelines** → **Library** → **Variable groups**
2. Create variable group named "PlaywrightTests"
3. Add all required variables from the list above
4. Go to **Pipelines** → **New pipeline**
5. Select your repository and choose existing `azure-pipelines.yml`

### View Results

- Go to **Pipelines** → **Runs**
- Click on the run
- Download artifacts: `playwright-report`

### Run tests

```bash
# All tests
npm test

# Specific project
npm run test:admin
npm run test:enterprise
npm run test:mixed

# With UI
npm run test:ui

# Headed mode (see browser)
npm run test:headed

# Run with more parallelism (faster on CI/CD agents)
npx playwright test --workers=2

# Run with trace or video (for debugging)
npx playwright test --trace=on --video=on
```

## Local Testing

### Install dependencies
```

### Install Playwright browsers

## Reports & Artifacts

### Generated files:

- **playwright-report/** - HTML test report with screenshots (and video/trace if enabled)
- **test-results/** - JSON test results, screenshots, logs, and traces
- **.auth/** - Authentication state (gitignored)

### Report retention:

- **GitHub Actions**: 30 days
- **GitLab CI**: 30 days
- **Azure DevOps**: Default retention policy
```

### Create .env file

```bash
cp .env.example .env

### Tests fail in CI but pass locally

1. Check environment variables are set correctly (in CI secrets/variables)
2. Verify TEST_ENV matches your configuration
3. Check if URLs are accessible from CI environment
4. Review timeout settings in `playwright.config.js`
5. Check for missing browser dependencies (run `npx playwright install` in CI)
# Edit .env with your credentials
```

### Run tests


### Authentication issues

1. Verify credentials are correct in CI secrets
2. Check `.auth` folder is excluded in `.gitignore`
3. Ensure `global-setup.js` runs before tests (see Playwright config)
4. Make sure `.env` is loaded via global-setup.js (not in playwright.config.js)
```bash
# All tests
npm test

# Specific project
npm run test:admin
npm run test:enterprise
npm run test:mixed

### Browser installation fails

```bash
# Use the pre-installed Playwright Docker image for CI
# GitHub Actions: Already handled
# GitLab CI: mcr.microsoft.com/playwright:v1.56.1-jammy
# Azure DevOps: Add browser installation step (npx playwright install)
```

# With UI

### Current settings:

- **Sequential execution**: workers: 1 (prevents race conditions by default)
- **Retry on failure**: 1 retry in CI mode (configurable)
- **Timeout**: 10 minutes per test (see playwright.config.js)
- **Reporter**: HTML + JSON + List in CI mode

### To run tests faster:

```javascript
// playwright.config.js
workers: process.env.CI ? 2 : 1,  // Parallel in CI
fullyParallel: true,               // Enable parallel execution
```

**⚠️ Warning**: Parallel execution may cause flaky tests if tests share data or state.
```

## CI-Specific Commands


3. **Review failed test artifacts**
    - Download HTML report
    - Check screenshots (test-results/)
    - Review traces and video (if enabled)
```bash
# Install browsers and run tests
npm run test:ci


4. **Keep secrets secure**
    - Never commit .env file
    - Use CI platform's secret management for all credentials
    - Rotate credentials regularly
# Just install browsers
npm run test:install
```


5. **Monitor test duration**
    - Current timeout: 10 minutes/test (see playwright.config.js)
    - Adjust if tests consistently timeout
    - Review slow tests in reports
## Reports & Artifacts

### Generated files:

- **playwright-report/** - HTML test report with screenshots
- **test-results/** - JSON test results with detailed logs
- **.auth/** - Authentication state (gitignored)

## Support

For issues or questions:

1. Check test reports for detailed error messages and screenshots
2. Review Playwright documentation: https://playwright.dev
3. Check CI platform documentation for integration issues
4. Review the zSetup guide for local setup and troubleshooting

### Report retention:

- **GitHub Actions**: 30 days
- **GitLab CI**: 30 days
- **Azure DevOps**: Default retention policy

## Troubleshooting

### Tests fail in CI but pass locally

1. Check environment variables are set correctly
2. Verify TEST_ENV matches your configuration
3. Check if URLs are accessible from CI environment
4. Review timeout settings in `playwright.config.js`

### Authentication issues

1. Verify credentials are correct in CI secrets
2. Check `.auth` folder is excluded in `.gitignore`
3. Ensure global-setup.js runs before tests

### Browser installation fails

```bash
# Use the pre-installed Playwright Docker image
# GitHub Actions: Already handled
# GitLab CI: mcr.microsoft.com/playwright:v1.56.1-jammy
# Azure DevOps: Add browser installation step
```

## Performance Optimization

### Current settings:

- **Sequential execution**: workers: 1 (prevents race conditions)
- **Retry on failure**: 2 retries in CI mode
- **Timeout**: 5 minutes per test
- **Reporter**: HTML + JSON + List in CI mode

### To run tests faster:

```javascript
// playwright.config.js
workers: process.env.CI ? 2 : 1,  // Parallel in CI
fullyParallel: true,               // Enable parallel execution
```

**⚠️ Warning**: Parallel execution may cause flaky tests due to shared test data.

## Best Practices

1. **Always run tests locally before pushing**

   ```bash
   npm test
   ```

2. **Use feature branches**

   ```bash
   git checkout -b feature/my-feature
   ```

3. **Review failed test artifacts**
   - Download HTML report
   - Check screenshots
   - Review traces

4. **Keep secrets secure**
   - Never commit .env file
   - Use CI platform's secret management
   - Rotate credentials regularly

5. **Monitor test duration**
   - Current timeout: 5 minutes/test
   - Adjust if tests consistently timeout
   - Review slow tests in reports

## Support

For issues or questions:

1. Check test reports for detailed error messages
2. Review Playwright documentation: https://playwright.dev
3. Check CI platform documentation for integration issues
