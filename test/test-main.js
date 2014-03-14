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
            Github: '../lib/index',
            GitHubUtils: '../lib/util',
            GitHubHttpError: '../lib/HttpError',
            GitHubApiIndex: '../lib/api/index'
        },
        map: {
            Github: {
                'api/index': 'GitHubApiIndex',
                'util': 'GitHubUtils',
                'HttpError': 'GitHubHttpError'
            },

            'GitHubApiIndex': {
                'util': 'GitHubUtils',
                'api/routes': '../lib/api/routes',
                'api/gists': '../lib/api/gists',
                'api/gitdata': '../lib/api/gitdata',
                'api/authorization': '../lib/api/authorization',
                'api/orgs': '../lib/api/orgs',
                'api/statuses': '../lib/api/statuses',
                'api/pullRequests': '../lib/api/pullRequests',
                'api/repos': '../lib/api/repos',
                'api/user': '../lib/api/user',
                'api/events': '../lib/api/events',
                'api/search': '../lib/api/search',
                'api/issues': '../lib/api/issues',
                'api/markdown': '../lib/api/markdown'
            }

        },
        // ask Require.js to load these files (all our tests)
        deps: tests,

        // start test run, once Require.js is done
        callback: window.__karma__.start
    });
}());