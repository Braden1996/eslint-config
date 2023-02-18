const path = require("path");

module.exports = {
  extends: [path.join(__dirname, "./core")],
  env: {
    node: true,
    es6: true,
  },
};
