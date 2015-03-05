var net = require('net');
var data = new Date();

var server = net.createServer(function (socket) {
  socket.end(data.getFullYear()+"-"+ ('0' + (data.getMonth()+1)).slice(-2) +"-"+('0' + data.getDate()).slice(-2)+" "+('0' + data.getHours()).slice(-2)+":"+('0' + data.getMinutes()).slice(-2)+"\n");
});

server.listen(Number(process.argv[2]));
// solution
var net = require('net')

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
