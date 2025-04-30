describe('Login Form Validation Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5500/login.html')
    })
  
    it('shows alert when fields are empty', () => {
      cy.get('button[type="submit"]').click()
      cy.on('window:alert', (text) => {
        expect(text).to.include('Please fill in all fields')
      })
    })
  
    it('shows alert for invalid email format', () => {
      cy.get('#email').type('marco@')
      cy.get('#password').type('123456')
      cy.get('button[type="submit"]').click()
      cy.on('window:alert', (text) => {
        expect(text).to.include('Please enter a valid email address')
      })
    })
  
    it('shows alert for short password', () => {
      cy.get('#email').type('marco@example.com')
      cy.get('#password').type('123')
      cy.get('button[type="submit"]').click()
      cy.on('window:alert', (text) => {
        expect(text).to.include('Password must be at least 6 characters long')
      })
    })
  })
  