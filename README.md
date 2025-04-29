# Cypress Demo Project – QA Test Practice

This is a simple Cypress automation demo project created to refresh and showcase my QA skills using JavaScript and Cypress.

It simulates a basic login flow with validations and redirection — ideal for testing form behavior and core test automation concepts.  
The HTML pages (`login.html` and `dashboard.html`) are local and serve as a mock frontend.

---

## 🧪 What the Tests Cover

### ✅ `login.cy.js`
- Fills in email and password fields
- Submits the form
- Verifies the success alert

### 🚫 `form-validation.cy.js`
- Attempts to submit empty form
- Verifies that an alert appears: “Please fill in all fields”

### 🔁 `navigation.cy.js`
- Fills the form
- Submits it
- Verifies the page redirects to `dashboard.html`

---

## 🚀 How to Run Locally

1. Clone this repo
2. Run `npm install` to install Cypress
3. Open Cypress Test Runner:
   ```bash
   npx cypress open
