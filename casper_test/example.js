log_step = function(msg) {
  log_step.step = log_step.step || 0;
  log_step.step = log_step.step + 1;
  console.log("====================================");
  console.log("STEP " + log_step.step + " " + msg);
  console.log("====================================");
  casper.capture('step' + log_step.step + '_'+ msg.replace(/\s+/g, '_') +'.png');
}

var casper = require('casper').create({
    verbose: true,
    logLevel: "debug",
    waitTimeout: 30000
});

// Login on the homepage
casper.start('http://www.monsieurdrive.com/', function(response) {
    log_step("fill zipcode form on the homepage");
    this.fillSelectors('.search-zipcode form', {
      'input[name="user[formatted_address]"]':  'Nevers, France',
      'input[name="user[latitude]"]':           '46.99089600000001',
      'input[name="user[longitude]"]':          '3.162845000000061'
    }, true);
    // casper.click('.js-cp_modal_submit_link');
});

casper.then( function() {
    casper.waitForSelector('form[action="/users/sign_in"]', function success() {
      log_step("sign in with the modal");
      casper.evaluate(function () {
        $('.show-form-link').first().click()
        $("form[action='/users/sign_in'] #user_email").val("julien.michot@monsieurdrive.com")
        $("form[action='/users/sign_in'] #user_password").val("123456")
      });
    });
});

casper.then(function(){
  casper.waitForSelector('.js-cp_modal_submit_link', function success() {
      this.click('.js-cp_modal_submit_link');
      log_step("submit the signin modal");
    });
});

casper.then(function() {
  casper.waitForSelector('.addtocart', function success() {
    log_step("add a product to the cart");
    casper.click('.addtocart[data-product-id="521d2476b30f7cad80330350"]');
  });
});

casper.then(function(){
  casper.waitForSelector('#checkout', function success() {
    casper.click('#checkout');
    log_step("go to cart page");
  });
});

casper.then(function(){
  casper.waitForSelector('.btn-checkout', function success() {
    this.click('.btn-checkout');
    log_step("launch checkout commander btn");
  });
});

casper.then(function(){
  casper.waitForSelector('.account_btn ', function success() {
    this.click('.account_btn ');
    log_step("transfert cart");
  });
});

casper.then(function(){
  casper.waitForSelector('.js-checkout_status .icon-ok', function success() {
    this.click('.js-checkout_tranfer_btn');
    log_step("checkout finish");
  });
});

casper.then(function(){
  casper.waitForPopup(/carrefour/, function() {
    log_step("merchant shop");
  });

  casper.withPopup(/carrefour/, function() {
    log_step("display shop merchant");

    this.wait(1000, function() {
      log_step("display shop merchant");
    });
  });
});
// casper.run();
casper.run(function() {
    require('utils').dump(this.logs);
    this.exit();
});
