module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-loop-func": "off",
    "func-names": "off",
    "no-use-before-define": "off"
  },
};
