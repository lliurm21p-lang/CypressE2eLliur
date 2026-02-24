import { SDPLogin } from './PageObject/SDP_1_Login';

Cypress.Commands.add('loginSauceDemo', (user_name, user_password) => {
  SDPLogin.visit();
  SDPLogin.login(user_name, user_password);
});

import { OrangeHRMLogin } from './PageObject/OrangeLogin';

Cypress.Commands.add('loginOrangeHRM', (userohr, passwordohr) => {
  OrangeHRMLogin.visit();
  OrangeHRMLogin.login(userohr, passwordohr);
});