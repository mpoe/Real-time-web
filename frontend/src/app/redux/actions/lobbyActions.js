/* eslint-disable import/prefer-default-export */
import { SET_ROOMS } from './actionTypes';

/**
  * @desc Receives the username from the backend, and sets it in redux
  * @param {string} username username - the username received from the backend
  * @return an action creator
*/
export const setRoomList = rooms => ({
	type: SET_ROOMS,
	payload: rooms,
});
