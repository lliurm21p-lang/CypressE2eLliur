import { SDPlogin } from '../support/PageObject/SDP_1_login';

// Importamos el JSON directamente (Síncrono)
const testData = require('../fixtures/SDP_users.json'); 

describe('Autentication - Data Driven Testing', () => {

  beforeEach(() => {
    SDPlogin.visit();
  });

  // Iteramos sobre el arreglo del JSON
  testData.forEach((data) => {
    
    // Inyectamos el nombre del test dinámicamente
    it(data.testName, () => {
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