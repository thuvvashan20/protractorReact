jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;

describe('Asana page activities', function () {

    const data = require('./../pages/data.json');
    const angularHome = require('./../pages/Pages.js');

    beforeAll(function () {

        angularHome.login(data.username, data.password);
        expect(browser.getTitle()).toEqual('Home - Asana');
    });

    xit('should upload an image', function () {
        angularHome.uploadProfilePic();

    });
    xit('should remove an image', function () {
        angularHome.removeProfilePic();

    });
    it('should select the checkbox', function () {
        angularHome.checkboxSelection();

    });
});