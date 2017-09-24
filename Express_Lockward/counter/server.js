const express = require("express");
const app = express();
const path=require("path");
const bodyParser=require("body-parser")
var port=process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended : true}));

var count=0;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

app.get('/',function(request,response){
  count+=1;
  response.render('index',{count:count});

});

app.post('/reset',function(request,response){
  count=0;
  response.redirect('/');
});

app.post('/plus2',function(request,response){
  count+=1;
  response.redirect('/');
})

app.listen(port,()=>console.log('Listening on '+port));
