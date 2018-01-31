module.exports = {
    'Demo test Google' : function (client) {
        client
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', 'rembrandt van rijn')
        .click('input[type=submit]')
        .pause(2000)
        .assert.containsText('.g div:first-child', 'Rembrandt_van_Rijn')
        .end();
    }
};
