//Test correctement automatisé
import {emailAdmin, emailEmprunteur, mdpAdmin, mdpEmprunteur} from '../identifiants'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.get(':nth-child(1) > .control > .input').type(emailAdmin)
    cy.get(':nth-child(2) > .control > .input').type(mdpAdmin)
    cy.get('form').submit()
    cy.wait(1000)
    cy.get('[href="/manage-users"] > .v-list-item__prepend').click()
    cy.wait(3000)
    cy.get('.button').click()
    cy.get('#email').type("toutou@tours.fr")
    cy.get('#password').type("Toutou123?")
    cy.get('#firstName').type("Toutou")
    cy.get('#lastName').type("ROUTULE")
    cy.get(':nth-child(5) > #lastName').type("aaaaaaa")
    cy.get('form').submit()
    cy.get('p').contains('ERR_EXIST : Un utilisateur avec cet email existe déjà.')

  })
})