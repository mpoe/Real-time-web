
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server, { origins: 'localhost:* http://localhost:* http://localhost:*' }); //https://github.com/socketio/socket.io-client/issues/641#issuecomment-44756529
var fs = require('fs');

const port = 8000;

var dbcon = require('./db'); // connection to the database
dbcon.connect(); // connect to the database, this will happen on server start.

server.listen(port, function () {
  console.log('Server listening at port %d', port);
  //fs.writeFile(__dirname + '/start.log', 'started', (error) => { console.log(error) });
});

io.on('connection', (client) => {
  dbcon.test(client.id); // inserts the clients id to the database (useless)

  client.on('GET_ID', () => {
    console.log('HERE');
    client.emit('getID', client.id);
  })


  //client.broadcast.emit('user connected'); //? Not working
  client.on('disconnect', (test) => { //event listener
    // console.log('ABD');
  })

  client.on('disconnecting', (test) => { //event listener
    //console.log('DISCONNECT');
  })
});




/* ################ LEGACY EXAMPLES, WORKING CODE */

/* app.get('/', function (req, res) {
  res.send('hello world')
}) */


  /* client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  }); */