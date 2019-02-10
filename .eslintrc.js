module.exports = {
  // "extends": ['eslint:recommended'],
  "ecmaFeatures": {
    "modules": true,
    "spread": true,
    "restParams": true
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  env: {
    "es6": true,
    "jest": true,
    "browser": true,
    "node": true
  },
  rules: {
    "semi": "error",
    "quotes": ["error", "single"],
  }
};
