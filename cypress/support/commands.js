import { SDPLogin } from './PageObject/SDP_1_login';

Cypress.Commands.add('loginSauceDemo', (username, password) => {
  SDPLogin.visit();
  SDPLogin.login(username, password);
});