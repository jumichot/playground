var five = require('johnny-five');



var board = new five.Board();
board.on('ready', function () {

  var pin1 = new five.Pin(1);
  var pin2 = new five.Pin(2);
  var pin5 = new five.Pin(5);
  var pin6 = new five.Pin(6);

  var forward = function(){
    pin1.low();
    pin2.high();
    pin5.high();
    pin6.low();
  };

  var reverse = function(){
    pin1.high();
    pin2.low();
    pin5.low();
    pin6.high();
  };


  var stop = function(){
    pin1.high();
    pin2.low();
    pin5.high();
    pin6.low();
  };

  stop();

  this.repl.inject({
    forward: forward,
    stop: stop,
    reverse: reverse
  });
});

