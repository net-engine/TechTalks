// require express as we'll use it to handle all our routing
var express     = require('express');
// create our app instance from express
var app       = express();
// specify which port to use, lets just go with 8080 because reasons.
var port = 8080;
// create a router instance from express
var router    = express.Router();
// this tells our app to use our router for /api routes.
app.use('/api', router);
// create our first route! This route will match /api/hello because 
// earlier we told our app that any /api route uses the router.
router.route('/hello')
  // As an example, we're using "all" so that a response is sent for all types
  .all((req, res) => {
    // Lets just send a response of 'world'
    res.send('world');
  });



// just going to store the user names in here for now, may need them later...
var users = [];

// lets add a new route so the user can tell the server what their name is.
router.route('/hello/:user_name')
  // we only need a get here as its basically a ping with a username, no need to post the data
  .get((req, res) => {
    // we can access the request parameters through the 'req' object
    var user = req.params.user_name;
    // lets chuck the username into an array of users.
    users.push(user);
    // Rule 1: be polite, Rule 2: don't be slackbot
    res.send(`Hi, ${user}!`);
  });



// tells our app to serve up static content from the /public directory.
app.use(express.static(__dirname + '/public'));
// tells our app to run and listen to a specific port
app.listen(port, function() {
  console.log('app started');
});
