exports.config = {
    capabilities: {
        myChromeBrowser: {
            capabilities: {
                browserName: 'chrome',
                "resolution": "1280x1024",
            },
        },
        // myFirefoxBrowser: {
        //     capabilities: {
        //         browserName: 'firefox',
        //     },
        // },
        // edgeBrowser:{
        //     capabilities: {
        //         browserName: 'edge',
        //     },
        // },
        // ie:{
        //     capabilities: {
        //         browserName: 'ie',
        //     },
        // },
        safari: {
            capabilities: {
                browserName: 'safari',
            },
        },
    },
    services: ['selenium-standalone'],
    seleniumInstallArgs: { version: '3.4.0' },
    seleniumArgs: { version: '3.4.0' },
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 300000,
    },
    waitforTimeout: 10000,
};
//# sourceMappingURL=conf.js.map