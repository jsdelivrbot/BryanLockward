var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  /*Use the url module to turn the querystring into an object:*/
  var queryData = url.parse(req.url, true).query;
  res.writeHead(200, {"Content-Type": "text/plain"});
  /*Return the year and month from the query object:*/
  var txt = url.host+" "+ url.pathname;
  res.end(txt);
}).listen(8080);
