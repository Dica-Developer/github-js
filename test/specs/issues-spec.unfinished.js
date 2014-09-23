(function () {
    'use strict';

    describe('issues', function () {
        var github;
        var token = '44046cd4b4b85afebfe3ccaec13fd8c08cc80aad';

        beforeEach(function () {
            github = new Github();
            client.authenticate({
                type: 'oauth',
                token: token
            });
        });

        it('should successfully execute GET /issues (getAll)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.getAll(
                {
                    filter: 'String',
                    state: 'String',
                    labels: 'String',
                    sort: 'String',
                    direction: 'String',
                    since: 'Date',
                    page: 'Number',
                    per_page: 'Number'
                },
                callback
            );
        });

        it('should successfully execute GET /repos/:user/:repo/issues (repoIssues)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.repoIssues(
                {
                    user: 'String',
                    repo: 'String',
                    milestone: 'String',
                    state: 'String',
                    assignee: 'String',
                    mentioned: 'String',
                    labels: 'String',
                    sort: 'String',
                    direction: 'String',
                    since: 'Date',
                    page: 'Number',
                    per_page: 'Number'
                },
                callback
            );
        });

        it('should successfully execute GET /repos/:user/:repo/issues/:number (getRepoIssue)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.getRepoIssue(
                {
                    user: 'String',
                    repo: 'String',
                    number: 'Number'
                },
                callback
            );
        });

        it('should successfully execute POST /repos/:user/:repo/issues (create)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.create(
                {
                    user: 'String',
                    repo: 'String',
                    title: 'String',
                    body: 'String',
                    assignee: 'String',
                    milestone: 'Number',
                    labels: 'Json'
                },
                callback
            );
        });

        it('should successfully execute PATCH /repos/:user/:repo/issues/:number (edit)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.edit(
                {
                    user: 'String',
                    repo: 'String',
                    number: 'Number',
                    title: 'String',
                    body: 'String',
                    assignee: 'String',
                    milestone: 'Number',
                    labels: 'Json',
                    state: 'String'
                },
                callback
            );
        });

        it('should successfully execute GET /repos/:user/:repo/issues/comments (repoComments)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.repoComments(
                {
                    user: 'String',
                    repo: 'String',
                    sort: 'String',
                    direction: 'String',
                    since: 'Date',
                    page: 'Number',
                    per_page: 'Number'
                },
                callback
            );
        });

        it('should successfully execute GET /repos/:user/:repo/issues/:number/comments (getComments)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.getComments(
                {
                    user: 'String',
                    repo: 'String',
                    number: 'Number',
                    page: 'Number',
                    per_page: 'Number'
                },
                callback
            );
        });

        it('should successfully execute GET /repos/:user/:repo/issues/comments/:id (getComment)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.getComment(
                {
                    user: 'String',
                    repo: 'String',
                    id: 'String'
                },
                callback
            );
        });

        it('should successfully execute POST /repos/:user/:repo/issues/:number/comments (createComment)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.createComment(
                {
                    user: 'String',
                    repo: 'String',
                    number: 'Number',
                    body: 'String'
                },
                callback
            );
        });

        it('should successfully execute PATCH /repos/:user/:repo/issues/comments/:id (editComment)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.editComment(
                {
                    user: 'String',
                    repo: 'String',
                    id: 'String',
                    body: 'String'
                },
                callback
            );
        });

        it('should successfully execute DELETE /repos/:user/:repo/issues/comments/:id (deleteComment)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.deleteComment(
                {
                    user: 'String',
                    repo: 'String',
                    id: 'String'
                },
                callback
            );
        });

        it('should successfully execute GET /repos/:user/:repo/issues/:number/events (getEvents)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.getEvents(
                {
                    user: 'String',
                    repo: 'String',
                    number: 'Number',
                    page: 'Number',
                    per_page: 'Number'
                },
                callback
            );
        });

        it('should successfully execute GET /repos/:user/:repo/issues/events (getRepoEvents)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.getRepoEvents(
                {
                    user: 'String',
                    repo: 'String',
                    page: 'Number',
                    per_page: 'Number'
                },
                callback
            );
        });

        it('should successfully execute GET /repos/:user/:repo/issues/events/:id (getEvent)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.getEvent(
                {
                    user: 'String',
                    repo: 'String',
                    id: 'String'
                },
                callback
            );
        });

        it('should successfully execute GET /repos/:user/:repo/labels (getLabels)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.getLabels(
                {
                    user: 'String',
                    repo: 'String',
                    page: 'Number',
                    per_page: 'Number'
                },
                callback
            );
        });

        it('should successfully execute GET /repos/:user/:repo/labels/:name (getLabel)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.getLabel(
                {
                    user: 'String',
                    repo: 'String',
                    name: 'String'
                },
                callback
            );
        });

        it('should successfully execute POST /repos/:user/:repo/labels (createLabel)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.createLabel(
                {
                    user: 'String',
                    repo: 'String',
                    name: 'String',
                    color: 'String'
                },
                callback
            );
        });

        it('should successfully execute POST /repos/:user/:repo/labels/:name (updateLabel)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.updateLabel(
                {
                    user: 'String',
                    repo: 'String',
                    name: 'String',
                    color: 'String'
                },
                callback
            );
        });

        it('should successfully execute DELETE /repos/:user/:repo/labels/:name (deleteLabel)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.deleteLabel(
                {
                    user: 'String',
                    repo: 'String',
                    name: 'String'
                },
                callback
            );
        });

        it('should successfully execute GET /repos/:user/:repo/issues/:number/labels (getIssueLabels)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.getIssueLabels(
                {
                    user: 'String',
                    repo: 'String',
                    number: 'Number'
                },
                callback
            );
        });

        it('should successfully execute GET /repos/:user/:repo/milestones (getAllMilestones)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.getAllMilestones(
                {
                    user: 'String',
                    repo: 'String',
                    state: 'String',
                    sort: 'String',
                    page: 'Number',
                    per_page: 'Number'
                },
                callback
            );
        });

        it('should successfully execute GET /repos/:user/:repo/milestones/:number (getMilestone)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.getMilestone(
                {
                    user: 'String',
                    repo: 'String',
                    number: 'Number'
                },
                callback
            );
        });

        it('should successfully execute POST /repos/:user/:repo/milestones (createMilestone)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.createMilestone(
                {
                    user: 'String',
                    repo: 'String',
                    title: 'String',
                    state: 'String',
                    description: 'String',
                    due_on: 'Date'
                },
                callback
            );
        });

        it('should successfully execute PATCH /repos/:user/:repo/milestones/:number (updateMilestone)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.updateMilestone(
                {
                    user: 'String',
                    repo: 'String',
                    number: 'Number',
                    title: 'String',
                    state: 'String',
                    description: 'String',
                    due_on: 'Date'
                },
                callback
            );
        });

        it('should successfully execute DELETE /repos/:user/:repo/milestones/:number (deleteMilestone)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.issues.deleteMilestone(
                {
                    user: 'String',
                    repo: 'String',
                    number: 'Number'
                },
                callback
            );
        });


    });
}());
