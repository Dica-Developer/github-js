/*global define*/
define(['require', 'util', 'api/routes', 'api/gists', 'api/gitdata', 'api/issues', 'api/authorization', 'api/orgs', 'api/statuses', 'api/pullRequests', 'api/repos', 'api/user', 'api/events', 'api/search', 'api/markdown'], function (require, util, routes) {
    /**
     *  @class Client
     *
     *  A Node.JS module, which provides an object oriented wrapper for the GitHub v3 API.
     *
     *  Copyright 2012 Cloud9 IDE, Inc.
     *
     *  This product includes software developed by
     *  Cloud9 IDE, Inc (http://c9.io).
     *
     *  Author: Mike de Boer <info@mikedeboer.nl>
     **/

    'use strict';

    var GithubHandler = function (client) {
        this.client = client;
        this.routes = routes;
    };

    var proto = {
        sendError: function (err, block, msg, callback) {
            if (this.client.debug) {
                util.log(err, block, msg.user, 'error');
            }
            if (typeof err === 'string') {
                util.error(err);
            }
            if(callback){
                callback(err);
            }
        }
    };
    ['api/gists', 'api/gitdata', 'api/issues', 'api/authorization', 'api/orgs', 'api/statuses', 'api/pullRequests', 'api/repos', 'api/user', 'api/events', 'api/search', 'api/markdown'].forEach(function(apiString) {
        var api = require(apiString);
        util.extend(proto, api);
    });
    GithubHandler.prototype = proto;
    return GithubHandler;
});