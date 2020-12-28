require('chromedriver');

const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

let driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

driver.get('http://www.bananarepublic.com');

