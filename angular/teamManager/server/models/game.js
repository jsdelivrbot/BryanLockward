const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
  num: {
    type: Number, // Allows us to use short id's, eg 1, 2, 3
    required: [true, 'Game number must not be empty']
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Game', gameSchema);