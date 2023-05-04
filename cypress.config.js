const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern: 'cypress/integration/**/*.js',
      "reporter": "cypress-multi-reporters",
      "reporterOptions": {
        "reporterEnabled": "mochawesome mochawesome-merge",
        "mochawesomeReporterOptions": {
          "reportDir": "cypress/reports/mochawesome",
          "overwrite": false,
          "html": false,
          "json": true
        },
        "mochawesomeMergeReporterOptions": {
          "reportDir": "cypress/reports/mochawesome",
          "files": [
            "cypress/reports/mochawesome/mochawesome*.json"
          ]
        }
      }
    }
  });
