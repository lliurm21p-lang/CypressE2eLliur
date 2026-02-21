import SDPLogin from '../pageObjects/SDPLogin';

Cypress.Commands.add('loginSauceDemo', (username, password) => {
  SDPLogin.visit();
  SDPLogin.login(username, password);
});