module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import'],
  extends: ['plugin:tailwindcss/recommended', 'eslint:recommended', 'airbnb', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  env: { browser: true, node: true },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
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
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        trailingComma: 'es5',
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        printWidth: 160,
        jsxSingleQuote: true,
        bracketSpacing: true,
      },
    ],

    // myconfig
    'no-param-reassign': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        args: 'after-used',
        argsIgnorePattern: '^_',
        caughtErrors: 'none',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function', // Bắt buộc dùng arrow function
        unnamedComponents: 'arrow-function',
      },
    ],
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
}
