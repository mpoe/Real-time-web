// @ts-check
import { SET_ROOMS, SET_ACTIVE_ROOM } from '../actions/actionTypes';

const defaultState = {
	rooms: [],
	room: {},
};

export default function user(state = defaultState, action) {
	switch (action.type) {
	case SET_ROOMS:
		return {
			...state,
			rooms: action.payload,
		};
	case SET_ACTIVE_ROOM:
		return {
			...state,
			room: action.payload,
		};
	default:
		return state;
	}
}
