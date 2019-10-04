var AngularHome = function () {

    const EC = protractor.ExpectedConditions;
    const data = require('./data.json');
    const path = require('path');
    this.getLoginLink = element(by.css('a.horizontalNavigation-item.hidden-logged-in'));
    this.setName = element(by.id('login-email-modal-login'));
    this.setPassword = element(by.id('login-password-modal-login'));
    this.clickBtn = element(by.id('login-submit-modal-login'));
    this.clickProfileName = element(by.css('.AvatarPhoto.AvatarPhoto--small.TopbarPageHeaderGlobalActions-' +
        'settingsMenuAvatar.Avatar--color5'));
    this.profileSettings = element.all(by.css('.MenuItem-label'));
    this.removeProfilePicLink = element(by.css('button.PhotoUpload-removeButton.LinkButton'));
    this.saveChanges = element(by.css('.Button.Button--medium.Button--primary'));
    this.tabSelection=element.all(by.css('.tabView-tabName'));
    this.checkBox=element.all(by.css('.Checkbox-box.Checkbox-box--unchecked.Checkbox-box--enabled.' +
        'Checkbox-box--primary'));
    this.closeButton=element(by.css('.svgIcon '));

    this.get = function () {
        browser.get(data.url);
    };

    this.login = function (username, password) {

        this.get();
        this.getLoginLink.click();
        this.setName.sendKeys(username);
        this.setPassword.sendKeys(password);
        var isClickable = EC.elementToBeClickable(this.clickBtn);
        browser.wait(isClickable, 5000); //wait for an element to become clickable
        this.clickBtn.click();

    };
    this.uploadProfilePic = function () {
        browser.wait(EC.elementToBeClickable(this.clickProfileName), 3000);
        this.clickProfileName.click();
        this.profileSettings.get(3).click();
        browser.driver.sleep(3000);
        var fileToUpload = ('./panda.jpg'),
            absolutePath = path.resolve(__dirname, fileToUpload);
        var remote = require('selenium-webdriver/remote');

        browser.setFileDetector(new remote.FileDetector());
        $('input[type="file"]').sendKeys(absolutePath);
        browser.wait(EC.elementToBeClickable(this.saveChanges), 3000);
        this.saveChanges.click();
    };

    this.removeProfilePic = function () {

        browser.wait(EC.elementToBeClickable(this.clickProfileName), 3000);
        this.clickProfileName.click();
        this.profileSettings.get(3).click();
        browser.wait(EC.elementToBeClickable(this.removeProfilePicLink), 8000);
        this.removeProfilePicLink.click();
        browser.wait(EC.elementToBeClickable(this.saveChanges), 8000);
        this.saveChanges.click();
    };
    this.checkboxSelection = function () {

        browser.wait(EC.elementToBeClickable(this.clickProfileName), 3000);
        this.clickProfileName.click();
        this.profileSettings.get(3).click();
        this.tabSelection.get(4).click();
        browser.driver.sleep(3000);

        this.checkBox.get(0).click();
        this.closeButton.click();
        browser.driver.sleep(3000);
    }

};
module.exports = new AngularHome();