const BasePage = require("./BasePage");

class AccountPage extends BasePage {

    constructor(driver) {
        super(driver);
    }

    elements = {
        ...this.elements,
        linkList: '//ul[@class="myaccount-link-list"]'
    }

    async isLoaded() {
        let linkList = await this.getElementByXpath(this.elements.linkList);
        return linkList.isDisplayed();
    }
}

module.exports = AccountPage;