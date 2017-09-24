const express = require("express");
const app = express();
const path=require("path");
const bodyParser=require("body-parser")
const session = require('express-session');
var port=process.env.PORT || 8000;
app.use(session({secret:'secret'}));
app.use(bodyParser.urlencoded({extended : true}));


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))


app.get('/',function(request,response){
  if(request.session.count)
  {
    request.session.count++;
  }
  else{
    request.session.count=1;
  }
  var counter=request.session.count
  response.render('index',{counter});

});

app.post('/reset',function(request,response){
  request.session.count=0;
  response.redirect('/');
});

app.post('/plus2',function(request,response){
  request.session.count+=1;
  response.redirect('/');
})

app.listen(port,()=>console.log('Listening on '+port));
