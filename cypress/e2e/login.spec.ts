import {loginPage} from "../pageObject/loginPage/actions";

const ENV = Cypress.env()
describe('Log in rozetka account with valid/invalid credentials', () => {
  beforeEach(() => {
      cy.visit('/')
    loginPage.openLoginForm()
  })

  it('Login without username', () => {
      loginPage.putPassword(ENV.ROZETKA_PASSWORD)
      loginPage.clickOnLoginButton()
      loginPage.verifyThatNotUserIsAuthorised()
  })

  it('Login without password', () => {
      loginPage.putUsername(ENV.ROZETKA_EMAIL)
      loginPage.clickOnLoginButton()
      loginPage.verifyThatNotUserIsAuthorised()
  })

  it('Login with valid credentials', () => {
      loginPage.putPassword(ENV.ROZETKA_PASSWORD)
      loginPage.putUsername(ENV.ROZETKA_EMAIL)
      loginPage.clickOnLoginButton()
      loginPage.verifyThatUserIsAuthorised()
  })

})
