// @ts-check
import { SET_ROOMS } from '../actions/actionTypes';

const defaultState = {
	rooms: [],
};

export default function user(state = defaultState, action) {
	switch (action.type) {
	case SET_ROOMS:
		return {
			...state,
			rooms: action.payload,
		};
	default:
		return state;
	}
}
