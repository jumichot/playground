var casper = require('casper').create();
// this.echo(this.getHTML('.search-zipcode form'));
// var casper = require('casper').create({ verbose: true, logLevel: "debug" });

casper.start('http://www.monsieurdrive.com/', function(response) {
    this.echo(this.getTitle());
    // require('utils').dump(response);
    this.fillSelectors('.search-zipcode form', {
      'input[name="user[formatted_address]"]':  'Issy les Moulineaux',
      'input[name="user[latitude]"]':           '48.8245306',
      'input[name="user[longitude]"]':          '2.2743418999999676'
    }, true);
});

casper.thenOpen('http://www.monsieurdrive.com/rayons/category-boissons/category-eaux', function() {
  casper.waitForSelector('.addtocart', function success() {
      casper.click('.addtocart');
    },
    function fail() {
      test.assertExists("fail to find .addtocart");
    }
  );
});

casper.then(function(){
  casper.waitForSelector('#checkout', function success() {
      casper.click('#checkout');
    },
    function fail() {
      test.assertExists("fail to find #checkout");
    }
  );
});

casper.then(function(){
  casper.waitForSelector('.btn-checkout', function success() {
    this.click('.btn-checkout');
    this.wait(1000, function() {
      this.capture('step1_checkout.png');
    });
    },
    function fail() {
      test.assertExists(".btn-checkout");
    }
  );
});

casper.then(function(){
  casper.waitForSelector('form[action="/users/sign_in"]', function success() {
      casper.evaluate(function () {
        $('.show-form-link').first().click()
        $("form[action='/users/sign_in'] #user_email").val("julien.michot@monsieurdrive.com")
        $("form[action='/users/sign_in'] #user_password").val("123456")
      });
    },
    function fail() {
      test.assertExists("form[action='/users/sign_in']");
    }
  );
});

casper.then(function(){
  this.wait(2000, function() {
    this.click('.js-cp_modal_submit_link');
  });
  this.wait(2000, function() {
    this.capture('step2_sign_in.png');
  });
});

casper.then(function(){
  casper.waitForSelector('.btn-checkout', function success() {
    this.click('.btn-checkout');
    },
    function fail() {
      test.assertExists(".btn-checkout");
    }
  );
  this.wait(2000, function() {
    this.capture('step3_checkout.png');
  });
});

casper.then(function(){
  casper.waitForSelector('.account_btn', function success() {
    this.click('.account_btn');
    },
    function fail() {
      test.assertExists(".account_btn");
    }
  );
  this.wait(3000, function() {
    this.capture('step4_running_checkout.png');
  });
});

casper.then(function(){
  casper.waitForSelector('.js-checkout_status .icon-ok', function success() {
    this.click('.js-checkout_tranfer_btn');
    },
    function fail() {
      test.assertExists('.js-checkout_status .icon-ok');
    }
  );
  this.wait(2000, function() {
    this.capture('step5_finnish.png');
  });
});

casper.run();
