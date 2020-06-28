// @ts-check
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server, { origins: 'localhost:* http://localhost:* http://localhost:*' }); //https://github.com/socketio/socket.io-client/issues/641#issuecomment-44756529
var fs = require('fs');

const port = 8000;

const dbcon = require('./db'); // connection to the database

const users = {};

dbcon.connect((err) => {
	console.log('connect');
}); // connect to the database, this will happen on server start.

server.listen(port, function () {
	console.log('Server listening at port %d', port);
	//fs.writeFile(__dirname + '/start.log', 'started', (error) => { console.log(error) });
});

io.on('connection', (client) => { // client === socket
	// dbcon.test(); // inserts the clients id to the database (useless)
	client.on('GET_ID_REQ', () => {
		client.emit('GET_ID_RES', client.id);
	})

	client.on('SET_USERNAME_REQ', (username) => {
		io.clients((error, clients) => {
			if (error) throw error;
			clients.map((clientId) => {
				if (clientId !== client.id) {
					if (users[clientId].username === username) {
						username = username + clients.length;
					}
				}
			});
			
			users[client.id] = {
				...users[client.id],
				username
			};

			client.emit('SET_USERNAME_RES', username);
		});
	})

	client.on('JOIN_ROOM', (roomId) => {
		client.join(`room-${roomId}`);
	})

	client.on('GET_ROOMS', () => {
		var res = [];
		var rooms = io.sockets.adapter.rooms;
		console.log(rooms);
		console.log(users);
		if (rooms) {
			for (var room in rooms) {
				const regex = /(room-[\d]+)/g;
				if(room.match(regex)) {
					const enhancedRoom = rooms[room];
					Object.keys(enhancedRoom.sockets).map((clientId) => getClientName(clientId))
					console.log(room);
					res.push(rooms[room]);
				}
			}
		}
		client.emit('GOT_ROOMS', res);
	})

	function getClientName(clientId) {
		io.clients((error, clients) => {
			console.log('clients', clients);
			console.log(clientId);
			clients.map((client) => {
				if (clientId === client) {
					console.log('asdasd', client);
				}
			});
		});
	}


	//client.broadcast.emit('user connected'); //? Not working
	client.on('disconnect', (test) => { //event listener
		// console.log('ABD');
	})

	client.on('disconnecting', (test) => { //event listener
		//console.log('DISCONNECT');
	})
});
