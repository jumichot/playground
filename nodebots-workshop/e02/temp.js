var five = require('johnny-five')
var board = new five.Board()


board.on('ready', function () {
  var led = new five.Led(9);
  var sensor = new five.Sensor("A0");

  sensor.on("read", function(err, value){
    var cel = (100 * (value / 1000) - 50).toFixed(2);
    console.log("temp is " + cel);
  });
})
