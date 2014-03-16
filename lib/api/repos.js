/*global define*/
define(function(){
    'use strict';

    /**
     * @exports repos
     * @memberof Client
     */
    var repos = {
        repos: {}
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} [type] Possible values: `all`, `owner`, `public`, `private`, `member`. Default: `all`. Validation rule: ` ^(all|owner|public|private|member)$ `.
     *  @config {String} [sort] Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`. Validation rule: ` ^(created|updated|pushed|full_name)$ `.
     *  @config {String} [direction] Validation rule: ` ^(asc|desc)$ `.
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getAll = handler(getAllAfterRequest);
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
    repos.repos.getFromUser = handler(getFromUserAfterRequest);
    var getFromOrgAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} org 
     *  @config {String} [type] Possible values: `all`, `public`, `member`. Default: `all`. Validation rule: ` ^(all|public|member)$ `.
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getFromOrg = handler(getFromOrgAfterRequest);
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
    repos.repos.create = handler(createAfterRequest);
    var createFromOrgAfterRequest = function(ret, res){
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
    repos.repos.createFromOrg = handler(createFromOrgAfterRequest);
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.get = handler(getAfterRequest);
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
    repos.repos.update = handler(updateAfterRequest);
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.delete = handler(deleteAfterRequest);
    var mergeAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} base Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo. 
     *  @config {String} head Required string - The branch (or git ref) where your changes are implemented. 
     *  @config {String} [commit_message] Optional string - Commit message to use for the merge commit. If omitted, a default message will be used. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.merge = handler(mergeAfterRequest);
    var getContributorsAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {Boolean} [anon] Optional flag. Set to 1 or true to include anonymous contributors in results. 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getContributors = handler(getContributorsAfterRequest);
    var getLanguagesAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getLanguages = handler(getLanguagesAfterRequest);
    var getTeamsAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getTeams = handler(getTeamsAfterRequest);
    var getTagsAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getTags = handler(getTagsAfterRequest);
    var getBranchesAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getBranches = handler(getBranchesAfterRequest);
    var getBranchAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} branch 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getBranch = handler(getBranchAfterRequest);
    var getCollaboratorsAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getCollaborators = handler(getCollaboratorsAfterRequest);
    var getCollaboratorAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} collabuser 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getCollaborator = handler(getCollaboratorAfterRequest);
    var addCollaboratorAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} collabuser 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.addCollaborator = handler(addCollaboratorAfterRequest);
    var removeCollaboratorAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} collabuser 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.removeCollaborator = handler(removeCollaboratorAfterRequest);
    var getCommitsAfterRequest = function(ret, res){
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
    repos.repos.getCommits = handler(getCommitsAfterRequest);
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} sha 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getCommit = handler(getCommitAfterRequest);
    var getAllCommitCommentsAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getAllCommitComments = handler(getAllCommitCommentsAfterRequest);
    var getCommitCommentsAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} sha 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getCommitComments = handler(getCommitCommentsAfterRequest);
    var createCommitCommentAfterRequest = function(ret, res){
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
    repos.repos.createCommitComment = handler(createCommitCommentAfterRequest);
    var getCommitCommentAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getCommitComment = handler(getCommitCommentAfterRequest);
    var updateCommitCommentAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} id 
     *  @config {String} body 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.updateCommitComment = handler(updateCommitCommentAfterRequest);
    var compareCommitsAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} base Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo. 
     *  @config {String} head Required string - The branch (or git ref) where your changes are implemented. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.compareCommits = handler(compareCommitsAfterRequest);
    var deleteCommitCommentAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.deleteCommitComment = handler(deleteCommitCommentAfterRequest);
    var getReadmeAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} [ref] The String name of the Commit/Branch/Tag. Defaults to master. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getReadme = handler(getReadmeAfterRequest);
    var getContentAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} [path] The content path. 
     *  @config {String} [ref] The String name of the Commit/Branch/Tag. Defaults to master. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getContent = handler(getContentAfterRequest);
    var getArchiveLinkAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} ref String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. 
     *  @config {String} archive_format Either tarball or zipball Validation rule: ` ^(tarball|zipball)$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getArchiveLink = handler(getArchiveLinkAfterRequest);
    var getDownloadsAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getDownloads = handler(getDownloadsAfterRequest);
    var getDownloadAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getDownload = handler(getDownloadAfterRequest);
    var deleteDownloadAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.deleteDownload = handler(deleteDownloadAfterRequest);
    var getForksAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} [sort] Possible values: `newest`, `oldest`, `watchers`, default: `newest`. Validation rule: ` ^(newest|oldest|watchers)$ `.
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getForks = handler(getForksAfterRequest);
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} [org] Optional String - Organization login. The repository will be forked into this organization. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.fork = handler(forkAfterRequest);
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getKeys = handler(getKeysAfterRequest);
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getKey = handler(getKeyAfterRequest);
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} title 
     *  @config {String} key 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.createKey = handler(createKeyAfterRequest);
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} id 
     *  @config {String} title 
     *  @config {String} key 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.updateKey = handler(updateKeyAfterRequest);
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.deleteKey = handler(deleteKeyAfterRequest);
    var getStargazersAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getStargazers = handler(getStargazersAfterRequest);
    var getStarredAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getStarred = handler(getStarredAfterRequest);
    var getStarredFromUserAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getStarredFromUser = handler(getStarredFromUserAfterRequest);
    var getStarringAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getStarring = handler(getStarringAfterRequest);
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.star = handler(starAfterRequest);
    var unStarAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.unStar = handler(unStarAfterRequest);
    var getWatchersAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getWatchers = handler(getWatchersAfterRequest);
    var getWatchedAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getWatched = handler(getWatchedAfterRequest);
    var getWatchedFromUserAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getWatchedFromUser = handler(getWatchedFromUserAfterRequest);
    var getWatchingAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getWatching = handler(getWatchingAfterRequest);
    var watchAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.watch = handler(watchAfterRequest);
    var unWatchAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.unWatch = handler(unWatchAfterRequest);
    var getHooksAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getHooks = handler(getHooksAfterRequest);
    var getHookAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.getHook = handler(getHookAfterRequest);
    var createHookAfterRequest = function(ret, res){
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
    repos.repos.createHook = handler(createHookAfterRequest);
    var updateHookAfterRequest = function(ret, res){
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
    repos.repos.updateHook = handler(updateHookAfterRequest);
    var testHookAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.testHook = handler(testHookAfterRequest);
    var deleteHookAfterRequest = function(ret, res){
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
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {String} repo 
     *  @config {String} id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    repos.repos.deleteHook = handler(deleteHookAfterRequest);

    return repos;
});

