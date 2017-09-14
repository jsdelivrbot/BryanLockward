var fs = require('fs'),
    http = require('http'),
    port = 5000;

var server = http.createServer(function (request, response)
{

  if(request.url === '/')
  {
    fs.readFile('static/index.html', 'utf8', function (errors, contents){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(contents);
    response.end();
    });
  }
  else if (request.url==='/ninjas') {
    fs.readFile('static/ninjas.html', 'utf8', function (errors, contents){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(contents);
    response.end();
    });
  }

  else if (request.url==="/dojo/new") {
    fs.readFile('static/dojos.html', 'utf8', function (errors, contents){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(contents);
    response.end();
    });
  }
  else{
    console.log("File not found");
    response.writeHead(404);
    response.end("File not found!");
  }
});

server.listen(6789);
