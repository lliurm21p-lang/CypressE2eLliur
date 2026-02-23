const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "k2qvt9",
  reporter: 'cypress-mochawesome-reporter',
  allowCypressEnv: false,
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    experimentalStudio: true,
    setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
            return config;
    },
  },
  
});