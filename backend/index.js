// @ts-check
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server, { origins: 'localhost:* http://localhost:* http://localhost:*' }); //https://github.com/socketio/socket.io-client/issues/641#issuecomment-44756529
var fs = require('fs');

const port = 8000;

const dbcon = require('./db'); // connection to the database

const users = {};

const rooms = {};

let userNumber = 9000;
let roomId = 44444;

dbcon.connect((err) => {
	// console.log('connect');
}); // connect to the database, this will happen on server start.

server.listen(port, function () {
	console.log('Server listening at port %d', port);
	//fs.writeFile(__dirname + '/start.log', 'started', (error) => { console.log(error) });
});

io.on('connection', (client) => { // client === socket
	client.on('GET_ID_REQ', () => {
		client.emit('GET_ID_RES', client.id);
	})

	client.on('SET_USERNAME_REQ', (username) => {
		io.clients((error, clients) => {
			if (error) throw error;
			clients.map((clientId) => {
				if (clientId !== client.id) {
					if (users[clientId] && (users[clientId].username === username)) {
						username = username + userNumber;
						userNumber++;
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

	client.on('CREATE_ROOM', ({ roomId, roomSettings }) => {
		client.join(`room-${roomId}`);
		rooms[`room-${roomId}`] = {
			...roomSettings,
			id: roomId,
		}
		client.emit('JOINED_ROOM', rooms[`room-${roomId}`])
	})

	client.on('GET_ROOMS', () => {
		var res = [];
		var socketRooms = io.sockets.adapter.rooms;
		if (socketRooms) {
			for (var room in socketRooms) {
				const regex = /(room-[\d]+)/g;
				if(room.match(regex)) {
					console.log(room);
					const socketRoom = socketRooms[room];
					const roomUsers = Object.keys(socketRoom.sockets).map((clientId) => getUserName(clientId))

					let enhancedRoom = Object.assign(rooms[room], { users: roomUsers });
					res.push(enhancedRoom);
				}
			}
		}
		client.emit('GOT_ROOMS', res);
	})

	client.on('GET_NEXT_ROOM_ID', (roomInfo) => {
		client.emit('GET_NEXT_ROOM_ID_RES', roomId, roomInfo);
		roomId++;
	})

	function getUserName(clientId) {
		return users[clientId];
	}

	client.on('disconnect', (test) => { //event listener
		// console.log('ABD');
	})

	client.on('disconnecting', (test) => { //event listener
		//console.log('DISCONNECT');
	})
});
