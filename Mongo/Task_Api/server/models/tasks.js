var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
  }, {timestamps: true});

var task = mongoose.model('Task', yearSchema);
