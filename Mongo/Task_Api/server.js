const express = require("express");
const app = express();
const path=require("path");
const bodyParser=require("body-parser");
const mongoose = require('mongoose');


var port=process.env.PORT || 8000;
app.use(bodyParser.json());


require('./server/config/mongoose.js');



var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port,()=>console.log('Listening on '+port));
