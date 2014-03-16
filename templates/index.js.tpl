/*global define*/
define(['require', 'util', 'api/routes', <%scripts%>], function (require, util, routes) {
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
    [<%scripts%>].forEach(function(apiString) {
        var api = require(apiString);
        util.extend(proto, api);
    });
    GithubHandler.prototype = proto;
    return GithubHandler;
});