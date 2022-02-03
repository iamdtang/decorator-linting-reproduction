module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: ["decorator-position"],
  extends: ["plugin:decorator-position/ember"],
  env: {
    browser: true,
  },
  rules: {
    "decorator-position/decorator-position": [
      "error",
      {
        properties: "prefer-inline",
        methods: "above",
      },
    ],
  },
};
