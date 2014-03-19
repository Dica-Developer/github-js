/*global define, describe, it, expect, beforeEach, xit*/
define(['GitHubHttpError'], function (HttpError) {
    'use strict';

    describe('[HttpError]', function () {

        it('HttpError#toString should return error message', function () {
            var error = new HttpError('Failure Message', 200);
            expect(error.toString()).toBe('Failure Message');
        });

        it('HttpError#toJSON should return error object', function () {
            var error = new HttpError('Failure Message', 401);
            expect(error.toJSON()).toEqual({ code : 401, status : 'Unauthorized', message : 'Failure Message' });
        });
    });
});
