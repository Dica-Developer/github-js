/*global define, describe, it, expect, beforeEach, xit*/
/*
 * Copyright 2012 Cloud9 IDE, Inc.
 *
 * This product includes software developed by
 * Cloud9 IDE, Inc (http://c9.io).
 *
 * Author: Mike de Boer <info@mikedeboer.nl>
 */

define(['githubjs', 'GitHubHttpError'], function (Client, HttpError) {
    'use strict';

    describe('[statuses]', function () {
        var client;
        var token = '44046cd4b4b85afebfe3ccaec13fd8c08cc80aad';

        beforeEach(function () {
            client = new Client();
            client.authenticate({
                type: 'oauth',
                token: token
            });
        });

        it('should successfully execute GET /repos/:user/:repo/statuses/:sha (get)', function (done) {
            client.statuses.get(
                {
                    user: 'dica-developer',
                    repo: 'gh-review',
                    sha: '3033423184546583cde0207eda4722f4b921975a'
                },
                function (err, res) {
                    expect(err).toBeNull();
                    expect(res.length).toBe(2);
                    var status = res.shift();
                    expect(status.id).toBe(42214967);
                    expect(status.state).toBe('failure');
                    expect(status.description).toBe('The Travis CI build failed');
                    done();
                }
            );
        });

        it('should successfully execute POST /repos/:user/:repo/statuses/:sha (create)', function (done) {
            client.statuses.create(
                {
                    user: 'jwebertest',
                    repo: 'forTestUseOnly',
                    sha: '9e635bc0a7348d1df04dbb5a8fd6e0a6fb90fee5',
                    state: 'success',
                    target_url: 'https://dica-developer.github.io',
                    description: 'Unit test'
                },
                function (err, res) {
                    expect(err).toBeNull();
                    expect(res.creator.login).toBe('jwebertest');
                    expect(res.creator.id).toBe(6956285);
                    done();
                }
            );
        });
    });

    describe('[statuses] failure', function () {
        var client;

        beforeEach(function () {
            client = new Client();
        });

        it('should successfully execute GET /repos/:user/:repo/statuses/:sha (get)', function (done) {
            client.statuses.get(
                {
                    user: 'jwebertest',
                    repo: 'forTestUseOnnly',
                    sha: '30d607d8fd8002427b61273f25d442c233cbf631'
                },
                function (err, res) {
                    expect(err).not.toBeNull();
                    expect(err instanceof HttpError).not.toBeNull();
                    done();
                }
            );
        });
    });
});
