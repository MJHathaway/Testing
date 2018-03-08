exports.config = {




        directConnect: true,

        // Capabilities to be passed to the webdriver instance
        capabilities: {
        'browserName': 'chrome'
        },

        framework: 'jasmine',
        //  seleniumAddress: 'http://localhost:4444/wd/hub',

        specs: ['TwitterLogIn3.js'],

        // Options to be passed to Jasmine.
        jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
        }

        }