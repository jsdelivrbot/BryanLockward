const express = require("express");
const app = express();
const path=require("path");
const bodyParser=require("body-parser")


var port=process.env.PORT || 8000;
app.use(bodyParser.urlencoded({extended : true}));


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

app.get('/',function(request,response){
  response.render('index');
});

app.post('/results',function(request,response){
  person={
    name:request.body.name,
    location:request.body.location,
    lang:request.body.lang,
    comment:request.body.comment
  }
  response.render('results',person);
});
app.listen(port,()=>console.log('Listening on '+port));
