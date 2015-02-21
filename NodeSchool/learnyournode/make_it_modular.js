var filteredLs = require('./filtered_ls_module');

var dir = process.argv[2];
var extension = process.argv[3];

filteredLs(dir, extension, function(err, results){
  for (var i = 0, len = results.length; i < len; i++) {
    console.log(results[i]);
  }
})
