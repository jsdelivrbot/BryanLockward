const express = require("express");
const app = express();
const path=require("path");
const bodyParser=require("body-parser");
const mongoose = require('mongoose');


var port=process.env.PORT || 8000;
app.use(bodyParser.urlencoded({extended : true}));


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

mongoose.connect('mongodb://localhost/dashboard');

var monkeySchema = new mongoose.Schema({
  type: String,
  name: String,
  color: String,
  height: Number,
  weight:Number
});

var Monkey = mongoose.model('monkey', monkeySchema);


app.get('/',function(request,response){
  Monkey.find({}, function(errors, results){
    if(errors) {
      console.log(errors);
    }
    response.render('index', { monkeys: results });
  });
});

app.post('/monkeys/new',function(request,response){
  response.render('new');
});

app.post('/monkeys',function(request,response){
  Monkey.create(request.body, function(errors){
    if(errors) {
      console.log(errors);
    }
  response.redirect('/')
  })
});

app.get('/monkeys/:id',function(request,response){
  Monkey.find({ _id: request.params.id }, function(errors, results) {
    if (errors) {
      console.log(errors);
    }
    response.render('show', { monkey: results[0] });
  })
});
app.post('/monkeys/:id',function(request,response){
  Monkey.update({_id:request.params.id},request.body,function(errors,results){
    if(errors){
      console.log(errors)
    }
    response.redirect('/')
  })
})

app.get('/monkeys/edit/:id',function(request,response){
  Monkey.find({ _id: request.params.id }, function(errors, results) {
    if (errors) {
      console.log(errors);
    }
  response.render("edit",{monkey:results[0]});
  })
});

app.get('/monkeys/destroy/:id',function(request,response){
  Monkey.remove({ _id: request.params.id }, function(errors, results) {
    if (errors) {
      console.log(errors);
    }
  response.redirect('/');
  })
});






app.listen(port,()=>console.log('Listening on '+port));
