/*global define, describe, it, expect, beforeEach, xit*/
/*
 * Copyright 2012 Cloud9 IDE, Inc.
 *
 * This product includes software developed by
 * Cloud9 IDE, Inc (http://c9.io).
 *
 * Author: Mike de Boer <info@mikedeboer.nl>
 */

define(['Github'], function (Client) {
    'use strict';
    describe('[events]', function () {
        var client;
        var token = '44046cd4b4b85afebfe3ccaec13fd8c08cc80aad';

        beforeEach(function () {
            client = new Client();
            client.authenticate({
                type: 'oauth',
                token: token
            });
        });

        it('should successfully execute GET /events (get)', function (done) {
            function callback(err, res) {
                expect(err).toBeNull();
                expect(res.length).toBeGreaterThan(1);
                var res0 = res[0];
                expect(typeof res0.type).toBe('string');
                expect(typeof res0.created_at).toBe('string');
                expect(typeof res0.public).toBe('boolean');
                expect(typeof res0.id).toBe('string');
                expect('actor' in res0).toBeTruthy();
                expect('actor' in res0).toBeTruthy();
                done();
            }

            client.events.get({ page: 1, per_page: 30 }, callback);
        });

        it('should successfully execute GET /repos/:user/:repo/events (getFromRepo)', function (done) {
            function callback(err, res) {
                expect(err).toBeNull();
                expect(res.length).toBe(3);
                var last = res.pop();
                expect(last.type).toBe('CreateEvent');
                expect(last.created_at).toBe('2014-03-15T00:23:40Z');
                expect(last.id).toBe('2016750786');
                expect(last.public).toBeTruthy();
                expect(last.actor.login).toBe('jwebertest');
                expect(last.repo.name).toBe('jwebertest/forTestUseOnly');
                done();
            }

            client.events.getFromRepo({
                user: 'jwebertest',
                repo: 'forTestUseOnly'
            }, callback);
        });

        it('should successfully execute GET /repos/:user/:repo/issues/events (getFromRepoIssues)', function (done) {
            function callback(err, res) {
                expect(err).toBeNull();
                expect(res.length).toBe(1);
                var last = res.pop();
                expect(last.event).toBe('closed');
                expect(last.created_at).toBe('2014-03-15T00:40:10Z');
                expect(last.id).toBe(102261965);
                expect(last.actor.login).toBe('jwebertest');
                expect(last.issue.title).toBe('Create Event');
                expect(last.issue.number).toBe(1);
                expect(last.issue.state).toBe('closed');
                done();
            }

            client.events.getFromRepoIssues({
                user: 'jwebertest',
                repo: 'forTestUseOnly'
            }, callback);
        });

        it('should successfully execute GET /networks/:user/:repo/events (getFromRepoNetwork)', function (done) {
            function callback(err, res) {
                expect(err).toBeNull();
                expect(res.length).toBe(3);
                var last = res.pop();
                expect(typeof last.id).toBe('string');
                expect(typeof last.created_at).toBe('string');
                expect(typeof last.actor).toBe('object');
                done();
            }

            client.events.getFromRepoNetwork({
                user: 'jwebertest',
                repo: 'forTestUseOnly'
            }, callback);
        });

        it('should successfully execute GET /orgs/:org/events (getFromOrg)', function (done) {
            function callback(err, res) {
                expect(err).toBeNull();
                expect(res.length).toBe(30); //30 = default page length
                var last = res.pop();
                expect(typeof last.id).toBe('string');
                expect(typeof last.created_at).toBe('string');
                expect(typeof last.actor).toBe('object');
                done();
            }

            client.events.getFromOrg({ org: 'dica-developer' }, callback);
        });

        it('should successfully execute GET /users/:user/received_events (getReceived)', function (done) {
            function callback(err, res) {
                expect(err).toBeNull();
                expect(res.length).toBe(0); //30 = default page length
                //TODO no received events yet
//                var last = res.pop();
//                expect(typeof last.id).toBe('string');
//                expect(typeof last.created_at).toBe('string');
//                expect(typeof last.actor).toBe('object');
                done();
            }

            client.events.getReceived({ user: 'jwebertest' }, callback);
        });

        it('should successfully execute GET /users/:user/received_events/public (getReceivedPublic)', function (done) {
            function callback(err, res) {
                expect(err).toBeNull();
                expect(res.length).toBe(0); //30 = default page length
                //TODO no received public events yet
//                var last = res.pop();
//                expect(typeof last.id).toBe('string');
//                expect(typeof last.created_at).toBe('string');
//                expect(typeof last.actor).toBe('object');
                done();
            }

            client.events.getReceivedPublic({ user: 'jwebertest' }, callback);
        });

        it('should successfully execute GET /users/:user/events (getFromUser)', function (done) {
            function callback(err, res) {
                expect(err).toBeNull();
                expect(res.length).toBeGreaterThan(1);
                var last = res.pop();
                expect(typeof last.id).toBe('string');
                expect(typeof last.created_at).toBe('string');
                expect(typeof last.actor).toBe('object');
                done();
            }

            client.events.getFromUser({ user: 'jwebertest' }, callback);
        });

        it('should successfully execute GET /users/:user/events/public (getFromUserPublic)', function (done) {
            function callback(err, res) {
                expect(err).toBeNull();
                expect(res.length).toBeGreaterThan(1);
                var last = res.pop();
                expect(typeof last.id).toBe('string');
                expect(typeof last.created_at).toBe('string');
                expect(typeof last.actor).toBe('object');
                done();
            }

            client.events.getFromUserPublic({ user: 'jwebertest' }, callback);
        });

        //TODO investigate why callback is not called here
        it('should successfully execute GET /users/:user/events/orgs/:org (getFromUserOrg)', function (done) {
            function callback(err) {
                // we're not logged in as `jweber` right now, so github API does not allow
                // us to see the resource.
                expect(err.code).toBe(404);
                done();
            }

            client.events.getFromUserOrg({
                user: 'jweber',
                org: 'dica-developer'
            }, callback);
        });
    });

});