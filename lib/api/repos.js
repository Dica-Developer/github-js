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
    * @exports Client#repos
    */
    function(){
        'use strict';

        var repos = {
            repos: {}
        };

        (function() {
                          /**
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} [type] Possible values: `all`, `owner`, `public`, `private`, `member`. Default: `all`. Validation rule: ` ^(all|owner|public|private|member)$ `.
     *  @config {String} [sort] Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`. Validation rule: ` ^(created|updated|pushed|full_name)$ `.
     *  @config {String} [direction] Validation rule: ` ^(asc|desc)$ `.
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
     *  @config {String} user 
     *  @config {String} [type] Possible values: `all`, `owner`, `member`. Default: `public`. Validation rule: ` ^(all|owner|member)$ `.
     *  @config {String} [sort] Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`. Validation rule: ` ^(created|updated|pushed|full_name)$ `.
     *  @config {String} [direction] Validation rule: ` ^(asc|desc)$ `.
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getFromUser = function(msg, block, callback) {
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
     *  @config {String} org 
     *  @config {String} [type] Possible values: `all`, `public`, `member`. Default: `all`. Validation rule: ` ^(all|public|member)$ `.
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getFromOrg = function(msg, block, callback) {
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
     *  @config {String} name 
     *  @config {String} [description] 
     *  @config {String} [homepage] 
     *  @config {Boolean} [private] Optional boolean - true to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false. 
     *  @config {Boolean} [has_issues] Optional boolean - true to enable issues for this repository, false to disable them. Default is true. 
     *  @config {Boolean} [has_wiki] Optional boolean - true to enable the wiki for this repository, false to disable it. Default is true. 
     *  @config {Boolean} [has_downloads] Optional boolean - true to enable downloads for this repository, false to disable them. Default is true. 
     *  @config {Boolean} [auto_init] Optional boolean - true to create an initial commit with empty README. Default is false 
     *  @config {String} [gitignore_template] Optional string - Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided. 
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
     *  @config {String} org 
     *  @config {String} name 
     *  @config {String} [description] 
     *  @config {String} [homepage] 
     *  @config {Boolean} [private] Optional boolean - true to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false. 
     *  @config {Boolean} [has_issues] Optional boolean - true to enable issues for this repository, false to disable them. Default is true. 
     *  @config {Boolean} [has_wiki] Optional boolean - true to enable the wiki for this repository, false to disable it. Default is true. 
     *  @config {Boolean} [has_downloads] Optional boolean - true to enable downloads for this repository, false to disable them. Default is true. 
     *  @config {Boolean} [auto_init] Optional boolean - true to create an initial commit with empty README. Default is false 
     *  @config {String} [gitignore_template] Optional string - Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided. 
     *  @config {Number} [team_id] Optional number - The id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.createFromOrg = function(msg, block, callback) {
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
     *  @config {String} name 
     *  @config {String} [description] 
     *  @config {String} [homepage] 
     *  @config {Boolean} [private] Optional boolean - true to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false. 
     *  @config {Boolean} [has_issues] Optional boolean - true to enable issues for this repository, false to disable them. Default is true. 
     *  @config {Boolean} [has_wiki] Optional boolean - true to enable the wiki for this repository, false to disable it. Default is true. 
     *  @config {Boolean} [has_downloads] Optional boolean - true to enable downloads for this repository, false to disable them. Default is true. 
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
     *  @config {String} user 
     *  @config {String} repo 
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

                /**
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} base Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo. 
     *  @config {String} head Required string - The branch (or git ref) where your changes are implemented. 
     *  @config {String} [commit_message] Optional string - Commit message to use for the merge commit. If omitted, a default message will be used. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.merge = function(msg, block, callback) {
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
     *  @config {Boolean} [anon] Optional flag. Set to 1 or true to include anonymous contributors in results. 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getContributors = function(msg, block, callback) {
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
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getLanguages = function(msg, block, callback) {
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
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getTeams = function(msg, block, callback) {
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
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getTags = function(msg, block, callback) {
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
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getBranches = function(msg, block, callback) {
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
     *  @config {String} branch 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getBranch = function(msg, block, callback) {
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
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getCollaborators = function(msg, block, callback) {
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
     *  @config {String} collabuser 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getCollaborator = function(msg, block, callback) {
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
     *  @config {String} collabuser 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.addCollaborator = function(msg, block, callback) {
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
     *  @config {String} collabuser 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.removeCollaborator = function(msg, block, callback) {
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
     *  @config {String} [sha] Optional string - Sha or branch to start listing commits from. 
     *  @config {String} [path] Optional string - Only commits containing this file path will be returned. 
     *  @config {String} [author] Optional string - Only commits commited by this author. 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @config {Date} [since] Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ 
     *  @config {Date} [until] Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getCommits = function(msg, block, callback) {
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
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getCommit = function(msg, block, callback) {
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
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getAllCommitComments = function(msg, block, callback) {
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
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getCommitComments = function(msg, block, callback) {
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
     *  @config {String} body 
     *  @config {String} commit_id Required string - Sha of the commit to comment on. 
     *  @config {String} [path] Optional string - Relative path of the file to comment on. 
     *  @config {Number} [position] Optional number - Line index in the diff to comment on. 
     *  @config {Number} [line] Optional number - Line number in the file to comment on. Defaults to 1. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.createCommitComment = function(msg, block, callback) {
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
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getCommitComment = function(msg, block, callback) {
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
     *  @config {String} id 
     *  @config {String} body 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.updateCommitComment = function(msg, block, callback) {
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
     *  @config {String} base Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo. 
     *  @config {String} head Required string - The branch (or git ref) where your changes are implemented. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.compareCommits = function(msg, block, callback) {
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
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.deleteCommitComment = function(msg, block, callback) {
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
     *  @config {String} [ref] The String name of the Commit/Branch/Tag. Defaults to master. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getReadme = function(msg, block, callback) {
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
     *  @config {String} [path] The content path. 
     *  @config {String} [ref] The String name of the Commit/Branch/Tag. Defaults to master. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getContent = function(msg, block, callback) {
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
     *  @config {String} ref String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. 
     *  @config {String} archive_format Either tarball or zipball Validation rule: ` ^(tarball|zipball)$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getArchiveLink = function(msg, block, callback) {
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
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getDownloads = function(msg, block, callback) {
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
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getDownload = function(msg, block, callback) {
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
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.deleteDownload = function(msg, block, callback) {
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
     *  @config {String} [sort] Possible values: `newest`, `oldest`, `watchers`, default: `newest`. Validation rule: ` ^(newest|oldest|watchers)$ `.
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getForks = function(msg, block, callback) {
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
     *  @config {String} [org] Optional String - Organization login. The repository will be forked into this organization. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.fork = function(msg, block, callback) {
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
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getKeys = function(msg, block, callback) {
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
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getKey = function(msg, block, callback) {
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
     *  @config {String} title 
     *  @config {String} key 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.createKey = function(msg, block, callback) {
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
     *  @config {String} id 
     *  @config {String} title 
     *  @config {String} key 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.updateKey = function(msg, block, callback) {
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
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.deleteKey = function(msg, block, callback) {
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
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getStargazers = function(msg, block, callback) {
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
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getStarred = function(msg, block, callback) {
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
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getStarredFromUser = function(msg, block, callback) {
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
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getStarring = function(msg, block, callback) {
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
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.star = function(msg, block, callback) {
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
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.unStar = function(msg, block, callback) {
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
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getWatchers = function(msg, block, callback) {
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
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getWatched = function(msg, block, callback) {
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
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getWatchedFromUser = function(msg, block, callback) {
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
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getWatching = function(msg, block, callback) {
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
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.watch = function(msg, block, callback) {
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
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.unWatch = function(msg, block, callback) {
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
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getHooks = function(msg, block, callback) {
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
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.getHook = function(msg, block, callback) {
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
     *  @config {String} name 
     *  @config {Json} config Required hash - A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically. 
     *  @config {Array} [events] Optional array - Determines what events the hook is triggered for. Default: `['push']`. 
     *  @config {Boolean} [active] Optional boolean - Determines whether the hook is actually triggered on pushes. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.createHook = function(msg, block, callback) {
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
     *  @config {String} id 
     *  @config {String} name 
     *  @config {Json} config Required hash - A Hash containing key/value pairs to provide settings for this hook. Modifying this will replace the entire config object. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically. 
     *  @config {Array} [events] Optional array - Determines what events the hook is triggered for. This replaces the entire array of events. Default: `['push']`. 
     *  @config {Array} [add_events] Optional array - Determines a list of events to be added to the list of events that the Hook triggers for. 
     *  @config {Array} [remove_events] Optional array - Determines a list of events to be removed from the list of events that the Hook triggers for. 
     *  @config {Boolean} [active] Optional boolean - Determines whether the hook is actually triggered on pushes. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.updateHook = function(msg, block, callback) {
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
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.testHook = function(msg, block, callback) {
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
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
            this.deleteHook = function(msg, block, callback) {
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

        }).call(repos.repos);

        return repos;
    });

