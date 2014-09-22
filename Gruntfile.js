/*jshint camelcase: false*/

module.exports = function (grunt) {
    'use strict';

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-karma-coveralls');
    var config = {
        requirejs: {
            lib: 'lib/requirejs',
            api: 'lib/requirejs/api'
        },
        dist: 'dist',
        coverage: 'test/coverage',
        templates: 'templates/wo_requirejs',
        build: 'lib/wo_require',
        test: 'test'
    };

    grunt.initConfig({
        config: config,
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
                coverage_dir: 'test/coverage'
            }
        }
    });


    grunt.registerTask('devWatch', [
        'jshint'
    ]);

    grunt.registerTask('dist', [
        'clean:dist',
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

    grunt.registerTask('buildScript', function () {
        var AppTpl = grunt.file.read(config.templates + '/index.js.tpl', 'utf8'),
            SectionTpl = grunt.file.read(config.templates + '/section.js.tpl', 'utf8'),
            HandlerTpl = grunt.file.read(config.templates + '/handler.js.tpl', 'utf8'),
            AfterRequestTpl = grunt.file.read(config.templates + '/after_request.js.tpl', 'utf8'),
            routes = grunt.file.readJSON(config.templates + '/routes.json'),
            github = grunt.file.read(config.templates + '/github.js'),
            util = grunt.file.read(config.templates + '/util.js'),
            httpError = grunt.file.read(config.templates + '/HttpError.js'),
            defines = routes.defines,
            headers = defines['response-headers'],
            sections = {}, dashedSectionNames = {}, testSections = {}, api = [];


        delete routes.defines;

        if (headers && headers.length) {
            headers = headers.map(function (header) {
                return header.toLowerCase();
            });
        }

        function toCamelCase(str, upper) {
            str = str.toLowerCase().replace(/(?:(^.)|(\s+.)|(-.))/g, function (match) {
                return match.charAt(match.length - 1).toUpperCase();
            });
            if (upper) {
                return str;
            }
            return str.charAt(0).toLowerCase() + str.substr(1);
        }

        function prepareApi(struct, baseType) {
            baseType = baseType || '';

            Object.keys(struct).forEach(function (routePart) {
                var block = struct[routePart],
                    messageType = baseType + '/' + routePart;

                if (!block) {
                    return;
                }

                if (!block.url && !block.params) {
                    prepareApi(block, messageType);
                } else {
                    var parts = messageType.split('/');
                    var sectionName = toCamelCase(parts[1].toLowerCase());
                    dashedSectionNames[sectionName] = parts[1].toLowerCase();
                    if (!block.method) {
                        grunt.fail.fatal('No HTTP method specified for ' + messageType + ' in section ' + sectionName);
                    }

                    parts.splice(0, 2);
                    var funcName = toCamelCase(parts.join('-'));
                    var funcNameDash = parts.join('-');

                    if (!sections[sectionName]) {
                        sections[sectionName] = [];
                    }


                    var afterRequestTmpl = '';
                    if (headers && headers.length) {
                        afterRequestTmpl = grunt.template.process(AfterRequestTpl, {
                            data: {
                                headers: '\'' + headers.join('\', \'') + '\''
                            }
                        });
                    }

                    var options = {
                        data: {
                            sectionName: sectionName,
                            funcName: funcName,
                            funcNameDash: funcNameDash,
                            afterRequest: afterRequestTmpl
                        }
                    };
                    var handlerTemplate = grunt.template.process(HandlerTpl, options);
                    sections[sectionName].push(handlerTemplate);

                    if (!testSections[sectionName]){
                        testSections[sectionName] = [];
                    }

//                    var testHandlerTemplate = grunt.template.process(TestHandlerTpl, options);
//                    testSections[sectionName].push(testHandlerTemplate);
                }
            });
        }

        prepareApi(routes);

        Object.keys(sections).forEach(function (sectionName) {
            var options = {
                    data: {
                        section: sectionName,
                        sectionBody: sections[sectionName].join('\n')
                    }
                },
                sectionTemplate = grunt.template.process(SectionTpl, options);
//                testSectionTemplate = grunt.template.process(TestSectionTpl, options);

            api.push(sectionTemplate);
//            grunt.file.write(config.test + '/unit/routes/' + sectionName + '.spec.js', testSectionTemplate, 'utf8');
        });

        routes.defines = defines;
        var sectionNames = Object.keys(sections),
            appTemplate = grunt.template.process(AppTpl, {
                data: {
                    sections: sectionNames,
                    routes: JSON.stringify(routes),
                    github: github,
                    util: util,
                    httpError: httpError,
                    api: api.join('\n\n\n')
                }
            });

        grunt.file.write(config.build + '/github.js', appTemplate, 'utf8');

    });

};
