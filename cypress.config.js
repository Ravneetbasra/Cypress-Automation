const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {

require('cypress-mochawesome-reporter/plugin')(on); //3)Define the  event listener
 await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;  

}
module.exports = defineConfig({
 projectId: "fcevr1",
   //override the default settings of cypress here
  defaultCommandTimeout: 6000, //globally change the default timeout of the test execution
    reporter: 'cypress-mochawesome-reporter', 
   video: true,
//1) Install using pm i --save-dev cypress-mochawesome-reporter at terminal
    // 2)tell cypress we are enabling reporting here at line 6
  env: {
    url: "https://rahulshettyacademy.com",
  
  },
  retries: {
  runMode: 1,//It will run one more time if there is any failure in the test case.
 
},
  
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/*.js'
  },
});

//messages --> json file --> html