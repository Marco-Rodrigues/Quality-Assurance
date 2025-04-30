describe('Login Success Flow', () => {
    it('logs in with valid credentials and redirects to dashboard', () => {
      cy.visit('http://localhost:5500/login.html')
  
      cy.get('#email').type('marco@example.com')
      cy.get('#password').type('123456')
      cy.get('button[type="submit"]').click()
  
      cy.on('window:alert', (text) => {
        expect(text).to.include('Login successful!')
      })
  
      cy.location('pathname').should('include', 'dashboard.html')
    })
  })
  