        <%comment%>
        <%sectionName%>.<%sectionName%>.prototype.<%funcName%> = function(msg, block, callback) {
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
                <%afterRequest%>
                if (callback){
                    callback(null, ret);
                }
            });
        };
