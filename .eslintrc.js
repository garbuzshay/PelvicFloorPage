module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint
    'next/core-web-vitals',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // Customize your rules here
  },
};
