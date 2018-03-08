describe("To log into my Twitter account",function(){



	it("validate that i logged into Twitter",function(){


     browser.waitForAngularEnabled(false);
     browser.get("https://twitter.com/login");



     //element(by.name('.user[email]').sendKeys("boldlord2003@gmail.com"));

     element(by.css('.js-username-field')).sendKeys("mhathaway@hatech.io");

     browser.sleep(500);

     element(by.className('js-password-field')).sendKeys("B0ldL0rd", protractor.Key.ENTER);

     browser.sleep(1000);

     element(by.css('.search-input')).sendKeys("HatechLLC", protractor.Key.ENTER)

     browser.sleep(2000);

     //element(by.xpath('id("stream-item-tweet-969275859445035008")/div[@class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content original-tweet js-original-tweet has-cards cards-forward focus"]/div[@class="content"]/div[@class="stream-item-header"]/a[@class="account-group js-account-group js-action-profile js-user-profile-link js-nav"]/img[@class="avatar js-action-profile-avatar"]')).click();
     //element(by.css('#global-new-tweet-button > .text')).click();
     element(by.css('.ProfileCard-avatarImage')).click();

     browser.sleep(1500);

     element(by.css('.EdgeButton--medium.follow-text')).click();

     browser.sleep(2500)

     element(by.css('#global-nav-home > .js-nav.js-tooltip.js-dynamic-tooltip > .text')).click();

     browser.sleep(1000)

     var elm = element(by.css('#tweet-box-home-timeline'));

          elm.sendKeys("@HatechLLC Hi My name is Michael Hathaway you can follow me at @Michael79041164"),(protractor.Key.chord(protractor.Key.CONTROL, "enter"));
     element(by.css('.js-tweet-btn')).click();


     browser.sleep(6000);


     //element(by.css('.StaticLoggedOutHomePage-input.email-input')).sendKeys("boldlord2003@gmail.com");
     //element(by.name('user[user_password]')).sendKeys("B0ldL0rd");

     //element(by.name('user[user_password]')).sendKeys("B0ldL0rd");
     //element(by.id("Phone, email or username")).sendKeys("boldlord2003@gmail.com");



     //element(by.id("Password")).sendKeys("B0ldL0rd", protractor.Key.ENTER);

     })





});




