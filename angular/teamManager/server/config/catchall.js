const router = require('express').Router()
const path = require('path')

router.all('*', (request, response, next) => {
        response.sendFile(path.join(__dirname,'../../dist/index.html'));
})

module.exports = router;
