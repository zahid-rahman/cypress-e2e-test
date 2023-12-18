import { slowCypressDown } from "cypress-slow-down";

slowCypressDown(500);

describe("ont ecommerce add to cart", () => {
  

  it("check quantity button (add 2 more items and remove 2 items)", () => {
    cy.visit("http://localhost:4001/shop/product/boxer-test");
    cy.viewport(1536, 960);

    for (let index = 0; index < 2; index++) {
      cy.get('[test-id="qty-plus"]').click();
    }

    for (let index = 0; index < 2; index++) {
      cy.get('[test-id="qty-minus"]').click();
    }
  });

  it("add product to cart and remove it", () => {
    cy.visit("http://localhost:4001/shop/product/boxer-test");
    cy.viewport(1536, 960);
    cy.get(".text-xs").contains("Red").click();
    cy.get(".text-xs").contains("special").click();
    cy.get(".text-xs").contains("XL").click();
    cy.get('[test-id="qty-plus"]').click();
    cy.get('[type="button"]').contains("Add to cart").click();
    cy.get('[test-id="add-to-cart-btn"]').click();

    /** remove product from cart */
    cy.get(
      '[test-id="delete-product-from-cart-dffbdfcd-004d-4302-b1aa-64154c6dc259"]'
    ).click();
  });
});
