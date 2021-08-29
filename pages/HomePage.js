const BasePage = require("./BasePage");
const { until, By }  = require('selenium-webdriver');

class HomePage extends BasePage {

     constructor(driver) {
        super(driver);
     }

     elements = {
         ...this.elements,
         homeSlider : '//div[@class="homeslider-description"]'
     }
}

module.exports = HomePage;