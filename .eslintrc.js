module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  root: true,
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'prettier',
    '@typescript-eslint'
  ],
  ignorePatterns: ["*.config.js", "*.validation.ts"],
  rules: {
    'prettier/prettier': 'warn',
    // JavaScript rules
    'prefer-const': 'warn',
    'no-var': 'warn',
    'no-unused-vars': 'warn',
    'object-shorthand': 'warn',
    'quote-props': ['warn', 'as-needed'],
    // TypeScript rules
    '@typescript-eslint/array-type': [
      'warn',
      {
        default: 'array',
      },
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'warn',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true },
    ],
  },
  settings: {
    jest: {
      version: 26,
    },
  },
};