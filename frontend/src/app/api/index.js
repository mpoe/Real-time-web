import openSocket from 'socket.io-client';
import { setUsername, setUserid, setRoomList } from '../redux/actions/index';

import store from '../redux/reducers';

const socket = openSocket('http://localhost:8000');

export function getClientID() {
	socket.emit('GET_ID_REQ');
}

socket.on('GET_ID_RES', (clientID) => {
	store.dispatch(setUserid(clientID));
});

export function setUserName(username) {
	socket.emit('SET_USERNAME_REQ', username);
}

socket.on('SET_USERNAME_RES', (username) => {
	store.dispatch(setUsername(username));
});

export function joinRoom(roomId) {
	socket.emit('JOIN_ROOM', roomId);
}

export function getRooms() {
	socket.emit('GET_ROOMS');
}

socket.on('GOT_ROOMS', (list) => {
	store.dispatch(setRoomList(list));
});
