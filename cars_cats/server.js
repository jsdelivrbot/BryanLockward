var fs = require('fs'),
    http = require('http');

var server = http.createServer(function (req, res)
{
  var arr=req.url.split("/");
  console.log(arr);

  if(arr[1]==="cars"){
    if(!arr[2]){
      fs.readFile('views/cars.html', 'utf8', function (err, cont){
      if(err){console.log(err);}
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(cont);
      res.end();
      });
    }
    else if(arr[2]==="new"){
      fs.readFile('views/newCar.html', 'utf8', function (err, cont){
      if(err){console.log(err);}
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(cont);
      res.end();
      });
    }
    else{
    console.log("File not found");
    res.writeHead(404);
    res.end("File not found!");
    }
  }
  else if(arr[1]==="cats"){
    if(!arr[2]){
      fs.readFile('views/cats.html', 'utf8', function (err, cont){
      if(err){console.log(err);}
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(cont);
      res.end();
      });
    }
    else{
    console.log("File not found");
    res.writeHead(404);
    res.end("File not found!");
    }
  }
  else if(arr[1]==="styles"){
    fs.readFile(`stylesheets/${arr[2]}`, 'utf8', function(err, cont){
    if (err) { console.log(err); }
    res.writeHead(200, {'Content-type' : 'text/css' });
    res.write(cont);
    res.end();
    })
  }
  else if(arr[1]==="images")
  {
    fs.readFile(`images/${arr[2]}`, function(err, cont){
    if (err) { console.log(err); }
    res.writeHead(200, {'Content-type' : 'image/jpg' });
    res.write(cont);
    res.end();
    });
  }
  else{
  console.log("File not found");
  res.writeHead(404);
  res.end("File not found!");
  }
});

server.listen(7077);
