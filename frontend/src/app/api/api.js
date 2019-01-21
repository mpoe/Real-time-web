import openSocket from 'socket.io-client';

import { store } from '../redux/reducers'; //CHECK!

const socket = openSocket('http://localhost:8000');

export function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

export function getClientID() {
  socket.emit('GET_ID');
}

socket.on('getID', (clientID) => {
  store.dispatch({
    type: 'TEST_ME',
    payload: clientID,
  });
});
