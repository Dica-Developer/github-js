/*global define*/
define(function(){
    'use strict';

    /**
     * @exports search
     * @memberof Client
     */
    var search = {
        search: {}
    };
    var handler = function(afterRequest){
        return function(msg, block, callback) {
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
                    ret = afterRequest(ret, res);
                    if (callback){
                        callback(null, ret);
                    }
                });
            };
    };

    var issuesAfterRequest = function(ret, res){
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
     *  @param {String} msg.repo 
     *  @param {String} msg.state open or closed Validation rule: ` ^(open|closed)$ `.
     *  @param {String} msg.keyword Search term 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    search.search.issues = handler(issuesAfterRequest);
    var reposAfterRequest = function(ret, res){
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
     *  @param {String} msg.keyword Search term 
     *  @param {String} [msg.language] Filter results by language, see https://github.com/languages 
     *  @param {Number} [msg.start_page] Page number to fetch Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    search.search.repos = handler(reposAfterRequest);
    var usersAfterRequest = function(ret, res){
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
     *  @param {String} msg.keyword Keyword search parameters 
     *  @param {Number} [msg.start_page] Page number to fetch Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    search.search.users = handler(usersAfterRequest);
    var codeAfterRequest = function(ret, res){
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
     *  @param {String} msg.q Search query 
     *  @param {String} [msg.sort] 
     *  @param {String} [msg.order] 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    search.search.code = handler(codeAfterRequest);

    return search;
});

