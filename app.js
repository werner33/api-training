// set up basic express server
var express = require('express');
var app = express();

// require student data
var studentData = require('./userData.json');

// allow cross-origin requests
var cors = require('cors');
app.use(cors());

// set up root route
app.get('/', function(req, res) {
  res.send("Your backend is running!");
});

// set up root route
app.get('/users', function(req, res) {
  const { type } = req.query;
  res.json(studentData);
});

var server = require('http').createServer(app);

// export app
module.exports = server;
