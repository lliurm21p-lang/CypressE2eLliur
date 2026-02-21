import { SDPlogin } from '../support/PageObject/SDP_1_login';
import { inventory } from "../support/PageObject/SDP_2_Inventory";
import { carrito } from "../support/PageObject/SDP_3_CartSDP";
import { FullCheckout } from '../support/PageObject/SDP_4_EndtoEnd';
import { faker } from '@faker-js/faker';

describe('Cart Interaction', () => {

  beforeEach(() => {
    SDPlogin.visit();
    SDPlogin.login(Cypress.env('user_name'), Cypress.env('user_password'));
    });

        it('End to end checkout process', () => {
        
        const randomFirstName = faker.person.firstName();
        const randomLastName = faker.person.lastName();
        const randomZipCode = faker.location.zipCode();

        inventory.addMultipleProducts();
        inventory.removeBackpackBtn.should('be.visible').and('have.text', 'Remove').click();
        inventory.cartBadge.should('have.text', '2').click();
        carrito.removelightBtn.should('be.visible').and('have.text', 'Remove').click();
        carrito.carritoBadge.should('have.text', '1').click();
        carrito.carritoBadge.should('have.text', '1');
        carrito.checkoutBtn.click();
        FullCheckout.FirstName.type(randomFirstName);
        FullCheckout.LastName.type(randomLastName);
        FullCheckout.PostalCode.type(randomZipCode);
        FullCheckout.continueBtn.click();
        FullCheckout.summaryInfo.should('be.visible').and('contain', 'Payment Information','Shipping Information','Price Total','Total');
        FullCheckout.InventoryCheckoutItem.should('be.visible').and('contain', 'Sauce Labs Bolt T-Shirt');
        FullCheckout.finishBtn.should('be.enabled').click();
        cy.get('.title').should('have.text', 'Checkout: Complete!');
        FullCheckout.backHomeBtn.click();
        cy.url().should('include', '/inventory.html');
    });

  });
