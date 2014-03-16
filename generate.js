#!/usr/bin/env node
/** section: github, internal
 * class ApiGenerator
 *
 *  Copyright 2012 Cloud9 IDE, Inc.
 *
 *  This product includes software developed by
 *  Cloud9 IDE, Inc (http://c9.io).
 *
 *  Author: Mike de Boer <mike@c9.io>
 **/

'use strict';

function toCamelCase(str, upper) {
    upper = upper || false;
    str = str.toLowerCase().replace(/(?:(^.)|(\s+.)|(-.))/g, function (match) {
        return match.charAt(match.length - 1).toUpperCase();
    });
    if (!upper) {
        str = str.charAt(0).toLowerCase() + str.substr(1);
    }
    return str;
}

var Fs = require('fs');
var Path = require('path');

var Optimist = require('optimist');

var IndexTpl = Fs.readFileSync(__dirname + '/templates/index.js.tpl', 'utf8');
var SectionTpl = Fs.readFileSync(__dirname + '/templates/section.js.tpl', 'utf8');
var HandlerTpl = Fs.readFileSync(__dirname + '/templates/handler.js.tpl', 'utf8');
var AfterRequestTpl = Fs.readFileSync(__dirname + '/templates/after_request.js.tpl', 'utf8');
//var TestSectionTpl = Fs.readFileSync(__dirname + '/templates/test_section.js.tpl', 'utf8');
var TestHandlerTpl = Fs.readFileSync(__dirname + '/templates/test_handler.js.tpl', 'utf8');

var main = module.exports = function (routes, tests/*, restore*/) {
    console.log('Generating');

    var dir = Path.join(__dirname, 'lib', 'api');

    // If we're in restore mode, move .bak file back to their original position
    // and short-circuit.
//    if (restore) {
//        var bakRE = /\.bak$/;
//        var files = Fs.readdirSync(dir).filter(function (file) {
//            return bakRE.test(file);
//        }).forEach(function (file) {
//                var from = Path.join(dir, file);
//                var to = Path.join(dir, file.replace(/\.bak$/, ''));
//                Fs.renameSync(from, to);
//                console.log('Restored: ' + file);
//            });
//        return;
//    }

    var defines = routes.defines;
    delete routes.defines;
    var headers = defines['response-headers'];
    // cast header names to lowercase.
    if (headers && headers.length) {
        headers = headers.map(function (header) {
            return header.toLowerCase();
        });
    }
    var sections = {};
    var testSections = {};

    function createComment(paramsStruct, indent) {
        var params = Object.keys(paramsStruct);
        var comment = [
            '/**',
            indent + ' *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.'
        ];
        comment.push(indent + ' *  @config {Object} headers Optional. Key/ value pair ' +
            'of request headers to pass along with the HTTP request. Valid headers are: ' +
            defines['request-headers'].join(', ')
        );
        if (!params.length) {
            comment.push(indent + ' *  No other params, simply pass an empty Object literal `{}`');
        }
        var paramName, def, line;
        for (var i = 0, l = params.length; i < l; i = i + 1) {
            paramName = params[i];
            if (paramName.charAt(0) === '$') {
                paramName = paramName.substr(1);
                if (!defines.params[paramName]) {
                    console.error('Invalid variable parameter name substitution; param ' +
                        paramName +
                        ' not found in defines block ');
                    process.exit(1);
                } else {
                    def = defines.params[paramName];
                }
            } else {
                def = paramsStruct[paramName];
            }

            line = indent + ' *  @config {' + (def.type || '*') + '}';
            line += ' ';
            line += def.required ? paramName : '[' + paramName + ']';
            line += ' ';
            if (def.description){
                line += def.description;
                line += ' ';
            }
            if (def.validation){
                line += 'Validation rule: ` ' + def.validation + ' `.';
            }
            comment.push(line);
        }

        comment.push(indent + ' *  @param {Function} callback function to call when the request is finished ' +
            'with an error as first argument and result data as second argument.');

        return comment.join('\n') + '\n' + indent + ' **/';
    }

    function getParams(paramsStruct, indent) {
        var params = Object.keys(paramsStruct);
        if (!params.length){
            return '{}';
        }
        var values = [];
        var paramName, def;
        for (var i = 0, l = params.length; i < l; i = i + 1) {
            paramName = params[i];
            if (paramName.charAt(0) === '$') {
                paramName = paramName.substr(1);
                if (!defines.params[paramName]) {
                    console.log('Invalid variable parameter name substitution; param ' + paramName + ' not found in defines block');
                    process.exit(1);
                } else{
                    def = defines.params[paramName];
                }
            } else {
                def = paramsStruct[paramName];
            }

            values.push(indent + '    ' + paramName + ': \'' + def.type + '\'');
        }
        return '{\n' + values.join(',\n') + '\n' + indent + '}';
    }

    function prepareApi(struct, baseType) {
        if (!baseType){
            baseType = '';
        }

        Object.keys(struct).forEach(function (routePart) {
            var block = struct[routePart];
            if (!block){
                return;
            }
            var messageType = baseType + '/' + routePart;
            if (block.url && block.params) {
                // we ended up at an API definition part!
                var parts = messageType.split('/');
                var section = toCamelCase(parts[1].toLowerCase());
                if (!block.method) {
                    throw new Error('No HTTP method specified for ' + messageType +
                        'in section ' + section);
                }

                parts.splice(0, 2);
                var funcName = toCamelCase(parts.join('-'));
                var comment = createComment(block.params, '            ');

                // add the handler to the sections
                if (!sections[section]){
                    sections[section] = [];
                }

                var afterRequest = '';
                if (headers && headers.length) {
                    afterRequest = AfterRequestTpl.replace('<%headers%>', '\'' +
                        headers.join('\', \'') + '\'');
                }
                sections[section].push(HandlerTpl
                    .replace('<%funcName%>', funcName)
                    .replace('<%comment%>', comment)
                    .replace('<%afterRequest%>', afterRequest)
                );

                // add test to the testSections
                if (!testSections[section]){
                    testSections[section] = [];
                }
                testSections[section].push(TestHandlerTpl
                    .replace('<%name%>', block.method + ' ' + block.url + ' (' + funcName + ')')
                    .replace('<%funcName%>', section + '.' + funcName)
                    .replace('<%params%>', getParams(block.params, '            '))
                );
            } else {
                // recurse into this block next:
                prepareApi(block, messageType);
            }
        });
    }

    console.log('Converting routes to functions');
    prepareApi(routes);

    console.log('Writing files to version dir');
    var sectionNames = Object.keys(sections);

    var sectionPaths = sectionNames.map(function(name){
        return 'api/' + name;
    });

    console.log('Writing index.js file');
    Fs.writeFileSync(Path.join(dir, 'index.js'),
        IndexTpl
            .replace('<%name%>', defines.constants.name)
            .replace('<%description%>', defines.constants.description)
            .replace(/<%scripts%>/g, '\'' + sectionPaths.join('\', \'') + '\''),
        'utf8');

    Object.keys(sections).forEach(function (section) {
        var def = sections[section];
        console.log('Writing ' + section + '.js file');
        Fs.writeFileSync(Path.join(dir, section + '.js'),
            SectionTpl
            .replace(/<%sectionName%>/g, section)
            .replace('<%sectionBody%>', def.join('\n')),
            'utf8'
        );

        // When we don't need to generate tests, bail out here.
        if (!tests){
            return;
        }

//        def = testSections[section];
        // test if previous tests already contained implementations by checking
        // if the difference in character count between the current test file
        // and the newly generated one is more than twenty characters.
//        var body = TestSectionTpl
//            .replace('<%version%>', version.replace('v', ''))
//            .replace(/<%sectionName%>/g, section)
//            .replace('<%testBody%>', def.join('\n\n'));
//        var path = Path.join(dir, section + 'Test.js');
//        if (Fs.existsSync(path) && Math.abs(Fs.readFileSync(path, 'utf8').length - body.length) >= 20) {
//            Util.log('Moving old test file to '
//            ' + path + '.bak
//            ' to preserve tests ' +
//                'that were already implemented. \nPlease be sure te check this file ' +
//                'and move all implemented tests back into the newly generated test!', 'error'
//        )
//            ;
//            Fs.renameSync(path, path + '.bak');
//        }
//
//        Util.log('Writing test file for ' + section + ', version ' + version);
//        Fs.writeFileSync(path, body, 'utf8');
    });
};

if (!module.parent) {
    var argv = Optimist
        .wrap(80)
        .usage('Generate the implementation of the node-github module, including ' +
            'unit-test scaffolds.\nUsage: $0 [-r] [-v VERSION]')
        .alias('r', 'restore')
        .describe('r', 'Restore .bak files, generated by a previous run, to the original')
        .alias('t', 'tests')
        .describe('t', 'Also generate unit test scaffolds')
        .alias('h', 'help')
        .describe('h', 'Display this usage information')
        .boolean(['r', 't', 'h'])
        .argv;

    if (argv.help) {
        console.log(Optimist.help());
        process.exit();
    }

    var baseDir = Path.join(__dirname, 'lib', 'api');
    var routes = require(baseDir + '/routes.js');
    if (!routes.defines){
        process.exit(1);
    }

    console.log('Starting up...');
    main(routes, argv.tests, argv.restore);
}
