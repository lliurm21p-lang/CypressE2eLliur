import { inventory } from "../support/PageObject/SDP_2_Inventory";

describe('Inventory interaction', () => {

  beforeEach(() => {
    cy.loginSauceDemo(Cypress.env('user_name'), Cypress.env('user_password'));
  });

  it('Add and delete products from inventory', () => {
    inventory.addBackpack.click();
    inventory.addBikeLight.click();
    inventory.addTShirt.click();
    inventory.cartBadge.should('have.text', '3');
    inventory.removeBackpackBtn.should('be.visible').and('have.text', 'Remove').click();
    inventory.cartBadge.should('have.text', '2');
  });

  // it('Sort products by price (low to high)', () => {
  //   inventory.firstItemName.should('have.text', 'Sauce Labs Backpack');
  //   inventory.sortDropdown.select('Price (low to high)');
  //   inventory.firstItemName.should('have.text', 'Sauce Labs Onesie');
  // });

});