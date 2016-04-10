// require express as we'll use it to handle all our routing
var express     = require('express');
// create our app instance from express
var app       = express();
// specify which port to use, lets just go with 8080 because reasons.
var port = 8080;



// create our first route! This route will match /hello.
app.route('/hello')
  // As an example, we're using "all" so that a response is sent for all types
  .all((req, res) => {
    // Lets just send a response of 'world'
    res.send('world');
  });



// tells our app to serve up static content from the /public directory.
app.use(express.static(__dirname + '/public'));
// tells our app to run and listen to a specific port
app.listen(port, function() {
  console.log('app started');
});
