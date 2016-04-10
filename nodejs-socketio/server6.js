// require express as we'll use it to handle all our routing
var express     = require('express');



// nodejs body parsing middleware.
var bodyParser  = require('body-parser');



// create our app instance from express
var app       = express();
// specify which port to use, lets just go with 8080 because reasons.
var port = 8080;
// create a router instance from express
var router    = express.Router();
// just going to store the user names in here for now, may need them later...
var users = {};

// this tells our app to use our router for /api routes.
app.use('/api', router);



// for parsing json
app.use(bodyParser.json());



// create our first route! This route will match /api/hello because 
// earlier we told our app that any /api route uses the router.
router.route('/hello')
  // As an example, we're using "all" so that a response is sent for all types
  .all((req, res) => {
    // Lets just send a response of 'world'
    res.send('world');
  });



// lets add a new route so the user can tell the server what their name is.
router.route('/hello/:user_name')
  // getting just a username is a bit silly, so lets use a post and get some more information from the user
  .post((req, res) => {
    // we can access the request parameters through the 'req' object
    var user_name = req.params.user_name;

    // I've changed the 'users' array to an object so we can manage this a bit easier
    // req.body is simply the body of the request. format will be json 
    // so we've told the app to use the json bodyparser
    users[user_name] = req.body;

    // Rule 1: be polite, Rule 2: don't be slackbot
    res.send(`Hi, ${ user_name }!`);
  });



// tells our app to serve up static content from the /public directory.
app.use(express.static(__dirname + '/public'));

// tells our app to run and listen to a specific port
app.listen(port, function() {
  console.log('app started');
});
