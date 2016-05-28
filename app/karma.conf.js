// Great explanation on how to set up karma config here http://mike-ward.net/2015/09/07/tips-on-setting-up-karma-testing-with-webpack/

const webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};
module.exports = function(config) {
  config.set({
    basePath:'',
    frameworks: ['mocha', 'chai'],
    port: 9876,
    preprocessors: {
      './src/app.js' : ['webpack'],
      './src/tests/unit/*.js': ['babel']
    },
    files: [
      './src/app.js',
      'node_modules/angular-mocks/angular-mocks.js',
      './tests/unit/*.js'
    ],
    exclude: [],
    reporters: ['progress'],
    webpack: webpackConfig,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome', 'Safari', 'Firefox'],
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity
  })
}
