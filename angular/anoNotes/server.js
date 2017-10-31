const express = require('express');
const parser = require('body-parser');
const port = process.env.PORT || 8000;
const path=require('path');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'dist')));

require('./server/config/database');
require('./server/config/routes')(app);

app.listen(port,() => console.log("Listening on "+ port));