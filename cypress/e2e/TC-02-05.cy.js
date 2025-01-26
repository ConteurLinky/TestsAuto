//Test correctement automatisé

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.get(':nth-child(1) > .control > .input').type("MaxTest@mail.com")
    cy.get(':nth-child(2) > .control > .input').type("M@xouille07")
    cy.get('form').submit()
    cy.wait(1000)
    cy.get('[href="/manage-users"] > .v-list-item__prepend').click()
    cy.wait(1000)
    cy.get('.button').click()
    cy.get('#email').type("aaaaaaa@gmail.com")
    cy.get('form').submit()
    cy.get('p').contains('Le prénom doit être alphanumérique (1-30 caractères). Le nom doit être alphanumérique (1-30 caractères). Le département doit être alphanumérique (1-30 caractères).')
  })
})