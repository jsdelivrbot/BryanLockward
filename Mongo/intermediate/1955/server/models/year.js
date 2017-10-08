var mongoose = require('mongoose');

var yearSchema = new mongoose.Schema({
  name: String
});

var person = mongoose.model('Year', yearSchema);
