var fs = require("fs");
var path = require("path");

var dir = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(dir, function(err, files){
  for (var i = 0, len = files.length; i < len; i++) {
    var ext = path.extname(files[i])
    if(ext == extension) console.log(files[i]);
  }
})


