const jestOverride = require("../overrides/jest");
const prettierOverride = require("../overrides/prettier");
const typescriptOverride = require("../overrides/typescript");

const getDefaultConfig = {
  extends: ["plugin:import/errors", "plugin:import/warnings"],
  plugins: ["import", "prefer-object-spread"],
  env: { es6: true },
  rules: {
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "prefer-object-spread/prefer-object-spread": 2,
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "unknown",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/no-named-as-default": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 9,
  },
  settings: {
    "import/resolver": {
      [require.resolve("eslint-import-resolver-node")]: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  overrides: [typescriptOverride, jestOverride, prettierOverride],
};

module.exports = getDefaultConfig;
