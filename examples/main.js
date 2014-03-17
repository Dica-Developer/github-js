/*global requirejs, window*/
(function () {
    'use strict';

    requirejs.config({
        // Karma serves files from '/base'
        baseUrl: '../lib',

        paths: {
            Github: '../lib/githubjs',
            GitHubUtils: '../lib/util',
            GitHubHttpError: '../lib/HttpError',
            GitHubApiIndex: '../lib/api/index',
            githubjs: '../dist/github.min'
        }
    });

    requirejs(['githubjs', 'Github'], function(Github, Github2){
        console.log(Github, Github2);
    });
}());