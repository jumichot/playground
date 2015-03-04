var five = require('johnny-five')
var board = new five.Board()
  board.on('ready', function () {
    var led = new five.Led(11);
    led.on();
    var servoBase = new five.Servo(9);
    var servoLaser = new five.Servo(10);
    led.strobe(500);
    servoBase.sweep();
    // * After three seconds turn the Led off, stop and center the servo using `Servo.stop` and `Servo.center`
    led.strobe()
    this.wait(3000, function(){
      led.stop();
      servoBase.stop();
      servoBase.center();
      // servoLaser.stop();
      // servoLaser.center();
    });
  this.repl.inject({
    led:led,
    servoBase: servoBase,
    servoLaser: servoLaser
  });
});
