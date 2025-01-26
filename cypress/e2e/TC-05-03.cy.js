//Test automatisé


describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.get(':nth-child(1) > .control > .input').type(emailEmprunteur)
    cy.get(':nth-child(2) > .control > .input').type(mdpEmprunteur)
    cy.get('form').submit()
    cy.wait(1000)
    cy.visit('http://localhost:8080/manage-users')
  })
})