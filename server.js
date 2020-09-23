const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const allRouter = require('./routes/all');
const mainRouter = require('./routes/main');

// MIDDLEWARES
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


// ROUTES
app.use('/',mainRouter);
app.use('/first',allRouter);

// exporting the app
module.exports = app; 

