module.exports = function(config) {
    'use strict';

    config.set({
        basePath: '..',
        frameworks: ['jasmine', 'requirejs'],

        files: [
            {pattern: 'lib/requirejs/**/*.js', included: false},
            {pattern: 'test/specs/**/*-spec.js', included: false},

            'test/test-main.js'
        ],

        browsers: ['PhantomJS'],
        reporters: ['dots', 'coverage'],
        preprocessors: {
            'lib/requirejs//**/*.js': ['coverage']
        },
        coverageReporter: {
            type : 'html',
            dir : 'coverage'
        },

        logLevel: config.LOG_INFO,

        autoWatch: true,
        singleRun: false
    });
};
