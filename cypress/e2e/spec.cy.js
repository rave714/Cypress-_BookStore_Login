describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost/liquor-store-app-main/')

    cy.get('#user-area > ul > :nth-child(1) > a')  
      .click()

    cy.get(':nth-child(1) > td > input')  
      .type('ravee@gmail.com')

    cy.get(':nth-child(2) > td > input')  
      .type('ravee01')

    cy.get(':nth-child(3) > th > input')  
      .click()

    cy.contains('Welcome to Liquor Store!')
      .should('be.visible')
  })
})
