/*global define*/
define(function(){
    'use strict';

    /**
     * @exports user
     * @memberof Client
     */
    var user = {
        user: {}
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

    var getFromAfterRequest = function(ret, res){
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
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial user.getFrom
     **/
    user.user.getFrom = handler(getFromAfterRequest);
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
     *  No other params, simply pass an empty Object literal `{}`
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial user.get
     **/
    user.user.get = handler(getAfterRequest);
    var updateAfterRequest = function(ret, res){
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
     *  @param {String} [msg.name] 
     *  @param {String} [msg.email] 
     *  @param {String} [msg.blog] 
     *  @param {String} [msg.company] 
     *  @param {String} [msg.location] 
     *  @param {Boolean} [msg.hireable] 
     *  @param {String} [msg.bio] 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial user.update
     **/
    user.user.update = handler(updateAfterRequest);
    var getOrgsAfterRequest = function(ret, res){
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
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial user.getOrgs
     **/
    user.user.getOrgs = handler(getOrgsAfterRequest);
    var getEmailsAfterRequest = function(ret, res){
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
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial user.getEmails
     **/
    user.user.getEmails = handler(getEmailsAfterRequest);
    var addEmailsAfterRequest = function(ret, res){
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
     *  No other params, simply pass an empty Object literal `{}`
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial user.addEmails
     **/
    user.user.addEmails = handler(addEmailsAfterRequest);
    var deleteEmailsAfterRequest = function(ret, res){
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
     *  No other params, simply pass an empty Object literal `{}`
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial user.deleteEmails
     **/
    user.user.deleteEmails = handler(deleteEmailsAfterRequest);
    var getFollowersAfterRequest = function(ret, res){
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
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial user.getFollowers
     **/
    user.user.getFollowers = handler(getFollowersAfterRequest);
    var getFollowingFromUserAfterRequest = function(ret, res){
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
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial user.getFollowingFromUser
     **/
    user.user.getFollowingFromUser = handler(getFollowingFromUserAfterRequest);
    var getFollowingAfterRequest = function(ret, res){
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
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial user.getFollowing
     **/
    user.user.getFollowing = handler(getFollowingAfterRequest);
    var getFollowUserAfterRequest = function(ret, res){
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
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial user.getFollowUser
     **/
    user.user.getFollowUser = handler(getFollowUserAfterRequest);
    var followUserAfterRequest = function(ret, res){
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
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial user.followUser
     **/
    user.user.followUser = handler(followUserAfterRequest);
    var unFollowUserAfterRequest = function(ret, res){
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
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial user.unFollowUser
     **/
    user.user.unFollowUser = handler(unFollowUserAfterRequest);
    var getKeysAfterRequest = function(ret, res){
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
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial user.getKeys
     **/
    user.user.getKeys = handler(getKeysAfterRequest);
    var getKeyAfterRequest = function(ret, res){
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
     *  @tutorial user.getKey
     **/
    user.user.getKey = handler(getKeyAfterRequest);
    var createKeyAfterRequest = function(ret, res){
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
     *  @param {String} msg.title 
     *  @param {String} msg.key 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial user.createKey
     **/
    user.user.createKey = handler(createKeyAfterRequest);
    var updateKeyAfterRequest = function(ret, res){
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
     *  @param {String} msg.title 
     *  @param {String} msg.key 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial user.updateKey
     **/
    user.user.updateKey = handler(updateKeyAfterRequest);
    var deleteKeyAfterRequest = function(ret, res){
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
     *  @tutorial user.deleteKey
     **/
    user.user.deleteKey = handler(deleteKeyAfterRequest);

    return user;
});
