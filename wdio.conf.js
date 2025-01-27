const winston = require('winston');

// Set up a logger using winston
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => `[${timestamp}] [${level.toUpperCase()}]: ${message}`)
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/test.log' }),
  ],
});

exports.config = {
  runner: 'local',
  specs: ['./features/**/*.feature'],
  maxInstances: 1, // Sequential execution
  capabilities: [{ browserName: 'chrome' }],
  logLevel: 'silent',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'cucumber',
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false,
    }],
  ],
  cucumberOpts: {
    require: ['./test/specs/*.js'], // Path to step definitions
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tagExpression: '',
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
  beforeSuite: async function (suite) {
    logger.info('Initializing suite setup...');
  },
};

module.exports.logger = logger;
