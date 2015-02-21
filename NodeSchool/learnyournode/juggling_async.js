var http =  require('http');
var bl = require('bl')

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];


var output =[]


var printResult = function(data){
  output.push(data)
  if(output.length === 3){
    console.log(output[2]);
    console.log(output[0]);
    console.log(output[1]);
  }
}

var getHttp = function(url){
  http.get(url, function(response){
    var txt;
    response.setEncoding('utf8');
    response.on('error', console.error)
    response.pipe(bl(function (err, data) { txt = data.toString() }))
    response.on('end', function(arg) {printResult(txt);})
  });
}

getHttp(url1);
getHttp(url2);
getHttp(url3);

// ====================================================
// Solution

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
  console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

        if (count == 3)
      printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
httpGet(i)
