const { until, By }  = require('selenium-webdriver');

class BasePage {

    constructor(driver) {
        this.driver = driver;
        if (new.target === BasePage) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
    }

    // element xPaths
    elements = {
        pageHeader: '//h1[@class="page-heading"]',
        loginBtn: '//a[@class="login"]',
        accountBtn: '//a[@class="account"]',
        logoutBtn: '//a[@class="logout"]'
    }

    async click(xPath) {
        let element = await this.getElementByXpath(xPath);
        element.click();
    }

    async type(xPath, text) {
        let element = await this.getElementByXpath(xPath);
        element.sendKeys(text);
    }

    async getText(xPath) {
        let element = await this.getElementByXpath(xPath);
        return element.getText().toString();
    }

    async isElementPresented(xPath) {
        let isPresented;
        try {
            let el = await this.getElementByXpath(xPath)
            isPresented = el.isDisplayed();
        } catch (e) {
            isPresented = false;
        }
        return isPresented;
    }

    async getElementByXpath(xPath) {
       let element = await this.driver.wait(until.elementLocated(By.xpath(xPath)), 30000);
       return element;
    }

    async goLogin() {
        await this.click(this.elements.loginBtn);
    }

    async goLogout() {
        await this.click(this.elements.logoutBtn);
    }
}


module.exports = BasePage;