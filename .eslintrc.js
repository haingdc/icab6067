module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': 0,
    'prefer-template': 'off',
    'eqeqeq': 0,
    'global-require': 0,
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'no-else-return': 0,
    'no-nested-ternary': 0,
    'no-unused-vars': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
    'react/destructuring-assignment': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 'off',
    'react-native/no-inline-styles': 0,
    'react/no-this-in-sfc': 'off',
    'react/prefer-stateless-function': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/dot-notation': 0,
    'import/no-dynamic-require': 0,
  },
}
