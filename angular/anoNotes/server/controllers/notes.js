const  Note = require('mongoose').model('Note');

module.exports = {
    index(request,response){
        Note.find({})
            .then(notes => response.json(notes));
    } ,
    add(request,response){
        console.log('***');
        Note.create(request.body)
            .then(note => response.json(note));
    }
};