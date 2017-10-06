const express = require("express");
const app = express();
const path=require("path");
const bodyParser=require("body-parser")
const mongoose = require('mongoose');


var port=process.env.PORT || 8000;
app.use(bodyParser.urlencoded({extended : true}));


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

mongoose.connect('mongodb://localhost/quoting_dojo');

var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String,
});

var Quote = mongoose.model('quotes', QuoteSchema);


app.get('/',function(request,response){
  response.render('index');
});

app.get('/quotes', function(request, response){
  Quote.find({}, function(errors, results){
    if(errors) {
      console.log(errors);
    }
    response.render('quotes', { quotes: results });
  });
});

app.post('/quotes', function(request, response){
  Quote.create(request.body, function(errors){
    if(errors) {
      console.log(errors);
    }
    response.redirect('/quotes');
  });
});

app.listen(port,()=>console.log('Listening on '+port));
