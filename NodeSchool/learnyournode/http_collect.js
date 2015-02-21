var http =  require('http');
var bl = require('bl')

function callback (response) {
  var txt;
  response.setEncoding('utf8');
  response.on('error', console.error)
  response.pipe(bl(function (err, data) { txt = data.toString() }))
  response.on('end', function(arg) {console.log(txt.length); console.log(txt);})
}

http.get(process.argv[2], callback);
