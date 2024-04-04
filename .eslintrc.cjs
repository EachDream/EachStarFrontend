module.exports = {
  root: true,
  extends: [
    '@nuxt/eslint-config',
    'plugin:prettier/recommended', // Enabling eslint-plugin-prettier and eslint-config-prettier
    'prettier', // Extending a configuration for code formatting
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
  },
}
