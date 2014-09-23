(function () {
    'use strict';

    describe('search', function () {
        var github;
        var token = '44046cd4b4b85afebfe3ccaec13fd8c08cc80aad';

        beforeEach(function () {
            github = new Github();
            client.authenticate({
                type: 'oauth',
                token: token
            });
        });

        it('should successfully execute GET /search/issues (issues)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.search.issues(
                {
                    q: 'String',
                    sort: 'String',
                    order: 'String',
                    page: 'Number',
                    per_page: 'Number'
                },
                callback
            );
        });

        it('should successfully execute GET /search/repositories (repos)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.search.repos(
                {
                    q: 'String',
                    sort: 'String',
                    order: 'String',
                    page: 'Number',
                    per_page: 'Number'
                },
                callback
            );
        });

        it('should successfully execute GET /search/users (users)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.search.users(
                {
                    q: 'String',
                    sort: 'String',
                    order: 'String',
                    page: 'Number',
                    per_page: 'Number'
                },
                callback
            );
        });

        it('should successfully execute GET /legacy/user/email/:email (email)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.search.email(
                {
                    email: 'String'
                },
                callback
            );
        });


    });
}());
