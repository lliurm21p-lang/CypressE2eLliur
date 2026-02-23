import { inventory } from "../support/PageObject/SDP_2_Inventory";
import { carrito } from "../support/PageObject/SDP_3_CartSDP";

describe('Cart Interaction', () => {

  beforeEach(() => {
    cy.loginSauceDemo(cy.env('user_name'), cy.env('user_password'));
  });

      it('Add and remove products from cart', () => {
        inventory.addBackpack.click();
        inventory.cartBadge.should('have.text', '1');
        inventory.addBikeLight.click();
        inventory.cartBadge.should('have.text', '2');
        inventory.addTShirt.click();
        inventory.cartBadge.should('have.text', '3');
        inventory.removeBackpackBtn.should('be.visible').and('have.text', 'Remove').click();
        inventory.cartBadge.should('have.text', '2').click();
        carrito.carritoBadge.should('contain', '2');
        carrito.removelightBtn.should('be.visible').click();
        carrito.carritoBadge.should('contain', '1');
  });

});