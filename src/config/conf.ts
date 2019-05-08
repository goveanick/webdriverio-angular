



exports.config = {

    specs: ['./dist/tests/**/**/*.spec.js'],

    // tslint:disable
    capabilities: [{
        "browserName": 'chrome',
        "screenResolution": "1280x1024",
        "platform": 'MAC',
        'goog:chromeOptions': {
            args: ['--incognito', '--start-maximized', '--start-fullscreen'],
        },
    }],

    // Warns when a deprecated command is used
    deprecationWarnings: false,

    // By default WebdriverIO commands are executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async way
    // e.g. using promises you can set the sync option to false.
    sync: true,
    logLevel: 'error',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    connectionRetryTimeout: 90000,
    maxInstances: 6,
    //specFileRetries: 3,

    // Default request retries count
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    seleniumInstallArgs: { version: '3.4.0' },
    seleniumArgs: { version: '3.4.0' },
    reporters: [
        'spec',
        ['junit', {
            outputDir: 'tmp/',
            outputFileFormat: function(opts) { 
                return `results-${opts.cid}.${opts.capabilities}.xml`
            }
        }],

        ['allure', {
          outputDir: 'allure-results',
          disableWebdriverStepsReporting: true,
          disableWebdriverScreenshotsReporting: false,
        }]
    ],

    framework: 'jasmine',


    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 300000,
    },
    waitforTimeout: 70000,


};
