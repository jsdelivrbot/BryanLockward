const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$','i');

const modelPath = path.resolve('server','models');

mongoose.connect('mongodb://localhost/notes');
mongoose.connection.on('connected', () => console.log("connected to DB"));

mongoose.Promise=global.Promise;

fs.readdirSync(modelPath).forEach(file => {
    if(reg.test(file)){
        require(path.join(modelPath,file));
    }
});