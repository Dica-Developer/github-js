/**
 *
 *  Copyright 2012 Cloud9 IDE, Inc.
 *
 *  This product includes software developed by
 *  Cloud9 IDE, Inc (http://c9.io).
 *
 *  Author: Mike de Boer <info@mikedeboer.nl>
 **/
define(
    /**
    * @exports Client#statuses
    */
    function(){
        'use strict';

        var statuses = {
            statuses: {}
        };

        (function() {
                          /**
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} sha 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.get = function(msg, block, callback) {
                var self = this;
                this.client.httpSend(msg, block, function(err, res) {
                    if (err) {
                        return self.sendError(err, null, msg, callback);
                    }

                    var ret;
                    try {
                        ret = res.data && JSON.parse(res.data);
                    } catch (ex) {
                        if (callback) {
                            callback(new Error(ex), res);
                        }
                        return;
                    }
                    
                    if (!ret) {
                        ret = {};
                    }
                    if (!ret.meta) {
                        ret.meta = {};
                    }
                    ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-oauth-scopes', 'link', 'location', 'last-modified', 'etag', 'status'].forEach(function(header) {
                        if (res.headers[header]) {
                            ret.meta[header] = res.headers[header];
                        }
                    });

                    if (callback){
                        callback(null, ret);
                    }
                });
            };

                /**
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} sha 
     *  @config {String} state State of the status - can be one of pending, success, error, or failure. Validation rule: ` ^(pending|success|error|failure)$ `.
     *  @config {String} [target_url] Target url to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the ‘source’ of the Status. 
     *  @config {String} [description] Short description of the status. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.create = function(msg, block, callback) {
                var self = this;
                this.client.httpSend(msg, block, function(err, res) {
                    if (err) {
                        return self.sendError(err, null, msg, callback);
                    }

                    var ret;
                    try {
                        ret = res.data && JSON.parse(res.data);
                    } catch (ex) {
                        if (callback) {
                            callback(new Error(ex), res);
                        }
                        return;
                    }
                    
                    if (!ret) {
                        ret = {};
                    }
                    if (!ret.meta) {
                        ret.meta = {};
                    }
                    ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-oauth-scopes', 'link', 'location', 'last-modified', 'etag', 'status'].forEach(function(header) {
                        if (res.headers[header]) {
                            ret.meta[header] = res.headers[header];
                        }
                    });

                    if (callback){
                        callback(null, ret);
                    }
                });
            };

        }).call(statuses.statuses);

        return statuses
    });

