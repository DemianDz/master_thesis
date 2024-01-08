import {loginPageSelectors} from "./selectors";

class LoginPage {
    openLoginForm() {
        loginPageSelectors.getLoginPageButton().click().then(() => this.verifyThatNotUserIsAuthorised())
    }
    putUsername(username: string) {
        return loginPageSelectors.getUsernameField().clear().type(username)
    }

    putPassword(password: string) {
        return loginPageSelectors.getPasswordField().clear().type(password)
    }

    clickOnLoginButton() {
        return loginPageSelectors.getLoginButton().click()
    }

    verifyThatUserIsAuthorised() {
        return loginPageSelectors.getUsernameField().should('not.exist').then(() => loginPageSelectors.getPasswordField().should('not.exist'))
    }

    verifyThatNotUserIsAuthorised() {
        return loginPageSelectors.getUsernameField().should('be.visible').then(() => loginPageSelectors.getPasswordField().should('be.visible'))
    }
}

export const loginPage = new LoginPage()