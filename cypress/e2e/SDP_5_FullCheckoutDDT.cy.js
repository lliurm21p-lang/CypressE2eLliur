const testData = require ('../fixtures/SDPcheckout_data.json');

describe('Checkout form DDT', () => {

  // El beforeEach prepara el estado inicial: loguearse y llegar al carrito
  beforeEach(() => {
    // 1. Usamos tu comando seguro con variables de entorno
    cy.loginSauceDemo(Cypress.env('user_name'), Cypress.env('user_password'));
    
    // 2. Agregamos un producto y navegamos hasta el checkout
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
  });

  // Iteramos sobre el JSON
  testData.forEach((data) => {
    
    it(data.testName, () => {
      // Condicionales para escribir solo si el JSON trae un valor
      if (data.firstName) cy.get('[data-test="firstName"]').type(data.firstName);
      if (data.lastName) cy.get('[data-test="lastName"]').type(data.lastName);
      if (data.postalCode) cy.get('[data-test="postalCode"]').type(data.postalCode);

      // Clic en continuar
      cy.get('[data-test="continue"]').click();

      // Aserción dinámica: evaluamos el resultado según el boolean 'isValid'
      if (!data.isValid) {
        cy.get('[data-test="error"]')
          .should('be.visible')
          .and('contain', data.expectedError);
      } else {
        cy.url().should('include', '/checkout-step-two.html');
      }
    });
    
  });
});