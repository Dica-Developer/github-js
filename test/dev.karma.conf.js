module.exports = function(config) {
    'use strict';

    config.set({
        basePath: '..',
        frameworks: ['jasmine'],

        files: [
            {pattern: 'dist/github.js', included: true},
            {pattern: 'test/specs/**/*-spec.js', included: true}
        ],

        browsers: ['PhantomJS'],
        reporters: ['dots', 'coverage'],
        preprocessors: {
            'dist/github.js': ['coverage']
        },
        coverageReporter: {
            type : 'html',
            dir : 'test/coverage'
        },

        logLevel: config.LOG_INFO,

        autoWatch: true,
        singleRun: false
    });
};
