class InventorySDP {

  get pageTitle() { return cy.get('.title').should('contain', 'Products'); }

  get addBackpack() { 
      return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'); 
  }

    get addTShirt() { 
      return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'); 
  }

  get addBikeLight() { 
      return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'); 
  }

  get removeBackpackBtn() {
      return cy.get('[data-test="remove-sauce-labs-backpack"]');
  }
  
  get cartBadge() {
    return cy.get('.shopping_cart_link');
  }

  get sortDropdown() {
    return cy.get('.product_sort_container');
  }

  // Opcional: Mapeamos el nombre del primer producto para poder validar que el orden funcionó
  get firstItemName() {
    return cy.get('.inventory_item_name').first();
  }

  addMultipleProducts() {
  this.addBackpack.click();
  this.addBikeLight.click();
  this.addTShirt.click();
}

}

export const inventory = new InventorySDP();