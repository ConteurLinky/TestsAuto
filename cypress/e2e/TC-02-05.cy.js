describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.get(':nth-child(1) > .control > .input').type("kanto@etu.univ-tours.fr")
    cy.get(':nth-child(2) > .control > .input').type("MaCouille")
    cy.get('form').submit()
    cy.get('ul > :nth-child(1) > a').click()
    cy.get('.button').click()
    cy.get('#email').type("aaaaaaa@gmail.com")
    cy.get('form').submit()
    cy.get('p').contains('Le prénom doit être alphanumérique (1-30 caractères). Le nom doit être alphanumérique (1-30 caractères). Le département doit être alphanumérique (1-30 caractères).')
  })
})