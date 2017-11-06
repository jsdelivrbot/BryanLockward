const User = require('mongoose').model('User');

module.exports = {

  login(request, response) {
    User.findOne({ name: request.body.name })
      .then(user => {
            console.log('Existing User-Logging In');
            completeLogin(request, response, user);
            response.json(user);
      })
      .catch(error => {
        response.status(401).json('Login Error');
      });
  },

  register(request, response) {
    console.log(request.body);
    User.create(request.body)
      .then(user => {
        console.log('Creating New User-Register');
        completeLogin(request, response, user);
        response.json(user);
      })
      .catch(error=>{
        response.status(422).json('Registration Error');
      })
  },

  logout(request, response) {
    console.log('logging out');
    request.session.destroy();
    response.clearCookie('username');
    response.clearCookie('expiration');
  },
};


function completeLogin(request, response, user) {
  request.session.user = user.toObject();
  response.cookie('username', user.name);
  response.cookie('expiration', Date.now() + 86400 * 1000);
  console.log("Complete Login");
}