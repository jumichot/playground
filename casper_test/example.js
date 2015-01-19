var casper = require('casper').create({
    verbose: true,
    logLevel: "debug",
    waitTimeout: 30000
});
// Login on the homepage
casper.start('http://www.monsieurdrive.com/', function(response) {
    console.log('Login on the homepage');
    // get title of the page
    this.echo(this.getTitle());
    this.fillSelectors('.search-zipcode form', {
      'input[name="user[formatted_address]"]':  'Nevers, France',
      'input[name="user[latitude]"]':           '46.99089600000001',
      'input[name="user[longitude]"]':          '3.162845000000061'
    }, true);
});

// Add a product
casper.thenOpen('http://www.monsieurdrive.com/rayons/category-boissons/category-eaux', function() {
  casper.waitForSelector('.addtocart', function success() {
      casper.click('.addtocart');
    },
    function fail() {
      test.assertExists("fail to find .addtocart");
    }
  );
});

// Go to cart
casper.then(function(){
  casper.waitForSelector('#checkout', function success() {
      casper.click('#checkout');
    },
    function fail() {
      test.assertExists("fail to find #checkout");
    }
  );
});

// Validate cart
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

// sign in in the modal
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

// submit the modal
casper.then(function(){
  casper.waitForSelector('.js-cp_modal_submit_link', function success() {
      this.click('.js-cp_modal_submit_link');
    },
    function fail() {
      test.assertExists('.js-cp_modal_submit_link');
    }
  );
  this.wait(1000, function() {
    this.capture('step2_sign_in.png');
  });
});

// launch the checkout
casper.then(function(){
  casper.waitForSelector('.btn-checkout', function success() {
    this.click('.btn-checkout');
    },
    function fail() {
      test.assertExists(".btn-checkout");
    }
  );
  this.wait(1000, function() {
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

// check if command finalized
casper.then(function(){
  casper.waitForSelector('.js-checkout_status .icon-ok', function success() {
    this.click('.js-checkout_tranfer_btn');
    },
    function fail() {
      test.assertExists('.js-checkout_status .icon-ok');
    }
  );
  this.wait(5000, function() {
    this.capture('step5_finnish.png');
  });
});

casper.then(function(){
  casper.waitForPopup(/carrefour/, function() {
    this.wait(1000, function() {
      this.capture('step6_finnish.png');
    });
  });
  // IN POPUP
  casper.withPopup(/carrefour/, function() {
    console.log("in popup:")

    this.wait(1000, function() {
      this.capture('step7_target_shop.png');
    });
  });
});
casper.run();
