var mongoose = require('mongoose');

var monkeySchema = new mongoose.Schema({
  type: String,
  name: String,
  color: String,
  height: Number,
  weight:Number
});

var Monkey = mongoose.model('Monkey', monkeySchema);
