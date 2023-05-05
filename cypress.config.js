const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin();
      return config;
    },
    specPattern: 'cypress/integration/**/*.js',
    
      // "reporter": "mochawesome",
      // "reporterOptions": {
      //   "reportDir": "cypress/reports/mochawesome-report",
      //   "overwrite": false,
      //   "html": false,
      //   "json": true
      // },
      // "video": false,
      // "plugins": {
      //   "mochawesome-merge": {}
      // }
    }
  });
