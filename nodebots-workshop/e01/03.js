var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function () {
	var led = new five.Led(13);
	led.on();
	var servoBase = new five.Servo(9);
	var servoLaser = new five.Servo(10);
	servoBase.sweep();
	servoLaser.sweep();
	this.wait(3000, function(){
		servoBase.stop();
		servoLaser.stop();
		servoBase.center();
		servoLaser.center();
	});
	this.repl.inject({
	 led:led,
	 servoBase: servoBase,
	 servoLaser: servoLaser
	});  
})
