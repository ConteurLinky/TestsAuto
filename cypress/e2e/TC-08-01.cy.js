//Test automatisé mais attention
//Fonctionne uniquement quand il y a assez de matériels
import {emailAdmin, emailEmprunteur, mdpAdmin, mdpEmprunteur} from './identifiants'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.get(':nth-child(1) > .control > .input').type(emailAdmin)
    cy.get(':nth-child(2) > .control > .input').type(mdpAdmin)
    cy.get('form').submit()
    cy.wait(1000)
    cy.get('[href="/manage-materials"]').click()
    const nommaterielsuppr = cy.get(':nth-child(6) > .justify-center > .v-card > [row=""] > :nth-child(2) > .v-card-title')
    cy.get(':nth-child(6) > .justify-center > .v-card > [row=""] > :nth-child(4) > .v-layout > .v-col > :nth-child(2) > .v-btn')//.click()
    cy.reload()
    cy.get(':nth-child(6) > .justify-center > .v-card > [row=""] > :nth-child(2) > .v-card-title').should('not.equal', nommaterielsuppr)
  })
})