const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern: 'cypress/integration/**/*.js',
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
      "reporterEnabled": "mochawesome, mochawesome-merge, mochawesome-report-generator",
      "mochawesomeReporterOptions": {
        "reportDir": "cypress/reports/mochawesome"
      },
      "reportGeneratorOptions": {
        "reportDir": "cypress/reports/html",
        "reportFilename": "cypress-report.html",
        "openReportInBrowser": false,
        "metadata": {
          "App Version": "1.2.3",
          "Browser": "Chrome",
          "Platform": "MacOS"
        }
      }
    }
  },
});
