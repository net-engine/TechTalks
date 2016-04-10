// imports.
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// port.
var port = 8080;

var users = {};

// catch any socket connections to the server
io.on('connection', function(socket){

  // when a client tells us hello, we should be polite and react to it.
  socket.on('hello', function(data, fn) {
    // same as the last example, add the data to the 'users' object;
    users[data.name] = data;
    // we can either broadcast to everyone or just reply to the socket. for this 
    // situation we want to bradcast to everyone (except the person who told us their location).
    // This is not the best way to handle the situation as now every time someone tells u stheir position,
    // the every client gets a response. clients will be getting responses far more often than they need them.
    io.broadcast.emit('where', users);

    // fn(users); <- this is the response the the event that will go back to the client
  });

});

// tells our app to serve up static content from the /public directory.
app.use(express.static(__dirname + '/public'));


// tells our app to run and listen to a specific port
http.listen(port, function() {
  console.log('Server started!');
});