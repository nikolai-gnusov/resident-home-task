const webdriver  = require('selenium-webdriver');

class DriverFactory {
    createDriver(browserName, capabilities) {
        let driver = new webdriver.Builder()
//            .withCapabilities(capabilities)
            .forBrowser(browserName)
            .build();
        return driver;
    }
}

module.exports = new DriverFactory();