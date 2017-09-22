
module.exports = function(config) {
  config.set({

  
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/**/*.js',
      'test/**/*test.js'
    ],

    exclude: [
    ],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity,

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-sourcemap-loader'
  ]
  })
}
