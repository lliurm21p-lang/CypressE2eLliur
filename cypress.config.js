const { defineConfig } = require("cypress");

module.exports = defineConfig({

  // Especifica el reportero que se utilizará para los resultados de las pruebas.
  // 'cypress-mochawesome-reporter' genera informes HTML visuales y detallados.
  reporter: 'cypress-mochawesome-reporter',

  // Contiene la configuración específica para las pruebas End-to-End (E2E).
  e2e: {
    // Define la URL base para la aplicación bajo prueba.
    // Esto permite usar rutas relativas en los comandos de Cypress, como cy.visit('/inventory.html').
    baseUrl: 'https://www.saucedemo.com',

        experimentalStudio: true,
    // Habilita la característica experimental 'Cypress Studio'.
    // Permite grabar interacciones del usuario en la aplicación y genera automáticamente el código de prueba correspondiente.
    experimentalStudio: true,
        
    // Permite conectarse a los eventos de Node.js de Cypress. Es útil para extender el comportamiento de Cypress.
    // 'on' es un escuchador de eventos, y 'config' contiene la configuración resuelta de Cypress.
    setupNodeEvents(on, config) {
            // Carga e inicializa el plugin del reportero 'mochawesome'.
            // Esto es necesario para que el reportero pueda procesar los resultados de las pruebas correctamente.
            require('cypress-mochawesome-reporter/plugin')(on);

            // Es importante devolver el objeto de configuración modificado para que Cypress lo utilice.
            return config;
    },
  },
  
});