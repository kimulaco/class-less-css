module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'next/core-web-vitals',
    'plugin:import/recommended',
    'plugin:import/warnings',
    'prettier',
  ],
  rules: {
    'import/order': [
      error,
      {
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
}