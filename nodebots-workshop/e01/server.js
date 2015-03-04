var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var five = require('johnny-five')
var board = new five.Board()

app.get('/', function(req, res){
  res.sendfile('index.html');
});


server.listen(9582, function(){
  console.log('listening on *:9582');
});

board.on('ready', function () {
	var led = new five.Led(11);
	led.off();
	var servoBase = new five.Servo(9);
	var servoLaser = new five.Servo(10);

	io.on('connection', function(socket){

	  socket.on('x', function(val){
	  	console.log(val);
	  	servoBase.to(val);
	  	io.emit('x', val);

	  });
	  socket.on('y', function(val){
	  	console.log(val);
	  	servoLaser.to(val);
	  	io.emit('y', val);

	  });
	  socket.on('laser', function(val){
	  	console.log(val);
	  	// laser.on();
	  });


	});
	
	this.repl.inject({
	 led:led,
	 servoBase: servoBase,
	 servoLaser: servoLaser
	});  



});
