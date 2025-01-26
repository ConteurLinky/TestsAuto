const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "http://localhost:8080",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs :true,
  },
});
