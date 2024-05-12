module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb", // Extends Airbnb's base style guide
    "airbnb/hooks", //Includes Airbnb's React hook rules. (Ensures hooks, are only called at top level of a function)
    "plugin:import/errors",    // Import plugin with error rules
    "plugin:import/warnings",  // Import plugin with warning rules
    "plugin:import/typescript" // Import plugin with TypeScript rules
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  //Specifies the TypeScript parser
  overrides: [
    {
      files: ["*.ts",".tsx"], //Override rules for TypeScript
      rules: {
        "react/jsx-filename-extension": ["error", {extensions: [".tsx"]}],  // Enforces the usage of JSX in files with .tsx extension
        "react/react-in-jsx-scope": "off",  // Disables the rule requiring React to be in scope when using JSX
        "import/no-unresolved": "off", // Disables the rule for unresolved imports
        "import/no-absolute-path": "off" // Disables the rule for absolute import paths
      }
    },
    {
      files:["*.ts",".tsx"],
      rules: {
        "no-unresolved-imports": "off" // Disables the rule for unresolved imports (not a standard ESLint rule)
      }
    }
  ],
  plugins: ['react-refresh'],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // Import extensions rule: specifies file extensions for imports
    // - Allows omitting extensions for JS, JSX, TS, and TSX files
    "import/extensions":[
      "error",
      "ignorePackages",
      {
        "js":"never",
        "jsx":"never",
        "ts":"never",
        "tsx":"never",
      }
    ]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"] //Configures import resolver to help locate modules or path specified.
      }
    }
  },
}
