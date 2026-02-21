class Ready2Pay {

    get pageTitle() { return cy.get('.title')
    .should('contain', 'Checkout: Your Information');}

    get FirstName() { return cy.get('[data-test="firstName"]'); }

    get LastName() { return cy.get('[data-test="lastName"]'); }

    get PostalCode() { return cy.get('[data-test="postalCode"]'); }

    get continueBtn() { return cy.get('[data-test="continue"]'); }

    get overviview() { return cy.get('.title')
    .should('contain', 'Checkout: Overview'); }

    get summaryInfo() { return cy.get('.summary_info')
    .should('contain', 'Payment Information','Shipping Information','Price Total','Total'); }

    get finishBtn() { return cy.get('[data-test="finish"]'); }

    get checkoutComplete() { return cy.get('.title')
    .should('contain', 'Checkout: Complete!'); }

    get backHomeBtn() { return cy.get('[data-test="back-to-products"]'); }

    get InventoryCheckoutItem() { return cy.get('.inventory_item_name') }
    
}

export const FullCheckout = new Ready2Pay();