/*jshint camelcase: false*/

module.exports = function (grunt) {
    'use strict';

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-karma-coveralls');
    var config = {
        requirejs: {
            lib: 'lib/requirejs',
            api: 'lib/requirejs/api',
            dist: 'dist'
        },
        test: 'test'
    };

    grunt.initConfig({
        config: config,
        watch: {
            options: {
                nospawn: true
            },
            dev: {
                files: [
                    '<%= config.app %>/css/*',
                    '<%= config.app %>/js/**/*',
                    '<%= config.app %>/worker/**/*',
                    '<%= config.app %>/*.html',
                    '<%= config.app %>/templates/**/*',
                    '!<%= config.app %>/bower_components/*'
                ],
                tasks: ['devWatch']
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= config.dist %>/*'
                    ]
                }]
            }
        },
        jsdoc : {
            requirejs_dist : {
                src: ['<%= config.lib %>/*.js', '<%= config.api %>/*.js', 'README.md'],
                options: {
                    destination: 'doc',
                    configure: 'jsdoc.conf.json',
                    template: 'node_modules/grunt-jsdoc/node_modules/ink-docstrap/template',
                    tutorials: 'tutorials'
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: '<%= config.lib %>/js/{,*/}*.js'
        },
        requirejs: {
            options: {
                loglevel: 5,
                inlineText: true,
                baseUrl: './lib/requirejs',
                optimize: 'uglify2',
                name: 'githubjs',
                out: 'dist/github.requirejs.min.js'
            },
            dist: {}
        },
        karma: {
            dev: {
                configFile: '<%= config.test %>/dev.karma.conf.js'
            },
            travis: {
                configFile: '<%= config.test %>/travis.karma.conf.js'
            }
        },
        coveralls: {
            options: {
                debug: true,
                coverage_dir: 'coverage'
            }
        }
    });


    grunt.registerTask('devWatch', [
        'jshint'
    ]);

    grunt.registerTask('dist', [
//        'clean:dist',
        'jshint',
        'requirejs:dist'
    ]);

    grunt.registerTask('test', [
        'karma:dev'
    ]);

    grunt.registerTask('travis', [
        'karma:travis',
        'coveralls'
    ]);

};
