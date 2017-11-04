var Game = require('mongoose').model('Game');


module.exports = { 
    index(request, response){
        console.log('index request', request.body);
        Game.find(request.body)
            .then(games => response.json(games))
            .catch(response)
    }, 
    show(request, response){
        Game.findById(request.params.id)
            .then(game => response.json(game))
            .catch(response)
    },
    create(request, response){
        console.log('request body', request.body);
        Game.create(request.body)
            .then(game => response.json(game))
            .catch(response)
    },
    update(request, response) {
        Game.findByIdAndUpdate(request.params.id, request.body, { new: true })
            .then(game => response.json(game))
            .catch(response);
    },
    destroy(request, response) {
        Game.findByIdAndRemove(request.params.id)
            .then(game => response.json(game))
            .catch(response);
    },
}