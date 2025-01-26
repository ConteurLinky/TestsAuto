//Test correctement automatisé
import {emailAdmin, emailEmprunteur, mdpAdmin, mdpEmprunteur} from '../identifiants'

describe('template spec', () => {
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.get(':nth-child(1) > .control > .input').type(emailAdmin)
    cy.get(':nth-child(2) > .control > .input').type(mdpAdmin)
    cy.get('form').submit()
    cy.wait(1000)
    cy.get('[href="/manage-users"] > .v-list-item__prepend').click()
    cy.wait(3000)
    cy.get('.button').click()

    let nom = generateString(10)
    let prenom = generateString(10)
    let matricule = generateString(7)

    cy.get('#email').type(nom+prenom+"@gmail.com")
    cy.get('#password').type("NptRandomPassword1?")
    cy.get('#firstName').type(prenom)
    cy.get('#lastName').type(nom)
    cy.get(':nth-child(5) > #lastName').type(matricule)
    cy.get('form').submit()
    cy.get('p').contains('Utilisateur créé avec succès')


  })
})