describe('Mobile Test', { viewportWidth: 375, viewportHeight: 812 }, () => {

    beforeEach(() => {
        cy.loginSauceDemo(Cypress.env('user_name'), Cypress.env('user_password'));
    });

    it('Open burguer menu', () => {
    cy.url().should('include', '/inventory.html');

    cy.get('#react-burger-menu-btn').should('be.visible').click();

    cy.get('#logout_sidebar_link').should('be.visible').and('have.text', 'Logout');
  });

  });