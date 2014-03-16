/*global define*/
define(function(){
    'use strict';

    /**
     * @exports issues
     * @memberof Client
     */
    var issues = {
        issues: {}
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
     *  @function
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @param {Object} [msg.headers] Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @param {String} [msg.filter] Validation rule: ` ^(all|assigned|created|mentioned|subscribed)$ `.
     *  @param {String} [msg.state] Validation rule: ` ^(open|closed)$ `.
     *  @param {String} [msg.labels] String list of comma separated Label names. Example: bug,ui,@high 
     *  @param {String} [msg.sort] Validation rule: ` ^(created|updated|comments)$ `.
     *  @param {String} [msg.direction] Validation rule: ` ^(asc|desc)$ `.
     *  @param {Date} [msg.since] Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ 
     *  @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.getAll = handler(getAllAfterRequest);
    var repoIssuesAfterRequest = function(ret, res){
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
     *  @param {String} [msg.milestone] Validation rule: ` ^([0-9]+|none|\*)$ `.
     *  @param {String} [msg.state] open or closed Validation rule: ` ^(open|closed)$ `.
     *  @param {String} [msg.assignee] String User login, `none` for Issues with no assigned User. `*` for Issues with any assigned User. 
     *  @param {String} [msg.mentioned] String User login. 
     *  @param {String} [msg.labels] String list of comma separated Label names. Example: bug,ui,@high 
     *  @param {String} [msg.sort] Validation rule: ` ^(created|updated|comments)$ `.
     *  @param {String} [msg.direction] Validation rule: ` ^(asc|desc)$ `.
     *  @param {Date} [msg.since] Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ 
     *  @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.repoIssues = handler(repoIssuesAfterRequest);
    var getRepoIssueAfterRequest = function(ret, res){
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
     *  @param {Number} msg.number Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.getRepoIssue = handler(getRepoIssueAfterRequest);
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
     *  @param {String} msg.user 
     *  @param {String} msg.repo 
     *  @param {String} msg.title 
     *  @param {String} [msg.body] 
     *  @param {String} [msg.assignee] Optional string - Login for the user that this issue should be assigned to. 
     *  @param {Number} [msg.milestone] Optional number - Milestone to associate this issue with. Validation rule: ` ^[0-9]+$ `.
     *  @param {Json} msg.labels Optional array of strings - Labels to associate with this issue. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.create = handler(createAfterRequest);
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
     *  @param {String} msg.user 
     *  @param {String} msg.repo 
     *  @param {Number} msg.number Validation rule: ` ^[0-9]+$ `.
     *  @param {String} [msg.title] 
     *  @param {String} [msg.body] 
     *  @param {String} [msg.assignee] Optional string - Login for the user that this issue should be assigned to. 
     *  @param {Number} [msg.milestone] Optional number - Milestone to associate this issue with. Validation rule: ` ^[0-9]+$ `.
     *  @param {Json} [msg.labels] Optional array of strings - Labels to associate with this issue. 
     *  @param {String} [msg.state] open or closed Validation rule: ` ^(open|closed)$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.edit = handler(editAfterRequest);
    var repoCommentsAfterRequest = function(ret, res){
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
     *  @param {String} [msg.sort] Validation rule: ` ^(created|updated)$ `.
     *  @param {String} [msg.direction] Validation rule: ` ^(asc|desc)$ `.
     *  @param {Date} [msg.since] Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ 
     *  @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.repoComments = handler(repoCommentsAfterRequest);
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
     *  @param {String} msg.user 
     *  @param {String} msg.repo 
     *  @param {Number} msg.number Validation rule: ` ^[0-9]+$ `.
     *  @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.getComments = handler(getCommentsAfterRequest);
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
     *  @param {String} msg.user 
     *  @param {String} msg.repo 
     *  @param {String} msg.id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.getComment = handler(getCommentAfterRequest);
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
     *  @param {String} msg.user 
     *  @param {String} msg.repo 
     *  @param {Number} msg.number Validation rule: ` ^[0-9]+$ `.
     *  @param {String} msg.body 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.createComment = handler(createCommentAfterRequest);
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
     *  @param {String} msg.user 
     *  @param {String} msg.repo 
     *  @param {String} msg.id 
     *  @param {String} msg.body 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.editComment = handler(editCommentAfterRequest);
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
     *  @param {String} msg.user 
     *  @param {String} msg.repo 
     *  @param {String} msg.id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.deleteComment = handler(deleteCommentAfterRequest);
    var getEventsAfterRequest = function(ret, res){
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
     *  @param {Number} msg.number Validation rule: ` ^[0-9]+$ `.
     *  @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.getEvents = handler(getEventsAfterRequest);
    var getRepoEventsAfterRequest = function(ret, res){
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
     **/
    issues.issues.getRepoEvents = handler(getRepoEventsAfterRequest);
    var getEventAfterRequest = function(ret, res){
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
     *  @param {String} msg.id 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.getEvent = handler(getEventAfterRequest);
    var getLabelsAfterRequest = function(ret, res){
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
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.getLabels = handler(getLabelsAfterRequest);
    var getLabelAfterRequest = function(ret, res){
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
     *  @param {String} msg.name 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.getLabel = handler(getLabelAfterRequest);
    var createLabelAfterRequest = function(ret, res){
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
     *  @param {String} msg.name 
     *  @param {String} msg.color Required string - 6 character hex code, without a leading #. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.createLabel = handler(createLabelAfterRequest);
    var updateLabelAfterRequest = function(ret, res){
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
     *  @param {String} msg.name 
     *  @param {String} msg.color Required string - 6 character hex code, without a leading #. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.updateLabel = handler(updateLabelAfterRequest);
    var deleteLabelAfterRequest = function(ret, res){
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
     *  @param {String} msg.name 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.deleteLabel = handler(deleteLabelAfterRequest);
    var getAllMilestonesAfterRequest = function(ret, res){
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
     *  @param {String} [msg.state] Validation rule: ` ^(open|closed)$ `.
     *  @param {String} [msg.sort] due_date, completeness, default: due_date Validation rule: ` ^(due_date|completeness)$ `.
     *  @param {Number} [msg.page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @param {Number} [msg.per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.getAllMilestones = handler(getAllMilestonesAfterRequest);
    var getMilestoneAfterRequest = function(ret, res){
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
     *  @param {Number} msg.number Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.getMilestone = handler(getMilestoneAfterRequest);
    var createMilestoneAfterRequest = function(ret, res){
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
     *  @param {String} msg.title 
     *  @param {String} [msg.state] Validation rule: ` ^(open|closed)$ `.
     *  @param {String} [msg.description] 
     *  @param {Date} [msg.due_on] Optional string - ISO 8601 time. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.createMilestone = handler(createMilestoneAfterRequest);
    var updateMilestoneAfterRequest = function(ret, res){
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
     *  @param {Number} msg.number Validation rule: ` ^[0-9]+$ `.
     *  @param {String} msg.title 
     *  @param {String} [msg.state] Validation rule: ` ^(open|closed)$ `.
     *  @param {String} [msg.description] 
     *  @param {Date} [msg.due_on] Optional string - ISO 8601 time. 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.updateMilestone = handler(updateMilestoneAfterRequest);
    var deleteMilestoneAfterRequest = function(ret, res){
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
     *  @param {Number} msg.number Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    issues.issues.deleteMilestone = handler(deleteMilestoneAfterRequest);

    return issues;
});

