const fs = require('fs');

let defaults = {
    browser: 'chrome',
    environment: 'production'
}

let env = process.env.testEnv?process.env.testEnv:defaults.environment;
let browser = process.env.browser?process.env.browser:defaults.browser;
const data =  JSON.parse(fs.readFileSync("config/"+env+".json", "utf8"));


module.exports={ ...data, environment: env, browser: browser };