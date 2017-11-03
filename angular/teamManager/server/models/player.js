const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Player name must not be empty'],
    minlength: [3, 'Player name must have at least 3 characters']
  },
  preferredPosition:{
    type: String,
    trim: true,
    required: [true, 'Preferred position must not be empty'],
    minlength: [3, 'Preferred position must have at least 3 characters']
  }
}, {
  timestamps: true
});


module.exports = mongoose.model('Player', playerSchema);