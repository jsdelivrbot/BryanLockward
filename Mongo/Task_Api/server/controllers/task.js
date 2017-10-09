var mongoose = require('mongoose');
var Task = mongoose.model('Task');
module.exports = {

  add: function(request,response){
    var task = new Task({name:request.params.id});
    task.save(function(err) {
      if(err){
        console.log("err");
      }
      else {
        response.redirect('/');
      }
    })
  },
  showAll : function(request,response){
    Task.find({}, function(errors, results){
          if(errors) {
            console.log(errors);
          }
          response.json({ Tasks: results });
        })

  },
  update: function(request,response){
    Task.findOne({ name: request.params.id }, function(errors, results) {
    if (errors) {
      console.log(errors);
    }
    results.save(function(err){if(err){console.log(err);}})
  },
  show : function(request,response){
    Task.findOne({ name: request.params.id }, function(errors, results) {
      if (errors) {
        console.log(errors);
      }
      response.json(results);
    })
  },

  delete:function(request,response){
    Task.remove({ name: request.params.id }, function(errors, results) {
          if (errors) {
            console.log(errors);
          }
        response.redirect('/');
        })
      },
}


}
