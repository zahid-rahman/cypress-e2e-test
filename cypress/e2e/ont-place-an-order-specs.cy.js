import { slowCypressDown } from "cypress-slow-down";

slowCypressDown(500);
describe("ont ecommerce place an order", () => {
  it("place an order from guest checkout", () => {
    cy.visit("http://localhost:4001/shop/product/boxer-test");
    cy.viewport(1536, 960);
    cy.get(".text-xs").contains("Red").click();
    cy.get(".text-xs").contains("special").click();
    cy.get(".text-xs").contains("XL").click();

    cy.get('[test-id="qty-plus"]').click();

    cy.get('[type="button"]').contains("Add to cart").click();
    cy.get('a[href="/checkout"]').contains("Checkout").click();

    cy.get('[name="shippingAddress.customerName"]')
      .type("zahid rahman")
      .should("have.value", "zahid rahman");

    cy.get('[name="shippingAddress.phoneNumber"]')
      .type("01795715448")
      .should("have.value", "01795715448");

    cy.get(".city-select")
      .click()
      .get("#react-select-3-listbox")
      .find(".css-1n6sfyn-MenuList")
      .get("#react-select-3-option-2")
      .click();

    cy.get(".area-select")
      .click()
      .get("#react-select-7-listbox")
      .find(".css-1n6sfyn-MenuList")
      .get("#react-select-7-option-3")
      .click();

    cy.get('[name="shippingAddress.customerEmail"]')
      .type("zahid-rahman@programming-hero.com")
      .should("have.value", "zahid-rahman@programming-hero.com");

    cy.get('[name="shippingAddress.fullAddress"]')
      .type("road-141, gulshan-1, dhaka")
      .should("have.value", "road-141, gulshan-1, dhaka");

    cy.get("#payment-opt-1").click();
    cy.get('[type="submit"]').contains("place order").click();

    cy.get('[name="phoneNumber"]')
      .type("01795715448")
      .should("have.value", "01795715448");

    cy.get('[type="submit"]').contains("login").click();

    cy.get('[type="submit"]').contains("Verify OTP").click();

    cy.get('[type="submit"]').contains("confirm order").click();
  });
});
