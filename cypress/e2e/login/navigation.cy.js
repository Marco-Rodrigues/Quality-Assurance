describe('Navigation after login', () => {
  it('should redirect to the dashboard after successful login', () => {
    cy.visit('http://localhost:5500/login.html') 

    cy.get('#email').type('marco@example.com')
    cy.get('#password').type('123456')

    
    cy.get('button[type="submit"]').click()

   
    cy.on('window:alert', (text) => {
      expect(text).to.contain('Login successful!')
    })

    cy.location('pathname', { timeout: 5000 }).should('include', 'dashboard.html')
  })
})
