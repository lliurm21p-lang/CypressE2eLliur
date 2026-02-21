import { SDPlogin } from './PageObject/SDP_1_login';

Cypress.Commands.add('loginSauceDemo', (username, password) => {
  SDPlogin.visit();
  SDPlogin.login(username, password);
});