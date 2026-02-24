describe ('OrangeHRM Login', () => {

  it('Successful login with environment variables', () => {
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('PostLogin');
    cy.loginOrangeHRM(Cypress.env('userohr'), Cypress.env('passwordohr'));
    cy.wait('@PostLogin').then((interception) => {
      expect(interception.response.statusCode).to.eq(302);
    });
    cy.url().should('include', '/web/index.php/dashboard/index');
  });

  it('Failed login with wrong credentials', () => {
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('PostLoginFail');
    cy.loginOrangeHRM('usuario_inventado', 'clave_falsa');
    cy.wait('@PostLoginFail').then((interception) => {
      expect(interception.response.statusCode).to.eq(302);
    });
    cy.get('.oxd-alert-content-text')
    .should('be.visible')
    .and('contain', 'Invalid credentials');
  });

});