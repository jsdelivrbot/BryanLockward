const pollController = require('../controllers/poll');
const authController = require('../controllers/auth');
const path = require('path');

module.exports = function(app) {
  app.get('/api/polls', pollController.index);
  app.post('/api/polls', pollController.create);
  app.put('/api/polls/:poll_id', pollController.update);
  app.get('/api/polls/:poll_id', pollController.show);
  app.delete('/api/polls/:poll_id', pollController.destroy);
  app.post('/api/polls/search/:search',pollController.search);

  app.post('/auth/login', authController.login);
  app.post('/auth/register', authController.register);
  app.delete('/auth/logout', authController.logout);



  app.all('*', function(request, response) {
    response.sendFile(path.resolve('dist', 'index.html'));
  });
};