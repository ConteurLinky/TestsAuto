describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.get(':nth-child(1) > .control > .input').type("kanto@etu.univ-tours.fr")
    cy.get(':nth-child(2) > .control > .input').type("MaCouille")
    cy.get('form').submit()
    cy.get('ul > :nth-child(1) > a').click()
    const emailbase = cy.get(':nth-child(11) > :nth-child(1) > input')
    cy.get(':nth-child(11) > :nth-child(6) > button').click()
    cy.get(':nth-child(11) > :nth-child(1) > input').should('not.have.value', emailbase)
  })
})