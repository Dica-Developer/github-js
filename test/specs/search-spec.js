/*global define, describe, it, expect, beforeEach*/
/*
 * Copyright 2012 Cloud9 IDE, Inc.
 *
 * This product includes software developed by
 * Cloud9 IDE, Inc (http://c9.io).
 *
 * Author: Mike de Boer <info@mikedeboer.nl>
 */

define(['githubjs'], function (Client) {
    'use strict';
    describe('[search]', function () {
        var client;
        var token = '44046cd4b4b85afebfe3ccaec13fd8c08cc80aad';

        beforeEach(function () {
            client = new Client();
            client.authenticate({
                type: 'oauth',
                token: token
            });
        });

        it('should successfully execute GET /legacy/issues/search/:user/:repo/:state/:keyword (issues)', function (done) {
            client.search.issues(
                {
                    user: 'jwebertest',
                    repo: 'forTestUseOnly',
                    state: 'closed',
                    keyword: 'Event'
                },
                function (err, res) {
                    expect(err).toBeNull();
                    expect(res.issues.length).toBe(1);
                    var issue = res.issues[0];
                    expect(issue.title).toBe('Create Event');
                    expect(issue.position).toBe(1);
                    expect(issue.state).toBe('closed');

                    done();
                }
            );
        });

        it('should successfully execute GET /legacy/repos/search/:keyword (repos)', function (done) {
            client.search.repos(
                {
                    keyword: 'pasta',
                    language: 'JavaScript'
                },
                function (err, res) {
                    expect(err).toBeNull();
                    expect(res.repositories.length).toBeGreaterThan(0);
                    expect(res.repositories[0].language).toBe('JavaScript');

                    done();
                }
            );
        });

        it('should successfully execute GET /legacy/user/search/:keyword (users)', function (done) {
            client.search.users({ keyword: 'mikedeboer' },
                function (err, res) {
                    expect(err).toBeNull();
                    expect(res.users.length).toBe(2);
                    var user = res.users[0];
                    expect(user.name).toBe('Mike de Boer');
                    expect(user.username.indexOf('mikedeboer')).toBe(0);

                    done();
                }
            );
        });

    });
});
