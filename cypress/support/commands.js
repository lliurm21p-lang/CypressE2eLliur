import { SDPLogin } from '../PageObject/SDP_1_Login';

Cypress.Commands.add('loginSauceDemo', (username, password) => {
  SDPLogin.visit();
  SDPLogin.login(username, password);
});