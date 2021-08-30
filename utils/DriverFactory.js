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
                let options   = new chrome.Options();
                options.addArguments('--headless'); // note: without dashes
                options.addArguments('--disable-gpu')
                options.addArguments('--no-sandbox')
                options.addArguments('--single-process')
                options.addArguments('--disable-dev-shm-usage')

               driver = new webdriver.Builder()
                   .forBrowser('chrome')
                   .setChromeOptions(options)
                   .build();
                break;
       }


        return driver;
    }
}

module.exports = new DriverFactory();