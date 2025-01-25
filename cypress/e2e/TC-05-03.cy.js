describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.get(':nth-child(1) > .control > .input').type("toutou@tours.fr")
    cy.get(':nth-child(2) > .control > .input').type("toutou123")
    cy.get('form').submit()
    cy.visit('http://localhost:8080/manage-users')
  })
})