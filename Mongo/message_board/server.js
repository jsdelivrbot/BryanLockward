const express = require("express");
const app = express();
const path=require("path");
const bodyParser=require("body-parser");
const mongoose = require('mongoose');


var port=process.env.PORT || 8000;
app.use(bodyParser.urlencoded({extended : true}));


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

mongoose.connect('mongodb://localhost/message_board');
var Schema = mongoose.Schema;

var postSchema = new mongoose.Schema({
  name:{ type: String, required: true, minlength: 4},
  message:{ type: String, required: true, minlength: 4},
  _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]

})
var commentSchema = new mongoose.Schema({
  name:{ type: String, required: true, minlength: 4},
  message:{ type: String, required: true, minlength: 4},
 _post: {type: Schema.Types.ObjectId, ref: 'Post'}
})

mongoose.model("Post", postSchema);
var Post = mongoose.model("Post");

mongoose.model("Comment", commentSchema);
var Comment = mongoose.model("Comment");

app.get('/',function(request,response){
 Post.find({})
 .populate('_comments')
 .exec(function(errors, results){
    if(errors) {
      console.log(errors);
    }
  response.render('index',{posts:results});
})
})

app.post('/post',function(request,response){
  Post.create(request.body, function(errors){
    if(errors) {
      console.log(errors);
      var error_message="Name and Post Must contain more than 4 Characters";
      response.render('index',{error:error_message});
    }
  response.redirect('/')
  })
})

app.post('/comment/:id',function(request,response){
  Post.findOne({_id:request.params.id},function(errors,results){
    var comm = new Comment(request.body);
    comm._post = results._id;
    results._comments.push(comm);
    comm.save(function(err){
      if(err){
        var error_message="Name and Post Must contain more than 4 Characters";
        response.render('index',{error:error_message});
      }
      results.save(function(err){
        if(err) {
          console.log('Error');
        }
        else {
          for(y in results._comments){
            console.log(results._comments[y].name);
          }
          response.redirect('/');
        }
      })
    })
  })
})
app.get('/delete/:id',function(request,response){
  Post.remove({ _id: request.params.id }, function(errors, results) {
    if (errors) {
      console.log(errors);
    }
  response.redirect('/');
  })
});



app.listen(port,()=>console.log('Listening on '+port));
