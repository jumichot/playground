var fs = require("fs");
var path = require("path");


module.exports = function (dirName, extension, callback) {
  extension = '.' + extension;

  fs.readdir(dirName, function(err, files){
    if (err)
      return callback(err)

    var results = []
    for (var i = 0; i < files.length; i++) {
      var ext = path.extname(files[i])
      if(ext === extension) {
        results.push(files[i]);
      }
    }
    callback(null,results);
  })
}

