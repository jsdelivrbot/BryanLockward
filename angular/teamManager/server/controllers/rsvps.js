var Rsvp = require('mongoose').model('Rsvp');


module.exports = { 
    index(request, response){
        console.log('index request', request.body);
        Rsvp.find(request.body)
            .then(rsvps => response.json(rsvps))
            .catch(response)
    }, 
    show(request, response){
        Rsvp.findById(request.params.id)
            .then(rsvp => response.json(rsvp))
            .catch(response)
    },
    create(request, response){
        console.log('request body', request.body);
        Rsvp.create(request.body)
            .then(rsvp => response.json(rsvp))
            .catch(response)
    },
    update(request, response) {
        Rsvp.findByIdAndUpdate(request.params.id, request.body, { new: true })
            .then(rsvp => response.json(rsvp))
            .catch(response);
    },
    destroy(request, response) {
        Rsvp.findByIdAndRemove(request.params.id)
            .then(rsvp => response.json(rsvp))
            .catch(response);
    },
}