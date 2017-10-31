const noteController = require('../controllers/notes');
const path = require ('path');

module.exports = function(app){
    app.get('/api/notes', noteController.index);
    app.post('/api/add', noteController.add);

    app.all('*',function(request,response){
        response.sendFile(path.resolve('dist','index.html'));
    })
};