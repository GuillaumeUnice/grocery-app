// base setup
var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./api');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT);

module.exports = app;