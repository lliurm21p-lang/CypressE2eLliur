describe('Login Asserts', () => {

  beforeEach(() => {
    cy.loginSauceDemo(Cypress.env('user_name'), Cypress.env('user_password'));
  });

  it('Succesfull login with environment variables', () => {
  cy.url().should('include', '/inventory.html');
  });

  it('Failed login with wrong credentials', () => {
    cy.loginSauceDemo('usuario_inventado', 'clave_falsa');
    cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain', 'Username and password do not match any user in this service');
  });

});