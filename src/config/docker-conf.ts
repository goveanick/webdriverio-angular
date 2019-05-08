exports.config = {
  specs: ['./dist/tests/*.js'],
  driver_host: 'chrome_standalone',
  driver_port: 4444,
  driver_path: '/wd/hub',
  local_chrome_driver: false,
  suites: {
    ClientTests:          ['./dist/tests/admin/clients/specs/*.spec.js'],
    QualificationsTests:  ['./dist/tests/admin/conversions/specs/*.spec.js'],
    CrmTests:             ['./dist/tests/admin/crm-integration/specs/*.spec.js'],
    ConversionsTests:     ['./dist/tests/admin/conversions/specs/*.spec.js'],
    ClientPortalTests:    ['./dist/tests/client-portal/bidding/specs/*.spec.js'],
  } ,
  capabilities: [{
    browserName: 'chrome',
  }],

  // By default WebdriverIO commands are executed in a synchronous way using
  // the wdio-sync package. If you still want to run your tests in an async way
  // e.g. using promises you can set the sync option to false.
  sync: true,
  logLevel: 'error',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  connectionRetryTimeout: 90000,

  // Default request retries count
  connectionRetryCount: 3,
  services: ['selenium-standalone'],

  framework: 'jasmine',
  reporters: ['dot', 'allure', 'junit'],
  reporterOptions: {
    allure: {
      outputDir: 'allure-results',
    },

    junit: {
      outputDir: 'tmp/',
    },

  },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000,
  },
};
