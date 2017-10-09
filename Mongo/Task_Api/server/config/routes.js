var mongoose = require('mongoose');
var Task = require('../controllers/task.js');
module.exports = function(app) {

  app.get('/',function(request,response){
    Task.showAll(request,response);
  })

  app.get('/new',function(request,response){
    Task.add(request,response);
  })

  app.get('/:id',function(request,response){
    Task.showOne(request,response);
  })
  app.get('/update/:id',function(request,response){
    Task.update(request,response);
  })

  app.get('/remove/:id',function(request,response){
    Person.delete(request,response);
  })

}
