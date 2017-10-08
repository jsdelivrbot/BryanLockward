var mongoose = require('mongoose');
var Person = mongoose.model('Year');
module.exports = {

  add: function(request,response){
    var person = new Person({name:request.params.name});
    person.save(function(err) {
      if(err){
        console.log("err");
      }
      else {
        response.redirect('/');
      }
    })
  },
  showAll : function(request,response){
    Person.find({}, function(errors, results){
          if(errors) {
            console.log(errors);
          }
          response.json({ people: results });
        })

  },

  show : function(request,response){
    console.log('*********');
    Person.findOne({ name: request.params.name }, function(errors, results) {
      if (errors) {
        console.log(errors);
      }
      response.json(results);
    })
  },

  delete:function(request,response){
    Person.remove({ name: request.params.name }, function(errors, results) {
          if (errors) {
            console.log(errors);
          }
        response.redirect('/');
        })
      },


}
