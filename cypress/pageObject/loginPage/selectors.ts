class LoginPageSelectors {
    getLoginPageButton() {
        return cy.get('button use[href="#icon-user-simple"]')
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

export const loginPageSelectors = new LoginPageSelectors()