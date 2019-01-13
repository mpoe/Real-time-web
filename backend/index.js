
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server, {origins:'localhost:* http://localhost:* http://localhost:*'}); //https://github.com/socketio/socket.io-client/issues/641#issuecomment-44756529
var fs = require('fs');  

const port = 8000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
  fs.writeFile(__dirname + '/start.log', 'started', (error) => { console.log(error)}); 
});

app.get('/', function (req, res) {
  res.send('hello world')
})

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});

console.log('listening on port ', 8000);