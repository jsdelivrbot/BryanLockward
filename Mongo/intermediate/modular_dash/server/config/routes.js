var mongoose = require('mongoose');
var Monkey = require('../controllers/monkeys.js');
module.exports = function(app) {


  app.get('/',function(request,response){
    Monkey.showAll(request,response)
  });

  app.post('/monkeys/new',function(request,response){
    response.render('new');
  });

  app.post('/monkeys',function(request,response){
     Monkey.create(request, response)
  });

  app.get('/monkeys/:id',function(request,response){
    Monkey.showOne(request,response)
  });

  app.post('/monkeys/:id',function(request,response){
    Monkey.update(request,response)
  })

  app.get('/monkeys/edit/:id',function(request,response){
    Monkey.updateGet(request,response)
  });

  app.get('/monkeys/destroy/:id',function(request,response){
    Monkey.delete(request,response)
  })
}
