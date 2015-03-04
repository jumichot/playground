var five = require("johnny-five");
var songs = require('j5-songs');
var board = new five.Board();

board.on("ready", function() {
  // Creates a piezo object and defines the pin to be used for the signal
  var piezo = new five.Piezo(9);

  board.repl.inject({
    piezo: piezo
  });

  var song = songs.load('beethovens-fifth');
  piezo.play(song);
});
