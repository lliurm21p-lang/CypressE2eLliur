class OrangeLogin {
  visit() {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  }

  get OHRuser() { return cy.get("form > div:nth-of-type(1) input"); }
  get OHRpass() { return cy.get("form > div:nth-of-type(2) input"); }
  get OHRlgnBtn() { return cy.get("button"); }

 
  login(
    userohr = Cypress.env('user'), 
    passwordohr = Cypress.env('pass')
  ) {
    this.OHRuser.type(userohr);
    this.OHRpass.type(passwordohr, { log: false });
    this.OHRlgnBtn.click();
  }
}

export const OrangeHRMLogin = new OrangeLogin();