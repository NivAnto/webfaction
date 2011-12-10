

var html = require('fs').readFileSync(__dirname+'/geochat.html');


var server = require('http').createServer(function(req, res){
  console.log('Running');
  res.end(html);
});
server.listen(8080);

var nowjs = require('now');
var everyone = nowjs.initialize(server);




