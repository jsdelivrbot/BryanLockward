const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      }
});

module.exports = mongoose.model('User', userSchema);
