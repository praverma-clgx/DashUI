/**
 * Test tagging utilities for environment-specific test execution
 */

import { config } from '../config/environment.config.js';

/**
 * Determines if tests should run based on environment
 * @param {string} allowedEnvironments - Comma-separated list of allowed environments
 * @returns {boolean} - True if test should be skipped
 */
export function shouldSkipInEnvironment(...allowedEnvironments) {
  const currentEnv = process.env.ENV || 'stage';
  const baseUrl = config.enterprise?.baseUrl || '';

  // Check if production URL
  const isProd =
    baseUrl.includes('production') || baseUrl.includes('prod.') || currentEnv === 'production';

  // Check if current environment is allowed
  const isAllowed = allowedEnvironments.some(
    (env) => currentEnv.toLowerCase() === env.toLowerCase(),
  );

  // Skip if production and not explicitly allowed
  if (isProd && !allowedEnvironments.includes('production')) {
    return true;
  }

  return false;
}

/**
 * Check if running in production
 * @returns {boolean}
 */
export function isProduction() {
  const baseUrl = config.enterprise?.baseUrl || '';
  const testEnv = process.env.TEST_ENV || '';

  return (
    baseUrl.includes('production') ||
    baseUrl.includes('prod.') ||
    baseUrl.includes('dash-ngs.net') || // Production domain
    testEnv.toLowerCase() === 'prod' ||
    testEnv.toLowerCase() === 'production' ||
    process.env.ENV === 'production'
  );
}

/**
 * Check if running in staging
 * @returns {boolean}
 */
export function isStaging() {
  const baseUrl = config.enterprise?.baseUrl || '';
  return (
    baseUrl.includes('stage') ||
    baseUrl.includes('staging') ||
    process.env.ENV === 'staging' ||
    process.env.ENV === 'stage'
  );
}

/**
 * Check if running in development
 * @returns {boolean}
 */
export function isDevelopment() {
  const baseUrl = config.enterprise?.baseUrl || '';
  return baseUrl.includes('dev') || process.env.ENV === 'dev' || process.env.ENV === 'development';
}
