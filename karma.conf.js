
module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'dist/app.js',
      {pattern: 'node_modules/angular-mocks/angular-mocks.js', watched:false},
      'src/**/*.spec.js'
    ],

    preprocessors: {
      'src/**/*.spec.js': ['babel']
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
