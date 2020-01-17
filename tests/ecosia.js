var conf = require('../../nightwatch.conf.js');
module.exports = {
    'Open Uber Website': function (browser) {
        browser
            .url('https://www.uber.com/fr/fr/') // visit the url
            .waitForElementVisible('body', 5000) // wait for the body to be rendered
            .assert.title('Uber-Augmentez vos revenus en conduisant ou en commandez une course dès maintenant.')
    },

    'Check block login in the wrapper': function (browser) {
        browser
            .url('https://www.uber.com/fr/fr/') // visit the url
            .waitForElementVisible('body', 5000) // wait for the body to be rendered
            .assert.elementPresent('.dh di')

    },

    'Check login block in two sections': function (browser) {
        browser
            .url('https://www.uber.com/fr/fr/') // visit the url
            .waitForElementVisible('body', 5000) // wait for the body to be rendered
            .assert.elementPresent('.dh di')
            .assert.elementPresent('.dv bi tq et')

    },

    'Check login chauffeur section': function (browser) {
        browser
            .url('https://www.uber.com/fr/fr/') // visit the url
            .waitForElementVisible('body', 5000) // wait for the body to be rendered
            .assert.elementPresent('.dh di')
            .assert.elementPresent('.dv bi tq et')
            .assert.elementPresent('.dotcom-header-cta-group-item__link c4 i5 i6 bi cj fe i7 fa i8 bj b5 f2 bk i9 ia ib ic id ie')
            .assert.elementPresent('.al if gf fp cu ig ih ii ij ik il im in io ip iq ir')
            .assert.elementPresent('.is bi b7 dp it iu iv iw ix iy')

    },

    'Check login passager section': function (browser) {
        browser
            .url('https://www.uber.com/fr/fr/') // visit the url
            .waitForElementVisible('body', 5000) // wait for the body to be rendered
            .assert.elementPresent('.dh di')
            .assert.elementPresent('.dv bi tq et')
            .assert.elementPresent('.dotcom-header-cta-group-item__link c4 i5 i6 bi cj fe i7 fa i8 bj b5 f2 bk i9 ia ib ic id ie')
            .assert.elementPresent('.al if gf fp cu ig ih ii ij ik il im in io ip iq ir')
            .assert.elementPresent('.is bi b7 dp it iu iv iw ix iy')

    },

    'Check login passager section': function (browser) {
        browser
            .url('https://www.uber.com/fr/fr/') // visit the url
            .waitForElementVisible('body', 5000) // wait for the body to be rendered
            .click('/signup/')

    }

}
