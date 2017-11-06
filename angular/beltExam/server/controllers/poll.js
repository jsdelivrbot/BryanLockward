const Poll = require('mongoose').model('Poll');

module.exports = {
  update : (request,response)=>{
    console.log('Updating in DB');
    Poll.findByIdAndUpdate(request.body._id, request.body)
      .then(poll => response.json(poll))
      .catch(error=>{
        console.log("Updating Error");
        console.log(error);
      })
  },
  index : (request, response)=> {
    Poll.find({})
      .then(polls => response.json(polls))
      .catch(error=>{
        console.log("Show All Error");
        console.log(error);
      })
  },
  show : (request, response)=> {
    Poll.findById(request.params.poll_id)
      .then(poll => response.json(poll))
      .catch(error=>{
        console.log("Show one Error");
        console.log(error);
       })
  },
  search : (request,response)=> {
    console.log('Searching DB');
    console.log(request.params.search);
    Poll.find({name:request.params.search})
      .then(polls=> response.json(polls))
      .catch(error=>{
        console.log("Search Error");
        console.log(error);
      })
  },
  create : (request, response)=> {
    console.log("Creating in DB");
    Poll.create(request.body)
    .catch(error=>{
      console.log("Create Error");
      console.log(error);
    })
  },
  destroy : (request, response) => {
    console.log('Deleting From Database');
    console.log(request.params.poll_id);
    Poll.findByIdAndRemove(request.params.poll_id)
        .then(poll => response.json(poll))
        .catch(error=>{
          console.log("destroy Error");
          console.log(error);
        })
  },

};