var fs = require('fs')
var buffer = fs.readFile(process.argv[2], 'utf-8', function(err, data){
  if (err) throw err;
  console.log(data.toString().split('\n').length - 1);
})

