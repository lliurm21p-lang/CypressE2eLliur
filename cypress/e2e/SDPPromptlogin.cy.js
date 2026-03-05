describe('SDP Prompt Login Test', () => {

  it('should display error message for invalid login', () => {  

cy.prompt([
  "Visit 'https://www.saucedemo.com'",
  "Type 'Random_user' in the user field",
  "Type 'bad_credentials' in the password field",
  "Click the login button",
  "check that the error message 'Epic sadface: Username and password do not match any user in this service' is visible"
        ])  
    })
});