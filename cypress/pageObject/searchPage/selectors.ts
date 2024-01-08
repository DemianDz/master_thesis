class SearchPageSelectors {
    getMainSearchField() {
        return cy.get('[placeholder="Я шукаю..."]')
    }

    getUsernameField() {
        return cy.get('[id="auth_email"]')
    }

    getPasswordField() {
        return cy.get('[id="auth_pass"]')
    }

    getLoginButton() {
        return cy.get('button').contains('Увійти')
    }
}

export const searchPageSelectors = new SearchPageSelectors()