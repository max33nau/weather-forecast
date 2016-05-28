// Config set up information at http://www.protractortest.org/#/api-overview

exports.config = {
  framework: 'jasmine',
  // I connect to selenium server using webdriver and then I can use this seleniumAddress
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./tests/e2e/*.js'],
  capabilities:
    {
      browserName: 'chrome'
    },
  baseUrl: 'http://localhost:8080',
  allScriptsTimeout: 11000,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
}
