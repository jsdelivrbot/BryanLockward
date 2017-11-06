const mongoose = require('mongoose');
const { Schema } = mongoose;

const pollSchema = new Schema({
    question: {
      type: String,
      required: true,
      trim: true
    },
    option1:{
        type:String,
        required:true
    },
    option2:{
        type:String,
        required:true
    },
    option3:{
        type:String,
        required:true
    },
    option4:{
        type:String,
        required:true
    },
    option1vote:Number,
    option2vote:Number,
    option3vote:Number,
    option4vote:Number,
    time:Date,
    name:String

  },
  {
    timestamps: true
  });
  
  module.exports = mongoose.model('Poll', pollSchema);