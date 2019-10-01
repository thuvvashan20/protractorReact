var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {

    onPrepare: function () {
        browser.ignoreSynchronization = true;

        protractor.basePath = __dirname;

        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'tmp/screenshots'
            , docTitle: 'e2e test results' // Title of report
        }).getJasmine2Reporter());
        browser.manage().timeouts().setScriptTimeout(1500000);
        browser.driver.manage().window().maximize();

    },
    framework: 'jasmine',
    seleniumArgs: [],
    allScriptsTimeout: 55000,
    specs: [

        '/Users/thuvvareka/gitlabrepo/evo-testscripts/e2e-tests/core/tests/jobs/evouk/tailormade/PosJobCompletionTM.js'
    ],
    capabilities: {

        browserName: 'chrome',
        chromeOptions: {
            //args: ['--window-size=1600,1000']
        }
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        showColors: true, // Use colors in the command line report.

    }
};

