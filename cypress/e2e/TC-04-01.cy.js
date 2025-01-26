//Test automatisé mais problématique
//Fonctionne uniquement quand il y a assez d'utilisateurs et peut supprimer le compte admin utilisé dans le tests nécéssaires

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.get(':nth-child(1) > .control > .input').type(emailAdmin)
    cy.get(':nth-child(2) > .control > .input').type(mdpAdmin)
    cy.get('form').submit()
    cy.wait(1000)
    cy.get('[href="/manage-users"]').click()
    cy.wait(1000)
    const emailbase = cy.get(':nth-child(9) > :nth-child(4) > input')
    cy.get(':nth-child(9) > :nth-child(7) > button').click()
    cy.reload()
    cy.get(':nth-child(9) > :nth-child(4) > input').should('not.equal', emailbase)
  })
})