import { SDPLogin } from './PageObject/SDP_1_Login';

Cypress.Commands.add('loginSauceDemo', (user_name, user_password) => {
  SDPLogin.visit();
  SDPLogin.login(user_name, user_password);
});

