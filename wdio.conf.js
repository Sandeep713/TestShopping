exports.config = {
  runner: 'local',
  specs: [
    './test/specs/SignUp.wdio.js'
  ],
  maxInstances: 1, // Sequential execution in one browser instance
  capabilities: [{ browserName: 'chrome' }],
  logLevel: 'error',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false,
    }],
  ],
  mochaOpts: { ui: 'bdd', timeout: 60000 },

  beforeSuite: async function (suite) {
    if (suite.file.includes('AccountInfo') || suite.file.includes('AddCart')) {
      global.isSignUpExecuted = global.isSignUpExecuted || false;
      if (!global.isSignUpExecuted) {
        console.log('Executing SignUp class before other tests...');
        const { runSignUpTest } = require('./test/specs/SignUp.wdio.js');
        await runSignUpTest();
        global.isSignUpExecuted = true;
      }
    }
  },
};