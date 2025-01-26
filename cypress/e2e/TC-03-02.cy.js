//Test correctement automatisé
import {emailAdmin, emailEmprunteur, mdpAdmin, mdpEmprunteur} from './identifiants'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.get(':nth-child(1) > .control > .input').type(emailAdmin)
    cy.get(':nth-child(2) > .control > .input').type(mdpAdmin)
    cy.get('form').submit()
    cy.wait(1000)
    cy.get('[href="/manage-users"] > .v-list-item__prepend').click()
    cy.wait(1000)
    cy.get(':nth-child(3) > :nth-child(2) > input').clear().type('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKL').type('{enter}')
    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('Le nom et le prénom ne doivent pas dépasser 30 caractères ni contenir de nombre ou caractères spéciaux.');
    })
  })
})