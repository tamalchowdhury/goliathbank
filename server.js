/**
 * Main server file
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Body parser for parsing JSON payloads and query strings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.end('Hello Again Node JS!');
});

// The port and the listen function
// Get the PORT from the server like Heroku or default to 5000 development port.
const PORT = process.env.PORT || 5000;

// Start the engine
app.listen(PORT, function() {
  console.log('Express server running on PORT', PORT);
});
