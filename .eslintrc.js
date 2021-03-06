module.exports = {
  extends: [
    'next',
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:import/recommended',
    'plugin:import/warnings',
    'prettier',
  ],
  env: {
    jest: true,
  },
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
}
