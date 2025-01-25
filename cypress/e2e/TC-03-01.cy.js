describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.get(':nth-child(1) > .control > .input').type("kanto@etu.univ-tours.fr")
    cy.get(':nth-child(2) > .control > .input').type("MaCouille")
    cy.get('form').submit()
    cy.get('ul > :nth-child(1) > a').click()
    cy.get(':nth-child(3) > :nth-child(2) > input').clear().type('Testeur').type('{enter}')
    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('Utilisateur mis à jour avec succès !');
    })
  })
})