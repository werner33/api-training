// import app

var server = require('./app');

var port = process.env.PORT || 9000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});