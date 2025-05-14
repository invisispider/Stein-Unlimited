import js from '@eslint/js';
import vue from 'eslint-plugin-vue';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import vueParser from 'vue-eslint-parser';

const sharedGlobals = {
  window: 'readonly',
  document: 'readonly',
  console: 'readonly',
  alert: 'readonly',
  confirm: 'readonly',
  HTMLElement: 'readonly',
  HTMLInputElement: 'readonly',
  HTMLCollectionOf: 'readonly',
  Element: 'readonly',
  setTimeout: 'readonly',
  fetch: 'readonly',
  process: 'readonly',
  exports: 'readonly',
  require: 'readonly',
  module: 'readonly',
  screen: 'readonly',
  Event: 'readonly',
  clearInterval: 'readonly',
  setInterval: 'readonly',
  NodeJS: 'readonly',
  DOMParser: 'readonly',
};

export default [
  {
    ignores: ['functions/**/*', 'dist/**/*', 'playwright-report'],
  },
  {
    ...js.configs.recommended,
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      globals: sharedGlobals,
    },
  },
  {
    files: ['**/*.vue'],
    plugins: {
      vue,
      '@typescript-eslint': tseslint,
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: sharedGlobals,
    },
    rules: {
      ...vue.configs['vue3-essential'].rules,
      ...vue.configs['vue3-recommended'].rules,
      'vue/multi-word-component-names': 'off',
      'no-unreachable': 'error',
      'vue/no-v-html': 'off',  // suppresses sanitized call errs
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: sharedGlobals,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
];
