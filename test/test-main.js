/*global requirejs, window*/
(function () {
    'use strict';


    var tests = [];
    /*jshint camelcase:false*/
    for (var file in window.__karma__.files) {
        if (window.__karma__.files.hasOwnProperty(file)) {
            if (/-spec\.js$/.test(file)) {
                tests.push(file);
            }
        }
    }

//    console.log(JSON.stringify(window.__karma__.files, null, 2));

    requirejs.config({
        // Karma serves files from '/base'
        baseUrl: '/base/src',

        paths: {
            githubjs: '../lib/requirejs/githubjs',
            GitHubUtils: '../lib/requirejs/util',
            GitHubHttpError: '../lib/requirejs/HttpError',
            GitHubApiIndex: '../lib/requirejs/api/index'
        },
        map: {
            githubjs: {
                'api/index': 'GitHubApiIndex',
                'util': 'GitHubUtils',
                'HttpError': 'GitHubHttpError'
            },

            'GitHubApiIndex': {
                'util': 'GitHubUtils',
                'api/routes': '../lib/requirejs/api/routes',
                'api/gists': '../lib/requirejs/api/gists',
                'api/gitdata': '../lib/requirejs/api/gitdata',
                'api/authorization': '../lib/requirejs/api/authorization',
                'api/orgs': '../lib/requirejs/api/orgs',
                'api/statuses': '../lib/requirejs/api/statuses',
                'api/pullRequests': '../lib/requirejs/api/pullRequests',
                'api/repos': '../lib/requirejs/api/repos',
                'api/user': '../lib/requirejs/api/user',
                'api/events': '../lib/requirejs/api/events',
                'api/search': '../lib/requirejs/api/search',
                'api/issues': '../lib/requirejs/api/issues',
                'api/markdown': '../lib/requirejs/api/markdown'
            }

        },
        // ask Require.js to load these files (all our tests)
        deps: tests,

        // start test run, once Require.js is done
        callback: window.__karma__.start
    });
}());