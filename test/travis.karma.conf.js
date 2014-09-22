module.exports = function(config) {
    'use strict';

    config.set({
        basePath: '..',
        frameworks: ['jasmine'],

        files: [
            {pattern: 'lib/wo_require/github.js', included: true},
            {pattern: 'test/specs/**/*-spec.js', included: true}
        ],

        browsers: ['PhantomJS'],
        reporters: ['dots', 'coverage'],
        preprocessors: {
            'lib/wo_require/github.js': ['coverage']
        },
        coverageReporter: {
            type : 'lcov',
            dir : 'test/coverage'
        },

        logLevel: config.LOG_INFO,

        autoWatch: false,
        singleRun: true
    });
};
