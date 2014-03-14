/*global define*/
define([
    'util',
    'api/routes',
    'api/gists',
    'api/gitdata',
    'api/issues',
    'api/authorization',
    'api/orgs',
    'api/statuses',
    'api/pullRequests',
    'api/repos',
    'api/user',
    'api/events',
    'api/search',
    'api/markdown'
], function (util, routes, gists, gitdata, issues, authorization, orgs, statuses, pullRequests, repos, user, events, search, markdown) {

    /**
     *  class Github
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
        sendError: function (err, block, msg) {
            if (this.client.debug) {
                console.log(err, block, msg.user, 'error');
            }
            if (typeof err === 'string') {
                console.error(err);
            }
        }
    };

    Utils.extend(proto, gists);
    Utils.extend(proto, gitdata);
    Utils.extend(proto, issues);
    Utils.extend(proto, authorization);
    Utils.extend(proto, orgs);
    Utils.extend(proto, statuses);
    Utils.extend(proto, pullRequests);
    Utils.extend(proto, repos);
    Utils.extend(proto, user);
    Utils.extend(proto, events);
    Utils.extend(proto, search);
    Utils.extend(proto, markdown);

    GithubHandler.prototype = proto;
    return GithubHandler;
});
