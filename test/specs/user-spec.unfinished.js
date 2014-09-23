(function () {
    'use strict';

    describe('user', function () {
        var github;
        var token = '44046cd4b4b85afebfe3ccaec13fd8c08cc80aad';

        beforeEach(function () {
            github = new Github();
            client.authenticate({
                type: 'oauth',
                token: token
            });
        });

        it('should successfully execute GET /users/:user (getFrom)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.user.getFrom(
                {
                    user: 'String'
                },
                callback
            );
        });

        it('should successfully execute GET /user (get)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.user.get(
                {},
                callback
            );
        });

        it('should successfully execute PATCH /user (update)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.user.update(
                {
                    name: 'String',
                    email: 'String',
                    blog: 'String',
                    company: 'String',
                    location: 'String',
                    hireable: 'Boolean',
                    bio: 'String'
                },
                callback
            );
        });

        it('should successfully execute GET /user/orgs (getOrgs)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.user.getOrgs(
                {
                    page: 'Number',
                    per_page: 'Number'
                },
                callback
            );
        });

        it('should successfully execute GET /user/teams (getTeams)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.user.getTeams(
                {
                    page: 'Number',
                    per_page: 'Number'
                },
                callback
            );
        });

        it('should successfully execute GET /user/emails (getEmails)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.user.getEmails(
                {
                    page: 'Number',
                    per_page: 'Number'
                },
                callback
            );
        });

        it('should successfully execute POST /user/emails (addEmails)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.user.addEmails(
                {},
                callback
            );
        });

        it('should successfully execute DELETE /user/emails (deleteEmails)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.user.deleteEmails(
                {},
                callback
            );
        });

        it('should successfully execute GET /users/:user/followers (getFollowers)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.user.getFollowers(
                {
                    user: 'String',
                    page: 'Number',
                    per_page: 'Number'
                },
                callback
            );
        });

        it('should successfully execute GET /users/:user/following (getFollowingFromUser)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.user.getFollowingFromUser(
                {
                    user: 'String',
                    page: 'Number',
                    per_page: 'Number'
                },
                callback
            );
        });

        it('should successfully execute GET /user/following (getFollowing)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.user.getFollowing(
                {
                    page: 'Number',
                    per_page: 'Number'
                },
                callback
            );
        });

        it('should successfully execute GET /user/following/:user (getFollowUser)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.user.getFollowUser(
                {
                    user: 'String',
                    page: 'Number',
                    per_page: 'Number'
                },
                callback
            );
        });

        it('should successfully execute PUT /user/following/:user (followUser)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.user.followUser(
                {
                    user: 'String'
                },
                callback
            );
        });

        it('should successfully execute DELETE /user/following/:user (unFollowUser)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.user.unFollowUser(
                {
                    user: 'String'
                },
                callback
            );
        });

        it('should successfully execute GET /user/keys (getKeys)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.user.getKeys(
                {
                    page: 'Number',
                    per_page: 'Number'
                },
                callback
            );
        });

        it('should successfully execute GET /users/:user/keys (getKeysFromUser)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.user.getKeysFromUser(
                {
                    user: 'String',
                    page: 'Number',
                    per_page: 'Number'
                },
                callback
            );
        });

        it('should successfully execute GET /user/keys/:id (getKey)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.user.getKey(
                {
                    id: 'String'
                },
                callback
            );
        });

        it('should successfully execute POST /user/keys (createKey)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.user.createKey(
                {
                    title: 'String',
                    key: 'String'
                },
                callback
            );
        });

        it('should successfully execute PATCH /user/keys/:id (updateKey)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.user.updateKey(
                {
                    id: 'String',
                    title: 'String',
                    key: 'String'
                },
                callback
            );
        });

        it('should successfully execute DELETE /user/keys/:id (deleteKey)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.user.deleteKey(
                {
                    id: 'String'
                },
                callback
            );
        });


    });
}());
