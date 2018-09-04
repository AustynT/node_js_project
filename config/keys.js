// keys.js

if (process.env.NODE_ENV === "production") {
  // return the prod set of keys
  module.exports = require("./prod");
} else {
  // we are in development return the dv keys
  module.exports = require("./dev");
}
