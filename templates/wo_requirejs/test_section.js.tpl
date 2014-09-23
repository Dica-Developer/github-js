(function () {
    'use strict';

    describe('<%= sectionName %>', function () {
        var github;
        var token = '44046cd4b4b85afebfe3ccaec13fd8c08cc80aad';

        beforeEach(function () {
            github = new Github();
            client.authenticate({
                type: 'oauth',
                token: token
            });
        });

<%= testBody %>

    });
}());
