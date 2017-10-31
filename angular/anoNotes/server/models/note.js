const mongoose = require('mongoose');
const {Schema} = mongoose;

const noteSchema = new Schema({
    context:{
        type: String,
        required: true,
        minlength:'3'
    }
},
    {
    timestamps:true
});

module.exports=mongoose.model('Note',noteSchema);