/*global define*/
define(function(){
    'use strict';

    /**
     * @exports orgs
     * @memberof Client
     */
    var orgs = {
        orgs: {}
    };

        /**
     *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
     *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
     *  @config {String} user 
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    orgs.orgs.getFromUser = function(msg, block, callback) {
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
    orgs.orgs.get = function(msg, block, callback) {
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
     *  @config {String} [billing_email] Optional string - Billing email address. This address is not publicized. 
     *  @config {String} [company] 
     *  @config {String} [email] Optional string - Publicly visible email address. 
     *  @config {String} [location] 
     *  @config {String} [name] 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    orgs.orgs.update = function(msg, block, callback) {
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
    orgs.orgs.getMembers = function(msg, block, callback) {
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
     *  @config {String} user 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    orgs.orgs.getMember = function(msg, block, callback) {
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
     *  @config {String} user 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    orgs.orgs.removeMember = function(msg, block, callback) {
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
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    orgs.orgs.getPublicMembers = function(msg, block, callback) {
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
     *  @config {String} user 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    orgs.orgs.getPublicMember = function(msg, block, callback) {
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
     *  @config {String} user 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    orgs.orgs.publicizeMembership = function(msg, block, callback) {
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
     *  @config {String} user 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    orgs.orgs.concealMembership = function(msg, block, callback) {
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
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    orgs.orgs.getTeams = function(msg, block, callback) {
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
    orgs.orgs.getTeam = function(msg, block, callback) {
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
     *  @config {String} name 
     *  @config {Array} [repo_names] Optional array of strings 
     *  @config {String} [permission] `pull` - team members can pull, but not push or administer this repositories (Default), `push` - team members can pull and push, but not administer this repositores, `admin` - team members can pull, push and administer these repositories. Validation rule: ` ^(pull|push|admin)$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    orgs.orgs.createTeam = function(msg, block, callback) {
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
     *  @config {String} name 
     *  @config {String} [permission] `pull` - team members can pull, but not push or administer this repositories (Default), `push` - team members can pull and push, but not administer this repositores, `admin` - team members can pull, push and administer these repositories. Validation rule: ` ^(pull|push|admin)$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    orgs.orgs.updateTeam = function(msg, block, callback) {
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
    orgs.orgs.deleteTeam = function(msg, block, callback) {
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
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    orgs.orgs.getTeamMembers = function(msg, block, callback) {
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
     *  @config {String} user 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    orgs.orgs.getTeamMember = function(msg, block, callback) {
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
     *  @config {String} user 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    orgs.orgs.addTeamMember = function(msg, block, callback) {
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
     *  @config {String} user 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    orgs.orgs.deleteTeamMember = function(msg, block, callback) {
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
     *  @config {Number} [page] Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  @config {Number} [per_page] A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    orgs.orgs.getTeamRepos = function(msg, block, callback) {
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
     *  @config {String} user 
     *  @config {String} repo 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    orgs.orgs.getTeamRepo = function(msg, block, callback) {
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
     *  @config {String} user 
     *  @config {String} repo 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    orgs.orgs.addTeamRepo = function(msg, block, callback) {
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
     *  @config {String} user 
     *  @config {String} repo 
     *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
     **/
    orgs.orgs.deleteTeamRepo = function(msg, block, callback) {
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


    return orgs;
});
