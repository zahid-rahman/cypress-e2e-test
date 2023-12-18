import { slowCypressDown } from "cypress-slow-down";

slowCypressDown(500);

describe("ont ecommerce click add to cart validation", () => {
  it("click add to cart without selecting variant options", () => {
    cy.visit("http://localhost:4001/shop/product/boxer-test");
    cy.viewport(1536, 960);
    cy.get('[type="button"]').contains("Add to cart").click();
  });
});
