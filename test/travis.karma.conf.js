module.exports = function(config) {
    'use strict';

    config.set({
        basePath: '..',
        frameworks: ['jasmine', 'requirejs'],

        files: [
            {pattern: 'lib/**/*.js', included: false},
            {pattern: 'test/specs/**/*-spec.js', included: false},

            'test/test-main.js'
        ],

        browsers: ['PhantomJS'],
        reporters: ['dots', 'coverage'],
        preprocessors: {
            'lib/**/*.js': ['coverage']
        },
        coverageReporter: {
            type : 'lcov',
            dir : 'coverage'
        },

        logLevel: config.LOG_INFO,

        autoWatch: false,
        singleRun: true
    });
};
