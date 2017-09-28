const express = require("express");
const app = express();
const path=require("path");
const bodyParser=require("body-parser")


var port=process.env.PORT || 8000;
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static(path.join(__dirname, "static")))

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

app.get('/',function(request,response){
  response.render('index');
});

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
})
var io = require('socket.io').listen(server);


io.sockets.on('connection', function (socket) {
  if(count){
    console.log(count);
  }
  else{
    var count=0;
  }
  console.log("Client/socket is connected!");
  socket.on('button_click',function(){
    count++;
    console.log(count);
    socket.emit('button_response', {response:count});
  })
  socket.on('reset',function(){
    count=0;
    console.log(count);
    socket.emit('reset_response', {response:count});
  })
})
