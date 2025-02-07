const {join} = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {

  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
  browserRevision: '132.0.6834.110',
  

};