var five = require('johnny-five')
var board = new five.Board()


board.on('ready', function () {
  var led = new five.Led(9);

  var sensor = new five.Sensor("A0");

  sensor.on("change", function() {
    console.log(this.value);
    if(this.value > 600){
      led.on();
    } else {
      led.off();
    }
  });

})
