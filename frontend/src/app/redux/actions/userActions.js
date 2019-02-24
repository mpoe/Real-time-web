import {SET_USERNAME, SET_ID} from './actionTypes';

export const setUsername = (username) => {
  return {
    type: SET_USERNAME,
    payload: username,
  };
};


/**
  * @desc Receives the userid from the backend, and sets it in redux
  * @param string userid - the userid received from the backend
  * @return an action creator
*/
export const setUserid = (userid) => {
  return {
    type: SET_ID,
    payload: userid,
  }
}