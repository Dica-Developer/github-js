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
    * @exports Client#authorization
    */
    function(){
        'use strict';

        var authorization = {
            authorization: {}
        };

        (function() {
                          /**
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getAll = function(msg, block, callback) {
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
     *  @config {String} id 
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
     *  @config {Array} [scopes] Optional array - A list of scopes that this authorization is in. 
     *  @config {String} [note] Optional string - A note to remind you what the OAuth token is for. 
     *  @config {String} [note_url] Optional string - A URL to remind you what app the OAuth token is for. 
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

                /**
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} id 
     *  @config {Array} [scopes] Optional array - A list of scopes that this authorization is in. 
     *  @config {Array} [add_scopes] Optional array - A list of scopes to add to this authorization. 
     *  @config {Array} [remove_scopes] Optional array - A list of scopes to remove from this authorization. 
     *  @config {String} [note] Optional string - A note to remind you what the OAuth token is for. 
     *  @config {String} [note_url] Optional string - A URL to remind you what app the OAuth token is for. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.update = function(msg, block, callback) {
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
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.delete = function(msg, block, callback) {
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

        }).call(authorization.authorization);

        return authorization
    });

