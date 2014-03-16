/*global define*/
define(function(){
    'use strict';

    /**
     * @exports pullRequests
     * @memberof Client
     */
    var pullRequests = {
        pullRequests: {}
    };

        /**
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} [state] Validation rule: ` ^(open|closed)$ `.
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    pullRequests.pullRequests.prototype.getAll = function(msg, block, callback) {
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
     *  @config {Number} number Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    pullRequests.pullRequests.prototype.get = function(msg, block, callback) {
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
     *  @config {String} title 
     *  @config {String} [body] 
     *  @config {String} base Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo. 
     *  @config {String} head Required string - The branch (or git ref) where your changes are implemented. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    pullRequests.pullRequests.prototype.create = function(msg, block, callback) {
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
     *  @config {Number} issue Validation rule: ` ^[0-9]+$ `.
     *  @config {String} base Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo. 
     *  @config {String} head Required string - The branch (or git ref) where your changes are implemented. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    pullRequests.pullRequests.prototype.createFromIssue = function(msg, block, callback) {
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
     *  @config {Number} number Validation rule: ` ^[0-9]+$ `.
     *  @config {String} [state] Validation rule: ` ^(open|closed)$ `.
     *  @config {String} title 
     *  @config {String} [body] 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    pullRequests.pullRequests.prototype.update = function(msg, block, callback) {
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
     *  @config {Number} number Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    pullRequests.pullRequests.prototype.getCommits = function(msg, block, callback) {
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
     *  @config {Number} number Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    pullRequests.pullRequests.prototype.getFiles = function(msg, block, callback) {
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
     *  @config {Number} number Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    pullRequests.pullRequests.prototype.getMerged = function(msg, block, callback) {
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
     *  @config {Number} number Validation rule: ` ^[0-9]+$ `.
     *  @config {String} [commit_message] Optional string - The message that will be used for the merge commit 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    pullRequests.pullRequests.prototype.merge = function(msg, block, callback) {
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
     *  @config {Number} number Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    pullRequests.pullRequests.prototype.getComments = function(msg, block, callback) {
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
     *  @config {Number} number Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    pullRequests.pullRequests.prototype.getComment = function(msg, block, callback) {
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
     *  @config {Number} number Validation rule: ` ^[0-9]+$ `.
     *  @config {String} body 
     *  @config {String} commit_id Required string - Sha of the commit to comment on. 
     *  @config {String} path Required string - Relative path of the file to comment on. 
     *  @config {Number} position Required number - Column index in the diff to comment on. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    pullRequests.pullRequests.prototype.createComment = function(msg, block, callback) {
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
     *  @config {Number} number Validation rule: ` ^[0-9]+$ `.
     *  @config {String} body 
     *  @config {Number} in_reply_to 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    pullRequests.pullRequests.prototype.createCommentReply = function(msg, block, callback) {
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
     *  @config {Number} number Validation rule: ` ^[0-9]+$ `.
     *  @config {String} body 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    pullRequests.pullRequests.prototype.updateComment = function(msg, block, callback) {
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
     *  @config {Number} number Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    pullRequests.pullRequests.prototype.deleteComment = function(msg, block, callback) {
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


    return pullRequests;
});

