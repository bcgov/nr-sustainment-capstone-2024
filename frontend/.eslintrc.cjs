module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime', // Include this for new JSX Transform
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',
        'import/no-undef': 'off',
        'no-console': 'off',
        'arrow-parens': ['error', 'always'], // Ensure parentheses around arrow function arguments
      },
    },
  ],
  plugins: ['react-refresh', '@typescript-eslint', 'react'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
