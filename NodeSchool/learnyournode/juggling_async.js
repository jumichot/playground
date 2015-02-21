var http =  require('http');
var bl = require('bl')

console.log(process.args);
// http.get(process.argv[2], function(response){
//   response.setencoding('utf8');
//   response.on('error', console.error)
//   response.pipe(bl(function (err, data) { txt = data.tostring() }))
//   response.on('end', function(arg) {console.log(txt.length); console.log(txt);})
// });
