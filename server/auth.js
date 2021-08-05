const hash = require('hash.js');

require('dotenv').config();

module.exports.checkAuth = (attemptedAuth) => {
  return hash.sha384().update(attemptedAuth).digest('hex') === process.env.HASH;
}