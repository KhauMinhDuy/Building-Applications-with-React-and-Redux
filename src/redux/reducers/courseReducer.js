import * as types from '../actions/actionTypes';
import initState from './InitialState';

export default function courseReducer(state = initState.courses, action) {
	switch(action.type) {
		case types.CREATE_COURSE: 
			return [...state, {...action.course}];
		case types.LOAD_COURSES_SUCCESS:
			return action.courses;
		default:
			return state;
	}
}