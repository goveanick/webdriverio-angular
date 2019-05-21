Run `npm install` in your terminal

In conf.ts - choose one browser at a time and comment out the rest. Example, to choose chrome browser, comment all browsers in capabilities except chrome like this

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
                // safari: {
                //     capabilities: {
                //         browserName: 'safari',
                //     },
                // },

            },

Run `npm run test` in your terminal to run cross browser tests 
