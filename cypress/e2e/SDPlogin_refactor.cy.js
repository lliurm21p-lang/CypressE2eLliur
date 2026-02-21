// 1. Agregamos 'support' a la ruta y unificamos la minúscula en SDPlogin
import { SDPlogin } from '../support/PageObject/SDP_1_Login';

// Importamos el JSON directamente (Síncrono)
const testData = require('../fixtures/SDP_users.json'); 

describe.skip('Autentication - Data Driven Testing', () => {

  beforeEach(() => {
    // 2. Usamos la variable corregida
    SDPlogin.visit();
  });

  // Iteramos sobre el arreglo del JSON
  testData.forEach((data) => {
    
    // Inyectamos el nombre del test dinámicamente
    it(data.testName, () => {
      // 3. Usamos la variable corregida
      SDPlogin.login(data.username, data.password);

      // Lógica condicional basada en el JSON
      if (data.shouldFail) {
        cy.get('[data-test="error"]')
          .should('be.visible')
          .and('contain', data.expectedError);
      } else {
        cy.url().should('include', data.expectedUrl);
      }
    });

  });
});