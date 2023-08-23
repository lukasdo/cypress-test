const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'json',
    reporterOptions: {
      output: 'testFile.json'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
