// @ts-check
import { SET_USERNAME, SET_ID } from '../actions/actionTypes';

const defaultState = {
	id: null, /* String */ // The client id, received from backend
	username: null, /* String */ // The display name of the client
};

export default function user(state = defaultState, action) {
	switch (action.type) {
	case SET_USERNAME:
		return {
			...state,
			username: action.payload,
		};
	case SET_ID:
		return {
			...state,
			id: action.payload,
		};
	default:
		return state;
	}
}
