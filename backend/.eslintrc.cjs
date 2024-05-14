const { off } = require("process");

module.exports = {
  root: true,
  env: { es2020: true },
  extends: [
    'airbnb', // Extends Airbnb's base style guide
    'plugin:import/errors', // Import plugin with error rules
    'plugin:import/warnings', // Import plugin with warning rules
    'plugin:import/typescript', // Import plugin with TypeScript rules
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  //Specifies the TypeScript parser
  overrides: [
    {
      files: ['*.ts', '.tsx'], //Override rules for TypeScript
      rules: {
        'import/no-unresolved': 'off', // Disables the rule for unresolved imports
        'import/no-absolute-path': 'off', // Disables the rule for absolute import paths
        'no-unresolved-imports': 'off', // Disables the rule for unresolved imports (not a standard ESLint rule)
        'import/no-wildcard': 'off',
        'import/extensions': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], //Configures import resolver to help locate modules or path specified.
      },
    },
  },
};
