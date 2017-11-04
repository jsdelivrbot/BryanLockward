var Player = require('mongoose').model('Player');


module.exports = { 
    index(request, response){
        console.log('player index request', request.body);
        Player.find(request.body).sort("name")
            .then(players => response.json(players))
            .catch(response)
    }, 
    show(request, response){
        Player.findById(request.params.id)
            .then(player => response.json(player))
            .catch(response)
    },
    create(request, response){
        console.log('request body', request.body);
        Player.create(request.body)
            .then(player => response.json(player))
            .catch(response)
    },
    update(request, response) {
        Player.findByIdAndUpdate(request.params.id, request.body, { new: true })
            .then(player => response.json(player))
            .catch(response);
    },
    destroy(request, response) {
        Player.findByIdAndRemove(request.params.id)
            .then(player => response.json(player))
            .catch(response);
    },
}