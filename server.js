/**
 * Main server file
 */

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.end('Hello Again Node JS!');
});

const PORT = 5000;

app.listen(PORT, function() {
  console.log('Express server running on PORT', PORT);
});
