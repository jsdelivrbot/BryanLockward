var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
const reg = new RegExp('\\.js$', 'i')

mongoose.connect('mongodb://localhost/players_db');
var models_path = path.join(__dirname, './../models');

mongoose.Promise = global.Promise;


fs.readdirSync(models_path).forEach(function(file) {
  if(reg.test(file)){
    require(path.join(models_path, file));
  }
});