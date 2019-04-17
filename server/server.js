// base setup
var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./api');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);

const PORT = 8080;
const HOST = '0.0.0.0';
app.listen(PORT, HOST);

module.exports = app;