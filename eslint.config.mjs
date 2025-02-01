import eslintPlugin from '@typescript-eslint/eslint-plugin';
import eslintParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'], // Apply this configuration to TypeScript files
    languageOptions: {
      parser: eslintParser, // Use the TypeScript parser
      parserOptions: {
        ecmaVersion: 'latest', // Use the latest ECMAScript standard
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': eslintPlugin, // Load the TypeScript plugin
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error'], // Disallow unused variables
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        {
          allowExpressions: true, // Allow return types to be inferred for expressions
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn', // Warn about the use of `any`
    },
  },
];
