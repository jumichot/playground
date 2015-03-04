var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function () {
	var led = new five.Led(13);
	led.on();
	var servo = new five.Servo(9);
	servo.to(0);
	this.wait(1000, function(){
    	servo.to(180);
		this.wait(1000, function(){
	    	servo.to(90);
		});
	});
	this.repl.inject({
	 led:led,
	 servo: servo
	});  
})
