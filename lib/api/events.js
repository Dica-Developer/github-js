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
    * @exports events
    */
    function(){
        'use strict';

        var events = {
            events: {}
        };

                /**
         *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
         *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
         *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
         *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
         *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
         **/
        events.events.prototype.get = function(msg, block, callback) {
            var self = this;
            this.client.httpSend(msg, block, function(err, res) {
                if (err) {
                    return self.sendError(err, null, msg, callback);
                }

                var ret;
                if (typeof res.headers !== 'undefined' && typeof res.headers['content-type'] !== 'undefined' && res.headers['content-type'].indexOf('text/html') > -1) {
                    ret = {
                        data: res.data
                    };
                } else {
                    try {
                        ret = res.data && JSON.parse(res.data);
                    } catch (ex) {
                        if (callback) {
                            callback(new Error(ex), res);
                        }
                        return;
                    }
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
         *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
         *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
         *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
         **/
        events.events.prototype.getFromRepo = function(msg, block, callback) {
            var self = this;
            this.client.httpSend(msg, block, function(err, res) {
                if (err) {
                    return self.sendError(err, null, msg, callback);
                }

                var ret;
                if (typeof res.headers !== 'undefined' && typeof res.headers['content-type'] !== 'undefined' && res.headers['content-type'].indexOf('text/html') > -1) {
                    ret = {
                        data: res.data
                    };
                } else {
                    try {
                        ret = res.data && JSON.parse(res.data);
                    } catch (ex) {
                        if (callback) {
                            callback(new Error(ex), res);
                        }
                        return;
                    }
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
         *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
         *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
         *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
         **/
        events.events.prototype.getFromRepoIssues = function(msg, block, callback) {
            var self = this;
            this.client.httpSend(msg, block, function(err, res) {
                if (err) {
                    return self.sendError(err, null, msg, callback);
                }

                var ret;
                if (typeof res.headers !== 'undefined' && typeof res.headers['content-type'] !== 'undefined' && res.headers['content-type'].indexOf('text/html') > -1) {
                    ret = {
                        data: res.data
                    };
                } else {
                    try {
                        ret = res.data && JSON.parse(res.data);
                    } catch (ex) {
                        if (callback) {
                            callback(new Error(ex), res);
                        }
                        return;
                    }
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
         *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
         *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
         *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
         **/
        events.events.prototype.getFromRepoNetwork = function(msg, block, callback) {
            var self = this;
            this.client.httpSend(msg, block, function(err, res) {
                if (err) {
                    return self.sendError(err, null, msg, callback);
                }

                var ret;
                if (typeof res.headers !== 'undefined' && typeof res.headers['content-type'] !== 'undefined' && res.headers['content-type'].indexOf('text/html') > -1) {
                    ret = {
                        data: res.data
                    };
                } else {
                    try {
                        ret = res.data && JSON.parse(res.data);
                    } catch (ex) {
                        if (callback) {
                            callback(new Error(ex), res);
                        }
                        return;
                    }
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
         *  @config {String} org 
         *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
         *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
         *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
         **/
        events.events.prototype.getFromOrg = function(msg, block, callback) {
            var self = this;
            this.client.httpSend(msg, block, function(err, res) {
                if (err) {
                    return self.sendError(err, null, msg, callback);
                }

                var ret;
                if (typeof res.headers !== 'undefined' && typeof res.headers['content-type'] !== 'undefined' && res.headers['content-type'].indexOf('text/html') > -1) {
                    ret = {
                        data: res.data
                    };
                } else {
                    try {
                        ret = res.data && JSON.parse(res.data);
                    } catch (ex) {
                        if (callback) {
                            callback(new Error(ex), res);
                        }
                        return;
                    }
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
         *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
         *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
         *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
         **/
        events.events.prototype.getReceived = function(msg, block, callback) {
            var self = this;
            this.client.httpSend(msg, block, function(err, res) {
                if (err) {
                    return self.sendError(err, null, msg, callback);
                }

                var ret;
                if (typeof res.headers !== 'undefined' && typeof res.headers['content-type'] !== 'undefined' && res.headers['content-type'].indexOf('text/html') > -1) {
                    ret = {
                        data: res.data
                    };
                } else {
                    try {
                        ret = res.data && JSON.parse(res.data);
                    } catch (ex) {
                        if (callback) {
                            callback(new Error(ex), res);
                        }
                        return;
                    }
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
         *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
         *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
         *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
         **/
        events.events.prototype.getReceivedPublic = function(msg, block, callback) {
            var self = this;
            this.client.httpSend(msg, block, function(err, res) {
                if (err) {
                    return self.sendError(err, null, msg, callback);
                }

                var ret;
                if (typeof res.headers !== 'undefined' && typeof res.headers['content-type'] !== 'undefined' && res.headers['content-type'].indexOf('text/html') > -1) {
                    ret = {
                        data: res.data
                    };
                } else {
                    try {
                        ret = res.data && JSON.parse(res.data);
                    } catch (ex) {
                        if (callback) {
                            callback(new Error(ex), res);
                        }
                        return;
                    }
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
         *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
         *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
         *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
         **/
        events.events.prototype.getFromUser = function(msg, block, callback) {
            var self = this;
            this.client.httpSend(msg, block, function(err, res) {
                if (err) {
                    return self.sendError(err, null, msg, callback);
                }

                var ret;
                if (typeof res.headers !== 'undefined' && typeof res.headers['content-type'] !== 'undefined' && res.headers['content-type'].indexOf('text/html') > -1) {
                    ret = {
                        data: res.data
                    };
                } else {
                    try {
                        ret = res.data && JSON.parse(res.data);
                    } catch (ex) {
                        if (callback) {
                            callback(new Error(ex), res);
                        }
                        return;
                    }
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
         *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
         *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
         *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
         **/
        events.events.prototype.getFromUserPublic = function(msg, block, callback) {
            var self = this;
            this.client.httpSend(msg, block, function(err, res) {
                if (err) {
                    return self.sendError(err, null, msg, callback);
                }

                var ret;
                if (typeof res.headers !== 'undefined' && typeof res.headers['content-type'] !== 'undefined' && res.headers['content-type'].indexOf('text/html') > -1) {
                    ret = {
                        data: res.data
                    };
                } else {
                    try {
                        ret = res.data && JSON.parse(res.data);
                    } catch (ex) {
                        if (callback) {
                            callback(new Error(ex), res);
                        }
                        return;
                    }
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
         *  @config {String} org 
         *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
         *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
         *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
         **/
        events.events.prototype.getFromUserOrg = function(msg, block, callback) {
            var self = this;
            this.client.httpSend(msg, block, function(err, res) {
                if (err) {
                    return self.sendError(err, null, msg, callback);
                }

                var ret;
                if (typeof res.headers !== 'undefined' && typeof res.headers['content-type'] !== 'undefined' && res.headers['content-type'].indexOf('text/html') > -1) {
                    ret = {
                        data: res.data
                    };
                } else {
                    try {
                        ret = res.data && JSON.parse(res.data);
                    } catch (ex) {
                        if (callback) {
                            callback(new Error(ex), res);
                        }
                        return;
                    }
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


        return events;
    });

