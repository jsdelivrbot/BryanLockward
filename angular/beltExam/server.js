const express = require('express');
const parser = require('body-parser');
const port = process.env.PORT || 8000;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');


const app = express();


const sessionConfig = {
  saveUninitialized: true,
  secret: 'sessionSecret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 360000,
  }
};

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cookieParser('afdvhf'));
app.use(session(sessionConfig));
app.use(express.static(path.join(__dirname, 'dist')));

require('./server/config/mongoose');
require('./server/config/routes')(app);


app.listen(port, () => 
  console.log(`express listening on port ${ port }`));