import openSocket from 'socket.io-client';
import { setUsername, setUserid } from '../redux/actions/index';

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
