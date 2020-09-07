import { SET_USERNAME, SET_ID } from './actionTypes';

/**
  * @desc Receives the username from the backend, and sets it in redux
  * @param {string} username username - the username received from the backend
  * @return an action creator
*/
export const setUsername = username => ({
	type: SET_USERNAME,
	payload: username,
});

/**
  * @desc Receives the userid from the backend, and sets it in redux
  * @param {string} userid userid - the userid received from the backend
  * @return an action creator
*/
export const setUserid = userid => ({
	type: SET_ID,
	payload: userid,
});
