const DriverFactory = require('../utils/DriverFactory');
const EnvConstants = require('../utils/EnvConstants');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');
const AccountPage = require('../pages/AccountPage');

describe('UI tests (automationpractice.com)', () => {
    let driver;

    beforeAll( async () => {
        jest.setTimeout(60000);
        driver = DriverFactory.createDriver(EnvConstants.browser, {});
        await driver.get(EnvConstants.ui_base_url, 10000);
    },60000);

    test('Successful login', async () => {
        let homePage = new HomePage(driver);
        await homePage.goLogin();

        let loginPage = new LoginPage(driver);
        await loginPage.login(EnvConstants.ui_login, EnvConstants.ui_password);

        let accountPage = new AccountPage(driver);

        expect(await accountPage.isLoaded()).toBe(true)
    });

   test('Successful logout using UI', async () => {
        let accountPage = new AccountPage(driver);
        await accountPage.goLogout();

        expect(await new LoginPage(driver).isLoaded()).toBe(true)
    });

    afterAll(async () => {
        await driver.quit();
    },60000);
});