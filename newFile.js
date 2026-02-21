describe('Testing random email', () => {

  it('random email', () => {
    cy.visit('https://automationexercise.com/login');
    const randomEmail = Math.random().toString(2, 15) + "@gmail.com";
    cy.get('.signup-name').type('Lliur');
    cy.get('.signup-email').type('randomEmail');

  });
});
