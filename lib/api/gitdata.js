/*global define*/
define(function(){
    'use strict';

    /**
     * @exports gitdata
     * @memberof Client
     */
    var gitdata = {
        gitdata: {}
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

    var getBlobAfterRequest = function(ret, res){
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
     *  @param {String} msg.sha 
     *  @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gitdata.getBlob
     **/
    gitdata.gitdata.getBlob = handler(getBlobAfterRequest);
    var createBlobAfterRequest = function(ret, res){
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
     *  @param {String} msg.content 
     *  @param {String} msg.encoding 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gitdata.createBlob
     **/
    gitdata.gitdata.createBlob = handler(createBlobAfterRequest);
    var getCommitAfterRequest = function(ret, res){
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
     *  @param {String} msg.sha 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gitdata.getCommit
     **/
    gitdata.gitdata.getCommit = handler(getCommitAfterRequest);
    var createCommitAfterRequest = function(ret, res){
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
     *  @param {String} msg.message String of the commit message 
     *  @param {String} msg.tree String of the SHA of the tree object this commit points to 
     *  @param {Array} msg.parents Array of the SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided, for a merge commit, an array of more than one should be provided. 
     *  @param {Json} [msg.author] 
     *  @param {Json} [msg.committer] 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gitdata.createCommit
     **/
    gitdata.gitdata.createCommit = handler(createCommitAfterRequest);
    var getReferenceAfterRequest = function(ret, res){
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
     *  @param {String} msg.ref String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gitdata.getReference
     **/
    gitdata.gitdata.getReference = handler(getReferenceAfterRequest);
    var getAllReferencesAfterRequest = function(ret, res){
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
     *  @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gitdata.getAllReferences
     **/
    gitdata.gitdata.getAllReferences = handler(getAllReferencesAfterRequest);
    var createReferenceAfterRequest = function(ret, res){
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
     *  @param {String} msg.ref String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. 
     *  @param {String} msg.sha 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gitdata.createReference
     **/
    gitdata.gitdata.createReference = handler(createReferenceAfterRequest);
    var updateReferenceAfterRequest = function(ret, res){
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
     *  @param {String} msg.ref String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. 
     *  @param {String} msg.sha 
     *  @param {Boolean} msg.force Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gitdata.updateReference
     **/
    gitdata.gitdata.updateReference = handler(updateReferenceAfterRequest);
    var deleteReferenceAfterRequest = function(ret, res){
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
     *  @param {String} msg.ref String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gitdata.deleteReference
     **/
    gitdata.gitdata.deleteReference = handler(deleteReferenceAfterRequest);
    var getTagAfterRequest = function(ret, res){
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
     *  @param {String} msg.sha 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gitdata.getTag
     **/
    gitdata.gitdata.getTag = handler(getTagAfterRequest);
    var createTagAfterRequest = function(ret, res){
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
     *  @param {String} msg.tag String of the tag 
     *  @param {String} msg.message String of the tag message 
     *  @param {String} msg.object String of the SHA of the git object this is tagging 
     *  @param {String} msg.type String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob. 
     *  @param {Json} msg.tagger JSON object that contains the following keys: `name` - String of the name of the author of the tag, `email` - String of the email of the author of the tag, `date` - Timestamp of when this object was tagged 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gitdata.createTag
     **/
    gitdata.gitdata.createTag = handler(createTagAfterRequest);
    var getTreeAfterRequest = function(ret, res){
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
     *  @param {String} msg.sha 
     *  @param {Boolean} [msg.recursive] 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gitdata.getTree
     **/
    gitdata.gitdata.getTree = handler(getTreeAfterRequest);
    var createTreeAfterRequest = function(ret, res){
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
     *  @param {Json} msg.tree Array of Hash objects (of path, mode, type and sha) specifying a tree structure 
     *  @param {String} [msg.base_tree] String of the SHA1 of the tree you want to update with new data 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     *  @tutorial gitdata.createTree
     **/
    gitdata.gitdata.createTree = handler(createTreeAfterRequest);

    return gitdata;
});

