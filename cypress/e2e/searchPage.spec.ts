import {loginPage} from "../pageObject/loginPage/actions";

const ENV = Cypress.env()
describe('Search Items and View Details', () => {
  beforeEach(() => {

    loginPage.openLoginForm()
  })

  it('Login without username', () => {
    loginPage.putPassword(ENV.ROZETKA_PASSWORD)

    loginPage.verifyThatNotUserIsAuthorised()
  })

  it('Login without password', () => {
    loginPage.putUsername(ENV.ROZETKA_EMAIL)

    loginPage.verifyThatNotUserIsAuthorised()
  })

  it('Login with valid credentials', () => {
    loginPage.putPassword(ENV.ROZETKA_PASSWORD)
    loginPage.putUsername(ENV.ROZETKA_EMAIL)

    loginPage.verifyThatUserIsAuthorised()
  })

})
