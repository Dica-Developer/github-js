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
    * @exports Client#markdown
    */
    function(){
        'use strict';

        var markdown = {
            markdown: {}
        };

        (function() {
                        /**
             *  @param {Object} msg Object that contains the parameters and their values to be sent to the server.
             *  @config {Object} headers Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: If-Modified-Since, If-None-Match, Cookie, User-Agent
             *  @config {String} text The Markdown text to render 
             *  @config {String} [mode] The rendering mode, `markdown` to render a document as plain Markdown, just like README files are rendered. `gfm` to render a document as user-content, e.g. like user comments or issues are rendered. In GFM mode, hard line breaks are always taken into account, and issue and user mentions are linked accordingly. Validation rule: ` ^(markdown|gfm)$ `.
             *  @config {String} [context] The repository context, only taken into account when rendering as `gfm` 
             *  @param {Function} callback function to call when the request is finished with an error as first argument and result data as second argument.
             **/
            this.render = function(msg, block, callback) {
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

        }).call(markdown.markdown);

        return markdown;
    });

