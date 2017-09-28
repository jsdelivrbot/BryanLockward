const express = require("express");
const app = express();
var session = require('express-session')
const path=require("path");
const bodyParser=require("body-parser");
app.use(session({secret: 'codingdojorocks'}));


var port=process.env.PORT || 8000;
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static(path.join(__dirname, "static")))

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))


app.get('/',function(request,response){
  response.render('index');
});
var user_names=[];
var all_posts=[];
function checkUser(name)
{
  if(user_names){
    let index;
    for (index in user_names){
      if(name===user_names[index]){
        return false;
      }
    }
  }

  console.log("here");
  user_names.push(name);
  console.log(user_names);
  return true;


}

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
})
var io = require('socket.io').listen(server);


io.sockets.on('connection', function (socket) {
  console.log("Client/socket is connected!");
  socket.on('login',function(data){
    if(checkUser(data.user)===true){
      console.log(data.user);
      socket.emit('success',{
        user:data.user,
        posts:all_posts
      })
    }
    else{
      socket.emit('login_failed',{message:"Error, Username in Use, Enter a new name: "});
    }
  })
  socket.on('post_request',function(data){
    console.log(data);
    all_posts.push("<li>"+data.name+":     "+data.message+"</li>");
    socket.emit('post_response',{post:data});
  })
})
