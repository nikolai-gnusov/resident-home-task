const webdriver  = require('selenium-webdriver');

class DriverFactory {
    createDriver(browserName, capabilities) {

        // temporary override
        capabilities = { }
        let driver = new webdriver.Builder()
            .withCapabilities(capabilities)
            .forBrowser(browserName)
            .build();
        return driver;
    }
}

module.exports = new DriverFactory();