describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.get(':nth-child(1) > .control > .input').type("kanto@etu.univ-tours.fr")
    cy.get(':nth-child(2) > .control > .input').type("MaCouille")
    cy.get('form').submit()
    cy.get('ul > :nth-child(1) > a').click()
    cy.get('.button').click()
    cy.get('#email').type("toutou@tours.fr")
    cy.get('#password').type("toutou123")
    cy.get('#firstName').type("Toutou")
    cy.get('#lastName').type("ROUTULE")
    cy.get('#department').select(1)
    cy.get('form').submit()
    cy.get('p').contains('ERR_EXIST : Un utilisateur avec cet email existe déjà.')

  })
})