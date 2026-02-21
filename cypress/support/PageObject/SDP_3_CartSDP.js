class cart {

    get pageTitle() { return cy.get('.title').should('contain', 'Your Cart'); }

    get CarritoInventoryItem() { return cy.get('.inventory_item_name')}
    
    get checkoutBtn() { return cy.get('[data-test="checkout"]'); }

    get removelightBtn() { return cy.get('[data-test="remove-sauce-labs-bike-light"]'); }

    get removeTshirtBtn() { return cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]'); }

    get carritoBadge() {return cy.get('.shopping_cart_link'); }
    
}

    export const carrito = new cart(); 