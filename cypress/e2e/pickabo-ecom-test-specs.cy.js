describe("pickabo ecommerce e2e automated test suite", () => {
  it("add a product to cart", () => {
    cy.visit("https://www.pickaboo.com/");
    cy.get('a[href="/product/electronics/"]').click();
    cy.get(
      'a[href="/product-detail/samsung-55-inch-crystal-4k-uhd-smart-tv-55au7700/"]'
    ).click();
    cy.get(".increment").find("button").click();
    cy.scrollTo("bottom");
    cy.get(".hkYiNy").find("a").click();
    cy.get('a[href="/checkout/guest-cart/"]').click();
  });

  it("login to account", () => {
    cy.visit("https://www.pickaboo.com/login/");
    cy.get('[placeholder="Mobile Number/Email"]')
      .type("rahmazahid94@gmail.com")
      .should("have.value", "rahmazahid94@gmail.com");
    cy.get('[placeholder="Password"]')
      .type("tH1sis!t")
      .should("have.value", "tH1sis!t");

    cy.get('[type="submit"]')
      .find(".MuiButton-label")
      .contains("Login")
      .click();

  });
});
