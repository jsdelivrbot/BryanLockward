var mongoose = require('mongoose');
var User = require('../controllers/users.js');
module.exports = function(app) {

  app.get('/', User.main);
  app.post('/login', User.login);
  app.post('/register', User.register);
}
