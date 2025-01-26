//Test non automatisé et problématique
//Les emprunteurs ne peuvent pas atteindre la page, mais le navigateur utilisé ne peut plus utiliser le site correctement jusqu'à ce que les données d'utilisations du navigateurs soient supprimés

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.get(':nth-child(1) > .control > .input').type("toutou@tours.fr")
    cy.get(':nth-child(2) > .control > .input').type("toutou123")
    cy.get('form').submit()
    cy.wait(1000)
    cy.visit('http://localhost:8080/manage-users')
  })
})