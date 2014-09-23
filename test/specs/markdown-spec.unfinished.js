(function () {
    'use strict';

    describe('markdown', function () {
        var github;
        var token = '44046cd4b4b85afebfe3ccaec13fd8c08cc80aad';

        beforeEach(function () {
            github = new Github();
            client.authenticate({
                type: 'oauth',
                token: token
            });
        });

        it('should successfully execute POST /markdown (render)', function (done) {
            var callback = function (err, res) {
                expect(err).toBeNull();
                done();
            };

            github.markdown.render(
                {
                    text: 'String',
                    mode: 'String',
                    context: 'String'
                },
                callback
            );
        });


    });
}());
