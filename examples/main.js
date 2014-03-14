/*global requirejs, window*/
(function () {
    'use strict';

    requirejs.config({
        // Karma serves files from '/base'
        baseUrl: '../lib',

        paths: {
            Github: '../lib/index',
            GitHubUtils: '../lib/util',
            GitHubHttpError: '../lib/HttpError',
            GitHubApiIndex: '../lib/api/index'
        }
    });

    requirejs(['Github'], function(Github){
        console.log(Github);
    });
}());