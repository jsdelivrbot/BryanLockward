var mongoose = require('mongoose');
var Person = require('../controllers/new.js');
module.exports = function(app) {

  app.get('/',function(request,response){
    Person.showAll(request,response);
  })

  app.get('/new/:name',function(request,response){
    Person.add(request,response);
  })

  app.get('/:name',function(request,response){
    Person.show(request,response);
  })

  app.get('/remove/:name',function(request,response){
    Person.delete(request,response);
  })




}
