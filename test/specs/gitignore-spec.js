/*global describe, beforeEach, it, expect, xit*/
(function () {
    'use strict';

    describe('gitignore', function () {
        var github;
        var token = '44046cd4b4b85afebfe3ccaec13fd8c08cc80aad';

        beforeEach(function () {
            github = new Github();
            github.authenticate({
                type: 'oauth',
                token: token
            });
        });

        it('should successfully execute GET /gitignore/templates (templates)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.gitignore.templates(
                {},
                callback
            );
        });

        xit('should successfully execute GET /gitignore/templates/:name (template)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.gitignore.template(
                {
                    name: 'String'
                },
                callback
            );
        });


    });
}());
