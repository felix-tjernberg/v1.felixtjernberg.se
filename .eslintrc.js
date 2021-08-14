module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': 'warn',
    'prettier/prettier': 'warn',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'sort-imports': [2],
    'sort-keys': [2, 'asc', { natural: true }],
    'sort-vars': [1]
  }
}
