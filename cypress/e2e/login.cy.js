describe('Login Form Test', () => {
  it('fills and submits the login form', () => {
    cy.visit('http://localhost:5500/login.html')

    cy.get('#email')
      .type('marco@example.com')
      .should('have.value', 'marco@example.com')

    cy.get('#password')
      .type('123456')
      .should('have.value', '123456')

    cy.get('button[type="submit"]').click()

    cy.on('window:alert', (text) => {
      expect(text).to.contains('Login efetuado com sucesso!')
    })
  })
})
