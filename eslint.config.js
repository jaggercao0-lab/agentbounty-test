export default [
  {
    files: [
      "**/*.js",
      "**/*.mjs",
    ],

    languageOptions: {
      globals: {
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
      },
    },

    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
];
