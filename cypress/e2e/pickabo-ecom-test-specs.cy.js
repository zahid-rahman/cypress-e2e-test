describe('pickabo ecommerce e2e automated test suite', () => {
  it('add a product to cart', () => {
    cy.visit('https://www.pickaboo.com/')
    cy.get('a[href="/product/electronics/"]').click()
    cy.get('a[href="/product-detail/samsung-55-inch-crystal-4k-uhd-smart-tv-55au7700/"]').click()
    cy.get('.increment').find('button').click();
    cy.scrollTo('bottom')
    cy.get('.hkYiNy').find('a').click()
    cy.get('a[href="/checkout/guest-cart/"]').click()
  }) 
})