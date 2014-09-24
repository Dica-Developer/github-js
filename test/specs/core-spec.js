(function () {
    'use strict';

    describe('Github#authenticate', function () {
        var github, consoleErrorSpy, consoleInfoSpy;
        var token = '44046cd4b4b85afebfe3ccaec13fd8c08cc80aad';

        beforeEach(function () {
            github = new Github();
            consoleErrorSpy = spyOn(window.console, 'error');
            consoleInfoSpy = spyOn(window.console, 'info');
        });

        it('Should fail passing invalid authentication type', function(){
            github.authenticate({
                type: 'invalid'
            });

            expect(consoleErrorSpy).toHaveBeenCalled();
            expect(consoleErrorSpy).toHaveBeenCalledWith('Invalid authentication type, must be "basic", "oauth" or "token"');
            expect(consoleInfoSpy).toHaveBeenCalled();
            expect(consoleInfoSpy).toHaveBeenCalledWith('Continuing without authentication');
            expect(github.auth).toBe(false);
        });

        it('Should fail if auth type "basic" but "username" and/or "password" is missing', function(){
            github.authenticate({
                type: 'basic'
            });

            expect(consoleErrorSpy).toHaveBeenCalled();
            expect(consoleErrorSpy).toHaveBeenCalledWith('Basic authentication requires both a username and password to be set');
            expect(consoleInfoSpy).toHaveBeenCalled();
            expect(consoleInfoSpy).toHaveBeenCalledWith('Continuing without authentication');
            expect(github.auth).toBe(false);

            github.authenticate({
                type: 'basic',
                username: 'me'
            });

            expect(consoleErrorSpy).toHaveBeenCalled();
            expect(consoleErrorSpy).toHaveBeenCalledWith('Basic authentication requires both a username and password to be set');
            expect(consoleInfoSpy).toHaveBeenCalled();
            expect(consoleInfoSpy).toHaveBeenCalledWith('Continuing without authentication');
            expect(github.auth).toBe(false);

            github.authenticate({
                type: 'basic',
                password: 'you'
            });

            expect(consoleErrorSpy).toHaveBeenCalled();
            expect(consoleErrorSpy).toHaveBeenCalledWith('Basic authentication requires both a username and password to be set');
            expect(consoleInfoSpy).toHaveBeenCalled();
            expect(consoleInfoSpy).toHaveBeenCalledWith('Continuing without authentication');
            expect(github.auth).toBe(false);
        });

        it('Should pass if auth type "basic" and "username", "password" is given', function(){
            github.authenticate({
                type: 'basic',
                password: 'you',
                username: 'me'

            });

            expect(consoleErrorSpy).not.toHaveBeenCalled();
            expect(github.auth).toEqual({ type : 'basic', password : 'you', username : 'me' });
            expect(consoleInfoSpy).not.toHaveBeenCalled();
        });

        it('Should fail if auth type "token" but "token" is missing', function(){
            github.authenticate({
                type: 'token'
            });

            expect(consoleErrorSpy).toHaveBeenCalled();
            expect(consoleErrorSpy).toHaveBeenCalledWith('OAuth2 authentication requires a token to be set');
            expect(consoleInfoSpy).toHaveBeenCalled();
            expect(consoleInfoSpy).toHaveBeenCalledWith('Continuing without authentication');
            expect(github.auth).toBe(false);
        });

        it('Should pass if auth type "token" and "token" is given', function(){
            github.authenticate({
                type: 'token',
                token: 'token'
            });

            expect(consoleErrorSpy).not.toHaveBeenCalled();
            expect(github.auth).toEqual({ type : 'token', token : 'token'});
        });

        it('Should fail if auth type "oath" but "token" is missing', function(){
            github.authenticate({
                type: 'oauth'
            });

            expect(consoleErrorSpy).toHaveBeenCalled();
            expect(consoleErrorSpy).toHaveBeenCalledWith('OAuth2 authentication requires a token to be set');
            expect(consoleInfoSpy).toHaveBeenCalled();
            expect(consoleInfoSpy).toHaveBeenCalledWith('Continuing without authentication');
            expect(github.auth).toBe(false);
        });

        it('Should pass if auth type "oauth" and "token" is given', function(){
            github.authenticate({
                type: 'oauth',
                token: 'token'
            });

            expect(consoleErrorSpy).not.toHaveBeenCalled();
            expect(github.auth).toEqual({ type : 'oauth', token : 'token'});
        });

        it('Should set Github#auth to "false" if no argument is given', function(){
            github.authenticate();

            expect(consoleInfoSpy).toHaveBeenCalled();
            expect(github.auth).toBe(false);
        });
    });
}());
