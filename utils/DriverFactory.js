const webdriver  = require('selenium-webdriver');
const chrome  = require('selenium-webdriver/chrome')

class DriverFactory {
    createDriver(browserName, capabilities) {

        let driver;

        switch (browserName.toLowerCase()) {
           case 'chrome':
               driver = new webdriver.Builder()
                   .forBrowser('chrome')
                   .build();
                break;
           case 'headlesschrome':
               driver = new webdriver.Builder()
                   .forBrowser('chrome')
                   .setChromeOptions(new chrome.Options().headless())
                   .build();
                break;
       }


        return driver;
    }
}

module.exports = new DriverFactory();