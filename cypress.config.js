const { defineConfig } = require("cypress");
const fs = require('fs'); // 1. Nueva librería importada para manejar el disco duro

module.exports = defineConfig({
  projectId: "k2qvt9",
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    experimentalPromptCommand: true,
    
    setupNodeEvents(on, config) {
      
      // 2. Tu configuración original intacta (El reportero gráfico)
      require('cypress-mochawesome-reporter/plugin')(on);

      // 3. La nueva tarea de Node integrada al mismo ciclo de eventos
      on('task', {
        borrarDescargas() {
          const rutaDescargas = 'cypress/downloads';
          if (fs.existsSync(rutaDescargas)) {
            fs.rmSync(rutaDescargas, { recursive: true, force: true });
          }
          return null; // Cypress exige que las tareas retornen algo
        }
      });

      // Retornamos la configuración unificada
      return config;
    },
  },
});