
module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'dist/*.js',
      'node_modules/angular-mocks/angular-mocks.js'
    ],

    preprocessors: {
      'src/**/*.js': ['rollup'],
      'src/**/*.spec.js': ['rollup'],
    },

    exclude: [
    ],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity
  })
}
