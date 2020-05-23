// @ts-check
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server, { origins: 'localhost:* http://localhost:* http://localhost:*' }); //https://github.com/socketio/socket.io-client/issues/641#issuecomment-44756529
var fs = require('fs');

const port = 8000;

const dbcon = require('./db'); // connection to the database
dbcon.connect((err) => {
  console.log('connect');
}); // connect to the database, this will happen on server start.

server.listen(port, function () {
  console.log('Server listening at port %d', port);
  //fs.writeFile(__dirname + '/start.log', 'started', (error) => { console.log(error) });
});

io.on('connection', (client) => {
  // dbcon.test(); // inserts the clients id to the database (useless)
  client.on('GET_ID_REQ', () => {
    console.log(client.id);
    client.emit('GET_ID_RES', client.id);
  })

  client.on('SET_USERNAME_REQ', (username) => {
    io.clients((error, clients) => {
      if (error) throw error;
      clients.map((cliId) => {
        if(cliId !== client.id) {
          if(io.sockets.connected[cliId].username === username) {
            username = username + clients.length;
          }
        }
      });

			client.username = username;
      client.emit('SET_USERNAME_RES', username);
    });
  })


  //client.broadcast.emit('user connected'); //? Not working
  client.on('disconnect', (test) => { //event listener
    // console.log('ABD');
  })

  client.on('disconnecting', (test) => { //event listener
    //console.log('DISCONNECT');
  })
});