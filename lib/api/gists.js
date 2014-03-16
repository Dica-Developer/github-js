/*global define*/
define(function(){
    'use strict';

    /**
     * @exports gists
     * @memberof Client
     */
    var gists = {
        gists: {}
    };

        /**
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @config {Date} [since] Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    gists.gists.prototype.getAll = function(msg, block, callback) {
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
     *  @config {Date} [since] Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    gists.gists.prototype.getFromUser = function(msg, block, callback) {
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
     *  @config {String} [description] 
     *  @config {Boolean} public 
     *  @config {Json} files Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content' 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    gists.gists.prototype.create = function(msg, block, callback) {
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
     *  @config {String} id 
     *  @config {String} [description] 
     *  @config {Json} files Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content' 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    gists.gists.prototype.edit = function(msg, block, callback) {
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
     *  @config {Date} [since] Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    gists.gists.prototype.public = function(msg, block, callback) {
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
     *  @config {Date} [since] Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    gists.gists.prototype.starred = function(msg, block, callback) {
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
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    gists.gists.prototype.get = function(msg, block, callback) {
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
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    gists.gists.prototype.star = function(msg, block, callback) {
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
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    gists.gists.prototype.deleteStar = function(msg, block, callback) {
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
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    gists.gists.prototype.checkStar = function(msg, block, callback) {
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
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    gists.gists.prototype.fork = function(msg, block, callback) {
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
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    gists.gists.prototype.delete = function(msg, block, callback) {
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
     *  @config {String} gist_id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    gists.gists.prototype.getComments = function(msg, block, callback) {
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
     *  @config {String} gist_id 
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    gists.gists.prototype.getComment = function(msg, block, callback) {
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
     *  @config {String} gist_id 
     *  @config {String} body 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    gists.gists.prototype.createComment = function(msg, block, callback) {
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
     *  @config {String} gist_id 
     *  @config {String} id 
     *  @config {String} body 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    gists.gists.prototype.editComment = function(msg, block, callback) {
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
     *  @config {String} gist_id 
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    gists.gists.prototype.deleteComment = function(msg, block, callback) {
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


    return gists;
});

