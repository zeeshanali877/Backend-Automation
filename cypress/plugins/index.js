const cucumber = require('cypress-cucumber-preprocessor').default;
const resolve = require('path').resolve;

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());

  const options = {
    format: ['html'],
    theme: 'bootstrap',
    saveJson: true,
    jsonFile: resolve('./cypress/reports/cucumber-report.json'),
    output: resolve('./cypress/reports/cucumber-report.html'),
    reportSuiteAsScenarios: true,
    launchReport: true,
  };

  require('cypress-mochawesome-reporter/plugin')(on, options);

  return config;
};
