module.exports = {
  root: true,

  env: {
    jest: true,
    node: true,
    browser: true
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended'
  ],

  plugins: ['vue', 'prettier'],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-unused-vars': 'warn',
    'vue/no-unused-vars': 'warn',
    'comma-dangle': [2, 'never'],
    'semi': [2, 'never'],
    'space-before-function-paren': ['error', 'never'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
