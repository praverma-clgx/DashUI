import globals from 'globals';
import pluginJs from '@eslint/js';
import playwright from 'eslint-plugin-playwright';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
      },
    },
  },
  pluginJs.configs.recommended,
  playwright.configs['flat/recommended'],
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'playwright/no-networkidle': 'off',
    },
  },
  {
    ignores: ['node_modules/', 'playwright-report/', 'test-results/', 'docs/'],
  },
];
