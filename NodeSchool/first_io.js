var fs = require('fs')
var buffer = fs.readFileSync(process.argv[2])
var lol = buffer.toString().split('\n');
console.log(lol.length - 1 );
