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
    var handler = function(afterRequest){
        return function(msg, block, callback) {
                var self = this;
                this.client.httpSend(msg, block, function(err, res) {
                    if (err) {
                        return self.sendError(err, null, msg, callback);
                    }

                    var ret;
                    if (typeof res.headers !== 'undefined' && typeof res.headers['content-type'] !== 'undefined' && (res.headers['content-type'].indexOf('text/html') > -1 || res.headers['content-type'].indexOf('application/vnd.github.v3.raw') > -1)) {
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
                    ret = afterRequest(ret, res);
                    if (callback){
                        callback(null, ret);
                    }
                });
            };
    };

    var getAllAfterRequest = function(ret, res){
            ret = ret || {};
            ret.meta = ret.meta || {};
            ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-oauth-scopes', 'link', 'location', 'last-modified', 'etag', 'status'].forEach(function(header) {
                if (res.headers[header]) {
                    ret.meta[header] = res.headers[header];
                }
            });
            return ret;
        };
    /**
     *  @function
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @param {Object} [msg.headers] Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Date} [msg.since] Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gists.getAll
     **/
    gists.gists.getAll = handler(getAllAfterRequest);
    var getFromUserAfterRequest = function(ret, res){
            ret = ret || {};
            ret.meta = ret.meta || {};
            ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-oauth-scopes', 'link', 'location', 'last-modified', 'etag', 'status'].forEach(function(header) {
                if (res.headers[header]) {
                    ret.meta[header] = res.headers[header];
                }
            });
            return ret;
        };
    /**
     *  @function
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @param {Object} [msg.headers] Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @param {String} msg.user 
     *  @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Date} [msg.since] Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gists.getFromUser
     **/
    gists.gists.getFromUser = handler(getFromUserAfterRequest);
    var createAfterRequest = function(ret, res){
            ret = ret || {};
            ret.meta = ret.meta || {};
            ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-oauth-scopes', 'link', 'location', 'last-modified', 'etag', 'status'].forEach(function(header) {
                if (res.headers[header]) {
                    ret.meta[header] = res.headers[header];
                }
            });
            return ret;
        };
    /**
     *  @function
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @param {Object} [msg.headers] Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @param {String} [msg.description] 
     *  @param {Boolean} msg.public 
     *  @param {Json} msg.files Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content' 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gists.create
     **/
    gists.gists.create = handler(createAfterRequest);
    var editAfterRequest = function(ret, res){
            ret = ret || {};
            ret.meta = ret.meta || {};
            ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-oauth-scopes', 'link', 'location', 'last-modified', 'etag', 'status'].forEach(function(header) {
                if (res.headers[header]) {
                    ret.meta[header] = res.headers[header];
                }
            });
            return ret;
        };
    /**
     *  @function
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @param {Object} [msg.headers] Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @param {String} msg.id 
     *  @param {String} [msg.description] 
     *  @param {Json} msg.files Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content' 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gists.edit
     **/
    gists.gists.edit = handler(editAfterRequest);
    var publicAfterRequest = function(ret, res){
            ret = ret || {};
            ret.meta = ret.meta || {};
            ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-oauth-scopes', 'link', 'location', 'last-modified', 'etag', 'status'].forEach(function(header) {
                if (res.headers[header]) {
                    ret.meta[header] = res.headers[header];
                }
            });
            return ret;
        };
    /**
     *  @function
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @param {Object} [msg.headers] Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @param {Date} [msg.since] Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gists.public
     **/
    gists.gists.public = handler(publicAfterRequest);
    var starredAfterRequest = function(ret, res){
            ret = ret || {};
            ret.meta = ret.meta || {};
            ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-oauth-scopes', 'link', 'location', 'last-modified', 'etag', 'status'].forEach(function(header) {
                if (res.headers[header]) {
                    ret.meta[header] = res.headers[header];
                }
            });
            return ret;
        };
    /**
     *  @function
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @param {Object} [msg.headers] Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @param {Date} [msg.since] Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gists.starred
     **/
    gists.gists.starred = handler(starredAfterRequest);
    var getAfterRequest = function(ret, res){
            ret = ret || {};
            ret.meta = ret.meta || {};
            ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-oauth-scopes', 'link', 'location', 'last-modified', 'etag', 'status'].forEach(function(header) {
                if (res.headers[header]) {
                    ret.meta[header] = res.headers[header];
                }
            });
            return ret;
        };
    /**
     *  @function
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @param {Object} [msg.headers] Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @param {String} msg.id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gists.get
     **/
    gists.gists.get = handler(getAfterRequest);
    var starAfterRequest = function(ret, res){
            ret = ret || {};
            ret.meta = ret.meta || {};
            ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-oauth-scopes', 'link', 'location', 'last-modified', 'etag', 'status'].forEach(function(header) {
                if (res.headers[header]) {
                    ret.meta[header] = res.headers[header];
                }
            });
            return ret;
        };
    /**
     *  @function
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @param {Object} [msg.headers] Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @param {String} msg.id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gists.star
     **/
    gists.gists.star = handler(starAfterRequest);
    var deleteStarAfterRequest = function(ret, res){
            ret = ret || {};
            ret.meta = ret.meta || {};
            ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-oauth-scopes', 'link', 'location', 'last-modified', 'etag', 'status'].forEach(function(header) {
                if (res.headers[header]) {
                    ret.meta[header] = res.headers[header];
                }
            });
            return ret;
        };
    /**
     *  @function
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @param {Object} [msg.headers] Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @param {String} msg.id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gists.deleteStar
     **/
    gists.gists.deleteStar = handler(deleteStarAfterRequest);
    var checkStarAfterRequest = function(ret, res){
            ret = ret || {};
            ret.meta = ret.meta || {};
            ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-oauth-scopes', 'link', 'location', 'last-modified', 'etag', 'status'].forEach(function(header) {
                if (res.headers[header]) {
                    ret.meta[header] = res.headers[header];
                }
            });
            return ret;
        };
    /**
     *  @function
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @param {Object} [msg.headers] Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @param {String} msg.id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gists.checkStar
     **/
    gists.gists.checkStar = handler(checkStarAfterRequest);
    var forkAfterRequest = function(ret, res){
            ret = ret || {};
            ret.meta = ret.meta || {};
            ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-oauth-scopes', 'link', 'location', 'last-modified', 'etag', 'status'].forEach(function(header) {
                if (res.headers[header]) {
                    ret.meta[header] = res.headers[header];
                }
            });
            return ret;
        };
    /**
     *  @function
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @param {Object} [msg.headers] Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @param {String} msg.id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gists.fork
     **/
    gists.gists.fork = handler(forkAfterRequest);
    var deleteAfterRequest = function(ret, res){
            ret = ret || {};
            ret.meta = ret.meta || {};
            ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-oauth-scopes', 'link', 'location', 'last-modified', 'etag', 'status'].forEach(function(header) {
                if (res.headers[header]) {
                    ret.meta[header] = res.headers[header];
                }
            });
            return ret;
        };
    /**
     *  @function
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @param {Object} [msg.headers] Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @param {String} msg.id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gists.delete
     **/
    gists.gists.delete = handler(deleteAfterRequest);
    var getCommentsAfterRequest = function(ret, res){
            ret = ret || {};
            ret.meta = ret.meta || {};
            ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-oauth-scopes', 'link', 'location', 'last-modified', 'etag', 'status'].forEach(function(header) {
                if (res.headers[header]) {
                    ret.meta[header] = res.headers[header];
                }
            });
            return ret;
        };
    /**
     *  @function
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @param {Object} [msg.headers] Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @param {String} msg.gist_id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gists.getComments
     **/
    gists.gists.getComments = handler(getCommentsAfterRequest);
    var getCommentAfterRequest = function(ret, res){
            ret = ret || {};
            ret.meta = ret.meta || {};
            ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-oauth-scopes', 'link', 'location', 'last-modified', 'etag', 'status'].forEach(function(header) {
                if (res.headers[header]) {
                    ret.meta[header] = res.headers[header];
                }
            });
            return ret;
        };
    /**
     *  @function
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @param {Object} [msg.headers] Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @param {String} msg.gist_id 
     *  @param {String} msg.id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gists.getComment
     **/
    gists.gists.getComment = handler(getCommentAfterRequest);
    var createCommentAfterRequest = function(ret, res){
            ret = ret || {};
            ret.meta = ret.meta || {};
            ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-oauth-scopes', 'link', 'location', 'last-modified', 'etag', 'status'].forEach(function(header) {
                if (res.headers[header]) {
                    ret.meta[header] = res.headers[header];
                }
            });
            return ret;
        };
    /**
     *  @function
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @param {Object} [msg.headers] Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @param {String} msg.gist_id 
     *  @param {String} msg.body 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gists.createComment
     **/
    gists.gists.createComment = handler(createCommentAfterRequest);
    var editCommentAfterRequest = function(ret, res){
            ret = ret || {};
            ret.meta = ret.meta || {};
            ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-oauth-scopes', 'link', 'location', 'last-modified', 'etag', 'status'].forEach(function(header) {
                if (res.headers[header]) {
                    ret.meta[header] = res.headers[header];
                }
            });
            return ret;
        };
    /**
     *  @function
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @param {Object} [msg.headers] Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @param {String} msg.gist_id 
     *  @param {String} msg.id 
     *  @param {String} msg.body 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gists.editComment
     **/
    gists.gists.editComment = handler(editCommentAfterRequest);
    var deleteCommentAfterRequest = function(ret, res){
            ret = ret || {};
            ret.meta = ret.meta || {};
            ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-oauth-scopes', 'link', 'location', 'last-modified', 'etag', 'status'].forEach(function(header) {
                if (res.headers[header]) {
                    ret.meta[header] = res.headers[header];
                }
            });
            return ret;
        };
    /**
     *  @function
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @param {Object} [msg.headers] Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @param {String} msg.gist_id 
     *  @param {String} msg.id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gists.deleteComment
     **/
    gists.gists.deleteComment = handler(deleteCommentAfterRequest);

    return gists;
});

