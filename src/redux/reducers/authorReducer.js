import * as types from "../actions/actionTypes";
import initState from "./InitialState";

export default function authorReducer(state = initState.authors, action) {
	switch(action.type) {
		case types.LOAD_AUTHORS_SUCCESS:
			return action.authors;
		default:
			return state;
	}
}
