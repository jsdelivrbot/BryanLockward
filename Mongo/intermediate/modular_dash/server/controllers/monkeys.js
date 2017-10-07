var mongoose = require('mongoose');
var Monkey = mongoose.model('Monkey');
module.exports = {

  create : function(request,response){
  var monkey = new Monkey(request.body);
   monkey.save(function(err) {
     if(err){
       console.log("err");
     } else {
       response.redirect('/');
     }
   })
 },

  showAll : function(request,response){
    Monkey.find({}, function(errors, results){
      if(errors) {
        console.log(errors);
      }
      response.render('index', { monkeys: results });
    });
  },

  showOne : function(request,response){
    Monkey.find({ _id: request.params.id }, function(errors, results) {
      if (errors) {
        console.log(errors);
      }
      response.render('show', { monkey: results[0] });
    })
  },
  updateGet : function(request,response){
    Monkey.find({ _id: request.params.id }, function(errors, results) {
      if (errors) {
        console.log(errors);
      }
    response.render("edit",{monkey:results[0]});
    })
  },
  update : function(request,response){
    Monkey.update({_id:request.params.id},request.body,function(errors,results){
      if(errors){
        console.log(errors)
      }
      response.redirect('/')
    })
  },

  delete : function(request,response){
    Monkey.remove({ _id: request.params.id }, function(errors, results) {
      if (errors) {
        console.log(errors);
      }
    response.redirect('/');
    })
  },



}
