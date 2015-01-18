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
  this.click('.addtocart');
  this.wait(1000, function() {
  });
});
casper.then(function(){
  this.click('#checkout');
  this.wait(1000, function() {
  });
});
casper.then(function(){
  this.click('.btn-checkout');
  this.wait(1000, function() {
    this.capture('googleee.png');
  });
});
casper.run();
