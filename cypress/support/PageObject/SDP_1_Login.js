class LoginSDP {
  visit() {
    cy.visit('/');
  }

  get usernameInput() { return cy.get('[data-test="username"]'); }
  get passwordInput() { return cy.get('[data-test="password"]'); }
  get loginButton() { return cy.get('[data-test="login-button"]'); }

  login(user_name, user_password) {
    this.usernameInput.type('user_name');
    this.passwordInput.type('user_password', { log: false });
    this.loginButton.click();
  }
}

export const SDPLogin = new LoginSDP();