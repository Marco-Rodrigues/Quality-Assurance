describe('Form Validation Test', () => {
  it('shows alert if fields are empty', () => {
    cy.visit('http://localhost:5500/login.html')


    cy.get('button[type="submit"]').click()

    cy.on('window:alert', (text) => {
      expect(text).to.include('Please fill in all fields')
    })
  })
})
