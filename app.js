var express = require('express');
var util = require('util');
var CircularJSON = require('circular-json');

var app = express();

app.get('/api/request', function (req, res) {
  console.log(req);
  res.setHeader('Content-Type', 'application/json');
  res.send(CircularJSON.stringify(req));
});

var server = app.listen(1337, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
