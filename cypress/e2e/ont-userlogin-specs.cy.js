import { slowCypressDown } from 'cypress-slow-down'

slowCypressDown(500)

describe("ont ecommerce user login", () => {
  it("underworld ecom-website", () => {
    cy.visit("http://localhost:4001");
  });

  it("user login with otp", () => {
    cy.visit("http://localhost:4001/login");
    cy.viewport(1536, 960)
    cy.get('[name="phoneNumber"]')
      .type("01795715448")
      .should("have.value", "01795715448");

      cy.get('[type="submit"]')
      .contains("login")
      .click();

      cy.get('[type="submit"]')
      .contains("Verify OTP")
      .click();
  })

});
