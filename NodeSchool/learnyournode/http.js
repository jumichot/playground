var http =  require('http');

function callback (response) { 
  response.setEncoding('utf8');
  response.on("data", function (data) { console.log(data);})
  response.on('error', console.error)
}

http.get(process.argv[2], callback);

