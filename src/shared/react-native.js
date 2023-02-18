const path = require("path");

module.exports = {
  extends: [path.join(__dirname, "./react")],
  plugins: ["react-native"],
  env: {
    "react-native/react-native": true,
  },
  rules: {
    "react-native/no-raw-text": "off",
  },
};
