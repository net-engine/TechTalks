// require express as we'll use it to handle all our routing
var express   = require('express');

// create our app instance from express
var app       = express();

// specify which port to use, lets just go with 8080 because reasons.
var port      = 8080;

// tells our app to run and listen to a specific port
app.listen(port, function() {
  console.log('app started');
});
