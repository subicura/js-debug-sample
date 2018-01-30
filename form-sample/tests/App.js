var SauceLabs = require("saucelabs");

// http://nightwatchjs.org/api/#element

module.exports = {
  'Write Message' : function (browser) {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('body', 1000)
      .pause(2000)
      .assert.visible('[id=name]')
      .setValue('[id=name]', '이름')
      .setValue('[id=message]', '내용입니다')
      .pause(1000)
      .click('[type=submit]')
      .pause(1000)
      .assert.containsText('[id=result]', '이름')
      .assert.containsText('[id=result]', '내용입니다')
      .end();
  },
  afterEach: function(browser, done) {
    if (browser.customSauceEnd) {
      browser.customSauceEnd();
    }

    setTimeout(function() {
      done();
    }, 1000);
  }
}
