const BasePage = require("./BasePage.js");
const { until, By }  = require('selenium-webdriver');

class LoginPage extends BasePage {

    constructor(driver) {
        super(driver);
    }

    elements = {
        ...this.elements,
        loginEmailInput: '//input[@id="email"]',
        loginPasswordInput: '//input[@id="passwd"]',
        loginSubmitBtn: '//button[@id="SubmitLogin"]',
        registerEmailInput: '//input[@id="SubmitLogin"]',
        registerSubmitBtn: '//button[@id="SubmitCreate"]'
    }

    async login(login, password) {
        await this.type(this.elements.loginEmailInput,login);
        await this.type(this.elements.loginPasswordInput,password);
        await this.click(this.elements.loginSubmitBtn);
    }

    async isLoaded() {
        let linkList = await this.getElementByXpath(this.elements.loginEmailInput);
        return linkList.isDisplayed();
    }
}

module.exports = LoginPage;