//Test non automatisatisé
//La chaîne de cractères générée aléatoirement est censée fonctionner, mais le site refuse de le prendre
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
    cy.wait(1000)
    let ajoutrand = generateString(10)
    cy.get(':nth-child(3) > :nth-child(2) > input').clear().type(ajoutrand.toLowerCase()).type('{enter}')
    cy.wait(1000)
    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('Utilisateur mis à jour avec succès !');
    })
    cy.reload()
    cy.wait(1000)
    cy.get(':nth-child(3) > :nth-child(2) > input').should('have.value', ajoutrand)
  })
})