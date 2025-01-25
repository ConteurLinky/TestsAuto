describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.get(':nth-child(1) > .control > .input').type("kanto@etu.univ-tours.fr")
    cy.get(':nth-child(2) > .control > .input').type("MaCouille")
    cy.get('form').submit()
  })
})